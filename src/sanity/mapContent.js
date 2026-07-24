function mapCardVariant(variant) {
  if (variant === 'extras' || variant === 'simple') return 'extras'
  if (variant === 'food' || variant === 'showcase') return 'food'
  if (variant === 'drink' || variant === 'product') return 'drink'
  return 'drink'
}

export function mapMenuSections(categories = []) {
  return categories
    .filter((category) => category?.id && category?.title)
    .map((category) => ({
      id: category.id,
      title: category.title,
      tagline: category.tagline ?? '',
      cardVariant: mapCardVariant(category.cardVariant),
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
}

export function mapSiteSettings(settings) {
  if (!settings) return null

  return {
    heroTitleLine1: settings.heroTitleLine1 ?? 'MENU',
    heroTitleLine2: settings.heroTitleLine2 ?? 'BREW.',
    heroEyebrow: settings.heroEyebrow ?? 'Coffee · Bowls · Bites',
    heroTagline: settings.heroTagline ?? 'Less rush. More flavour.',
    heroDescription:
      settings.heroDescription ??
      'Iced classics, fresh salads & sweet treats — brewed the retro way.',
    heroCtaLabel: settings.heroCtaLabel ?? 'Explore Menu',
    heroBackgroundUrl: settings.heroBackgroundUrl ?? null,
    heroDrinkUrl: settings.heroDrinkUrl ?? null,
    footerMotto: settings.footerMotto ?? 'RETRO BREW.',
    footerText: settings.footerText ?? 'Brews & Bites',
  }
}
