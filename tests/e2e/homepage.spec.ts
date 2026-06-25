import {test, expect} from '@playwright/test';
import {HomePage} from '../pages/HomePage';
import {scrollFullPage, isMobileViewport} from '../utils/viewport';

test.describe('Homepage', () => {
    let home: HomePage;

    test.beforeEach(async ({page}) => {
        home = new HomePage(page);
        await home.open();
    });

    // ─── @smoke ────────────────────────────────────────────────────────

    test('loads with correct title @smoke', async ({page}) => {
        await expect(page).toHaveTitle(/Bazaar Printing/i);
    });

    test('logo is visible and links to homepage @smoke', async () => {
        await expect(home.navLogo).toBeVisible();
        await home.navLogo.click();
        await expect(home.page).toHaveURL(/bazaarprinting/);
    });

    test('hero heading is visible @smoke', async () => {
        await expect(home.heroHeading).toBeVisible();
        const text = await home.heroHeading.textContent();
        expect(text?.length).toBeGreaterThan(5);
    });

    test('hero CTAs — Shop Packaging and Get a Quote are visible @smoke', async () => {
        await expect(home.shopPackagingCTA).toBeVisible();
        await expect(home.getAQuoteCTA).toBeVisible();
    });

    // ─── Navigation ────────────────────────────────────────────────────

    test('desktop nav shows category links', async ({page}) => {
        const mobile = await isMobileViewport(page);
        if (mobile) test.skip();

        const labels = page.getByRole('link', {name: 'Labels & Stickers'}).first();
        await expect(labels).toBeVisible();
    });

    test('mobile: hamburger menu opens and shows categories', async ({page}) => {
        const mobile = await isMobileViewport(page);
        if (!mobile) test.skip();

        await home.openMobileMenu();
        // The menu is open; category names are accordion buttons, not links.
        await expect(page.getByRole('navigation').getByRole('link', { name: 'Labels & Stickers' })).toBeVisible({timeout: 8000});
    });

    test('cart icon is accessible from header', async () => {
        await expect(home.cartIcon).toBeVisible();
    });

    test('sign in link is accessible from header', async ({page}) => {
        const mobile = await isMobileViewport(page);
        if (mobile) {
            await home.openMobileMenu();
        }
        await expect(home.signInLink).toBeVisible({timeout: 6000});
    });

    // ─── Content ───────────────────────────────────────────────────────

    test('hero slider images render', async () => {
        const slides = home.heroSlides;
        const count = await slides.count();
        expect(count).toBeGreaterThanOrEqual(1);
        await expect(slides.first()).toBeVisible();
    });

    test('category cards are present on homepage', async () => {
        const count = await home.categoryCards.count();
        expect(count).toBeGreaterThan(4);
    });

    test('footer shows phone, email, and address', async () => {
        await scrollFullPage(home.page);
        await expect(home.footerPhone).toBeVisible();
        await expect(home.footerEmail).toBeVisible();
        await expect(home.footerAddress).toBeVisible();
    });

    test('footer phone number is correct', async () => {
        await scrollFullPage(home.page);
        await expect(home.footerPhone).toBeVisible();
        const text = await home.footerPhone.textContent();
        expect(text).toContain('747 348 4444');
    });

    // ─── Responsive visual parity ─────────────────────────────────────

    test('hero heading is visible on any viewport', async () => {
        await expect(home.heroHeading).toBeVisible();
    });

    test('CTAs are tappable size on mobile', async ({page}) => {
        const mobile = await isMobileViewport(page);
        if (!mobile) test.skip();

        const box = await home.shopPackagingCTA.boundingBox();
        // Minimum 44px height for accessible touch target
        expect(box?.height).toBeGreaterThanOrEqual(44);
    });
});
