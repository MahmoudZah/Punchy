import { FaInstagram, FaTiktok } from 'react-icons/fa'

const HERO_BG_FALLBACK = encodeURI('/hero bg.jpeg')
const LOGO_FALLBACK = '/logo.png'

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

const SOCIAL_ICONS = {
  instagram: FaInstagram,
  tiktok: FaTiktok,
}

export default function Hero({ siteSettings }) {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const heroBackground = siteSettings?.heroBackgroundUrl ?? HERO_BG_FALLBACK
  const logo = siteSettings?.logoUrl ?? LOGO_FALLBACK
  const heroCtaLabel = siteSettings?.heroCtaLabel ?? 'View Menu'
  const socialLinks =
    siteSettings?.socialLinks?.length > 0 ? siteSettings.socialLinks : DEFAULT_SOCIAL_LINKS

  return (
    <section className="hero hero--poster" aria-labelledby="hero-heading">
      <img className="hero__bg" src={heroBackground} alt="" aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__inner hero__inner--poster">
        <div className="hero__top">
          <h1 className="visually-hidden" id="hero-heading">
            Milk Cake Bakery
          </h1>
          <img className="hero__logo" src={logo} alt="Milk Cake Bakery" width={220} height={120} />
        </div>

        <div className="hero__bottom">
          <button type="button" className="hero__cta" onClick={scrollToMenu}>
            {heroCtaLabel}
          </button>
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
                  aria-label={`Follow Milk Cake Bakery on ${label}`}
                >
                  <Icon aria-hidden="true" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
