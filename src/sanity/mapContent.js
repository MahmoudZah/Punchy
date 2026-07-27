function mapCardVariant(variant) {
  if (variant === 'extras' || variant === 'simple') return 'extras'
  if (variant === 'food' || variant === 'showcase') return 'food'
  if (variant === 'drink' || variant === 'product') return 'drink'
  return 'drink'
}

function resolveCardVariant(category) {
  if (category.id === 'offers') return 'offers'
  return mapCardVariant(category.cardVariant)
}

const FALLBACK_NAV_LABELS = {
  'breakfast-extras': 'B. Extras',
  'manosha-extras': 'M. Extras',
  'truffle-trends-cookies': 'Cookies',
  'ice-coffee': 'Iced',
  'speciality-coffee': 'Specialty',
  additions: 'Extras',
}

function resolveItemImageStyle(entry, cardVariant) {
  if (entry.imageStyle === 'circle' || entry.imageStyle === 'rounded' || entry.imageStyle === 'plain') {
    return entry.imageStyle
  }
  if (cardVariant === 'drink') return 'plain'
  if (cardVariant === 'offers') return 'rounded'
  return 'circle'
}

export function mapMenuSections(categories = []) {
  return categories
    .filter((category) => category?.id && category?.title)
    .sort((a, b) => {
      if (a.orderRank && b.orderRank) {
        return a.orderRank.localeCompare(b.orderRank)
      }
      return 0
    })
    .map((category) => {
      const cardVariant = resolveCardVariant(category)

      return {
      id: category.id,
      title: category.title,
      navLabel:
        category.navLabel ??
        FALLBACK_NAV_LABELS[category.id] ??
        category.title,
      tagline: category.tagline ?? '',
      description: category.description ?? '',
      cardVariant,
      items: (category.items ?? [])
        .filter((entry) => entry?.name)
        .map((entry) => ({
          name: entry.name,
          price: String(entry.price ?? ''),
          imageStyle: resolveItemImageStyle(entry, cardVariant),
          ...(entry.description ? { description: entry.description } : {}),
          ...(entry.image ? { image: entry.image } : {}),
          ...(entry.tags?.length ? { tags: entry.tags } : {}),
        })),
      }
    })
    .filter((section) => section.cardVariant !== 'offers' || section.items.length > 0)
}

const DEFAULT_SOCIAL_LINKS = [
  {
    platform: 'instagram',
    url: 'https://www.instagram.com/milkcakebakery.egypt/',
    label: 'Instagram',
  },
  {
    platform: 'tiktok',
    url: 'https://www.tiktok.com/@milkcakebakery.egypt',
    label: 'TikTok',
  },
]

export function mapSiteSettings(settings) {
  if (!settings) return null

  return {
    heroEyebrow: settings.heroEyebrow ?? 'Artisan Bakes · Café',
    heroTitleLine1: settings.heroTitleLine1 ?? 'Milk Cake',
    heroTitleLine2: settings.heroTitleLine2 ?? 'Bakery',
    heroTagline: settings.heroTagline ?? 'Sweet moments, baked fresh every day.',
    heroCtaLabel: settings.heroCtaLabel ?? 'View Menu',
    heroBackgroundUrl: settings.heroBackgroundUrl ?? null,
    heroDrinkUrl: settings.heroDrinkUrl ?? null,
    logoUrl: settings.logoUrl ?? null,
    socialLinks:
      settings.socialLinks?.length > 0 ? settings.socialLinks : DEFAULT_SOCIAL_LINKS,
    currencySuffix: settings.currencySuffix ?? 'EGP',
    loadingMessage: settings.loadingMessage ?? 'Loading menu…',
    footerMotto: settings.footerMotto ?? 'MILK CAKE BAKERY.',
    footerText: settings.footerText ?? 'Artisan Bakes & Café',
    seoTitle: settings.seoTitle ?? 'Milk Cake Bakery — Artisan Bakes & Café',
    seoDescription:
      settings.seoDescription ??
      'Breakfast, signature desserts, milk cakes, coffee, and cold drinks.',
  }
}
