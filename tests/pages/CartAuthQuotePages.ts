import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

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
    return this.page.locator('text=/empty|no items/i');
  }

  get checkoutButton(): Locator {
    return this.page.locator('button:has-text("Checkout"), a:has-text("Checkout")').first();
  }

  get totalPrice(): Locator {
    return this.page.locator('[data-testid="cart-total"], .cart-total, [class*="total"]').first();
  }

  async getItemCount(): Promise<number> {
    return this.cartItems.count();
  }

  async removeFirstItem() {
    const removeBtn = this.cartItems.first().locator('button:has-text("Remove"), button[aria-label*="remove"]');
    await removeBtn.click();
    await this.page.waitForTimeout(500);
  }

  async updateQuantity(itemIndex: number, qty: number) {
    const item = this.cartItems.nth(itemIndex);
    const qtyInput = item.locator('input[type="number"]');
    await qtyInput.clear();
    await qtyInput.fill(String(qty));
    await qtyInput.press('Enter');
    await this.page.waitForTimeout(500);
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
    return this.page.locator('a:has-text("Register"), a:has-text("Sign Up"), a:has-text("Create")').first();
  }

  async signIn(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
    await this.page.waitForLoadState('networkidle');
  }
}

export class QuotePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.goto('/bazaarprinting/quote');
  }

  get nameInput(): Locator {
    return this.page.locator('input[name="name"], input[placeholder*="name" i]').first();
  }

  get emailInput(): Locator {
    return this.page.locator('input[type="email"]').first();
  }

  get phoneInput(): Locator {
    return this.page.locator('input[type="tel"], input[name="phone"]').first();
  }

  get messageInput(): Locator {
    return this.page.locator('textarea').first();
  }

  get submitButton(): Locator {
    return this.page.locator('button[type="submit"], button:has-text("Submit"), button:has-text("Request")').first();
  }

  get successMessage(): Locator {
    return this.page.locator('text=/thank you|submitted|success/i').first();
  }

  async fillAndSubmit(name: string, email: string, phone: string, message: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.phoneInput.fill(phone);
    await this.messageInput.fill(message);
    await this.submitButton.click();
    await this.page.waitForLoadState('networkidle');
  }
}
