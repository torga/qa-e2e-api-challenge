import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { takeScreenshot } from '../../utils/screenshot';

test.describe('Fluxo de compra', () => {

  test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
      const safeTitle = testInfo.title.replace(/\s+/g, '-');
      await takeScreenshot(page, 'checkout', safeTitle, 'error');
    }
  });

  test('Deve realizar checkout com sucesso', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    // 🔐 Login
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory\.html/);

    // 🛒 Add produto
    await inventoryPage.addBackpackToCart();
    await takeScreenshot(page, 'checkout', 'add-to-cart', 'success');

    // 🛍️ Carrinho
    await inventoryPage.goToCart();
    await expect(page).toHaveURL(/cart\.html/);
    await takeScreenshot(page, 'checkout', 'cart', 'success');

    // 💳 Checkout
    await cartPage.proceedToCheckout();
    await expect(page).toHaveURL(/checkout-step-one\.html/);
    await takeScreenshot(page, 'checkout', 'step-one', 'success');

    // 🧾 Formulário
    await checkoutPage.fillForm('Teste', 'QA', '12345');
    await takeScreenshot(page, 'checkout', 'form', 'success');

    // ▶️ Continue (STEP ONE → STEP TWO)
    await checkoutPage.continue();
    await expect(page).toHaveURL(/checkout-step-two\.html/);
    await takeScreenshot(page, 'checkout', 'overview', 'success');

    // ✅ FINALIZAR COMPRA (CORRIGIDO)
    await checkoutPage.finish();

    await expect(page).toHaveURL(/checkout-complete\.html/);

    // ✅ validar mensagem final
    await expect(page.locator('.complete-header'))
      .toHaveText('Thank you for your order!');

    // 📸 evidência final
    await takeScreenshot(page, 'checkout', 'finish', 'success');
  });

});