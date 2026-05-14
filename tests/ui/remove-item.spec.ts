import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { takeScreenshot } from '../../utils/screenshot';

test.describe('Carrinho - Remoção de itens', () => {

  test('Deve remover item do carrinho com sucesso', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    // 🔐 Login
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory\.html/);

    await takeScreenshot(page, 'cart', 'login-success', 'success');

    // 🛒 Adiciona item
    await inventoryPage.addBackpackToCart();
    await inventoryPage.goToCart();

    await expect(page).toHaveURL(/cart\.html/);

    await takeScreenshot(page, 'cart', 'item-added', 'success');

    // ❌ Remove item
    await cartPage.removeItemByName('Sauce Labs Backpack');

    await takeScreenshot(page, 'cart', 'item-removed', 'success');

    // ✅ valida carrinho vazio
    await expect(page.locator('.cart_item')).toHaveCount(0);

    await takeScreenshot(page, 'cart', 'cart-empty', 'success');

  });

});