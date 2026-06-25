# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cross-device-sync.spec.ts >> [Sync] Category pages >> product link navigates to /product/ on all devices
- Location: tests\e2e\cross-device-sync.spec.ts:107:9

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('a[href*="/product/"]').first()

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
          - paragraph [ref=e48]: No online products in this category yet. Add or enable items in admin to show them here.
      - contentinfo [ref=e49]:
        - generic [ref=e50]:
          - generic [ref=e51]:
            - generic [ref=e52]:
              - link "Bazaar Printing" [ref=e54] [cursor=pointer]:
                - /url: /bazaarprinting
              - generic [ref=e55]:
                - link "(+1) 747 348 4444" [ref=e56] [cursor=pointer]:
                  - /url: tel:+17473484444
                  - img [ref=e57]
                  - generic [ref=e61]: (+1) 747 348 4444
                - link "info@bazaarprinting.com" [ref=e62] [cursor=pointer]:
                  - /url: mailto:info@bazaarprinting.com?subject=Bazaar%20Printing%20Question
                  - img [ref=e63]
                  - generic [ref=e65]: info@bazaarprinting.com
                - link "306 Boyd St, Los Angeles, CA 90013" [ref=e66] [cursor=pointer]:
                  - /url: https://www.google.com/maps/search/?api=1&query=306%20Boyd%20St%2C%20Los%20Angeles%2C%20CA%2090013
                  - img [ref=e67]
                  - generic [ref=e69]: 306 Boyd St, Los Angeles, CA 90013
                - link "About us" [ref=e70] [cursor=pointer]:
                  - /url: /bazaarprinting/about-us
                  - img [ref=e71]
                  - generic [ref=e73]: About us
            - generic [ref=e74]:
              - generic [ref=e75]:
                - link "Labels & Stickers" [ref=e76] [cursor=pointer]:
                  - /url: /bazaarprinting/category/labels-stickers
                - link "Packaging & Boxes" [ref=e77] [cursor=pointer]:
                  - /url: /bazaarprinting/category/packaging-boxes
                - link "Bags & Flexible Packaging" [ref=e78] [cursor=pointer]:
                  - /url: /bazaarprinting/category/bags-flexible-packaging
                - link "Banners & Signs" [ref=e79] [cursor=pointer]:
                  - /url: /bazaarprinting/category/banners-signs
                - link "Marketing Materials" [ref=e80] [cursor=pointer]:
                  - /url: /bazaarprinting/category/marketing-materials
                - link "Trading Cards" [ref=e81] [cursor=pointer]:
                  - /url: /bazaarprinting/category/trading-cards
                - link "Wallpapers" [ref=e82] [cursor=pointer]:
                  - /url: /bazaarprinting/category/wallpapers
                - link "Packaging Supplies" [ref=e83] [cursor=pointer]:
                  - /url: /bazaarprinting/category/packaging-supplies
                - link "Other" [ref=e84] [cursor=pointer]:
                  - /url: /bazaarprinting/category/other
                - link "Label + Jar Combo" [ref=e85] [cursor=pointer]:
                  - /url: /bazaarprinting/category/label-jar-combo
                - link "Label + Tube Combo" [ref=e86] [cursor=pointer]:
                  - /url: /bazaarprinting/category/label-tube-combo
                - link "Label + Bag Combo" [ref=e87] [cursor=pointer]:
                  - /url: /bazaarprinting/category/label-bag-combo
                - link "Tees & Polos" [ref=e88] [cursor=pointer]:
                  - /url: /bazaarprinting/category/apparel-tees-polos
                - link "Hoodies & Sweatshirts" [ref=e89] [cursor=pointer]:
                  - /url: /bazaarprinting/category/apparel-hoodies-sweatshirts
                - link "Joggers, Shorts & Bikini" [ref=e90] [cursor=pointer]:
                  - /url: /bazaarprinting/category/apparel-bottoms
                - link "Hats" [ref=e91] [cursor=pointer]:
                  - /url: /bazaarprinting/category/apparel-hats
                - link "Activewear" [ref=e92] [cursor=pointer]:
                  - /url: /bazaarprinting/category/apparel-activewear
              - generic [ref=e93]:
                - link "Instagram" [ref=e94] [cursor=pointer]:
                  - /url: https://www.instagram.com/bazaar_printing
                  - img [ref=e95]
                - link "YouTube" [ref=e97] [cursor=pointer]:
                  - /url: https://www.youtube.com/@BazaarPrinting-onBoyd
                  - img [ref=e98]
                - link "TikTok" [ref=e100] [cursor=pointer]:
                  - /url: https://www.tiktok.com/@bazaarprinting
                  - img [ref=e101]
                - link "LinkedIn" [ref=e103] [cursor=pointer]:
                  - /url: https://www.linkedin.com/company/bazaar-printing
                  - img [ref=e104]
            - generic [ref=e106]:
              - link "SHOP" [ref=e107] [cursor=pointer]:
                - /url: /bazaarprinting/category/labels-stickers
              - generic [ref=e108]:
                - paragraph [ref=e109]: Pickup Hours
                - paragraph [ref=e110]: "Mon – Fri: 9:30 AM – 5:30 PM"
                - paragraph [ref=e111]: "Saturday: 9:30 AM – 4 PM"
          - paragraph [ref=e112]: Copyright © Bazaar Printing 2026. All rights reserved.
  - alert [ref=e113]
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | import { BasePage } from './BasePage';
  3  | 
  4  | export class CategoryPage extends BasePage {
  5  |   constructor(page: Page) {
  6  |     super(page);
  7  |   }
  8  | 
  9  |   async open(slug: string) {
  10 |     await this.goto(`/bazaarprinting/category/${slug}`);
  11 |   }
  12 | 
  13 |   // ─── Products listing ─────────────────────────────────────────────
  14 |   get productLinks(): Locator {
  15 |     return this.page.locator('a[href*="/product/"]');
  16 |   }
  17 | 
  18 |   get pageHeading(): Locator {
  19 |     return this.page.locator('h1').first();
  20 |   }
  21 | 
  22 |   async getProductNames(): Promise<string[]> {
  23 |     await this.productLinks.first().waitFor();
  24 |     return this.productLinks.allTextContents();
  25 |   }
  26 | 
  27 |   async clickFirstProduct() {
> 28 |     await this.productLinks.first().click();
     |                                     ^ Error: locator.click: Test timeout of 60000ms exceeded.
  29 |     await this.page.waitForLoadState('networkidle');
  30 |   }
  31 | 
  32 |   async clickProductByName(name: string) {
  33 |     await this.page.locator(`a:has-text("${name}")`).first().click();
  34 |     await this.page.waitForLoadState('networkidle');
  35 |   }
  36 | 
  37 |   // ─── Material filters (query param based) ─────────────────────────
  38 |   async filterByMaterial(material: string) {
  39 |     await this.page.goto(this.page.url() + `?material=${material}`);
  40 |     await this.page.waitForLoadState('networkidle');
  41 |   }
  42 | }
  43 | 
```