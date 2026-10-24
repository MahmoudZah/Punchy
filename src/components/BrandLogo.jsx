export default function BrandLogo({
  variant = 'warm',
  size = 'normal',
  className = '',
  textColor,
  skyColor = 'var(--color-sky, #6EC1E4)',
  weight = 'bold',
}) {
  const isCool = variant === 'cool'
  const defaultTextColor = isCool ? 'var(--color-cobalt, #1D4ED8)' : 'var(--color-espresso, #381D19)'
  const finalTextColor = textColor || defaultTextColor

  const isBold = weight === 'bold'

  return (
    <div
      className={`brand-logo brand-logo--${variant} brand-logo--${size} ${className}`.trim()}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.45rem',
        userSelect: 'none',
      }}
    >
      <div
        className="brand-logo__text-col"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          lineHeight: 1.05,
          color: finalTextColor,
        }}
      >
        <span
          className="brand-logo__wordmark"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: isBold ? 800 : 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            fontSize: size === 'large' ? '2.5rem' : size === 'small' ? '1.15rem' : '1.75rem',
          }}
        >
          PUNCHY
        </span>
        <span
          className="brand-logo__submark"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: isBold ? 700 : 500,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            fontSize: size === 'large' ? '0.75rem' : size === 'small' ? '0.42rem' : '0.55rem',
            whiteSpace: 'nowrap',
            marginTop: '0.15rem',
          }}
        >
          SPECIALTY COFFEE.
        </span>
      </div>

      <span
        className="brand-logo__digit"
        style={{
          fontFamily: "'Montserrat', 'Archivo Black', sans-serif",
          fontWeight: 800,
          lineHeight: 0.9,
          fontSize: size === 'large' ? '3.8rem' : size === 'small' ? '1.75rem' : '2.65rem',
          color: skyColor,
          display: 'inline-block',
          marginLeft: '0.1rem',
        }}
        aria-hidden="true"
      >
        5
      </span>
    </div>
  )
}
