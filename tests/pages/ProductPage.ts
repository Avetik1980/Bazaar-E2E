import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * ProductPage — wraps the client-side configurator.
 * The configurator is fully JS-rendered, so all locators
 * use waitFor() before interacting.
 */
export class ProductPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open(slug: string, id: number, activePage: string) {
    await this.goto(`/bazaarprinting/product/${slug}?id=${id}&activePage=${activePage}`);
    await this.waitForConfigurator();
  }

  async waitForConfigurator() {
    // Wait for the JS configurator to mount — adjust selector once real DOM is known
    await this.page.waitForSelector('[data-testid="configurator"], form, .product-configurator', {
      timeout: 15_000,
    }).catch(() => {
      // Configurator might use a generic div — wait for network instead
    });
    await this.page.waitForLoadState('networkidle');
  }

  // ─── Product info ─────────────────────────────────────────────────
  get productTitle(): Locator {
    return this.page.locator('h1').first();
  }

  get productDescription(): Locator {
    return this.page.locator('[data-testid="product-description"], .product-description').first();
  }

  // ─── Configurator steps ───────────────────────────────────────────
  // NOTE: selectors below are best-guesses; update after manual DOM inspection.

  get materialOptions(): Locator {
    return this.page.locator('[data-testid="material-option"], .material-option, button[data-option]');
  }

  get sizeInputWidth(): Locator {
    return this.page.locator('input[name="width"], input[placeholder*="width" i]').first();
  }

  get sizeInputHeight(): Locator {
    return this.page.locator('input[name="height"], input[placeholder*="height" i]').first();
  }

  get quantityInput(): Locator {
    return this.page.locator('input[name="quantity"], input[type="number"]').first();
  }

  get finishOptions(): Locator {
    return this.page.locator('[data-testid="finish-option"], .finish-option');
  }

  get fileUploadInput(): Locator {
    return this.page.locator('input[type="file"]').first();
  }

  get priceDisplay(): Locator {
    return this.page.locator('[data-testid="price"], .price, [class*="price"]').first();
  }

  get addToCartButton(): Locator {
    return this.page.locator('button:has-text("Add to Cart"), button:has-text("Order now")').first();
  }

  get getQuoteButton(): Locator {
    return this.page.locator('button:has-text("Quote"), a:has-text("Quote")').first();
  }

  // ─── Actions ──────────────────────────────────────────────────────
  async selectMaterial(name: string) {
    await this.page.locator(`[data-testid="material-option"]:has-text("${name}"), button:has-text("${name}")`).first().click();
  }

  async setQuantity(qty: number) {
    await this.quantityInput.clear();
    await this.quantityInput.fill(String(qty));
    await this.quantityInput.press('Tab'); // trigger price recalculation
    await this.page.waitForTimeout(500);
  }

  async setSize(width: number, height: number) {
    await this.sizeInputWidth.fill(String(width));
    await this.sizeInputHeight.fill(String(height));
    await this.sizeInputHeight.press('Tab');
    await this.page.waitForTimeout(500);
  }

  async selectFinish(name: string) {
    await this.page.locator(`[data-testid="finish-option"]:has-text("${name}")`).first().click();
  }

  async uploadArtwork(filePath: string) {
    await this.fileUploadInput.setInputFiles(filePath);
    await this.page.waitForTimeout(1000);
  }

  async addToCart() {
    await this.addToCartButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async getPriceText(): Promise<string> {
    await this.priceDisplay.waitFor();
    return (await this.priceDisplay.textContent()) ?? '';
  }
}
