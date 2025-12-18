import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MenuNodeIcon, CloseNodeIcon, ChevronNodeIcon } from '@/components/ui/custom-icons';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import CoadLogo from '@/components/ui/coad-logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTracksOpen, setIsTracksOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // VISUAL-EDIT: Navigation Links - Can reorder, add, or remove items
  // DRAG-DROP: Navigation items can be rearranged visually
  const navLinks = [
    { label: 'Certifications', href: '/certifications', isRoute: true },
    { 
      label: 'Tracks', 
      href: '#tracks',
      // VISUAL-EDIT: Dropdown Items - Can adjust order and content
      // DRAG-DROP: Dropdown items can be reordered
      dropdown: [
        { label: 'ADC Track', href: '/certifications?track=adc', isRoute: true },
        { label: 'ACOS Track', href: '/certifications?track=acos', isRoute: true },
        { label: 'Compare Tracks', href: '/#pricing' },
      ]
    },
    { label: 'Modules', href: '/#modules' },
    { label: 'AI Workforce', href: '/ai-workforce', isRoute: true },
    { label: 'About', href: '/about', isRoute: true },
  ];

  return (
    <>
      {/* VISUAL-EDIT: Header - Can adjust sticky behavior, background, and z-index */}
      {/* SPACING: Header height and padding can be adjusted (h-18 py-4) */}
      <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-md" 
          : "bg-transparent"
      )}
    >
      <div className="container-coad">
        {/* VISUAL-EDIT: Navigation Layout - Can adjust flex layout and spacing */}
        {/* DRAG-DROP: Logo and nav items can be repositioned */}
        <nav className="flex items-center justify-between h-18 py-4">
          {/* VISUAL-EDIT: Logo - Can adjust size and position */}
          {/* DRAG-DROP: Logo can be repositioned */}
          <Link to="/" className="flex items-center gap-2">
            <CoadLogo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                {link.dropdown ? (
                  <button 
                    className="flex items-center gap-1 px-4 py-2 text-foreground/80 hover:text-foreground transition-colors font-medium"
                    onMouseEnter={() => setIsTracksOpen(true)}
                    onMouseLeave={() => setIsTracksOpen(false)}
                  >
                    {link.label}
                    <ChevronNodeIcon className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>
                ) : 'isRoute' in link && link.isRoute ? (
                  <Link 
                    to={link.href}
                    className="px-4 py-2 text-foreground/80 hover:text-foreground transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a 
                    href={link.href}
                    className="px-4 py-2 text-foreground/80 hover:text-foreground transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                )}

                {/* Dropdown */}
                {link.dropdown && (
                  <div 
                    className={cn(
                      "absolute top-full left-0 w-48 py-2 bg-card rounded-lg shadow-lg border border-border transition-all duration-200 z-50",
                      isTracksOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                    )}
                    onMouseEnter={() => setIsTracksOpen(true)}
                    onMouseLeave={() => setIsTracksOpen(false)}
                  >
                    {link.dropdown.map((item) => (
                      'isRoute' in item && item.isRoute ? (
                        <Link
                          key={item.label}
                          to={item.href}
                          className="block px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          key={item.label}
                          href={item.href}
                          className="block px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
                        >
                          {item.label}
                        </a>
                      )
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link to="/auth">Log in</Link>
            </Button>
            <Button variant="hero" asChild>
              <Link to="/auth">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <CloseNodeIcon className="w-6 h-6" /> : <MenuNodeIcon className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "lg:hidden fixed inset-0 top-[72px] bg-background z-40 transition-all duration-300",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <div className="container-coad py-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.dropdown ? (
                <div className="py-2">
                  <span className="text-foreground font-medium">{link.label}</span>
                  <div className="mt-2 pl-4 space-y-2">
                    {link.dropdown.map((item) => (
                      'isRoute' in item && item.isRoute ? (
                        <Link
                          key={item.label}
                          to={item.href}
                          className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          key={item.label}
                          href={item.href}
                          className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </a>
                      )
                    ))}
                  </div>
                </div>
              ) : 'isRoute' in link && link.isRoute ? (
                <Link
                  to={link.href}
                  className="block py-3 text-foreground font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className="block py-3 text-foreground font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              )}
            </div>
          ))}
          
          <div className="mt-6 flex flex-col gap-3">
            <Button variant="outline" className="w-full" asChild>
              <Link to="/auth">Log in</Link>
            </Button>
            <Button variant="hero" className="w-full" asChild>
              <Link to="/auth">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
      </header>
    </>
  );
};

export default Header;