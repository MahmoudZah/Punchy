export default function RetroWaves({
  color1 = 'var(--hero-wave-1, #FA9D38)',
  color2 = 'var(--hero-wave-2, #FFBD68)',
  className = '',
}) {
  return (
    <svg
      className={`hero-retro-waves ${className}`.trim()}
      viewBox="0 0 800 1000"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Color definitions */}
      </defs>
      {/* Background base */}
      <rect width="100%" height="100%" fill={color2} />

      {/* Ribbon 1 */}
      <path
        d="M-50,0 Q50,250 -40,500 T60,1000 L-100,1000 L-100,0 Z"
        fill={color1}
      />

      {/* Ribbon 2 */}
      <path
        d="M80,0 Q180,260 70,520 T200,1000 L110,1000 Q-10,520 10,260 T-10,0 Z"
        fill={color1}
      />

      {/* Ribbon 3 */}
      <path
        d="M240,0 Q340,250 230,510 T360,1000 L270,1000 Q150,510 160,250 T160,0 Z"
        fill={color1}
      />

      {/* Ribbon 4 (Center-right dynamic wave) */}
      <path
        d="M400,0 Q500,240 390,500 T520,1000 L430,1000 Q310,500 320,240 T320,0 Z"
        fill={color1}
      />

      {/* Ribbon 5 */}
      <path
        d="M560,0 Q660,250 550,510 T680,1000 L590,1000 Q470,510 480,250 T480,0 Z"
        fill={color1}
      />

      {/* Ribbon 6 */}
      <path
        d="M720,0 Q820,260 710,520 T840,1000 L750,1000 Q630,520 640,260 T640,0 Z"
        fill={color1}
      />

      {/* Ribbon 7 (Right edge) */}
      <path
        d="M880,0 Q980,250 870,510 T1000,1000 L910,1000 Q790,510 800,250 T800,0 Z"
        fill={color1}
      />
    </svg>
  )
}
