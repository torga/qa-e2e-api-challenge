import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }

  get errorMessage() {
    return this.page.locator('[data-test="error"]');
  }

  get title() {
    return this.page.locator('.title');
  }

  get inventoryItems() {
    return this.page.locator('.inventory_item');
  }
}