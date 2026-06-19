import { Page } from '@playwright/test';

export const VIEWPORTS = {
  desktop: { width: 1440, height: 900 },
  tablet: { width: 768, height: 1024 },
  mobileLarge: { width: 390, height: 844 },  // iPhone 14
  mobileSmall: { width: 360, height: 780 },  // Pixel 7
} as const;

/** True if the current viewport is < 768px wide (mobile breakpoint) */
export async function isMobileViewport(page: Page): Promise<boolean> {
  const vp = page.viewportSize();
  return (vp?.width ?? 1440) < 768;
}

/**
 * Asserts that an element is visible in the viewport.
 * On mobile, the nav hamburger may hide desktop links — skip those.
 */
export async function assertVisibleOrSkipMobile(
  page: Page,
  locator: import('@playwright/test').Locator,
  label: string
) {
  const mobile = await isMobileViewport(page);
  if (mobile) {
    console.log(`[mobile] Skipping desktop-only check: ${label}`);
    return;
  }
  await locator.waitFor({ state: 'visible' });
}

/** Scroll to bottom of page and back — tests lazy-load / scroll-triggered items */
export async function scrollFullPage(page: Page) {
  await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }));
  await page.waitForTimeout(800);
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  await page.waitForTimeout(400);
}
