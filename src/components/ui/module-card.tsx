import Link from 'next/link';

interface ModuleCardProps {
  titleFirst: string;
  titleRest: string;
  description: string;
  hours: string;
  price: string;
  priceColor: 'primary' | 'success' | 'teal' | 'foreground';
  category: string;
  categoryColor: 'primary' | 'success' | 'teal' | 'muted';
  href: string;
  delay: string;
  bubbleType?: 'dark' | 'dark-orange' | 'dark-indigo';
}

export function ModuleCard({
  titleFirst,
  titleRest,
  description,
  hours,
  price,
  priceColor,
  category,
  categoryColor,
  href,
  delay,
  bubbleType = 'dark'
}: ModuleCardProps) {
  const priceColorClass = {
    primary: 'text-primary',
    success: 'text-success',
    teal: 'text-teal',
    foreground: 'text-foreground'
  }[priceColor];

  const categoryBgClass = {
    primary: 'bg-primary/10 text-primary',
    success: 'bg-success/10 text-success',
    teal: 'bg-teal/10 text-teal',
    muted: 'bg-muted text-muted-foreground'
  }[categoryColor];

  const bubbleClass = {
    dark: 'image-text-bubble-dark',
    'dark-orange': 'image-text-bubble-dark-orange',
    'dark-indigo': 'image-text-bubble-dark-indigo'
  }[bubbleType];

  return (
    <Link
      href={href}
      className="group relative block rounded-xl overflow-hidden border border-border bg-card card-hover animate-fade-in-up"
      style={{ animationDelay: delay }}
    >
      {/* Image Container with Overlay */}
      <div className="relative w-full h-48 bg-gradient-to-br from-primary/10 via-teal/10 to-primary/5 overflow-hidden">
        {/* Tint Overlay */}
        <div className="image-tint-overlay" />
        
        {/* Text Bubble at Bottom */}
        <div className={bubbleClass}>
          <h4 className="image-gradient-text text-sm font-bold">
            <span className="image-gradient-text-first-word">{titleFirst}</span>
            <span className="image-gradient-text-rest"> {titleRest}</span>
          </h4>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Category Badge */}
        <div className="flex items-center justify-between">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryBgClass}`}>
            {category}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>

        {/* Hours and Price */}
        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <svg viewBox="0 0 40 40" className="w-4 h-4">
              <circle cx="20" cy="20" r="16" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
              <circle cx="20" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <line x1="20" y1="20" x2="20" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="20" y1="20" x2="26" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span>{hours}</span>
          </div>
          <span className={`font-semibold text-sm ${priceColorClass}`}>
            {price}
          </span>
        </div>
      </div>
    </Link>
  );
}
