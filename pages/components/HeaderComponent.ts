import { Page } from '@playwright/test';

export class HeaderComponent {
  constructor(private page: Page) {}

  async logout() {
    await this.page.locator('#react-burger-menu-btn').click();
    await this.page.locator('#logout_sidebar_link').click();
  }
}