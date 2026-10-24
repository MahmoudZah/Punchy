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
  coffee: 'Coffee',
  matcha: 'Matcha',
  'frappe-creations': 'Frappes',
  mojitos: 'Mojitos',
  smothies: 'Smoothies',
  'add-ons': 'Add Ons',
  others: 'Others',
  bakery: 'Bakery',
  pastries: 'Pastries',
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
    url: 'https://www.instagram.com/punchy5.eg/',
    label: 'Instagram',
  },
  {
    platform: 'tiktok',
    url: 'https://www.tiktok.com/@punchy5.eg',
    label: 'TikTok',
  },
]

export function mapSiteSettings(settings) {
  if (!settings) {
    return {
      heroEyebrow: 'Open Everyday · 9AM to 1AM',
      heroTitleLine1: 'PUNCHY',
      heroTitleLine2: 'SPECIALTY COFFEE',
      heroTagline: 'Energetic, Graphic, Playful Specialty Coffee',
      heroCtaLabel: 'EXPLORE MENU',
      currencySuffix: 'LE',
      loadingMessage: 'Brewing Punchy 5…',
      footerMotto: 'PUNCHY 5 SPECIALTY COFFEE.',
      footerText: 'Open Everyday · 9AM to 1AM',
      seoTitle: 'PUNCHY 5 SPECIALTY COFFEE — Open Everyday 9AM to 1AM',
      seoDescription:
        'Official menu of PUNCHY 5 SPECIALTY COFFEE. Open Everyday, 9AM to 1AM.',
      socialLinks: DEFAULT_SOCIAL_LINKS,
      heroBackgroundUrl: null,
      heroDrinkUrl: null,
      logoUrl: null,
    }
  }

  return {
    heroEyebrow: settings.heroEyebrow ?? 'Open Everyday · 9AM to 1AM',
    heroTitleLine1: settings.heroTitleLine1 ?? 'PUNCHY',
    heroTitleLine2: settings.heroTitleLine2 ?? 'SPECIALTY COFFEE',
    heroTagline: settings.heroTagline ?? 'Energetic, Graphic, Playful Specialty Coffee',
    heroCtaLabel: settings.heroCtaLabel ?? 'EXPLORE MENU',
    heroBackgroundUrl: settings.heroBackgroundUrl ?? null,
    heroDrinkUrl: settings.heroDrinkUrl ?? null,
    logoUrl: settings.logoUrl ?? null,
    socialLinks:
      settings.socialLinks?.length > 0 ? settings.socialLinks : DEFAULT_SOCIAL_LINKS,
    currencySuffix: settings.currencySuffix ?? 'LE',
    loadingMessage: settings.loadingMessage ?? 'Brewing Punchy 5…',
    footerMotto: settings.footerMotto ?? 'PUNCHY 5 SPECIALTY COFFEE.',
    footerText: settings.footerText ?? 'Open Everyday · 9AM to 1AM',
    seoTitle: settings.seoTitle ?? 'PUNCHY 5 SPECIALTY COFFEE — Open Everyday 9AM to 1AM',
    seoDescription:
      settings.seoDescription ??
      'Official menu of PUNCHY 5 SPECIALTY COFFEE. Open Everyday, 9AM to 1AM.',
  }
}
