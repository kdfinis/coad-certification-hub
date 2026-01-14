export function CertificateCard() {
  return (
    <div className="relative animate-fade-in-up stagger-5">
      <div className="relative mx-auto max-w-md">
        <div className="relative bg-card rounded-2xl shadow-xl border border-border p-8 animate-float">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-teal/20 blur-xl -z-10" />
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-cta flex items-center justify-center">
                  <div className="flex items-center gap-2 group w-10 h-10">
                    <div className="relative w-10 h-10">
                      <svg viewBox="0 0 40 40" className="w-full h-full">
                        <defs>
                          <linearGradient id="coadLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="hsl(var(--primary))" />
                            <stop offset="100%" stopColor="hsl(var(--teal))" />
                          </linearGradient>
                        </defs>
                        <circle cx="20" cy="20" r="18" fill="none" stroke="url(#coadLogoGradient)" strokeWidth="2" className="group-hover:animate-pulse" />
                        <circle cx="20" cy="10" r="3" fill="url(#coadLogoGradient)" />
                        <circle cx="10" cy="25" r="3" fill="url(#coadLogoGradient)" />
                        <circle cx="30" cy="25" r="3" fill="url(#coadLogoGradient)" />
                        <circle cx="20" cy="20" r="4" fill="url(#coadLogoGradient)" />
                        <line x1="20" y1="10" x2="20" y2="20" stroke="url(#coadLogoGradient)" strokeWidth="1.5" />
                        <line x1="10" y1="25" x2="20" y2="20" stroke="url(#coadLogoGradient)" strokeWidth="1.5" />
                        <line x1="30" y1="25" x2="20" y2="20" stroke="url(#coadLogoGradient)" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground">COAD</p>
                  <p className="text-xs text-muted-foreground">Certificate of Competency</p>
                </div>
              </div>
              <div className="px-3 py-1 bg-success/10 rounded-full">
                <span className="text-xs font-medium text-success transition-opacity duration-500">EU AI Act</span>
              </div>
            </div>
            <div className="h-px bg-border" />
            <div className="space-y-4">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Certification</p>
                <p className="font-semibold text-foreground">ACD Charterholder</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Study Hours</p>
                  <p className="font-semibold text-foreground">360 Hours</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Duration</p>
                  <p className="font-semibold text-foreground">6 Months</p>
                </div>
              </div>
            </div>
            <div className="h-px bg-border" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg viewBox="0 0 40 40" className="w-4 h-4 text-primary">
                    <defs>
                      <linearGradient id="coadGradient-shield-cert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsl(var(--teal))" />
                      </linearGradient>
                    </defs>
                    <path d="M20 4 L34 10 L34 20 C34 28 27 34 20 38 C13 34 6 28 6 20 L6 10 Z" fill="none" stroke="url(#coadGradient-shield-cert)" strokeWidth="2" />
                    <circle cx="20" cy="16" r="3" fill="url(#coadGradient-shield-cert)" />
                    <circle cx="14" cy="24" r="2.5" fill="url(#coadGradient-shield-cert)" opacity="0.8" />
                    <circle cx="26" cy="24" r="2.5" fill="url(#coadGradient-shield-cert)" opacity="0.8" />
                    <line x1="20" y1="16" x2="14" y2="24" stroke="url(#coadGradient-shield-cert)" strokeWidth="1.5" />
                    <line x1="20" y1="16" x2="26" y2="24" stroke="url(#coadGradient-shield-cert)" strokeWidth="1.5" />
                  </svg>
                </div>
                <span className="text-xs text-muted-foreground">Blockchain based individual skill lifelong verification system</span>
              </div>
              <div className="text-xs font-mono text-muted-foreground">0x7f3a...9c2b</div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-6 -left-6 w-full h-full rounded-2xl bg-primary/5 border border-primary/10 -z-10" />
        <div className="absolute -bottom-12 -left-12 w-full h-full rounded-2xl bg-teal/5 border border-teal/10 -z-20" />
      </div>
    </div>
  );
}
