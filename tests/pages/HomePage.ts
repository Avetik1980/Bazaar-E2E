import {Page, Locator} from '@playwright/test';
import {BasePage} from './BasePage';

export class HomePage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async open() {
        await this.goto('/bazaarprinting');
    }

    // ─── Hero ─────────────────────────────────────────────────────────
    get heroHeading(): Locator {
        return this.page.locator('h1').first();
    }

    get heroSlides(): Locator {
        return this.page.locator('img[alt^="Hero slide"]');
    }

    get shopPackagingCTA(): Locator {
        return this.page.locator('a[href*="/shop"]:visible').first();
    }

    get getAQuoteCTA(): Locator {
        return this.page.locator('button:has-text("Request Pricing"):visible').first();
    }

    // ─── Category cards ───────────────────────────────────────────────
    get categoryCards(): Locator {
        return this.page.locator('a[href*="/category/"]');
    }

    async clickCategory(name: string) {
        await this.page.locator(`text="${name}"`).first().click();
        await this.page.waitForLoadState('networkidle');
    }

    // ─── Guarantee scrolling strip ────────────────────────────────────
    get guaranteeCards(): Locator {
        return this.page.locator('img[alt^="Guarantee card"]');
    }

    // ─── Trusted brands ───────────────────────────────────────────────
    get brandLogos(): Locator {
        return this.page.locator('.trusted-brands img, img[alt="logo"]');
    }

    // ─── Newsletter ───────────────────────────────────────────────────
    get newsletterInput(): Locator {
        return this.page.locator('input[type="email"]').first();
    }

    get newsletterSubmit(): Locator {
        return this.page.locator('button:has-text("Subscribe")').first();
    }

    async subscribeNewsletter(email: string) {
        await this.newsletterInput.fill(email);
        await this.newsletterSubmit.click();
    }

    // ─── Footer ───────────────────────────────────────────────────────
    get footerPhone(): Locator {
        return this.page.locator('footer a[href^="tel:"]');
    }

    get footerEmail(): Locator {
        return this.page.locator('footer a[href^="mailto:"]');
    }

    get footerAddress(): Locator {
        return this.page.locator('footer a[href*="maps"]');
    }
}
