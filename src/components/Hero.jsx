import { FaInstagram, FaTiktok } from 'react-icons/fa'

const HERO_BG_FALLBACK = encodeURI('/hero bg.jpg')

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/retrobrew.eg/',
    Icon: FaInstagram,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@retrobrew.eg',
    Icon: FaTiktok,
  },
]

export default function Hero({ siteSettings }) {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const heroBackground = siteSettings?.heroBackgroundUrl ?? HERO_BG_FALLBACK
  const heroDrink = siteSettings?.heroDrinkUrl
  const heroTitleLine1 = siteSettings?.heroTitleLine1 ?? 'MENU.'
  const heroEyebrow = siteSettings?.heroEyebrow ?? 'Coffee · Bowls · Bites'
  const heroTagline = siteSettings?.heroTagline ?? 'Less rush. More flavour.'
  const heroCtaLabel = siteSettings?.heroCtaLabel ?? 'Explore Menu'

  return (
    <section className="hero hero--image" aria-labelledby="hero-heading">
      <img className="hero__bg" src={heroBackground} alt="" aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__content">
          <img className="hero__logo" src="/logo.png" alt="" width={72} height={72} />
          <p className="hero__eyebrow">{heroEyebrow}</p>
          <h1 className="hero__title" id="hero-heading">
            <span className="hero__title-line">{heroTitleLine1}</span>
          </h1>
          <p className="hero__tagline">{heroTagline}</p>
          <button type="button" className="hero__cta" onClick={scrollToMenu}>
            {heroCtaLabel}
          </button>
          <div className="hero__social">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                className="hero__social-link"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow Retro Brew on ${label}`}
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
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
