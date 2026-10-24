export default function Starburst({
  size = 180,
  fill = 'var(--color-cyan, #00B4D8)',
  points = 16,
  className = '',
  style = {},
  tilt = -8,
  rotateBg = false,
  children,
}) {
  // Generate multi-point jagged starburst polygon
  const center = size / 2
  const outerR = size * 0.48
  const innerR = size * 0.36
  const totalVertices = points * 2
  const coords = []

  for (let i = 0; i < totalVertices; i++) {
    const angle = (i * Math.PI) / points - Math.PI / 2
    const radius = i % 2 === 0 ? outerR : innerR
    const x = center + radius * Math.cos(angle)
    const y = center + radius * Math.sin(angle)
    coords.push(`${x.toFixed(2)},${y.toFixed(2)}`)
  }

  const polygonPoints = coords.join(' ')

  return (
    <div
      className={`starburst-container ${className}`.trim()}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        transform: `rotate(${tilt}deg)`,
        userSelect: 'none',
        ...style,
      }}
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        className={rotateBg ? 'starburst-svg--spinning' : ''}
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      >
        <polygon points={polygonPoints} fill={fill} />
      </svg>
      {children ? (
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: `rotate(${-tilt}deg)`, // keep text upright and readable!
          }}
        >
          {children}
        </div>
      ) : null}
    </div>
  )
}
