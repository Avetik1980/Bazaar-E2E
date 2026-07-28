import {test, expect} from '@playwright/test';

// ─── CONFIGURE YOUR SEARCH HERE ───────────────────────────────────
const SEARCH_TERM = 'cannabis'; // <-- change this to any word/string
// ──────────────────────────────────────────────────────────────────

const BASE_URL = 'https://bazaarprinting.com';

const SEED_PAGES = [
    '/bazaarprinting',
    '/bazaarprinting/category/labels-stickers',
    '/bazaarprinting/category/packaging-boxes',
    '/bazaarprinting/category/bags-flexible-packaging',
    '/bazaarprinting/category/banners-signs',
    '/bazaarprinting/category/marketing-materials',
    '/bazaarprinting/category/trading-cards',
    '/bazaarprinting/category/wallpapers',
    '/bazaarprinting/category/apparel',
    '/authentication',
    '/bazaarprinting/cart',
];

test.describe('Word Search', () => {
    test(`find "${SEARCH_TERM}" across all pages`, async ({page}) => {
        const visited = new Set<string>();
        const toVisit = [...SEED_PAGES.map(p => BASE_URL + p)];
        const matches: { url: string; count: number }[] = [];

        while (toVisit.length > 0) {
            const url = toVisit.shift()!;
            if (visited.has(url)) continue;
            visited.add(url);

            try {
                await page.goto(url, {waitUntil: 'domcontentloaded', timeout: 30000});

                // Get all visible text on the page
                const bodyText = await page.evaluate(() => document.body.innerText);
                const regex = new RegExp(SEARCH_TERM, 'gi');
                const found = bodyText.match(regex);

                if (found && found.length > 0) {
                    matches.push({url, count: found.length});
                }

                // Collect internal links to crawl further
                const links = await page.evaluate((base) => {
                    return Array.from(document.querySelectorAll('a[href]'))
                        .map(a => (a as HTMLAnchorElement).href)
                        .filter(href =>
                            href.startsWith(base) &&
                            !href.includes('#') &&
                            !href.includes('?') &&
                            !href.match(/\.(pdf|jpg|jpeg|png|gif|svg|zip|webp)$/i)
                        );
                }, BASE_URL);

                for (const link of links) {
                    if (!visited.has(link)) {
                        toVisit.push(link);
                    }
                }

            } catch (e) {
                console.warn(`Could not load: ${url}`);
            }
        }

        // ─── Report ───────────────────────────────────────────────
        const totalOccurrences = matches.reduce((sum, m) => sum + m.count, 0);

        console.log('\n═══════════════════════════════════════');
        console.log(`Search term: "${SEARCH_TERM}"`);
        console.log(`Pages scanned: ${visited.size}`);
        console.log('\nAll scanned URLs:');
        Array.from(visited).forEach(url => console.log(`  ${url}`));
        console.log(`Total occurrences: ${totalOccurrences}`);
        console.log('═══════════════════════════════════════');

        if (totalOccurrences > 0) {
            console.log('\nFound on the following pages:');
            for (const match of matches) {
                console.log(`  [${match.count}x] ${match.url}`);
            }
        } else {
            console.log(`\n"${SEARCH_TERM}" was not found on any page.`);
        }
        console.log('═══════════════════════════════════════\n');

        // Embed result in test title for dashboard visibility
        test.info().annotations.push({
            type: 'Word Search Result',
            description: totalOccurrences === 0
                ? `"${SEARCH_TERM}" not found on any page (${visited.size} pages scanned)`
                : `"${SEARCH_TERM}" found ${totalOccurrences}x across ${matches.length} page(s): ${matches.map(m => `${m.url} (${m.count}x)`).join(' | ')}`
        });

        expect(true).toBe(true);
    });
});
