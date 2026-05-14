import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { takeScreenshot } from '../../utils/screenshot';

test.describe('Ordenação de produtos', () => {

  test('Validar filtros de ordenação', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory\.html/);

    // 🔽 Seletores
    const sortSelect = page.locator('[data-test="product-sort-container"]');
    const items = page.locator('.inventory_item_name');
    const prices = page.locator('.inventory_item_price');

    // =========================
    // A → Z
    // =========================
    await sortSelect.selectOption('az');

    const namesAZ = await items.allTextContents();
    const sortedAZ = [...namesAZ].sort();

    expect(namesAZ).toEqual(sortedAZ);

    await takeScreenshot(page, 'sorting', 'az', 'success');

    // =========================
    // Z → A
    // =========================
    await sortSelect.selectOption('za');

    const namesZA = await items.allTextContents();
    const sortedZA = [...namesZA].sort().reverse();

    expect(namesZA).toEqual(sortedZA);

    await takeScreenshot(page, 'sorting', 'za', 'success');

    // =========================
    // Preço: low → high
    // =========================
    await sortSelect.selectOption('lohi');

    const priceValuesLow = await prices.allTextContents();
    const priceNumbersLow = priceValuesLow.map(p => parseFloat(p.replace('$', '')));

    const sortedLow = [...priceNumbersLow].sort((a, b) => a - b);

    expect(priceNumbersLow).toEqual(sortedLow);

    await takeScreenshot(page, 'sorting', 'low-to-high', 'success');

    // =========================
    // Preço: high → low
    // =========================
    await sortSelect.selectOption('hilo');

    const priceValuesHigh = await prices.allTextContents();
    const priceNumbersHigh = priceValuesHigh.map(p => parseFloat(p.replace('$', '')));

    const sortedHigh = [...priceNumbersHigh].sort((a, b) => b - a);

    expect(priceNumbersHigh).toEqual(sortedHigh);

    await takeScreenshot(page, 'sorting', 'high-to-low', 'success');

  });

});