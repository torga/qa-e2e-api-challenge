import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

const viewports = [
  { name: 'mobile', width: 375, height: 667 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 },
];

test.describe('Responsividade', () => {

  for (const vp of viewports) {

    test(`Deve funcionar corretamente em ${vp.name}`, async ({ page }) => {

      const loginPage = new LoginPage(page);

      await page.setViewportSize({
        width: vp.width,
        height: vp.height
      });

      // 🔐 Login
      await loginPage.goto();
      await loginPage.login('standard_user', 'secret_sauce');

      await expect(page).toHaveURL(/inventory\.html/);

      // 📱 valida elementos principais visíveis
      await expect(page.locator('.inventory_list')).toBeVisible();

      // 📸 evidência
      await page.screenshot({
        path: `evidences/responsive/${vp.name}.png`,
        fullPage: true
      });
    });
  }

});