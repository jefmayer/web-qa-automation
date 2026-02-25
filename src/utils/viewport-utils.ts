import { expect, Locator } from '@playwright/test';

export async function expectInViewport(locator: Locator, partial = true) {
  const result = await locator.evaluate((locator, partial) => {
    const rect = locator.getBoundingClientRect();
    const vw = window.innerWidth || document.documentElement.clientWidth;
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const fullyInView =
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= vh &&
      rect.right <= vw;
    const partiallyInView =
      rect.bottom >= 0 &&
      rect.right >= 0 &&
      rect.top <= vh &&
      rect.left <= vw;
    return partial ? partiallyInView : fullyInView;
  }, partial);
  expect(result).toBeTruthy();
}
