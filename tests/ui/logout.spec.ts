import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { takeScreenshot } from '../../utils/screenshot';

test.describe('Logout do sistema', () => {

  test('Deve realizar logout com sucesso', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    // 🔐 Login
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory\.html/);
    await takeScreenshot(page, 'logout', 'logged-in', 'success');

    // 🚪 Logout (AGORA USANDO COMPONENTE)
    await inventoryPage.header.logout();

    // ✅ valida volta para login
    await expect(page).toHaveURL(/saucedemo\.com/);
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();

    await takeScreenshot(page, 'logout', 'logged-out', 'success');
  });

});