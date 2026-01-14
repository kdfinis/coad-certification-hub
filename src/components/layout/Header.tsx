'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [tracksOpen, setTracksOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
      <div className="container-coad">
        <nav className="flex items-center justify-between h-18 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-2 group">
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
              <span className="font-bold text-foreground tracking-tight text-xl">COAD</span>
            </div>
          </Link>
          <div className="hidden lg:flex items-center gap-1">
            <div className="relative group">
              <Link href="/catalog" className="px-4 py-2 text-foreground/80 hover:text-foreground transition-colors font-medium">
                Catalog
              </Link>
            </div>
            <div className="relative group">
              <Link href="/certifications" className="px-4 py-2 text-foreground/80 hover:text-foreground transition-colors font-medium">
                Certifications
              </Link>
            </div>
            <div 
              className="relative group"
              onMouseEnter={() => setTracksOpen(true)}
              onMouseLeave={() => setTracksOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-foreground/80 hover:text-foreground transition-colors font-medium">
                Tracks
                <svg viewBox="0 0 40 40" className="w-4 h-4 transition-transform group-hover:rotate-180">
                  <path d="M10 15 L20 25 L30 15" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="20" cy="25" r="2" fill="hsl(var(--primary))" opacity="0.4" />
                </svg>
              </button>
              <div className={`absolute top-full left-0 w-56 py-2 bg-card rounded-lg shadow-lg border border-border transition-all duration-200 z-50 ${tracksOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <Link href="/tracks/amcd" className="block px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-muted transition-colors">
                  AI Media and Content Development
                </Link>
                <Link href="/tracks/acd" className="block px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-muted transition-colors">
                  AI Code Development
                </Link>
                <Link href="/tracks/aio" className="block px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-muted transition-colors">
                  AI Oversight
                </Link>
                <Link href="/#pricing" className="block px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-muted transition-colors">
                  Compare Tracks
                </Link>
              </div>
            </div>
            <div className="relative group">
              <Link href="/competencies" className="px-4 py-2 text-foreground/80 hover:text-foreground transition-colors font-medium">
                Competencies
              </Link>
            </div>
            <div 
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-foreground/80 hover:text-foreground transition-colors font-medium">
                Corporate Services
                <svg viewBox="0 0 40 40" className="w-4 h-4 transition-transform group-hover:rotate-180">
                  <path d="M10 15 L20 25 L30 15" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="20" cy="25" r="2" fill="hsl(var(--primary))" opacity="0.4" />
                </svg>
              </button>
              <div className={`absolute top-full left-0 w-64 py-2 bg-card rounded-lg shadow-lg border border-border transition-all duration-200 z-50 ${servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <Link href="/corporate-services/executive" className="block px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-muted transition-colors">
                  Executive Coaching
                </Link>
                <Link href="/corporate-services/ai-system" className="block px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-muted transition-colors">
                  AI System Improvements
                </Link>
                <Link href="/corporate-services/ai-workflow" className="block px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-muted transition-colors">
                  AI Workflow Redesign
                </Link>
              </div>
            </div>
            <div className="relative group">
              <Link href="/ai-workforce" className="px-4 py-2 text-foreground/80 hover:text-foreground transition-colors font-medium">
                AI Workforce Hub
              </Link>
            </div>
            <div className="relative group">
              <Link href="/about" className="px-4 py-2 text-foreground/80 hover:text-foreground transition-colors font-medium">
                About
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/auth" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Log in
            </Link>
            <Link href="/auth">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get Started
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
