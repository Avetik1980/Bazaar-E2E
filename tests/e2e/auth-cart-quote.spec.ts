import { test, expect } from '@playwright/test';
import { AuthPage, CartPage, QuotePage } from '../pages/CartAuthQuotePages';
import { TEST_USER, SAMPLE_QUOTE } from '../fixtures/data';

// ─── Authentication ────────────────────────────────────────────────────────

test.describe('Authentication', () => {
  let auth: AuthPage;

  test.beforeEach(async ({ page }) => {
    auth = new AuthPage(page);
    await auth.open();
  });

  test('sign in page loads @smoke', async ({ page }) => {
    await expect(page).not.toHaveTitle(/404/i);
    await expect(auth.emailInput).toBeVisible();
    await expect(auth.passwordInput).toBeVisible();
  });

  test('sign in button is present', async () => {
    await expect(auth.signInButton).toBeVisible();
  });

  test('invalid credentials shows error', async () => {
    await auth.signIn('bad@email.com', 'wrongpassword');
    await expect(auth.errorMessage).toBeVisible();
  });

  test('register link is present', async () => {
    await expect(auth.registerLink).toBeVisible();
  });

  test('sign in form is usable on mobile', async ({ page, isMobile }) => {
    if (!isMobile) test.skip();
    const emailBox = await auth.emailInput.boundingBox();
    const pwBox = await auth.passwordInput.boundingBox();
    expect(emailBox?.width).toBeGreaterThan(100);
    expect(pwBox?.width).toBeGreaterThan(100);
  });

  // ─── Valid login (requires TEST_USER_EMAIL + TEST_USER_PASSWORD env vars) ─
  test('valid credentials redirect away from auth page', async ({ page }) => {
    if (!process.env.TEST_USER_EMAIL) {
      test.skip(); // Skip if no real test account configured
      return;
    }
    await auth.signIn(TEST_USER.email, TEST_USER.password);
    await expect(page).not.toHaveURL(/\/authentication$/);
  });
});

// ─── Cart ──────────────────────────────────────────────────────────────────

test.describe('Cart', () => {
  let cart: CartPage;

  test.beforeEach(async ({ page }) => {
    cart = new CartPage(page);
    await cart.open();
  });

  test('cart page loads @smoke', async ({ page }) => {
    await expect(page).not.toHaveTitle(/404/i);
  });

  test('empty cart shows message or cart UI', async ({ page }) => {
    // Cart page should load something — either empty state or items
    await expect(page.locator('main, #__next, [id="root"], body')).not.toBeEmpty();
    // Should not show an error page
    await expect(page).not.toHaveTitle(/404|error/i);
  });

  test('checkout button is present when cart has items', async () => {
    const hasItems = (await cart.cartItems.count()) > 0;
    if (!hasItems) test.skip();
    await expect(cart.checkoutButton).toBeVisible();
  });
});

// ─── Quote ─────────────────────────────────────────────────────────────────

test.describe('Quote Request', () => {
  let quote: QuotePage;

  test.beforeEach(async ({ page }) => {
    quote = new QuotePage(page);
    await quote.open();
  });

  test('quote modal opens @smoke', async ({ page }) => {
    await expect(quote.submitButton).toBeVisible();
  });

  test('quote form fields are present', async () => {
    await expect(quote.emailInput).toBeVisible();
    await expect(quote.submitButton).toBeVisible();
  });

  test('submit button is tappable on mobile', async ({ isMobile }) => {
    if (!isMobile) test.skip();
    const box = await quote.submitButton.boundingBox();
    expect(box?.height).toBeGreaterThanOrEqual(44);
  });
});
