const { test, expect } = require('@playwright/test');

test('User can see and select Algoan Bank', async ({ page }) => {
  await page.goto(
    'https://connect.algoan.com/v2/init?client_id=030d0c7dfcfdcfcc135c6cf5&redirect_uri=https://dashboard.algoan.com'
  );

  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: /continuer/i }).click();

  // Wait explicitly for Algoan Bank to appear
  const algoanBank = page.locator('text=Algoan Bank');

  await expect(algoanBank).toBeVisible({ timeout: 15000 });

  // Select Algoan Bank
  await algoanBank.click();
});
