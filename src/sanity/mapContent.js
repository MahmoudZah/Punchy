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
  'sweet-treats': 'Treats',
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
    .map((category) => ({
      id: category.id,
      title: category.title,
      navLabel:
        category.navLabel ??
        FALLBACK_NAV_LABELS[category.id] ??
        category.title,
      tagline: category.tagline ?? '',
      cardVariant: resolveCardVariant(category),
      items: (category.items ?? [])
        .filter((entry) => entry?.name)
        .map((entry) => ({
          name: entry.name,
          price: String(entry.price ?? ''),
          ...(entry.description ? { description: entry.description } : {}),
          ...(entry.image ? { image: entry.image } : {}),
          ...(entry.tags?.length ? { tags: entry.tags } : {}),
        })),
    }))
    .filter((section) => section.cardVariant !== 'offers' || section.items.length > 0)
}

const DEFAULT_SOCIAL_LINKS = [
  {
    platform: 'instagram',
    url: 'https://www.instagram.com/retrobrew.eg/',
    label: 'Instagram',
  },
  {
    platform: 'tiktok',
    url: 'https://www.tiktok.com/@retrobrew.eg',
    label: 'TikTok',
  },
]

export function mapSiteSettings(settings) {
  if (!settings) return null

  return {
    heroEyebrow: settings.heroEyebrow ?? 'Coffee · Bowls · Bites',
    heroTitleLine1: settings.heroTitleLine1 ?? 'MENU',
    heroTitleLine2: settings.heroTitleLine2 ?? 'BREW.',
    heroTagline: settings.heroTagline ?? 'Less rush. More flavour.',
    heroCtaLabel: settings.heroCtaLabel ?? 'Explore Menu',
    heroBackgroundUrl: settings.heroBackgroundUrl ?? null,
    heroDrinkUrl: settings.heroDrinkUrl ?? null,
    logoUrl: settings.logoUrl ?? null,
    socialLinks:
      settings.socialLinks?.length > 0 ? settings.socialLinks : DEFAULT_SOCIAL_LINKS,
    currencySuffix: settings.currencySuffix ?? 'LE',
    loadingMessage: settings.loadingMessage ?? 'Loading menu…',
    footerMotto: settings.footerMotto ?? 'RETRO BREW.',
    footerText: settings.footerText ?? 'Brews & Bites',
    seoTitle: settings.seoTitle ?? 'RETRO BREW — Brews & Bites',
    seoDescription: settings.seoDescription ?? '',
  }
}
