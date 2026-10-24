import { useEffect } from "react";
import Hero from "./components/Hero";
import CategoryNav from "./components/CategoryNav";
import MenuSection from "./components/MenuSection";
import LoadingScreen from "./components/LoadingScreen";
import PickTray from "./components/PickTray";
import BrandLogo from "./components/BrandLogo";
import OvalBadge from "./components/OvalBadge";
import { PickProvider } from "./context/PickContext";
import { useSanityContent } from "./hooks/useSanityContent";

export default function App() {
  const { menuSections, siteSettings, isLoading } = useSanityContent();

  useEffect(() => {
    if (!siteSettings) return;

    document.title = siteSettings.seoTitle || "PUNCHY 5 SPECIALTY COFFEE";

    let meta = document.querySelector('meta[name="description"]');
    if (siteSettings.seoDescription) {
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", siteSettings.seoDescription);
    }
  }, [siteSettings]);

  if (isLoading) {
    return (
      <LoadingScreen
        message={siteSettings?.loadingMessage || "Brewing Punchy 5…"}
      />
    );
  }

  const currencySuffix = siteSettings?.currencySuffix || "LE";

  return (
    <PickProvider currencySuffix={currencySuffix}>
      <div className="app">
        <Hero siteSettings={siteSettings} />
        <CategoryNav menuSections={menuSections} />
        <main className="main" id="menu">
          {menuSections.map((section) => (
            <MenuSection
              key={section.id}
              {...section}
              currencySuffix={currencySuffix}
            />
          ))}
        </main>
        <footer className="footer">
          <div className="footer__inner">
            <BrandLogo size="normal" variant="warm" />
            <div className="footer__badge-row">
              <OvalBadge variant="warm">PUNCHY 5 SPECIALTY COFFEE</OvalBadge>
            </div>
            <p className="footer__motto">
              {siteSettings?.footerMotto || "PUNCHY 5 SPECIALTY COFFEE."}
            </p>
            <p className="footer__text">
              {siteSettings?.footerText || "Open Everyday · 9AM to 1AM"}
            </p>
          </div>
        </footer>
        <PickTray />
      </div>
    </PickProvider>
  );
}
