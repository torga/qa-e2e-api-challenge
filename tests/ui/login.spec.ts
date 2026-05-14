import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { users } from '../../test-data/users';
import { takeScreenshot } from '../../utils/screenshot';

test.describe('Login - diferentes tipos de usuários', () => {

  // 📸 screenshot automático em falha
  test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
      const safeTitle = testInfo.title.replace(/\s+/g, '-');

      await page.screenshot({
        path: `evidences/error-${safeTitle}.png`,
        fullPage: true
      });
    }
  });

  for (const user of Object.values(users)) {

    test(`Login com ${user.username}`, async ({ page }) => {

      const loginPage = new LoginPage(page);

      await loginPage.goto();
      await loginPage.login(user.username, user.password);

      if (user.expected === 'success') {

        // ✅ valida URL
        await expect(page).toHaveURL(/inventory\.html/);

        // ✅ valida UI
        await expect(loginPage.title).toHaveText('Products');
        await expect(loginPage.inventoryItems).toHaveCount(6);

        // 📸 evidência
        await takeScreenshot(page, 'login', user.username, 'success');

      } else if (user.expected === 'locked') {

        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toContainText(
          'Epic sadface: Sorry, this user has been locked out.'
        );

        // 📸 evidência
        await takeScreenshot(page, 'login', user.username, 'error');
      }

    });

  }

});