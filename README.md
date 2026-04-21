# TCC - Teste automatizados

## Descrição
Este projeto é um sistema ficticio para validar Teste automatizados desenvolvido como parte do Trabalho de Conclusão de Curso (TCC) de Engenharia de Software USP. Utiliza React com Vite para o frontend e Playwright para testes automatizados.

## Tecnologias Utilizadas
- **Frontend**: React, Vite
- **Testes**: Playwright
- **Linguagem**: JavaScript

## Estrutura do Projeto
- `src/`: Código fonte da aplicação
  - `components/`: Componentes reutilizáveis (ex: Button)
  - `pages/`: Páginas da aplicação (Home, Login, Forms)
- `tests/`: Testes automatizados com Playwright
- `public/`: Arquivos estáticos

## Instalação
1. Clone o repositório:
   ```
   git clone <url-do-repositorio>
   cd TCC_pos/projeto-pos
   ```

2. Instale as dependências:
   ```
   npm install
   ```

## Como Executar
1. Inicie o servidor de desenvolvimento:
   ```
   npm run dev
   ```

2. Abra o navegador em `http://localhost:5173` (porta padrão do Vite).

## Testes
Para executar os testes com Playwright:
```
npx playwright test
```

Para executar testes em modo headless:
```
npx playwright test --headed
```

## Scripts Disponíveis
- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Compila a aplicação para produção
- `npm run preview`: Visualiza a build de produção
- `npx playwright test`: Executa os testes
