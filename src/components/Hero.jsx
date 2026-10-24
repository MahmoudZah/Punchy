import { FaInstagram, FaTiktok } from 'react-icons/fa'
import BrandLogo from './BrandLogo'

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

const SOCIAL_ICONS = {
  instagram: FaInstagram,
  tiktok: FaTiktok,
}

export default function Hero({ siteSettings }) {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const heroCtaLabel = siteSettings?.heroCtaLabel ?? 'EXPLORE MENU ↓'
  const socialLinks =
    siteSettings?.socialLinks?.length > 0 ? siteSettings.socialLinks : DEFAULT_SOCIAL_LINKS

  return (
    <section className="hero" aria-labelledby="hero-heading">
      {/* Attached Wavy Background */}
      <img
        src="/hero-bg.png"
        alt=""
        aria-hidden="true"
        className="hero__bg-img"
      />

      <div className="hero__inner">
        {/* Content column */}
        <div className="hero__content-col">
          {/* 1. Logo on top */}
          <div className="hero__logo-wrap">
            <BrandLogo size="normal" textColor="#FFFFFF" skyColor="#6EC1E4" />
          </div>

          {/* 2. SERIOUS COFFEE. PLAYFUL SPIRIT. */}
          <h1 className="hero__title" id="hero-heading">
            <span className="hero__title-line1">SERIOUS COFFEE.</span>
            <span className="hero__title-line2">PLAYFUL SPIRIT.</span>
          </h1>

          {/* 3. CTA button */}
          <div className="hero__cta-wrap">
            <button type="button" className="hero__cta" onClick={scrollToMenu}>
              {heroCtaLabel}
            </button>
          </div>

          {/* 4. Social media icons */}
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
                  aria-label={`Follow Punchy 5 on ${label}`}
                >
                  <Icon aria-hidden="true" />
                </a>
              )
            })}
          </div>
        </div>

        {/* 5. Image on bottom in mobile / on right in big screens */}
        <div className="hero__image-col">
          <img
            src="/hero-cup.png"
            alt="PUNCHY 5 Specialty Coffee"
            className="hero__cup-img"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
