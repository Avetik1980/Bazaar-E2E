import {Page, Locator} from '@playwright/test';

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // ─── Navigation helpers ────────────────────────────────────────────
    async goto(path: string) {
        await this.page.goto(path);
        await this.page.waitForLoadState('domcontentloaded');
    }

    async getTitle() {
        return this.page.title();
    }

    // ─── Nav bar ──────────────────────────────────────────────────────
    get navLogo(): Locator {
        return this.page.getByLabel('Bazaar Printing').first();
    }

    get cartIcon(): Locator {
        return this.page.getByRole('link', {name: 'Cart', exact: true}).first();
    }

    get signInLink(): Locator {
        return this.page.locator('a[href*="/authentication"]').filter({visible: true}).first();
    }

    get phoneLink(): Locator {
        return this.page.locator('a[href^="tel:"]').first();
    }

    // ─── Mobile hamburger ─────────────────────────────────────────────
    get mobileMenuButton(): Locator {
        return this.page.locator('button[aria-label="Open menu"]').first();
    }

    async openMobileMenu() {
        const overlay = this.page.locator('.mobile-menu-overlay');
        const overlayVisible = await overlay.isVisible().catch(() => false);
        if (overlayVisible) {
            // Menu is already open — nothing to do
            return;
        }
        const isMobileMenuVisible = await this.mobileMenuButton.isVisible().catch(() => false);
        if (isMobileMenuVisible) {
            await this.mobileMenuButton.dispatchEvent('click');
            await this.page.waitForTimeout(500);
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
