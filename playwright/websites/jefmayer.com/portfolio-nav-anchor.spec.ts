import { test } from '@playwright/test';
import { expectInViewport } from '@utils/viewport-utils';
import * as dotenv from 'dotenv';

dotenv.config();

test('Portfolio Nav Anchor', async ({ page }) => {
  await page.goto('https://www.jefmayer.com/', { waitUntil: 'load' });
  const continueButton = page.locator('.scroll-indicator-animation.animate-loop');
  await continueButton.first().waitFor({ state: 'visible', timeout: 10000 });
  await page.getByRole('button', { name: 'Scroll to see my work!' }).click();
  await page.getByRole('button', { name: 'Work', exact: true }).click();
  await page.getByRole('menuitem', { name: 'Tumblr Tumblr Portfolio Role' }).click();
  await page.waitForTimeout(1500);
  await expectInViewport(page.getByRole('heading', { name: 'Tumblr  Portfolio' }).first());
});