# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth-cart-quote.spec.ts >> Quote Request >> quote form fields are present
- Location: tests\e2e\auth-cart-quote.spec.ts:98:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('input[placeholder="Type here"]').nth(2)
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('input[placeholder="Type here"]').nth(2)

```

```yaml
- main:
  - link "Bazaar Printing":
    - /url: /
    - img "Bazaar Printing"
  - textbox "Search products":
    - /placeholder: Search for products...
  - link "(+1) 747 348 4444":
    - /url: tel:+17473484444
  - link "Sign In":
    - /url: /authentication
  - link "Cart":
    - /url: /bazaarprinting/cart
  - link "Labels & Stickers ⌄":
    - /url: /bazaarprinting/category/labels-stickers
  - link "Packaging & Boxes ⌄":
    - /url: /bazaarprinting/category/packaging-boxes
  - link "Bags & Pouches ⌄":
    - /url: /bazaarprinting/category/bags-flexible-packaging
  - link "Banners & Signs ⌄":
    - /url: /bazaarprinting/category/banners-signs
  - link "Marketing Materials ⌄":
    - /url: /bazaarprinting/category/marketing-materials
  - link "Trading Cards ⌄":
    - /url: /bazaarprinting/category/trading-cards
  - link "Wallpapers ⌄":
    - /url: /bazaarprinting/category/wallpapers
  - link "Apparel ⌄":
    - /url: /bazaarprinting/category/apparel
  - link "Combos ⌄":
    - /url: /bazaarprinting/category/label-jar-combo
  - link "More ⌄":
    - /url: /bazaarprinting/category/packaging-supplies
  - main:
    - navigation "Breadcrumb": Labels & Stickers
    - heading "Labels & Stickers" [level=1]
    - paragraph: No online products in this category yet. Add or enable items in admin to show them here.
  - contentinfo:
    - link "Bazaar Printing":
      - /url: /bazaarprinting
    - link "(+1) 747 348 4444":
      - /url: tel:+17473484444
      - img
      - text: (+1) 747 348 4444
    - link "info@bazaarprinting.com":
      - /url: mailto:info@bazaarprinting.com?subject=Bazaar%20Printing%20Question
    - link "306 Boyd St, Los Angeles, CA 90013":
      - /url: https://www.google.com/maps/search/?api=1&query=306%20Boyd%20St%2C%20Los%20Angeles%2C%20CA%2090013
    - link "About us":
      - /url: /bazaarprinting/about-us
      - img
      - text: About us
    - link "Labels & Stickers":
      - /url: /bazaarprinting/category/labels-stickers
    - link "Packaging & Boxes":
      - /url: /bazaarprinting/category/packaging-boxes
    - link "Bags & Flexible Packaging":
      - /url: /bazaarprinting/category/bags-flexible-packaging
    - link "Banners & Signs":
      - /url: /bazaarprinting/category/banners-signs
    - link "Marketing Materials":
      - /url: /bazaarprinting/category/marketing-materials
    - link "Trading Cards":
      - /url: /bazaarprinting/category/trading-cards
    - link "Wallpapers":
      - /url: /bazaarprinting/category/wallpapers
    - link "Packaging Supplies":
      - /url: /bazaarprinting/category/packaging-supplies
    - link "Other":
      - /url: /bazaarprinting/category/other
    - link "Label + Jar Combo":
      - /url: /bazaarprinting/category/label-jar-combo
    - link "Label + Tube Combo":
      - /url: /bazaarprinting/category/label-tube-combo
    - link "Label + Bag Combo":
      - /url: /bazaarprinting/category/label-bag-combo
    - link "Tees & Polos":
      - /url: /bazaarprinting/category/apparel-tees-polos
    - link "Hoodies & Sweatshirts":
      - /url: /bazaarprinting/category/apparel-hoodies-sweatshirts
    - link "Joggers, Shorts & Bikini":
      - /url: /bazaarprinting/category/apparel-bottoms
    - link "Hats":
      - /url: /bazaarprinting/category/apparel-hats
    - link "Activewear":
      - /url: /bazaarprinting/category/apparel-activewear
    - link "Instagram":
      - /url: https://www.instagram.com/bazaar_printing
      - img
    - link "YouTube":
      - /url: https://www.youtube.com/@BazaarPrinting-onBoyd
      - img
    - link "TikTok":
      - /url: https://www.tiktok.com/@bazaarprinting
      - img
    - link "LinkedIn":
      - /url: https://www.linkedin.com/company/bazaar-printing
      - img
    - link "SHOP":
      - /url: /bazaarprinting/category/labels-stickers
    - paragraph: Pickup Hours
    - paragraph: "Mon – Fri: 9:30 AM – 5:30 PM"
    - paragraph: "Saturday: 9:30 AM – 4 PM"
    - paragraph: Copyright © Bazaar Printing 2026. All rights reserved.
- alert: Labels & Stickers — Bazaar Printing
```

# Test source

```ts
  1   | import {test, expect} from '@playwright/test';
  2   | import {AuthPage, CartPage, QuotePage} from '../pages/CartAuthQuotePages';
  3   | import {TEST_USER, SAMPLE_QUOTE} from '../fixtures/data';
  4   | 
  5   | // ─── Authentication ────────────────────────────────────────────────────────
  6   | 
  7   | test.describe('Authentication', () => {
  8   |     let auth: AuthPage;
  9   | 
  10  |     test.beforeEach(async ({page}) => {
  11  |         auth = new AuthPage(page);
  12  |         await auth.open();
  13  |     });
  14  | 
  15  |     test('sign in page loads @smoke', async ({page}) => {
  16  |         await expect(page).not.toHaveTitle(/404/i);
  17  |         await expect(auth.emailInput).toBeVisible();
  18  |         await expect(auth.passwordInput).toBeVisible();
  19  |     });
  20  | 
  21  |     test('sign in button is present', async () => {
  22  |         await expect(auth.signInButton).toBeVisible();
  23  |     });
  24  | 
  25  |     test('invalid credentials shows error', async () => {
  26  |         await auth.signIn('bad@email.com', 'wrongpassword');
  27  |         await expect(auth.errorMessage).toBeVisible();
  28  |     });
  29  | 
  30  |     test('register link is present', async () => {
  31  |         await expect(auth.registerLink).toBeVisible();
  32  |     });
  33  | 
  34  |     test('sign in form is usable on mobile', async ({page, isMobile}) => {
  35  |         if (!isMobile) test.skip();
  36  |         const emailBox = await auth.emailInput.boundingBox();
  37  |         const pwBox = await auth.passwordInput.boundingBox();
  38  |         expect(emailBox?.width).toBeGreaterThan(100);
  39  |         expect(pwBox?.width).toBeGreaterThan(100);
  40  |     });
  41  | 
  42  |     // ─── Valid login (requires TEST_USER_EMAIL + TEST_USER_PASSWORD env vars) ─
  43  |     test('valid credentials redirect away from auth page', async ({page}) => {
  44  |         if (!process.env.TEST_USER_EMAIL) {
  45  |             test.skip(); // Skip if no real test account configured
  46  |             return;
  47  |         }
  48  |         await auth.signIn(TEST_USER.email, TEST_USER.password);
  49  |         await expect(page).not.toHaveURL(/\/authentication$/);
  50  |     });
  51  | });
  52  | 
  53  | // ─── Cart ──────────────────────────────────────────────────────────────────
  54  | 
  55  | test.describe('Cart', () => {
  56  |     let cart: CartPage;
  57  | 
  58  |     test.beforeEach(async ({page}) => {
  59  |         cart = new CartPage(page);
  60  |         await cart.open();
  61  |     });
  62  | 
  63  |     test('cart page loads @smoke', async ({page}) => {
  64  |         await expect(page).not.toHaveTitle(/404/i);
  65  |     });
  66  | 
  67  |     test('empty cart shows message or cart UI', async ({page}) => {
  68  |         await expect(page).not.toHaveTitle(/404|error/i);
  69  |         const hasItems = (await cart.cartItems.count()) > 0;
  70  |         if (hasItems) {
  71  |             await expect(cart.cartItems.first()).toBeVisible();
  72  |         } else {
  73  |             await expect(cart.emptyCartMessage).toBeVisible();
  74  |         }
  75  |     });
  76  | 
  77  |     test('checkout button is present when cart has items', async () => {
  78  |         const hasItems = (await cart.cartItems.count()) > 0;
  79  |         if (!hasItems) test.skip();
  80  |         await expect(cart.checkoutButton).toBeVisible();
  81  |     });
  82  | });
  83  | 
  84  | // ─── Quote ─────────────────────────────────────────────────────────────────
  85  | 
  86  | test.describe('Quote Request', () => {
  87  |     let quote: QuotePage;
  88  | 
  89  |     test.beforeEach(async ({page}) => {
  90  |         quote = new QuotePage(page);
  91  |         await quote.open();
  92  |     });
  93  | 
  94  |     test('quote modal opens @smoke', async ({page}) => {
  95  |         await expect(quote.submitButton).toBeVisible();
  96  |     });
  97  | 
  98  |     test('quote form fields are present', async () => {
> 99  |         await expect(quote.emailInput).toBeVisible();
      |                                        ^ Error: expect(locator).toBeVisible() failed
  100 |         await expect(quote.submitButton).toBeVisible();
  101 |     });
  102 | 
  103 |     test('submit button is tappable on mobile', async ({isMobile}) => {
  104 |         if (!isMobile) test.skip();
  105 |         const box = await quote.submitButton.boundingBox();
  106 |         expect(box?.height).toBeGreaterThanOrEqual(44);
  107 |     });
  108 | });
  109 | 
```