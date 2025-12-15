import { cn } from '@/lib/utils';

interface CoadLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
  textClassName?: string;
}

const CoadLogo = ({ size = 'md', showText = true, className, textClassName }: CoadLogoProps) => {
  const sizes = {
    sm: { icon: 'w-8 h-8', text: 'text-lg' },
    md: { icon: 'w-10 h-10', text: 'text-xl' },
    lg: { icon: 'w-14 h-14', text: 'text-2xl' },
  };

  return (
    <div className={cn('flex items-center gap-2 group', className)}>
      <div className={cn('relative', sizes[size].icon)}>
        {/* Neural network inspired logo */}
        <svg viewBox="0 0 40 40" className="w-full h-full">
          <defs>
            <linearGradient id="coadLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--teal))" />
            </linearGradient>
          </defs>
          {/* Outer ring */}
          <circle 
            cx="20" 
            cy="20" 
            r="18" 
            fill="none" 
            stroke="url(#coadLogoGradient)" 
            strokeWidth="2" 
            className="group-hover:animate-pulse" 
          />
          {/* Inner nodes */}
          <circle cx="20" cy="10" r="3" fill="url(#coadLogoGradient)" />
          <circle cx="10" cy="25" r="3" fill="url(#coadLogoGradient)" />
          <circle cx="30" cy="25" r="3" fill="url(#coadLogoGradient)" />
          <circle cx="20" cy="20" r="4" fill="url(#coadLogoGradient)" />
          {/* Connecting lines */}
          <line x1="20" y1="10" x2="20" y2="20" stroke="url(#coadLogoGradient)" strokeWidth="1.5" />
          <line x1="10" y1="25" x2="20" y2="20" stroke="url(#coadLogoGradient)" strokeWidth="1.5" />
          <line x1="30" y1="25" x2="20" y2="20" stroke="url(#coadLogoGradient)" strokeWidth="1.5" />
        </svg>
      </div>
      {showText && (
        <span className={cn('font-bold text-foreground tracking-tight', sizes[size].text, textClassName)}>
          COAD
        </span>
      )}
    </div>
  );
};

export default CoadLogo;