import {Page, Locator} from '@playwright/test';

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // ─── Navigation helpers ────────────────────────────────────────────
    async goto(path: string) {
        await this.page.goto(path);
        await this.page.waitForLoadState('networkidle');
    }

    async getTitle() {
        return this.page.title();
    }

    // ─── Nav bar ──────────────────────────────────────────────────────
    get navLogo(): Locator {
        return this.page.getByLabel('Bazaar Printing').first();
    }

    get cartIcon(): Locator {
        return this.page.getByRole('link', {name: 'Cart'});
    }

    get signInLink(): Locator {
        return this.page.locator('a[href*="/authentication"]').first();
    }

    get phoneLink(): Locator {
        return this.page.locator('a[href^="tel:"]').first();
    }

    // ─── Mobile hamburger ─────────────────────────────────────────────
    get mobileMenuButton(): Locator {
        return this.page.locator('button[aria-label*="menu"], button[aria-label*="Menu"]').first();
    }

    async openMobileMenu() {
        const isMobileMenuVisible = await this.mobileMenuButton.isVisible();
        if (isMobileMenuVisible) {
            await this.mobileMenuButton.click();
            await this.page.waitForTimeout(300);
        }
    }

    // ─── Category nav ─────────────────────────────────────────────────
    async navigateToCategory(slug: string) {
        await this.goto(`/bazaarprinting/category/${slug}`);
    }

    async hoverCategoryNav(label: string) {
        await this.page.locator(`text="${label}"`).first().hover();
        await this.page.waitForTimeout(300);
    }
}
