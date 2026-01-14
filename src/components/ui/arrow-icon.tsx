export function ArrowIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
      <defs>
        <linearGradient id="coadGradient-arrow-primary" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--teal))" />
        </linearGradient>
      </defs>
      <line x1="6" y1="20" x2="30" y2="20" stroke="url(#coadGradient-arrow-primary)" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 14 L32 20 L24 26" fill="none" stroke="url(#coadGradient-arrow-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="6" cy="20" r="3" fill="url(#coadGradient-arrow-primary)" />
      <circle cx="18" cy="20" r="2" fill="url(#coadGradient-arrow-primary)" />
      <circle cx="32" cy="20" r="3" fill="url(#coadGradient-arrow-primary)" />
    </svg>
  );
}
