const { test, expect } = require('@playwright/test');

test('User authenticates using same device (no QR)', async ({ page }) => {

  // STEP 1 — open authentication page
  await page.goto('https://connect.algoan.com/v2/connection-with-qr-code?client_id=030d0c7dfcfdcfcc135c6cf5&redirect_uri=https://dashboard.algoan.com');

  // STEP 2 — click "Continue on this device"
  // (it is the ONLY clickable button under the QR code)
  const continueBtn = page.locator('button').last();
  await continueBtn.click();

  // STEP 3 — wait next page load
  await page.waitForLoadState('domcontentloaded');

  // STEP 4 — click the blue main button ("Got it")
  // (always the big primary button in center)
  const blueButton = page.locator('button').filter({ hasText: '' }).first();
  await blueButton.click();

  // STEP 5 — verify we moved forward (QR page gone)
  await page.waitForTimeout(2000);
  await expect(page).not.toHaveURL(/connection-with-qr-code/);

});
