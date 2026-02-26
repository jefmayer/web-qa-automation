import { test } from '@playwright/test';
import { expectInViewport } from '@utils/viewport-utils';

test('Portfolio Nav Anchor', async ({ page }) => {
  await page.goto(process.env.BASE_URL, { waitUntil: 'load' });
  const continueButton = page.locator('.scroll-indicator-animation.animate-loop');
  await continueButton.first().waitFor({ state: 'visible', timeout: 10000 });
  await page.getByRole('button', { name: 'Scroll to see my work!' }).click();
  await page.getByRole('button', { name: 'Work', exact: true }).click();
  await page.getByRole('menuitem', { name: 'Tumblr' }).click();
  await page.waitForTimeout(1500);
  await expectInViewport(page.getByRole('heading', { name: 'Tumblr' }).first(), false);
});