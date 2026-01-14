export function ShieldIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-5 h-5 text-success">
      <defs>
        <linearGradient id="coadGradient-shield-primary" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--teal))" />
        </linearGradient>
      </defs>
      <path d="M20 4 L34 10 L34 20 C34 28 27 34 20 38 C13 34 6 28 6 20 L6 10 Z" fill="none" stroke="url(#coadGradient-shield-primary)" strokeWidth="2" />
      <circle cx="20" cy="16" r="3" fill="url(#coadGradient-shield-primary)" />
      <circle cx="14" cy="24" r="2.5" fill="url(#coadGradient-shield-primary)" opacity="0.8" />
      <circle cx="26" cy="24" r="2.5" fill="url(#coadGradient-shield-primary)" opacity="0.8" />
      <line x1="20" y1="16" x2="14" y2="24" stroke="url(#coadGradient-shield-primary)" strokeWidth="1.5" />
      <line x1="20" y1="16" x2="26" y2="24" stroke="url(#coadGradient-shield-primary)" strokeWidth="1.5" />
    </svg>
  );
}

export function AwardIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-5 h-5 text-primary">
      <defs>
        <linearGradient id="coadGradient-award-primary" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--teal))" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="14" r="10" fill="none" stroke="url(#coadGradient-award-primary)" strokeWidth="2" />
      <path d="M14 22 L10 36 L20 30 L30 36 L26 22" fill="none" stroke="url(#coadGradient-award-primary)" strokeWidth="2" />
      <circle cx="20" cy="14" r="5" fill="url(#coadGradient-award-primary)" />
    </svg>
  );
}

export function GlobeIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-5 h-5 text-teal">
      <defs>
        <linearGradient id="coadGradient-globe-primary" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--teal))" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="16" fill="none" stroke="url(#coadGradient-globe-primary)" strokeWidth="2" />
      <ellipse cx="20" cy="20" rx="8" ry="16" fill="none" stroke="url(#coadGradient-globe-primary)" strokeWidth="1.5" />
      <line x1="4" y1="20" x2="36" y2="20" stroke="url(#coadGradient-globe-primary)" strokeWidth="1.5" />
      <ellipse cx="20" cy="12" rx="12" ry="4" fill="none" stroke="url(#coadGradient-globe-primary)" strokeWidth="1" opacity="0.5" />
      <ellipse cx="20" cy="28" rx="12" ry="4" fill="none" stroke="url(#coadGradient-globe-primary)" strokeWidth="1" opacity="0.5" />
      <circle cx="20" cy="4" r="2" fill="url(#coadGradient-globe-primary)" />
      <circle cx="20" cy="36" r="2" fill="url(#coadGradient-globe-primary)" />
      <circle cx="4" cy="20" r="2" fill="url(#coadGradient-globe-primary)" />
      <circle cx="36" cy="20" r="2" fill="url(#coadGradient-globe-primary)" />
    </svg>
  );
}
