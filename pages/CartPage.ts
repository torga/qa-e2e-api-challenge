import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly checkoutButton: Locator;
  readonly cartItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.cartItems = page.locator('.cart_item');
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }

  // ❌ Remove item específico (simples e direto)
  async removeBackpack() {
    await this.page.locator('[data-test="remove-sauce-labs-backpack"]').click();
  }

  // 🧠 Melhor prática: remover por nome (reutilizável)
  async removeItemByName(itemName: string) {
    await this.page
      .locator('.cart_item')
      .filter({ hasText: itemName })
      .locator('button')
      .click();
  }
}