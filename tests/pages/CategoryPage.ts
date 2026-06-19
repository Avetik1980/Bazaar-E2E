import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CategoryPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open(slug: string) {
    await this.goto(`/bazaarprinting/category/${slug}`);
  }

  // ─── Products listing ─────────────────────────────────────────────
  get productLinks(): Locator {
    return this.page.locator('a[href*="/product/"]');
  }

  get pageHeading(): Locator {
    return this.page.locator('h1').first();
  }

  async getProductNames(): Promise<string[]> {
    await this.productLinks.first().waitFor();
    return this.productLinks.allTextContents();
  }

  async clickFirstProduct() {
    await this.productLinks.first().click();
    await this.page.waitForLoadState('networkidle');
  }

  async clickProductByName(name: string) {
    await this.page.locator(`a:has-text("${name}")`).first().click();
    await this.page.waitForLoadState('networkidle');
  }

  // ─── Material filters (query param based) ─────────────────────────
  async filterByMaterial(material: string) {
    await this.page.goto(this.page.url() + `?material=${material}`);
    await this.page.waitForLoadState('networkidle');
  }
}
