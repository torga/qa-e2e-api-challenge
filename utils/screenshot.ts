import { Page } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

export async function takeScreenshot(
  page: Page,
  folder: string,
  testName: string,
  status: 'success' | 'error'
) {

  const timestamp = new Date()
    .toISOString()
    .replace(/[:.]/g, '-');

  // evidences/e2e/login/success
  const dir = path.join(
    'evidences',
    'e2e',
    folder,
    status
  );

  fs.mkdirSync(dir, { recursive: true });

  const filePath = path.join(
    dir,
    `${testName}-${timestamp}.png`
  );

  await page.screenshot({
    path: filePath,
    fullPage: true
  });

  console.log(`📸 Screenshot salvo em: ${filePath}`);
}