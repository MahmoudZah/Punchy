import Hero from './components/Hero'
import CategoryNav from './components/CategoryNav'
import MenuSection from './components/MenuSection'
import LoadingScreen from './components/LoadingScreen'
import { useSanityContent } from './hooks/useSanityContent'

export default function App() {
  const { menuSections, siteSettings, isLoading } = useSanityContent()

  if (isLoading) return <LoadingScreen />

  return (
    <div className="app">
      <Hero siteSettings={siteSettings} />
      <CategoryNav menuSections={menuSections} />
      <main className="main" id="menu">
        {menuSections.map((section) => (
          <MenuSection key={section.id} {...section} />
        ))}
      </main>
      <footer className="footer">
        <p className="footer__motto">{siteSettings.footerMotto}</p>
        <p className="footer__text">{siteSettings.footerText}</p>
      </footer>
    </div>
  )
}