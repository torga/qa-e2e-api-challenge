import { Page, Locator } from '@playwright/test';
import { HeaderComponent } from './components/HeaderComponent';

export class InventoryPage {
  readonly page: Page;
  readonly sortDropdown: Locator;
  readonly itemNames: Locator;
  readonly itemPrices: Locator;
  readonly cartButton: Locator;
  readonly header: HeaderComponent;

  constructor(page: Page) {
    this.page = page;

    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
    this.itemNames = page.locator('.inventory_item_name');
    this.itemPrices = page.locator('.inventory_item_price');
    this.cartButton = page.locator('.shopping_cart_link');

    this.header = new HeaderComponent(page);
  }

  // 🔽 Ordenação
  async sortBy(option: string) {
    await this.sortDropdown.selectOption(option);
  }

  async getItemNames(): Promise<string[]> {
    return await this.itemNames.allTextContents();
  }

  async getItemPrices(): Promise<number[]> {
    const pricesText = await this.itemPrices.allTextContents();

    return pricesText.map(p =>
      Number(p.replace('$', ''))
    );
  }

  // 🛒 Adicionar produto
  async addBackpackToCart() {
    await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  }

  // 🛍️ Ir para o carrinho
  async goToCart() {
    await this.cartButton.click();
  }
}