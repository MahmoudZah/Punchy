import { useEffect } from 'react'
import Hero from './components/Hero'
import CategoryNav from './components/CategoryNav'
import MenuSection from './components/MenuSection'
import LoadingScreen from './components/LoadingScreen'
import PickTray from './components/PickTray'
import { PickProvider } from './context/PickContext'
import { useSanityContent } from './hooks/useSanityContent'

export default function App() {
  const { menuSections, siteSettings, isLoading } = useSanityContent()

  useEffect(() => {
    if (!siteSettings) return

    document.title = siteSettings.seoTitle

    let meta = document.querySelector('meta[name="description"]')
    if (siteSettings.seoDescription) {
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', 'description')
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', siteSettings.seoDescription)
    }
  }, [siteSettings])

  if (isLoading) {
    return (
      <LoadingScreen
        logoUrl={siteSettings?.logoUrl}
        message={siteSettings?.loadingMessage}
      />
    )
  }

  return (
    <PickProvider currencySuffix={siteSettings.currencySuffix}>
      <div className="app">
        <Hero siteSettings={siteSettings} />
        <CategoryNav menuSections={menuSections} />
        <main className="main" id="menu">
          {menuSections.map((section) => (
            <MenuSection
              key={section.id}
              {...section}
              currencySuffix={siteSettings.currencySuffix}
            />
          ))}
        </main>
        <footer className="footer">
          <p className="footer__motto">{siteSettings.footerMotto}</p>
          <p className="footer__text">{siteSettings.footerText}</p>
        </footer>
        <PickTray />
      </div>
    </PickProvider>
  )
}
