const { test, expect } = require('@playwright/test');

const url =
  'https://connect.algoan.com/v2/init?client_id=030d0c7dfcfdcfcc135c6cf5&redirect_uri=https://dashboard.algoan.com';

test('User can authorize and select Algoan Bank', async ({ page }) => {

  // STEP 1 — open page
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  // STEP 2 — wait checkbox (REAL signal page ready)
  const checkbox = page.locator('input[type="checkbox"]');
  await expect(checkbox).toBeVisible({ timeout: 30000 });

  // STEP 3 — authorize
  await checkbox.click();

  // STEP 4 — continue
  await page.getByRole('button').click();

  // STEP 5 — wait bank search box appears
  const searchBox = page.getByRole('textbox');
  await expect(searchBox).toBeVisible({ timeout: 30000 });

  // STEP 6 — search bank
  await searchBox.fill('Algoan');

  // STEP 7 — select bank
  await page.getByText('Algoan Bank').first().click();

  // STEP 8 — QR authentication page
  await expect(page.locator('canvas')).toBeVisible({ timeout: 30000 });

});
