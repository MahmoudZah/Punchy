export const MENU_QUERY = `*[_type == "menuCategory"] | order(sortOrder asc) {
  "id": slug.current,
  title,
  tagline,
  cardVariant,
  items[] {
    name,
    price,
    description,
    tags,
    "image": image.asset->url
  }
}`

export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0] {
  heroTitleLine1,
  heroTitleLine2,
  heroTagline,
  heroCtaLabel,
  footerMotto,
  footerText,
  "heroBackgroundUrl": heroBackground.asset->url,
  "heroDrinkUrl": heroDrinkImage.asset->url
}`
