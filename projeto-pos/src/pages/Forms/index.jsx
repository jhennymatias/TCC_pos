import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  MenuItem,
  TextField,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";

export default function CadastroUsuario() {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    rg: "",
    dataNascimento: "",
    email: "",
    telefone: "",
    genero: "",
    nacionalidade: "",
    nomeMae: "",
    idade: "",
    escolaridade: "",
    instituicao: "",
    curso: "",
    rendaMensal: "",
    profissao: "",
    estadoCivil: "",
    dependentes: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [apiError, setApiError] = useState("");

  const escolaridades = [
    "Ensino Fundamental",
    "Ensino Médio",
    "Ensino Superior (Incompleto)",
    "Ensino Superior (Completo)",
    "Pós-graduação",
    "Mestrado",
    "Doutorado",
  ];

  const estadosCivis = [
    "Solteiro(a)",
    "Casado(a)",
    "Divorciado(a)",
    "Viúvo(a)",
    "União Estável",
  ];

  const generos = ["Feminino", "Masculino", "Não-binário", "Prefiro não informar"];

  const isAdult = (birthDateStr) => {
    const birthDate = new Date(birthDateStr);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    return age > 18 || (age === 18 && m >= 0 && today.getDate() >= birthDate.getDate());
  };

  const validate = () => {
    const newErrors = {};
    const cpfValido = (cpf) => /^\d{11}$/.test(cpf);

    if (!formData.nome.trim()) newErrors.nome = "Nome é obrigatório";
    if (!cpfValido(formData.cpf)) newErrors.cpf = "CPF inválido (11 dígitos)";
    if (!formData.dataNascimento || !isAdult(formData.dataNascimento))
      newErrors.dataNascimento = "É necessário ser maior de 18 anos";
    if (!formData.telefone.match(/^\d{10,11}$/))
      newErrors.telefone = "Telefone inválido (somente números)";
    if (!formData.email.includes("@")) newErrors.email = "Email inválido";
    if (!formData.idade || formData.idade < 18 || formData.idade > 120)
      newErrors.idade = "Idade deve ser entre 18 e 120 anos";
    if (!formData.escolaridade) newErrors.escolaridade = "Escolaridade obrigatória";
    if (!formData.rendaMensal || Number(formData.rendaMensal) <= 0)
      newErrors.rendaMensal = "Informe um valor de renda válido";
    if (formData.dependentes < 0)
      newErrors.dependentes = "Número de dependentes inválido";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setApiError("");
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));

      if (formData.email.includes("teste")) {
        throw new Error("Este e-mail já está cadastrado.");
      }

      console.log("Dados enviados:", formData);
      setSuccess(true);
      setFormData({
        nome: "",
        cpf: "",
        rg: "",
        dataNascimento: "",
        email: "",
        telefone: "",
        genero: "",
        nacionalidade: "",
        nomeMae: "",
        idade: "",
        escolaridade: "",
        instituicao: "",
        curso: "",
        rendaMensal: "",
        profissao: "",
        estadoCivil: "",
        dependentes: "",
      });
    } catch (err) {
      setApiError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          backgroundColor: "#fff",
          padding: 4,
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" gutterBottom textAlign="center">
          Cadastro Completo de Usuário
        </Typography>

        {success && <Alert severity="success">Cadastro realizado com sucesso!</Alert>}
        {apiError && <Alert severity="error" sx={{ mb: 2 }}>{apiError}</Alert>}

        {[
          { label: "Nome completo", name: "nome" },
          { label: "CPF", name: "cpf" },
          { label: "RG", name: "rg" },
          { label: "Data de nascimento", name: "dataNascimento", type: "date" },
          { label: "Telefone celular", name: "telefone" },
          { label: "E-mail", name: "email", type: "email" },
          { label: "Nacionalidade", name: "nacionalidade" },
          { label: "Nome da mãe", name: "nomeMae" },
          { label: "Idade", name: "idade", type: "number" },
          { label: "Instituição", name: "instituicao" },
          { label: "Curso", name: "curso" },
          { label: "Profissão", name: "profissao" },
          { label: "Renda mensal (R$)", name: "rendaMensal", type: "number" },
          { label: "Número de dependentes", name: "dependentes", type: "number" },
        ].map(({ label, name, type = "text" }) => (
          <TextField
            key={name}
            label={label}
            name={name}
            type={type}
            value={formData[name]}
            onChange={handleChange}
            fullWidth
            sx={{ mt: 2 }}
            InputLabelProps={type === "date" ? { shrink: true } : {}}
            error={!!errors[name]}
            helperText={errors[name]}
          />
        ))}

        <TextField
          select
          label="Escolaridade"
          name="escolaridade"
          value={formData.escolaridade}
          onChange={handleChange}
          fullWidth
          required
          error={!!errors.escolaridade}
          helperText={errors.escolaridade}
          sx={{ mt: 2 }}
        >
          {escolaridades.map((nivel) => (
            <MenuItem key={nivel} value={nivel}>
              {nivel}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          label="Estado civil"
          name="estadoCivil"
          value={formData.estadoCivil}
          onChange={handleChange}
          fullWidth
          sx={{ mt: 2 }}
        >
          {estadosCivis.map((estado) => (
            <MenuItem key={estado} value={estado}>
              {estado}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          label="Gênero"
          name="genero"
          value={formData.genero}
          onChange={handleChange}
          fullWidth
          sx={{ mt: 2 }}
        >
          {generos.map((g) => (
            <MenuItem key={g} value={g}>
              {g}
            </MenuItem>
          ))}
        </TextField>

        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
            sx={{ width: "100%", py: 1.5 }}
          >
            {loading ? <CircularProgress size={24} /> : "Enviar Cadastro"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
