export function SparkleIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-4 h-4">
      <defs>
        <linearGradient id="coadGradient-sparkle-primary" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--teal))" />
        </linearGradient>
      </defs>
      <path
        d="M20 4 L22 16 L34 18 L22 20 L20 32 L18 20 L6 18 L18 16 Z"
        fill="url(#coadGradient-sparkle-primary)"
        opacity="0.3"
        stroke="url(#coadGradient-sparkle-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="18" r="4" fill="url(#coadGradient-sparkle-primary)" />
      <circle cx="20" cy="4" r="2" fill="url(#coadGradient-sparkle-primary)" />
      <circle cx="20" cy="32" r="2" fill="url(#coadGradient-sparkle-primary)" />
      <circle cx="6" cy="18" r="2" fill="url(#coadGradient-sparkle-primary)" />
      <circle cx="34" cy="18" r="2" fill="url(#coadGradient-sparkle-primary)" />
      <circle cx="32" cy="8" r="1.5" fill="url(#coadGradient-sparkle-primary)" opacity="0.7" />
      <circle cx="8" cy="28" r="1.5" fill="url(#coadGradient-sparkle-primary)" opacity="0.7" />
    </svg>
  );
}
