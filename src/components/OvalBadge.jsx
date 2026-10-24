export default function OvalBadge({
  children,
  variant = 'cool',
  className = '',
  as: Component = 'div',
  onClick,
  style = {},
  ...props
}) {
  const isCool = variant === 'cool'
  const borderColor = isCool ? 'var(--color-cobalt, #1D4ED8)' : 'var(--color-espresso, #381D19)'
  const textColor = isCool ? 'var(--color-cobalt, #1D4ED8)' : 'var(--color-espresso, #381D19)'

  return (
    <Component
      className={`oval-badge oval-badge--${variant} ${className}`.trim()}
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0.65rem 1.75rem',
        borderRadius: '50%',
        border: `2px solid ${borderColor}`,
        color: textColor,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        fontSize: '0.82rem',
        lineHeight: 1.2,
        backgroundColor: 'transparent',
        whiteSpace: 'nowrap',
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  )
}
