export const MENU_QUERY = `*[_type == "menuCategory" && isVisible != false] | order(orderRank asc) {
  "id": slug.current,
  title,
  navLabel,
  tagline,
  description,
  orderRank,
  cardVariant,
  items[] {
    name,
    price,
    description,
    imageStyle,
    tags,
    "image": image.asset->url
  }
}`

export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0] {
  heroEyebrow,
  heroTitleLine1,
  heroTitleLine2,
  heroTagline,
  heroCtaLabel,
  footerMotto,
  footerText,
  currencySuffix,
  loadingMessage,
  seoTitle,
  seoDescription,
  "heroBackgroundUrl": heroBackground.asset->url,
  "heroDrinkUrl": heroDrinkImage.asset->url,
  "logoUrl": logo.asset->url,
  socialLinks[] {
    platform,
    url,
    label
  }
}`
