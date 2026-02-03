const { test, expect } = require('@playwright/test');

test('User can authorize and continue to next step', async ({ page }) => {
  await page.goto(
    'https://connect.algoan.com/v2/init?client_id=030d0c7dfcfdcfcc135c6cf5&redirect_uri=https://dashboard.algoan.com'
  );

  // Authorization checkbox is visible
  const consentCheckbox = page.getByRole('checkbox');
  await expect(consentCheckbox).toBeVisible();

  // User authorizes data sharing
  await consentCheckbox.check();

  // Continue button is visible and clickable
  const continueButton = page.getByRole('button', {
    name: /continuer/i,
  });
  await expect(continueButton).toBeEnabled();

  // User continues to next step
  await continueButton.click();

  // Verify navigation started (URL changed from /init)
  await expect(page).not.toHaveURL(/\/init/);
});
