import { useEffect } from 'react'
import { usePick } from '../context/PickContext'

export default function PickTray() {
  const {
    items,
    isOpen,
    hasItems,
    totalCount,
    totalPrice,
    currencySuffix,
    updateQuantity,
    removeItem,
    clearAll,
    openSheet,
    closeSheet,
  } = usePick()

  useEffect(() => {
    document.body.classList.toggle('has-pick-tray', hasItems)
    return () => document.body.classList.remove('has-pick-tray')
  }, [hasItems])

  useEffect(() => {
    document.body.classList.toggle('pick-tray-open', isOpen)
    return () => document.body.classList.remove('pick-tray-open')
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeSheet()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen, closeSheet])

  if (!hasItems) return null

  return (
    <div className={`pick-tray${isOpen ? ' pick-tray--open' : ''}`}>
      {isOpen ? (
        <button
          type="button"
          className="pick-tray__backdrop"
          onClick={closeSheet}
          aria-label="Close picked order"
        />
      ) : null}

      <div
        className="pick-tray__panel"
        role={isOpen ? 'dialog' : undefined}
        aria-modal={isOpen ? 'true' : undefined}
        aria-label={isOpen ? 'Your picked order' : undefined}
      >
        {!isOpen ? (
          <button type="button" className="pick-tray__peek" onClick={openSheet}>
            <span className="pick-tray__peek-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="pick-tray__peek-copy">
              <strong>Your Pick</strong>
              <span>
                {totalCount} {totalCount === 1 ? 'item' : 'items'} · {totalPrice} {currencySuffix}
              </span>
            </span>
            <span className="pick-tray__peek-action">View</span>
          </button>
        ) : (
          <>
            <div className="pick-tray__handle" aria-hidden="true" />
            <header className="pick-tray__header">
              <div>
                <p className="pick-tray__eyebrow">Group order</p>
                <h2 className="pick-tray__title">Your Pick</h2>
              </div>
              <button type="button" className="pick-tray__close" onClick={closeSheet} aria-label="Close">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </header>

            <p className="pick-tray__hint">Gather everyone&apos;s choices here, then show this to your cashier.</p>

            <ul className="pick-tray__list">
              {items.map((entry) => (
                <li key={entry.id} className="pick-tray__item">
                  <div className="pick-tray__item-main">
                    <span className="pick-tray__item-name">{entry.name}</span>
                    {entry.sectionTitle ? (
                      <span className="pick-tray__item-section">{entry.sectionTitle}</span>
                    ) : null}
                  </div>
                  <div className="pick-tray__item-actions">
                    <div className="pick-tray__qty">
                      <button
                        type="button"
                        className="pick-tray__qty-btn"
                        onClick={() => updateQuantity(entry.id, -1)}
                        aria-label={`Decrease ${entry.name}`}
                      >
                        −
                      </button>
                      <span className="pick-tray__qty-value">{entry.quantity}</span>
                      <button
                        type="button"
                        className="pick-tray__qty-btn"
                        onClick={() => updateQuantity(entry.id, 1)}
                        aria-label={`Increase ${entry.name}`}
                      >
                        +
                      </button>
                    </div>
                    <span className="pick-tray__item-price">
                      {Number(entry.price) * entry.quantity} {currencySuffix}
                    </span>
                    <button
                      type="button"
                      className="pick-tray__remove"
                      onClick={() => removeItem(entry.id)}
                      aria-label={`Remove ${entry.name}`}
                    >
                      ×
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <footer className="pick-tray__footer">
              <div className="pick-tray__total">
                <span>Total</span>
                <strong>
                  {totalPrice} {currencySuffix}
                </strong>
              </div>
              <div className="pick-tray__footer-actions">
                <button type="button" className="pick-tray__clear" onClick={clearAll}>
                  Clear all
                </button>
              </div>
            </footer>
          </>
        )}
      </div>
    </div>
  )
}
