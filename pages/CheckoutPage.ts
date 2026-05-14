import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly postalCode: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator('[data-test="firstName"]');
    this.lastName = page.locator('[data-test="lastName"]');
    this.postalCode = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.successMessage = page.locator('.complete-header');
  }

  async fillForm(first: string, last: string, zip: string) {
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.postalCode.fill(zip);
  }

  async continue() {
    await this.page.waitForURL(/checkout-step-one\.html/);

    await this.continueButton.waitFor({ state: 'visible' });
    await this.continueButton.click();
    }

  async finish() {
    await this.page.waitForURL(/checkout-step-two\.html/);
    await this.finishButton.waitFor({ state: 'visible' });
    await this.finishButton.click();
    }

  async getSuccessMessage() {
    return await this.successMessage.textContent();
  }
}