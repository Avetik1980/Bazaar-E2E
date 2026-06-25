# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cross-device-sync.spec.ts >> [Sync] Category pages >> labels-stickers shows at least 1 product on all devices
- Location: tests\e2e\cross-device-sync.spec.ts:100:9

# Error details

```
Error: expect(received).toBeGreaterThan(expected)

Expected: > 0
Received:   0
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - link "Bazaar Printing" [ref=e8] [cursor=pointer]:
            - /url: /
            - img "Bazaar Printing" [ref=e9]
          - generic [ref=e11]:
            - textbox "Search products" [ref=e12]:
              - /placeholder: Search for products...
            - img
          - generic [ref=e13]:
            - link "(+1) 747 348 4444" [ref=e14] [cursor=pointer]:
              - /url: tel:+17473484444
            - link "Sign In" [ref=e15] [cursor=pointer]:
              - /url: /authentication
            - link "Cart" [ref=e16] [cursor=pointer]:
              - /url: /bazaarprinting/cart
              - generic [ref=e17]: Cart
              - img [ref=e18]
        - generic [ref=e21]:
          - link "Labels & Stickers ⌄" [ref=e22] [cursor=pointer]:
            - /url: /bazaarprinting/category/labels-stickers
            - text: Labels & Stickers
            - generic [ref=e23]: ⌄
          - link "Packaging & Boxes ⌄" [ref=e24] [cursor=pointer]:
            - /url: /bazaarprinting/category/packaging-boxes
            - text: Packaging & Boxes
            - generic [ref=e25]: ⌄
          - link "Bags & Pouches ⌄" [ref=e26] [cursor=pointer]:
            - /url: /bazaarprinting/category/bags-flexible-packaging
            - text: Bags & Pouches
            - generic [ref=e27]: ⌄
          - link "Banners & Signs ⌄" [ref=e28] [cursor=pointer]:
            - /url: /bazaarprinting/category/banners-signs
            - text: Banners & Signs
            - generic [ref=e29]: ⌄
          - link "Marketing Materials ⌄" [ref=e30] [cursor=pointer]:
            - /url: /bazaarprinting/category/marketing-materials
            - text: Marketing Materials
            - generic [ref=e31]: ⌄
          - link "Trading Cards ⌄" [ref=e32] [cursor=pointer]:
            - /url: /bazaarprinting/category/trading-cards
            - text: Trading Cards
            - generic [ref=e33]: ⌄
          - link "Wallpapers ⌄" [ref=e34] [cursor=pointer]:
            - /url: /bazaarprinting/category/wallpapers
            - text: Wallpapers
            - generic [ref=e35]: ⌄
          - link "Apparel ⌄" [ref=e36] [cursor=pointer]:
            - /url: /bazaarprinting/category/apparel
            - text: Apparel
            - generic [ref=e37]: ⌄
          - link "Combos ⌄" [ref=e38] [cursor=pointer]:
            - /url: /bazaarprinting/category/label-jar-combo
            - text: Combos
            - generic [ref=e39]: ⌄
          - link "More ⌄" [ref=e40] [cursor=pointer]:
            - /url: /bazaarprinting/category/packaging-supplies
            - text: More
            - generic [ref=e41]: ⌄
      - main [ref=e43]:
        - generic [ref=e44]:
          - navigation "Breadcrumb" [ref=e45]: Labels & Stickers
          - heading "Labels & Stickers" [level=1] [ref=e46]
      - contentinfo [ref=e55]:
        - generic [ref=e56]:
          - generic [ref=e57]:
            - generic [ref=e58]:
              - link "Bazaar Printing" [ref=e60] [cursor=pointer]:
                - /url: /bazaarprinting
              - generic [ref=e61]:
                - link "(+1) 747 348 4444" [ref=e62] [cursor=pointer]:
                  - /url: tel:+17473484444
                  - img [ref=e63]
                  - generic [ref=e67]: (+1) 747 348 4444
                - link "info@bazaarprinting.com" [ref=e68] [cursor=pointer]:
                  - /url: mailto:info@bazaarprinting.com?subject=Bazaar%20Printing%20Question
                  - img [ref=e69]
                  - generic [ref=e71]: info@bazaarprinting.com
                - link "306 Boyd St, Los Angeles, CA 90013" [ref=e72] [cursor=pointer]:
                  - /url: https://www.google.com/maps/search/?api=1&query=306%20Boyd%20St%2C%20Los%20Angeles%2C%20CA%2090013
                  - img [ref=e73]
                  - generic [ref=e75]: 306 Boyd St, Los Angeles, CA 90013
                - link "About us" [ref=e76] [cursor=pointer]:
                  - /url: /bazaarprinting/about-us
                  - img [ref=e77]
                  - generic [ref=e79]: About us
            - generic [ref=e80]:
              - generic [ref=e81]:
                - link "Labels & Stickers" [ref=e82] [cursor=pointer]:
                  - /url: /bazaarprinting/category/labels-stickers
                - link "Packaging & Boxes" [ref=e83] [cursor=pointer]:
                  - /url: /bazaarprinting/category/packaging-boxes
                - link "Bags & Flexible Packaging" [ref=e84] [cursor=pointer]:
                  - /url: /bazaarprinting/category/bags-flexible-packaging
                - link "Banners & Signs" [ref=e85] [cursor=pointer]:
                  - /url: /bazaarprinting/category/banners-signs
                - link "Marketing Materials" [ref=e86] [cursor=pointer]:
                  - /url: /bazaarprinting/category/marketing-materials
                - link "Trading Cards" [ref=e87] [cursor=pointer]:
                  - /url: /bazaarprinting/category/trading-cards
                - link "Wallpapers" [ref=e88] [cursor=pointer]:
                  - /url: /bazaarprinting/category/wallpapers
                - link "Packaging Supplies" [ref=e89] [cursor=pointer]:
                  - /url: /bazaarprinting/category/packaging-supplies
                - link "Other" [ref=e90] [cursor=pointer]:
                  - /url: /bazaarprinting/category/other
                - link "Label + Jar Combo" [ref=e91] [cursor=pointer]:
                  - /url: /bazaarprinting/category/label-jar-combo
                - link "Label + Tube Combo" [ref=e92] [cursor=pointer]:
                  - /url: /bazaarprinting/category/label-tube-combo
                - link "Label + Bag Combo" [ref=e93] [cursor=pointer]:
                  - /url: /bazaarprinting/category/label-bag-combo
                - link "Tees & Polos" [ref=e94] [cursor=pointer]:
                  - /url: /bazaarprinting/category/apparel-tees-polos
                - link "Hoodies & Sweatshirts" [ref=e95] [cursor=pointer]:
                  - /url: /bazaarprinting/category/apparel-hoodies-sweatshirts
                - link "Joggers, Shorts & Bikini" [ref=e96] [cursor=pointer]:
                  - /url: /bazaarprinting/category/apparel-bottoms
                - link "Hats" [ref=e97] [cursor=pointer]:
                  - /url: /bazaarprinting/category/apparel-hats
                - link "Activewear" [ref=e98] [cursor=pointer]:
                  - /url: /bazaarprinting/category/apparel-activewear
              - generic [ref=e99]:
                - link "Instagram" [ref=e100] [cursor=pointer]:
                  - /url: https://www.instagram.com/bazaar_printing
                  - img [ref=e101]
                - link "YouTube" [ref=e103] [cursor=pointer]:
                  - /url: https://www.youtube.com/@BazaarPrinting-onBoyd
                  - img [ref=e104]
                - link "TikTok" [ref=e106] [cursor=pointer]:
                  - /url: https://www.tiktok.com/@bazaarprinting
                  - img [ref=e107]
                - link "LinkedIn" [ref=e109] [cursor=pointer]:
                  - /url: https://www.linkedin.com/company/bazaar-printing
                  - img [ref=e110]
            - generic [ref=e112]:
              - link "SHOP" [ref=e113] [cursor=pointer]:
                - /url: /bazaarprinting/category/labels-stickers
              - generic [ref=e114]:
                - paragraph [ref=e115]: Pickup Hours
                - paragraph [ref=e116]: "Mon – Fri: 9:30 AM – 5:30 PM"
                - paragraph [ref=e117]: "Saturday: 9:30 AM – 4 PM"
          - paragraph [ref=e118]: Copyright © Bazaar Printing 2026. All rights reserved.
  - alert [ref=e119]
```

# Test source

```ts
  4   |  * These tests run on BOTH desktop and mobile (all Playwright projects)
  5   |  * and assert that the SAME feature behaves consistently across viewports.
  6   |  *
  7   |  * The test matrix is:
  8   |  *   desktop-chrome × each test
  9   |  *   desktop-firefox × each test
  10  |  *   desktop-safari × each test
  11  |  *   mobile-ios × each test
  12  |  *   mobile-android × each test
  13  |  *   mobile-ipad × each test
  14  |  *
  15  |  * Playwright runs this file against all projects automatically.
  16  |  * Any failure pinpoints which device/browser broke.
  17  |  */
  18  | 
  19  | import {test, expect} from '@playwright/test';
  20  | import {HomePage} from '../pages/HomePage';
  21  | import {CategoryPage} from '../pages/CategoryPage';
  22  | import {ProductPage} from '../pages/ProductPage';
  23  | import {AuthPage} from '../pages/CartAuthQuotePages';
  24  | import {scrollFullPage, isMobileViewport} from '../utils/viewport';
  25  | 
  26  | // ─── 1. Navigation consistency ────────────────────────────────────────────
  27  | 
  28  | test.describe('[Sync] Navigation', () => {
  29  |     test('logo always navigates to homepage', async ({page}) => {
  30  |         const home = new HomePage(page);
  31  |         await home.open();
  32  |         await home.navLogo.click();
  33  |         await expect(page).toHaveURL(/bazaarprinting/);
  34  |     });
  35  | 
  36  |     test('cart icon is always reachable', async ({page}) => {
  37  |         const home = new HomePage(page);
  38  |         await home.open();
  39  | 
  40  |         const mobile = await isMobileViewport(page);
  41  |         if (mobile) {
  42  |             // On mobile the cart might be in the hamburger menu OR always in header
  43  |             const cartVisible = await home.cartIcon.isVisible().catch(() => false);
  44  |             if (!cartVisible) {
  45  |                 await home.openMobileMenu();
  46  |             }
  47  |         }
  48  |         await expect(home.cartIcon).toBeVisible();
  49  |     });
  50  | 
  51  |     test('Labels & Stickers category is reachable from any device', async ({page}) => {
  52  |         const home = new HomePage(page);
  53  |         await home.open();
  54  | 
  55  |         const mobile = await isMobileViewport(page);
  56  |         if (mobile) {
  57  |             await home.openMobileMenu();
  58  |         }
  59  |         const isMobile = await isMobileViewport(page);
  60  |         if (isMobile) {
  61  |             await home.openMobileMenu();
  62  |             await page.getByRole('navigation').getByRole('link', {name: 'Labels & Stickers'}).click();
  63  |         } else {
  64  |             await page.getByRole('link', {name: 'Labels & Stickers', exact: true}).first().click();
  65  |         }
  66  |         await expect(page).toHaveURL(/labels-stickers/);
  67  |     });
  68  | });
  69  | 
  70  | // ─── 2. Homepage content parity ───────────────────────────────────────────
  71  | 
  72  | test.describe('[Sync] Homepage content', () => {
  73  |     test('hero heading text is the same on all devices', async ({page}) => {
  74  |         const home = new HomePage(page);
  75  |         await home.open();
  76  |         const text = await home.heroHeading.textContent();
  77  |         // Assert it's not empty and is the real heading (not a placeholder)
  78  |         expect(text?.trim().length).toBeGreaterThan(10);
  79  |         expect(text).not.toMatch(/lorem ipsum/i);
  80  |     });
  81  | 
  82  |     test('Shop Packaging CTA is visible on all devices', async ({page}) => {
  83  |         const home = new HomePage(page);
  84  |         await home.open();
  85  |         await expect(home.shopPackagingCTA).toBeVisible();
  86  |     });
  87  | 
  88  |     test('footer contact info visible on all devices after scroll', async ({page}) => {
  89  |         const home = new HomePage(page);
  90  |         await home.open();
  91  |         await scrollFullPage(page);
  92  |         await expect(page.getByRole('contentinfo').getByRole('link', {name: '(+1) 747 348'})).toBeVisible();
  93  |         await expect(page.getByRole('link', {name: 'info@bazaarprinting.com'})).toBeVisible();
  94  |     });
  95  | });
  96  | 
  97  | // ─── 3. Category page parity ──────────────────────────────────────────────
  98  | 
  99  | test.describe('[Sync] Category pages', () => {
  100 |     test('labels-stickers shows at least 1 product on all devices', async ({page}) => {
  101 |         const category = new CategoryPage(page);
  102 |         await category.open('labels-stickers');
  103 |         const count = await category.productLinks.count();
> 104 |         expect(count).toBeGreaterThan(0);
      |                       ^ Error: expect(received).toBeGreaterThan(expected)
  105 |     });
  106 | 
  107 |     test('product link navigates to /product/ on all devices', async ({page}) => {
  108 |         const category = new CategoryPage(page);
  109 |         await category.open('labels-stickers');
  110 |         await category.clickFirstProduct();
  111 |         await expect(page).toHaveURL(/\/product\//);
  112 |     });
  113 | });
  114 | 
  115 | // ─── 4. Product page parity ───────────────────────────────────────────────
  116 | 
  117 | test.describe('[Sync] Product configurator', () => {
  118 |     test('roll-labels page loads without 404 on all devices', async ({page}) => {
  119 |         const product = new ProductPage(page);
  120 |         await product.open('roll-labels', 1, 'labels-stickers');
  121 |         await expect(page).not.toHaveTitle(/404/i);
  122 |     });
  123 | 
  124 |     test('no horizontal overflow on product page (any device)', async ({page}) => {
  125 |         const product = new ProductPage(page);
  126 |         await product.open('roll-labels', 1, 'labels-stickers');
  127 | 
  128 |         const bodyScroll = await page.evaluate(() => document.body.scrollWidth);
  129 |         const viewportW = page.viewportSize()?.width ?? 1440;
  130 |         if (bodyScroll > viewportW + 5) {
  131 |             console.warn(`[KNOWN ISSUE] Horizontal overflow on ${page.viewportSize()?.width}px viewport: ${bodyScroll}px > ${viewportW}px`);
  132 |         }
  133 | // Only fail if overflow is extreme (>500px over)
  134 |         expect(bodyScroll).toBeLessThanOrEqual(viewportW + 500);
  135 |     });
  136 | });
  137 | 
  138 | // ─── 5. Auth page parity ─────────────────────────────────────────────────
  139 | 
  140 | test.describe('[Sync] Auth page', () => {
  141 |     test('sign-in form renders on all devices', async ({page}) => {
  142 |         const auth = new AuthPage(page);
  143 |         await auth.open();
  144 |         await expect(auth.emailInput).toBeVisible();
  145 |         await expect(auth.passwordInput).toBeVisible();
  146 |         await expect(auth.signInButton).toBeVisible();
  147 |     });
  148 | 
  149 |     test('invalid login shows error on all devices', async ({page}) => {
  150 |         const auth = new AuthPage(page);
  151 |         await auth.open();
  152 |         await auth.signIn('invalid@test.com', 'wrongpassword999');
  153 |         await expect(auth.errorMessage).toBeVisible({timeout: 8000});
  154 |     });
  155 | });
  156 | 
  157 | // ─── 6. SEO / meta consistency ───────────────────────────────────────────
  158 | 
  159 | test.describe('[Sync] SEO & meta tags', () => {
  160 |     test('homepage has meta description on all devices', async ({page}) => {
  161 |         const home = new HomePage(page);
  162 |         await home.open();
  163 |         const meta = page.locator('meta[name="description"]');
  164 |         const content = await meta.getAttribute('content');
  165 |         expect(content?.length).toBeGreaterThan(20);
  166 |     });
  167 | 
  168 |     test('category page has canonical URL', async ({page}) => {
  169 |         const category = new CategoryPage(page);
  170 |         await category.open('labels-stickers');
  171 |         const canonical = page.locator('link[rel="canonical"]');
  172 |         const href = await canonical.getAttribute('href');
  173 |         expect(href).toContain('labels-stickers');
  174 |     });
  175 | });
  176 | 
```