import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'

const HERO_BG_FALLBACK = encodeURI('/hero bg.jpg')
const LOGO_FALLBACK = '/logo.png'

const SOCIAL_ICONS = {
  instagram: FaInstagram,
  tiktok: FaTiktok,
  facebook: FaFacebook,
}

export default function Hero({ siteSettings }) {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const heroBackground = siteSettings?.heroBackgroundUrl ?? HERO_BG_FALLBACK
  const heroDrink = siteSettings?.heroDrinkUrl
  const logo = siteSettings?.logoUrl ?? LOGO_FALLBACK
  const heroEyebrow = siteSettings?.heroEyebrow ?? 'Coffee · Bowls · Bites'
  const heroTitleLine1 = siteSettings?.heroTitleLine1 ?? 'MENU'
  const heroTagline = siteSettings?.heroTagline ?? 'Less rush. More flavour.'
  const heroCtaLabel = siteSettings?.heroCtaLabel ?? 'Explore Menu'
  const socialLinks = siteSettings?.socialLinks ?? []

  return (
    <section className="hero hero--image" aria-labelledby="hero-heading">
      <img className="hero__bg" src={heroBackground} alt="" aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__content">
          <img className="hero__logo" src={logo} alt="" width={72} height={72} />
          <p className="hero__eyebrow">{heroEyebrow}</p>
          <h1 className="hero__title" id="hero-heading">
            <span className="hero__title-line">{heroTitleLine1}</span>
          </h1>
          <p className="hero__tagline">{heroTagline}</p>
          <button type="button" className="hero__cta" onClick={scrollToMenu}>
            {heroCtaLabel}
          </button>
          {socialLinks.length > 0 ? (
            <div className="hero__social">
              {socialLinks.map((link) => {
                const Icon = SOCIAL_ICONS[link.platform]
                const label = link.label ?? link.platform

                if (!Icon || !link.url) return null

                return (
                  <a
                    key={`${link.platform}-${link.url}`}
                    className="hero__social-link"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow Retro Brew on ${label}`}
                  >
                    <Icon aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          ) : null}
        </div>

        {heroDrink ? (
          <img
            className="hero__drink"
            src={heroDrink}
            alt="Retro Brew drink"
            loading="eager"
            decoding="async"
          />
        ) : null}
      </div>
    </section>
  )
}
