export default function LoadingScreen() {
  return (
    <div className="loading-screen" role="status" aria-live="polite" aria-label="Loading menu">
      <img className="loading-screen__logo" src="/logo.png" alt="" width={80} height={80} />
      <p className="loading-screen__text">Loading menu…</p>
    </div>
  )
}
