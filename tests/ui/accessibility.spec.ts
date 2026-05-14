import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { takeScreenshot } from '../../utils/screenshot';

test.describe('Acessibilidade básica - Login', () => {

  test('Deve exibir login corretamente e acessível ao usuário', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();

    // 📸 PRINT MAIS IMPORTANTE (estado inicial da UI)
    await takeScreenshot(page, 'accessibility', 'login-initial-state', 'success');

    // ♿ validações de acessibilidade básica
    const username = page.locator('[data-test="username"]');
    const password = page.locator('[data-test="password"]');
    const loginButton = page.locator('[data-test="login-button"]');

    await expect(username).toBeVisible();
    await expect(username).toBeEnabled();

    await expect(password).toBeVisible();
    await expect(password).toBeEnabled();

    await expect(loginButton).toBeVisible();
    await expect(loginButton).toBeEnabled();

    // ♿ valida estrutura básica de input
    await expect(page.locator('input[type="text"]')).toHaveCount(1);

    // 📸 evidência final do estado validado
    await takeScreenshot(page, 'accessibility', 'login-validated-state', 'success');
  });

});