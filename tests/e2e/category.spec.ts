import { test, expect } from '@playwright/test';
import { CategoryPage } from '../pages/CategoryPage';
import { CATEGORIES } from '../fixtures/data';

test.describe('Category Pages', () => {
  let category: CategoryPage;

  test.beforeEach(async ({ page }) => {
    category = new CategoryPage(page);
  });

  // ─── Labels & Stickers ────────────────────────────────────────────

  test('labels-stickers loads and shows products @smoke', async () => {
    await category.open(CATEGORIES.labelsStickers);
    await expect(category.pageHeading).toContainText('Labels');
    const products = await category.getProductNames();
    expect(products.length).toBeGreaterThan(0);
  });

  test('labels-stickers lists Roll Labels', async () => {
    await category.open(CATEGORIES.labelsStickers);
    const names = await category.getProductNames();
    const hasRollLabels = names.some(n => n.toLowerCase().includes('roll labels'));
    expect(hasRollLabels).toBeTruthy();
  });

  test('clicking a product navigates to product page', async ({ page }) => {
    await category.open(CATEGORIES.labelsStickers);
    await category.clickFirstProduct();
    await expect(page).toHaveURL(/\/product\//);
  });

  // ─── All categories load ───────────────────────────────────────────

  for (const [key, slug] of Object.entries(CATEGORIES)) {
    test(`${key} category page loads without errors`, async ({ page }) => {
      await category.open(slug);
      await expect(page).not.toHaveTitle(/404|not found/i);
      await expect(category.pageHeading).toBeVisible();
    });
  }

  // ─── Material filters ─────────────────────────────────────────────

  test('material filter ?material=vinyl is accepted by server', async ({ page }) => {
    await category.open(CATEGORIES.labelsStickers);
    await category.filterByMaterial('vinyl');
    await expect(page).toHaveURL(/material=vinyl/);
    await expect(page).not.toHaveTitle(/404/i);
  });

  // ─── Mobile ───────────────────────────────────────────────────────

  test('product list is scrollable on mobile', async ({ page, isMobile }) => {
    if (!isMobile) test.skip();
    await category.open(CATEGORIES.labelsStickers);
    // Scroll to bottom — should not freeze
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    await expect(category.productLinks.first()).toBeAttached();
  });
});
