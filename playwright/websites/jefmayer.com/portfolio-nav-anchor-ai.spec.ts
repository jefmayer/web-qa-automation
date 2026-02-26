import { test } from '@playwright/test';
import { expectInViewport } from '@utils/viewport-utils';
import { ai } from '@zerostep/playwright'

test('Portfolio Nav Anchor', async ({ page }) => {
  await page.goto(process.env.BASE_URL, { waitUntil: 'load' });
  await ai('Wait for the page to load and the down arrow button to appear', { page, test });
  await ai('Click the down arrow button', { page, test });
  await ai('Click the menu button in the top right corner of the page', { page, test });
  await ai('Click the link that contains Tumblr', { page, test });
  await page.waitForTimeout(1500);
  await expectInViewport(page.getByRole('heading', { name: 'Tumblr' }).first(), false);
});