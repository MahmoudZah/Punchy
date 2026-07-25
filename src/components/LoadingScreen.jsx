const LOGO_FALLBACK = '/logo.png'

export default function LoadingScreen({ logoUrl, message = 'Loading menu…' }) {
  return (
    <div className="loading-screen" role="status" aria-live="polite" aria-label="Loading menu">
      <img
        className="loading-screen__logo"
        src={logoUrl ?? LOGO_FALLBACK}
        alt=""
        width={80}
        height={80}
      />
      <p className="loading-screen__text">{message}</p>
    </div>
  )
}
