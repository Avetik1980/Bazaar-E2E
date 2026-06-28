import {Page, Locator} from '@playwright/test';
import {BasePage} from './BasePage';

export class CartPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async open() {
        await this.goto('/bazaarprinting/cart');
    }

    get cartItems(): Locator {
        return this.page.locator('[data-testid="cart-item"], .cart-item, [class*="cart-item"]');
    }

    get emptyCartMessage(): Locator {
        return this.page.locator('text=/Cart\\s*0\\s*Items/i').first();
    }

    get checkoutButton(): Locator {
        return this.page.locator('button:has-text("Checkout"), a:has-text("Checkout")').first();
    }
}

export class AuthPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async open() {
        await this.goto('/authentication');
    }

    get emailInput(): Locator {
        return this.page.locator('input[type="email"], input[name="email"]').first();
    }

    get passwordInput(): Locator {
        return this.page.locator('input[type="password"], input[name="password"]').first();
    }

    get signInButton(): Locator {
        return this.page.locator('button:has-text("Sign In"), button:has-text("Log In"), button[type="submit"]').first();
    }

    get errorMessage(): Locator {
        return this.page.locator('[data-testid="auth-error"], .error-message, [role="alert"]').first();
    }

    get registerLink(): Locator {
        return this.page.getByTestId('register-link');
    }

    async signIn(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.signInButton.click();
        await this.page.waitForLoadState('domcontentloaded');
    }
}

export class QuotePage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async open() {
        await this.goto('/bazaarprinting');
// CI Android emulators are slower — give carousel more time to hydrate
        const isSlowEnv = !!process.env.CI;
        await this.page.waitForTimeout(isSlowEnv ? 6000 : 2500);

        const carouselLink = this.page.getByRole('link', {name: 'Get a Quote'});
        const carouselMobileLink = this.page.getByRole('link', {name: 'GET A QUOTE'});
        const requestBtn = this.page.getByRole('button', {name: 'Request Pricing'});
        const requestLink = this.page.getByRole('link', {name: 'Request Pricing'});

        const carouselVisible = await carouselLink.isVisible().catch(() => false);
        const carouselMobileVisible = await carouselMobileLink.isVisible().catch(() => false);
        const btnVisible = await requestBtn.isVisible().catch(() => false);
        const linkVisible = await requestLink.isVisible().catch(() => false);

        if (carouselVisible) {
            await carouselLink.click();
        } else if (carouselMobileVisible) {
            await carouselMobileLink.click();
        } else if (btnVisible) {
            await requestBtn.scrollIntoViewIfNeeded();
            await requestBtn.click();
        } else if (linkVisible) {
            await requestLink.scrollIntoViewIfNeeded();
            await requestLink.click();
        }

        await this.page.waitForTimeout(1200);
    }

    get nameInput(): Locator {
        return this.page.getByLabel('FULL NAME');
    }

    get emailInput(): Locator {
        return this.page.locator('input[placeholder="Type here"]').nth(2);
    }

    get phoneInput(): Locator {
        return this.page.getByLabel('CONTACT NUMBER');
    }

    get submitButton(): Locator {
        return this.page.getByRole('button', {name: /submit|send|request/i}).last();
    }
}
