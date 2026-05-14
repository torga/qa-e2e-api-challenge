import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { takeScreenshot } from '../../utils/screenshot';

test.describe('Navegação entre páginas', () => {

  test('Deve navegar corretamente entre as páginas do fluxo', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    // 🔐 Login
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory\.html/);
    await takeScreenshot(page, 'navigation', 'inventory-page', 'success');

    // 🛒 Ir para carrinho
    await inventoryPage.addBackpackToCart();
    await inventoryPage.goToCart();

    await expect(page).toHaveURL(/cart\.html/);
    await takeScreenshot(page, 'navigation', 'cart-page', 'success');

    // 💳 Ir para checkout (step one)
    await cartPage.proceedToCheckout();

    await expect(page).toHaveURL(/checkout-step-one\.html/);
    await takeScreenshot(page, 'navigation', 'checkout-step-one', 'success');

  });

});