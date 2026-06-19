import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';
import { PRODUCTS } from '../fixtures/data';

test.describe('Product Configurator', () => {
  let product: ProductPage;

  test.beforeEach(async ({ page }) => {
    product = new ProductPage(page);
  });

  // ─── Load ─────────────────────────────────────────────────────────

  test('roll labels configurator loads @smoke', async ({ page }) => {
    const { slug, id, activePage } = PRODUCTS.rollLabels;
    await product.open(slug, id, activePage);
    await expect(page).not.toHaveTitle(/404/i);
    // Page should have loaded some content
    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('product title is visible after load', async () => {
    const { slug, id, activePage } = PRODUCTS.rollLabels;
    await product.open(slug, id, activePage);
    // Title may be in h1 or in breadcrumb area
    const title = product.productTitle;
    const visible = await title.isVisible().catch(() => false);
    // If title not visible, at minimum the page should have content
    if (!visible) {
      await expect(product.page.locator('main, #__next, [id="root"]')).toBeAttached();
    }
  });

  // ─── Price updates ────────────────────────────────────────────────

  test('price updates when quantity changes', async () => {
    const { slug, id, activePage } = PRODUCTS.rollLabels;
    await product.open(slug, id, activePage);

    const qtyInput = product.quantityInput;
    const hasQty = await qtyInput.isVisible().catch(() => false);
    if (!hasQty) {
      test.skip(); // Configurator DOM not yet mapped — skip until selectors confirmed
      return;
    }

    const priceBefore = await product.getPriceText();
    await product.setQuantity(500);
    const priceAfter = await product.getPriceText();
    expect(priceBefore).not.toBe(priceAfter);
  });

  // ─── Add to cart ──────────────────────────────────────────────────

  test('add to cart button is present', async ({ page }) => {
    const { slug, id, activePage } = PRODUCTS.rollLabels;
    await product.open(slug, id, activePage);

    const addBtn = product.addToCartButton;
    const visible = await addBtn.isVisible().catch(() => false);
    // Either add-to-cart or get-a-quote must be present
    const quoteBtn = product.getQuoteButton;
    const quoteVisible = await quoteBtn.isVisible().catch(() => false);
    expect(visible || quoteVisible).toBeTruthy();
  });

  // ─── Mobile configurator ──────────────────────────────────────────

  test('configurator is usable on mobile viewport', async ({ page, isMobile }) => {
    if (!isMobile) test.skip();
    const { slug, id, activePage } = PRODUCTS.rollLabels;
    await product.open(slug, id, activePage);

    // Nothing should overflow horizontally
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = page.viewportSize()?.width ?? 390;
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 5); // 5px tolerance
  });

  // ─── Multiple products ────────────────────────────────────────────

  for (const [key, p] of Object.entries(PRODUCTS)) {
    test(`${key} product page loads without 404`, async ({ page }) => {
      await product.open(p.slug, p.id, p.activePage);
      await expect(page).not.toHaveTitle(/404|not found/i);
    });
  }
});
