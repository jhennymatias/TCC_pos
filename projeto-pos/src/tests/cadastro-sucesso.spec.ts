import { test, expect } from '@playwright/test';

test('Deve preencher todos os campos corretamente e enviar o formulário', async ({ page }) => {
  await page.goto('http://localhost:5173'); // ajuste a URL se necessário

  // Dados Pessoais
  await page.getByLabel('Nome completo').fill('Jhennifer Matias');
  await page.getByLabel('Email').fill('jhennifer@example.com');
  await page.getByLabel('CPF').fill('12345678900');
  await page.getByLabel('Idade').fill('28');

  // Dados Financeiros
  await page.getByLabel('Renda mensal').fill('4500');

  // Escolaridade
  await page.getByLabel('Grau de escolaridade').selectOption('superior');

  // Data de nascimento
  await page.getByLabel('Data de nascimento').fill('1997-03-12');

  // Sexo
  await page.getByLabel('Feminino').check();

  // Consentimento
  await page.getByLabel('Li e aceito os termos').check();

  // Envio
  await page.getByRole('button', { name: /enviar/i }).click();

  // Validação de sucesso
  await expect(page.getByText(/Formulário enviado com sucesso/i)).toBeVisible();
});
