import BrandLogo from './BrandLogo'

export default function LoadingScreen({ message = 'Brewing Punchy 5…' }) {
  return (
    <div className="loading-screen" role="status" aria-live="polite" aria-label="Loading menu">
      <div className="loading-screen__logo-wrap">
        <BrandLogo size="large" variant="warm" />
      </div>
      <p className="loading-screen__text">{message}</p>
    </div>
  )
}
