export function GirlInCupsIllustration({ className = '', color = 'currentColor', width = 160 }) {
  return (
    <svg
      className={`punchy-illustration punchy-illustration--cups ${className}`.trim()}
      viewBox="0 0 200 320"
      width={width}
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Girl in top cup */}
      <circle cx="100" cy="50" r="14" />
      <path d="M92 48 Q98 40 108 45" /> {/* Hair wave */}
      <path d="M88 64 Q100 80 115 65" /> {/* Torso in cup */}
      <path d="M112 60 Q130 65 142 66" /> {/* Arm resting on cup rim */}
      <circle cx="142" cy="66" r="3" fill={color} />

      {/* Cup 1 (Top cup) */}
      <path d="M60 70 Q100 78 140 70 L135 110 Q100 120 65 110 Z" />
      <path d="M140 80 Q160 88 140 100" /> {/* Handle right */}
      {/* Cup 1 squiggles */}
      <path d="M72 88 Q82 96 92 88 T112 88 T130 88" />

      {/* Cup 2 */}
      <path d="M62 115 Q100 125 138 115 L132 165 Q100 178 68 165 Z" />
      <path d="M136 128 Q162 138 136 155" /> {/* Handle right */}
      {/* Cup 2 squiggles */}
      <path d="M74 138 Q86 146 98 138 T122 138" />

      {/* Cup 3 */}
      <path d="M64 170 Q100 180 136 170 L130 225 Q100 240 70 225 Z" />
      <path d="M64 182 Q42 195 66 212" /> {/* Handle left */}
      {/* Cup 3 squiggles */}
      <path d="M76 195 Q88 205 100 195 T124 195" />

      {/* Cup 4 (Bottom cup) */}
      <path d="M66 230 Q100 242 134 230 L124 290 Q100 305 76 290 Z" />
      <path d="M130 246 Q156 260 126 278" /> {/* Handle right */}
      {/* Cup 4 squiggles */}
      <path d="M78 260 Q92 270 106 260 T122 260" />
    </svg>
  )
}

export function FriendsCoffeeIllustration({ className = '', color = 'currentColor', width = 180 }) {
  return (
    <svg
      className={`punchy-illustration punchy-illustration--friends ${className}`.trim()}
      viewBox="0 0 240 260"
      width={width}
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Giant takeaway cup held up diagonally */}
      <g transform="rotate(-18 150 110)">
        <path d="M110 30 L210 30 L195 180 L125 180 Z" />
        {/* Lid */}
        <path d="M105 24 L215 24 L210 30 L110 30 Z" />
        <path d="M145 18 L175 18 L175 24 L145 24 Z" />
        {/* Cup sleeve lines */}
        <line x1="118" y1="80" x2="202" y2="80" />
        <line x1="122" y1="130" x2="198" y2="130" />
        <line x1="135" y1="80" x2="135" y2="130" />
        <line x1="150" y1="80" x2="150" y2="130" />
        <line x1="165" y1="80" x2="165" y2="130" />
        <line x1="180" y1="80" x2="180" y2="130" />
      </g>

      {/* Person 1 (left) */}
      <circle cx="50" cy="115" r="9" />
      <path d="M50 124 L48 165" /> {/* Body */}
      <path d="M48 135 L70 110" /> {/* Arm up to cup */}
      <path d="M48 165 L36 240 M48 165 L55 240" /> {/* Legs */}

      {/* Person 2 (middle) */}
      <circle cx="95" cy="120" r="9" />
      <path d="M95 129 L95 170" /> {/* Body */}
      <path d="M95 138 L115 112" /> {/* Arm up to cup */}
      <path d="M95 170 L86 240 M95 170 L104 240" /> {/* Legs */}

      {/* Person 3 (right with boots) */}
      <circle cx="140" cy="112" r="9" />
      <path d="M135 121 L125 168 L155 168 Z" /> {/* Dress/Tunic */}
      <path d="M140 125 L160 98" /> {/* Arm up to cup */}
      <path d="M132 168 L128 240 M146 168 L150 240" /> {/* Legs */}
      <path d="M124 225 L134 225 L132 245 L120 245 Z" fill={color} /> {/* Left boot */}
      <path d="M144 225 L154 225 L154 245 L142 245 Z" fill={color} /> {/* Right boot */}
    </svg>
  )
}

export function CroissantCupIllustration({ className = '', color = 'currentColor', width = 180 }) {
  return (
    <svg
      className={`punchy-illustration punchy-illustration--bakery ${className}`.trim()}
      viewBox="0 0 260 220"
      width={width}
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Cup (Right) */}
      <g transform="translate(130, 20)">
        {/* Lid */}
        <ellipse cx="60" cy="20" rx="36" ry="10" />
        <rect x="52" y="16" width="16" height="6" rx="2" fill={color} />
        {/* Cup body */}
        <path d="M26 28 L35 140 Q60 152 85 140 L94 28" />
        {/* Striped Sleeve */}
        <path d="M29 60 L91 60 L89 105 L31 105 Z" />
        <line x1="38" y1="60" x2="38" y2="105" strokeWidth="4" />
        <line x1="48" y1="60" x2="48" y2="105" strokeWidth="4" />
        <line x1="58" y1="60" x2="58" y2="105" strokeWidth="4" />
        <line x1="68" y1="60" x2="68" y2="105" strokeWidth="4" />
        <line x1="78" y1="60" x2="78" y2="105" strokeWidth="4" />
      </g>

      {/* Croissant (Left foreground) */}
      <g transform="translate(15, 75)">
        {/* Main crescent curved shape */}
        <path d="M20 70 Q60 20 120 30 Q145 60 130 90 Q80 110 35 100 Q15 95 20 70 Z" />
        {/* Flaky croissant ridges */}
        <path d="M45 42 Q70 65 60 98" />
        <path d="M78 30 Q102 55 92 102" />
        <path d="M105 32 Q125 55 118 85" />
        <path d="M20 70 Q28 85 36 98" fill={color} />
      </g>
    </svg>
  )
}
