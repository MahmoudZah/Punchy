export default function TaglineWave({ className = '' }) {
  return (
    <span className={className} aria-hidden="true">
      <svg viewBox="0 0 40 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 4c5-3 10-3 15 0s10 3 15 0 10-3 15 0"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  )
}
