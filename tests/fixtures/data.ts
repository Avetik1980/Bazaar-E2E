export const PRODUCTS = {
  rollLabels: {
    slug: 'roll-labels',
    id: 1,
    activePage: 'labels-stickers',
    name: 'Roll Labels',
  },
  stickerSheets: {
    slug: 'sticker-sheets',
    id: 23,
    activePage: 'labels-stickers',
    name: 'Sticker Sheets',
  },
  dieCutStickers: {
    slug: 'die-cut-kiss-cut-stickers',
    id: 24,
    activePage: 'labels-stickers',
    name: 'Die Cut / Kiss Cut Stickers',
  },
  individualStickers: {
    slug: 'individual-stickers',
    id: 25,
    activePage: 'labels-stickers',
    name: 'Individual Stickers',
  },
  variableDataLabels: {
    slug: 'variable-data-labels',
    id: 26,
    activePage: 'labels-stickers',
    name: 'Variable Data Labels',
  },
} as const;

export const CATEGORIES = {
  labelsStickers: 'labels-stickers',
  packagingBoxes: 'packaging-boxes',
  bagsFlexible: 'bags-flexible-packaging',
  bannersSign: 'banners-signs',
  marketingMaterials: 'marketing-materials',
  tradingCards: 'trading-cards',
  wallpapers: 'wallpapers',
  apparel: 'apparel-tees-polos',
  labelJarCombo: 'label-jar-combo',
} as const;

export const NAV_CATEGORIES = [
  'Labels & Stickers',
  'Packaging & Boxes',
  'Bags & Pouches',
  'Banners & Signs',
  'Marketing Materials',
  'Trading Cards',
  'Wallpapers',
  'Apparel',
] as const;

export const TEST_USER = {
  email: process.env.TEST_USER_EMAIL ?? 'test@example.com',
  password: process.env.TEST_USER_PASSWORD ?? 'Test1234!',
};

export const SAMPLE_QUOTE = {
  name: 'Test User',
  email: 'test@example.com',
  phone: '3105550000',
  message: 'Automated test quote request — please disregard.',
};

// Artwork file for upload tests (1×1 px transparent PNG, base64)
export const TINY_PNG_PATH = 'tests/fixtures/sample-artwork.png';
