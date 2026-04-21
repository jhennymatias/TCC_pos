import { test, expect } from '@playwright/test';

test.describe('Validações do formulário', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/cadastro');
  });

  test('Não aceita letras no campo CPF', async ({ page }) => {
    await page.getByLabel('CPF').fill('abc123xyz');
    await page.getByRole('button', { name: /enviar/i }).click();
    await expect(page.getByText(/CPF inválido/i)).toBeVisible();
  });

  test('Não aceita letras no campo Renda mensal', async ({ page }) => {
    await page.getByLabel('Renda mensal').fill('mil reais');
    await page.getByRole('button', { name: /enviar/i }).click();
    await expect(page.getByText(/renda.*inválido|valor numérico/i)).toBeVisible();
  });

  test('Não aceita letras no campo Idade', async ({ page }) => {
    await page.getByLabel('Idade').fill('12a');
    await page.getByRole('button', { name: /enviar/i }).click();
    await expect(page.getByText(/idade.*inválida/i)).toBeVisible();
  });

  test('Não aceita letras no campo Número de dependentes', async ({ page }) => {
    await page.getByLabel('Número de dependentes').fill('dois');
    await page.getByRole('button', { name: /enviar/i }).click();
    await expect(page.getByText(/dependentes.*inválido/i)).toBeVisible();
  });

  test('Email inválido retorna erro', async ({ page }) => {
    await page.getByLabel('E-mail').fill('emailinvalido.com');
    await page.getByRole('button', { name: /enviar/i }).click();
    await expect(page.getByText(/email.*inválido/i)).toBeVisible();
  });

  test('Data de nascimento no futuro retorna erro', async ({ page }) => {
    await page.getByLabel('Data de nascimento').fill('2099-12-31');
    await page.getByRole('button', { name: /enviar/i }).click();
    await expect(page.getByText(/maior de 18 anos/i)).toBeVisible();
  });

  test('Formulário vazio exibe múltiplos erros', async ({ page }) => {
    await page.getByRole('button', { name: /enviar/i }).click();
    await expect(page.getByText(/nome.*obrigatório/i)).toBeVisible();
    await expect(page.getByText(/cpf.*inválido/i)).toBeVisible();
    await expect(page.getByText(/email.*inválido/i)).toBeVisible();
  });
});
