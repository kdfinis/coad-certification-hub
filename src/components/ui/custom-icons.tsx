import { cn } from '@/lib/utils';

interface IconProps {
  className?: string;
  color?: 'primary' | 'teal' | 'success' | 'amber' | 'white';
}

const getColor = (color: IconProps['color']) => {
  switch (color) {
    case 'teal': return 'hsl(var(--teal))';
    case 'success': return 'hsl(var(--success))';
    case 'amber': return 'hsl(38 92% 50%)';
    case 'white': return 'white';
    default: return 'hsl(var(--primary))';
  }
};

const gradientId = (name: string, color?: string) => `coadGradient-${name}-${color || 'default'}`;

// Neural network node icon - for AI/Brain related
export const NeuralBrainIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  const id = gradientId('brain', color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={mainColor} />
          <stop offset="100%" stopColor="hsl(var(--teal))" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="6" fill={`url(#${id})`} />
      <circle cx="8" cy="12" r="3" fill={`url(#${id})`} opacity="0.8" />
      <circle cx="32" cy="12" r="3" fill={`url(#${id})`} opacity="0.8" />
      <circle cx="8" cy="28" r="3" fill={`url(#${id})`} opacity="0.8" />
      <circle cx="32" cy="28" r="3" fill={`url(#${id})`} opacity="0.8" />
      <line x1="8" y1="12" x2="20" y2="20" stroke={`url(#${id})`} strokeWidth="1.5" opacity="0.6" />
      <line x1="32" y1="12" x2="20" y2="20" stroke={`url(#${id})`} strokeWidth="1.5" opacity="0.6" />
      <line x1="8" y1="28" x2="20" y2="20" stroke={`url(#${id})`} strokeWidth="1.5" opacity="0.6" />
      <line x1="32" y1="28" x2="20" y2="20" stroke={`url(#${id})`} strokeWidth="1.5" opacity="0.6" />
      <circle cx="20" cy="20" r="17" fill="none" stroke={`url(#${id})`} strokeWidth="1" opacity="0.3" />
    </svg>
  );
};

// Connected nodes icon - for Multi-Agent/Network/Users
export const NetworkNodesIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  const id = gradientId('network', color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={mainColor} />
          <stop offset="100%" stopColor="hsl(var(--teal))" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="8" r="4" fill={`url(#${id})`} />
      <circle cx="8" cy="20" r="4" fill={`url(#${id})`} />
      <circle cx="32" cy="20" r="4" fill={`url(#${id})`} />
      <circle cx="20" cy="32" r="4" fill={`url(#${id})`} />
      <circle cx="20" cy="20" r="3" fill={`url(#${id})`} opacity="0.6" />
      <line x1="20" y1="8" x2="8" y2="20" stroke={`url(#${id})`} strokeWidth="1.5" />
      <line x1="20" y1="8" x2="32" y2="20" stroke={`url(#${id})`} strokeWidth="1.5" />
      <line x1="8" y1="20" x2="20" y2="32" stroke={`url(#${id})`} strokeWidth="1.5" />
      <line x1="32" y1="20" x2="20" y2="32" stroke={`url(#${id})`} strokeWidth="1.5" />
      <line x1="20" y1="8" x2="20" y2="20" stroke={`url(#${id})`} strokeWidth="1" opacity="0.5" />
      <line x1="20" y1="20" x2="20" y2="32" stroke={`url(#${id})`} strokeWidth="1" opacity="0.5" />
    </svg>
  );
};

// Shield with nodes - for Security/Protection
export const ShieldNodeIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  const id = gradientId('shield', color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={mainColor} />
          <stop offset="100%" stopColor="hsl(var(--teal))" />
        </linearGradient>
      </defs>
      <path d="M20 4 L34 10 L34 20 C34 28 27 34 20 38 C13 34 6 28 6 20 L6 10 Z" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
      <circle cx="20" cy="16" r="3" fill={`url(#${id})`} />
      <circle cx="14" cy="24" r="2.5" fill={`url(#${id})`} opacity="0.8" />
      <circle cx="26" cy="24" r="2.5" fill={`url(#${id})`} opacity="0.8" />
      <line x1="20" y1="16" x2="14" y2="24" stroke={`url(#${id})`} strokeWidth="1.5" />
      <line x1="20" y1="16" x2="26" y2="24" stroke={`url(#${id})`} strokeWidth="1.5" />
    </svg>
  );
};

// Circuit layers - for Layers/Architecture
export const CircuitLayersIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  const id = gradientId('layers', color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={mainColor} />
          <stop offset="100%" stopColor="hsl(var(--teal))" />
        </linearGradient>
      </defs>
      <line x1="8" y1="10" x2="32" y2="10" stroke={`url(#${id})`} strokeWidth="2" />
      <circle cx="12" cy="10" r="3" fill={`url(#${id})`} />
      <circle cx="28" cy="10" r="3" fill={`url(#${id})`} />
      <line x1="8" y1="20" x2="32" y2="20" stroke={`url(#${id})`} strokeWidth="2" />
      <circle cx="20" cy="20" r="4" fill={`url(#${id})`} />
      <line x1="8" y1="30" x2="32" y2="30" stroke={`url(#${id})`} strokeWidth="2" />
      <circle cx="12" cy="30" r="3" fill={`url(#${id})`} />
      <circle cx="28" cy="30" r="3" fill={`url(#${id})`} />
      <line x1="12" y1="10" x2="20" y2="20" stroke={`url(#${id})`} strokeWidth="1" opacity="0.5" />
      <line x1="28" y1="10" x2="20" y2="20" stroke={`url(#${id})`} strokeWidth="1" opacity="0.5" />
      <line x1="20" y1="20" x2="12" y2="30" stroke={`url(#${id})`} strokeWidth="1" opacity="0.5" />
      <line x1="20" y1="20" x2="28" y2="30" stroke={`url(#${id})`} strokeWidth="1" opacity="0.5" />
    </svg>
  );
};

// Data flow icon - for Workflow/Process
export const DataFlowIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  const id = gradientId('flow', color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={mainColor} />
          <stop offset="100%" stopColor="hsl(var(--teal))" />
        </linearGradient>
      </defs>
      <path d="M8 20 Q14 8 20 20 Q26 32 32 20" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
      <circle cx="8" cy="20" r="4" fill={`url(#${id})`} />
      <circle cx="20" cy="20" r="4" fill={`url(#${id})`} />
      <circle cx="32" cy="20" r="4" fill={`url(#${id})`} />
      <path d="M28 16 L32 20 L28 24" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
    </svg>
  );
};

// Spark/Energy icon - for Performance/Speed
export const EnergyNodeIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  const id = gradientId('energy', color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={mainColor} />
          <stop offset="100%" stopColor="hsl(var(--teal))" />
        </linearGradient>
      </defs>
      <path d="M22 4 L12 18 L18 18 L16 36 L28 20 L22 20 Z" fill={`url(#${id})`} opacity="0.3" />
      <path d="M22 4 L12 18 L18 18 L16 36 L28 20 L22 20 Z" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
      <circle cx="20" cy="12" r="3" fill={`url(#${id})`} />
      <circle cx="18" cy="24" r="3" fill={`url(#${id})`} />
    </svg>
  );
};

// Lock with circuit - for Security/Lock
export const CircuitLockIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  const id = gradientId('lock', color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={mainColor} />
          <stop offset="100%" stopColor="hsl(var(--teal))" />
        </linearGradient>
      </defs>
      <rect x="10" y="18" width="20" height="16" rx="2" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
      <path d="M14 18 V12 C14 8 17 5 20 5 C23 5 26 8 26 12 V18" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
      <circle cx="20" cy="26" r="4" fill={`url(#${id})`} />
      <line x1="20" y1="26" x2="20" y2="31" stroke={`url(#${id})`} strokeWidth="2" />
    </svg>
  );
};

// Leaf with nodes - for Sustainability
export const SustainabilityIcon = ({ className, color = 'success' }: IconProps) => {
  const mainColor = getColor(color);
  const id = gradientId('leaf', color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={mainColor} />
          <stop offset="100%" stopColor="hsl(var(--teal))" />
        </linearGradient>
      </defs>
      <path d="M20 6 C30 6 34 16 34 24 C34 30 28 36 20 36 C12 36 8 28 8 20 C8 12 14 6 20 6 Z" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
      <path d="M20 12 L20 32" stroke={`url(#${id})`} strokeWidth="1.5" />
      <path d="M20 18 L14 22" stroke={`url(#${id})`} strokeWidth="1" />
      <path d="M20 18 L26 22" stroke={`url(#${id})`} strokeWidth="1" />
      <path d="M20 26 L13 28" stroke={`url(#${id})`} strokeWidth="1" />
      <path d="M20 26 L27 28" stroke={`url(#${id})`} strokeWidth="1" />
      <circle cx="20" cy="12" r="2.5" fill={`url(#${id})`} />
      <circle cx="20" cy="20" r="2" fill={`url(#${id})`} />
      <circle cx="20" cy="28" r="2" fill={`url(#${id})`} />
    </svg>
  );
};

// Graduation cap with nodes - for Education
export const GraduationNodeIcon = ({ className, color = 'teal' }: IconProps) => {
  const mainColor = getColor(color);
  const id = gradientId('grad', color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={mainColor} />
          <stop offset="100%" stopColor="hsl(var(--teal))" />
        </linearGradient>
      </defs>
      <polygon points="20,6 36,14 20,22 4,14" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
      <path d="M10 16 L10 26 C10 30 14 34 20 34 C26 34 30 30 30 26 L30 16" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
      <line x1="36" y1="14" x2="36" y2="26" stroke={`url(#${id})`} strokeWidth="2" />
      <circle cx="36" cy="28" r="3" fill={`url(#${id})`} />
      <circle cx="20" cy="14" r="3" fill={`url(#${id})`} />
    </svg>
  );
};

// Certificate/Document with nodes - for Credentials
export const CredentialIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  const id = gradientId('cred', color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={mainColor} />
          <stop offset="100%" stopColor="hsl(var(--teal))" />
        </linearGradient>
      </defs>
      <rect x="8" y="4" width="24" height="32" rx="2" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
      <line x1="12" y1="12" x2="28" y2="12" stroke={`url(#${id})`} strokeWidth="1.5" opacity="0.5" />
      <line x1="12" y1="18" x2="24" y2="18" stroke={`url(#${id})`} strokeWidth="1.5" opacity="0.5" />
      <circle cx="20" cy="28" r="6" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
      <circle cx="20" cy="28" r="3" fill={`url(#${id})`} />
      <circle cx="8" cy="4" r="2" fill={`url(#${id})`} />
      <circle cx="32" cy="4" r="2" fill={`url(#${id})`} />
    </svg>
  );
};

// Eye with circuit - for Oversight/Monitoring
export const OversightEyeIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  const id = gradientId('eye', color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={mainColor} />
          <stop offset="100%" stopColor="hsl(var(--teal))" />
        </linearGradient>
      </defs>
      <path d="M4 20 C8 10 14 6 20 6 C26 6 32 10 36 20 C32 30 26 34 20 34 C14 34 8 30 4 20 Z" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
      <circle cx="20" cy="20" r="8" fill="none" stroke={`url(#${id})`} strokeWidth="1.5" />
      <circle cx="20" cy="20" r="4" fill={`url(#${id})`} />
      <circle cx="14" cy="16" r="1.5" fill={`url(#${id})`} />
      <circle cx="26" cy="16" r="1.5" fill={`url(#${id})`} />
      <circle cx="14" cy="24" r="1.5" fill={`url(#${id})`} />
      <circle cx="26" cy="24" r="1.5" fill={`url(#${id})`} />
    </svg>
  );
};

// Warning triangle with nodes - for Risk/Alert
export const RiskAlertIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  const id = gradientId('risk', color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={mainColor} />
          <stop offset="100%" stopColor="hsl(var(--teal))" />
        </linearGradient>
      </defs>
      <path d="M20 4 L36 34 L4 34 Z" fill="none" stroke={`url(#${id})`} strokeWidth="2" strokeLinejoin="round" />
      <line x1="20" y1="14" x2="20" y2="24" stroke={`url(#${id})`} strokeWidth="3" strokeLinecap="round" />
      <circle cx="20" cy="29" r="2" fill={`url(#${id})`} />
      <circle cx="20" cy="4" r="2" fill={`url(#${id})`} />
      <circle cx="4" cy="34" r="2" fill={`url(#${id})`} />
      <circle cx="36" cy="34" r="2" fill={`url(#${id})`} />
    </svg>
  );
};

// Database with nodes - for Data
export const DataNodeIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  const id = gradientId('data', color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={mainColor} />
          <stop offset="100%" stopColor="hsl(var(--teal))" />
        </linearGradient>
      </defs>
      <ellipse cx="20" cy="10" rx="14" ry="5" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
      <path d="M6 10 L6 30 C6 33 12 36 20 36 C28 36 34 33 34 30 L34 10" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
      <ellipse cx="20" cy="20" rx="14" ry="5" fill="none" stroke={`url(#${id})`} strokeWidth="1.5" opacity="0.5" />
      <circle cx="14" cy="10" r="2" fill={`url(#${id})`} />
      <circle cx="26" cy="10" r="2" fill={`url(#${id})`} />
      <circle cx="20" cy="28" r="3" fill={`url(#${id})`} />
    </svg>
  );
};

// Scale/Balance - for Ethics/Legal
export const BalanceScaleIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  const id = gradientId('scale', color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={mainColor} />
          <stop offset="100%" stopColor="hsl(var(--teal))" />
        </linearGradient>
      </defs>
      <line x1="20" y1="4" x2="20" y2="36" stroke={`url(#${id})`} strokeWidth="2" />
      <line x1="6" y1="12" x2="34" y2="12" stroke={`url(#${id})`} strokeWidth="2" />
      <path d="M6 12 L10 24 Q14 24 10 24 L6 12" fill="none" stroke={`url(#${id})`} strokeWidth="1.5" />
      <path d="M34 12 L30 24 Q26 24 30 24 L34 12" fill="none" stroke={`url(#${id})`} strokeWidth="1.5" />
      <ellipse cx="10" cy="24" rx="6" ry="2" fill="none" stroke={`url(#${id})`} strokeWidth="1.5" />
      <ellipse cx="30" cy="24" rx="6" ry="2" fill="none" stroke={`url(#${id})`} strokeWidth="1.5" />
      <circle cx="20" cy="8" r="3" fill={`url(#${id})`} />
      <circle cx="6" cy="12" r="2" fill={`url(#${id})`} />
      <circle cx="34" cy="12" r="2" fill={`url(#${id})`} />
      <rect x="16" y="32" width="8" height="4" fill={`url(#${id})`} rx="1" />
    </svg>
  );
};

// Building/Corporate - for Business/Organization
export const CorporateBuildingIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  const id = gradientId('building', color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={mainColor} />
          <stop offset="100%" stopColor="hsl(var(--teal))" />
        </linearGradient>
      </defs>
      <rect x="8" y="10" width="24" height="26" fill="none" stroke={`url(#${id})`} strokeWidth="2" rx="1" />
      <line x1="8" y1="36" x2="32" y2="36" stroke={`url(#${id})`} strokeWidth="2" />
      <circle cx="14" cy="16" r="2" fill={`url(#${id})`} />
      <circle cx="26" cy="16" r="2" fill={`url(#${id})`} />
      <circle cx="14" cy="24" r="2" fill={`url(#${id})`} />
      <circle cx="26" cy="24" r="2" fill={`url(#${id})`} />
      <line x1="14" y1="16" x2="26" y2="16" stroke={`url(#${id})`} strokeWidth="1" opacity="0.5" />
      <line x1="14" y1="24" x2="26" y2="24" stroke={`url(#${id})`} strokeWidth="1" opacity="0.5" />
      <line x1="14" y1="16" x2="14" y2="24" stroke={`url(#${id})`} strokeWidth="1" opacity="0.5" />
      <line x1="26" y1="16" x2="26" y2="24" stroke={`url(#${id})`} strokeWidth="1" opacity="0.5" />
      <path d="M16 36 L16 30 L24 30 L24 36" fill="none" stroke={`url(#${id})`} strokeWidth="1.5" />
      <polygon points="20,4 8,10 32,10" fill="none" stroke={`url(#${id})`} strokeWidth="1.5" />
      <circle cx="20" cy="6" r="2" fill={`url(#${id})`} />
    </svg>
  );
};

// Target/Bullseye - for Goals/Precision
export const TargetNodeIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  const id = gradientId('target', color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={mainColor} />
          <stop offset="100%" stopColor="hsl(var(--teal))" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="16" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
      <circle cx="20" cy="20" r="10" fill="none" stroke={`url(#${id})`} strokeWidth="1.5" />
      <circle cx="20" cy="20" r="4" fill={`url(#${id})`} />
      <circle cx="20" cy="4" r="2" fill={`url(#${id})`} />
      <circle cx="20" cy="36" r="2" fill={`url(#${id})`} />
      <circle cx="4" cy="20" r="2" fill={`url(#${id})`} />
      <circle cx="36" cy="20" r="2" fill={`url(#${id})`} />
      <line x1="20" y1="4" x2="20" y2="10" stroke={`url(#${id})`} strokeWidth="1" opacity="0.5" />
      <line x1="20" y1="30" x2="20" y2="36" stroke={`url(#${id})`} strokeWidth="1" opacity="0.5" />
      <line x1="4" y1="20" x2="10" y2="20" stroke={`url(#${id})`} strokeWidth="1" opacity="0.5" />
      <line x1="30" y1="20" x2="36" y2="20" stroke={`url(#${id})`} strokeWidth="1" opacity="0.5" />
    </svg>
  );
};

// Crown - for Premium/Master level
export const CrownNodeIcon = ({ className, color = 'amber' }: IconProps) => {
  const mainColor = getColor(color);
  const id = gradientId('crown', color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={mainColor} />
          <stop offset="100%" stopColor="hsl(var(--teal))" />
        </linearGradient>
      </defs>
      <path d="M6 28 L6 14 L14 20 L20 8 L26 20 L34 14 L34 28 Z" fill="none" stroke={`url(#${id})`} strokeWidth="2" strokeLinejoin="round" />
      <rect x="6" y="28" width="28" height="6" fill={`url(#${id})`} opacity="0.3" stroke={`url(#${id})`} strokeWidth="2" rx="1" />
      <circle cx="6" cy="14" r="3" fill={`url(#${id})`} />
      <circle cx="20" cy="8" r="3" fill={`url(#${id})`} />
      <circle cx="34" cy="14" r="3" fill={`url(#${id})`} />
      <circle cx="14" cy="20" r="2" fill={`url(#${id})`} />
      <circle cx="26" cy="20" r="2" fill={`url(#${id})`} />
    </svg>
  );
};

// Briefcase - for Business/Professional
export const BriefcaseNodeIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  const id = gradientId('brief', color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={mainColor} />
          <stop offset="100%" stopColor="hsl(var(--teal))" />
        </linearGradient>
      </defs>
      <rect x="4" y="14" width="32" height="20" rx="2" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
      <path d="M14 14 V10 C14 8 16 6 20 6 C24 6 26 8 26 10 V14" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
      <circle cx="12" cy="20" r="2" fill={`url(#${id})`} />
      <circle cx="28" cy="20" r="2" fill={`url(#${id})`} />
      <circle cx="20" cy="24" r="3" fill={`url(#${id})`} />
      <line x1="12" y1="20" x2="20" y2="24" stroke={`url(#${id})`} strokeWidth="1" opacity="0.5" />
      <line x1="28" y1="20" x2="20" y2="24" stroke={`url(#${id})`} strokeWidth="1" opacity="0.5" />
      <line x1="4" y1="22" x2="36" y2="22" stroke={`url(#${id})`} strokeWidth="1" opacity="0.3" />
    </svg>
  );
};

// Code/Terminal - for Programming
export const CodeNodeIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  const id = gradientId('code', color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={mainColor} />
          <stop offset="100%" stopColor="hsl(var(--teal))" />
        </linearGradient>
      </defs>
      <rect x="4" y="6" width="32" height="28" rx="3" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
      <line x1="4" y1="12" x2="36" y2="12" stroke={`url(#${id})`} strokeWidth="1.5" />
      <circle cx="8" cy="9" r="1.5" fill={`url(#${id})`} />
      <circle cx="12" cy="9" r="1.5" fill={`url(#${id})`} />
      <circle cx="16" cy="9" r="1.5" fill={`url(#${id})`} />
      <path d="M10 20 L16 26 L10 32" fill="none" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="20" y1="28" x2="30" y2="28" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round" />
      <circle cx="10" cy="20" r="2" fill={`url(#${id})`} />
      <circle cx="16" cy="26" r="2" fill={`url(#${id})`} />
    </svg>
  );
};

// Lightbulb - for Ideas/Innovation
export const LightbulbNodeIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  const id = gradientId('bulb', color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={mainColor} />
          <stop offset="100%" stopColor="hsl(var(--teal))" />
        </linearGradient>
      </defs>
      <path d="M20 4 C12 4 6 10 6 18 C6 24 10 28 14 30 L14 34 L26 34 L26 30 C30 28 34 24 34 18 C34 10 28 4 20 4 Z" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
      <line x1="14" y1="38" x2="26" y2="38" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round" />
      <circle cx="20" cy="16" r="4" fill={`url(#${id})`} />
      <line x1="20" y1="16" x2="12" y2="10" stroke={`url(#${id})`} strokeWidth="1" opacity="0.5" />
      <line x1="20" y1="16" x2="28" y2="10" stroke={`url(#${id})`} strokeWidth="1" opacity="0.5" />
      <line x1="20" y1="16" x2="20" y2="26" stroke={`url(#${id})`} strokeWidth="1.5" />
      <circle cx="12" cy="10" r="2" fill={`url(#${id})`} opacity="0.7" />
      <circle cx="28" cy="10" r="2" fill={`url(#${id})`} opacity="0.7" />
    </svg>
  );
};

// Award/Medal - for Achievement
export const AwardMedalIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  const id = gradientId('award', color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={mainColor} />
          <stop offset="100%" stopColor="hsl(var(--teal))" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="16" r="12" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
      <circle cx="20" cy="16" r="7" fill="none" stroke={`url(#${id})`} strokeWidth="1.5" />
      <circle cx="20" cy="16" r="3" fill={`url(#${id})`} />
      <path d="M14 26 L14 36 L20 32 L26 36 L26 26" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
      <circle cx="20" cy="4" r="2" fill={`url(#${id})`} />
      <circle cx="8" cy="16" r="2" fill={`url(#${id})`} />
      <circle cx="32" cy="16" r="2" fill={`url(#${id})`} />
    </svg>
  );
};

// Clock - for Time/Duration
export const ClockNodeIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  const id = gradientId('clock', color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={mainColor} />
          <stop offset="100%" stopColor="hsl(var(--teal))" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="16" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
      <line x1="20" y1="20" x2="20" y2="10" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="20" x2="28" y2="24" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round" />
      <circle cx="20" cy="20" r="3" fill={`url(#${id})`} />
      <circle cx="20" cy="6" r="2" fill={`url(#${id})`} />
      <circle cx="20" cy="34" r="2" fill={`url(#${id})`} />
      <circle cx="6" cy="20" r="2" fill={`url(#${id})`} />
      <circle cx="34" cy="20" r="2" fill={`url(#${id})`} />
    </svg>
  );
};

// Quote - for Testimonials
export const QuoteNodeIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  const id = gradientId('quote', color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={mainColor} />
          <stop offset="100%" stopColor="hsl(var(--teal))" />
        </linearGradient>
      </defs>
      <path d="M10 8 C6 8 4 12 4 16 C4 20 6 24 10 24 C10 24 8 30 4 34" fill="none" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round" />
      <circle cx="10" cy="16" r="6" fill={`url(#${id})`} opacity="0.3" stroke={`url(#${id})`} strokeWidth="2" />
      <path d="M28 8 C24 8 22 12 22 16 C22 20 24 24 28 24 C28 24 26 30 22 34" fill="none" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round" />
      <circle cx="28" cy="16" r="6" fill={`url(#${id})`} opacity="0.3" stroke={`url(#${id})`} strokeWidth="2" />
      <circle cx="10" cy="16" r="2" fill={`url(#${id})`} />
      <circle cx="28" cy="16" r="2" fill={`url(#${id})`} />
    </svg>
  );
};

// Check/Verified - for Success
export const CheckNodeIcon = ({ className, color = 'success' }: IconProps) => {
  const mainColor = getColor(color);
  const id = gradientId('check', color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={mainColor} />
          <stop offset="100%" stopColor="hsl(var(--teal))" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="16" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
      <path d="M12 20 L18 26 L28 14" fill="none" stroke={`url(#${id})`} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="20" r="2" fill={`url(#${id})`} />
      <circle cx="18" cy="26" r="2" fill={`url(#${id})`} />
      <circle cx="28" cy="14" r="2" fill={`url(#${id})`} />
    </svg>
  );
};

// Arrow - for CTA/Direction
export const ArrowNodeIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  const id = gradientId('arrow', color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={mainColor} />
          <stop offset="100%" stopColor="hsl(var(--teal))" />
        </linearGradient>
      </defs>
      <line x1="6" y1="20" x2="30" y2="20" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round" />
      <path d="M24 14 L32 20 L24 26" fill="none" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="6" cy="20" r="3" fill={`url(#${id})`} />
      <circle cx="18" cy="20" r="2" fill={`url(#${id})`} />
      <circle cx="32" cy="20" r="3" fill={`url(#${id})`} />
    </svg>
  );
};

// Sparkle/Stars - for Premium/Special
export const SparkleNodeIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  const id = gradientId('sparkle', color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={mainColor} />
          <stop offset="100%" stopColor="hsl(var(--teal))" />
        </linearGradient>
      </defs>
      <path d="M20 4 L22 16 L34 18 L22 20 L20 32 L18 20 L6 18 L18 16 Z" fill={`url(#${id})`} opacity="0.3" stroke={`url(#${id})`} strokeWidth="2" strokeLinejoin="round" />
      <circle cx="20" cy="18" r="4" fill={`url(#${id})`} />
      <circle cx="20" cy="4" r="2" fill={`url(#${id})`} />
      <circle cx="20" cy="32" r="2" fill={`url(#${id})`} />
      <circle cx="6" cy="18" r="2" fill={`url(#${id})`} />
      <circle cx="34" cy="18" r="2" fill={`url(#${id})`} />
      <circle cx="32" cy="8" r="1.5" fill={`url(#${id})`} opacity="0.7" />
      <circle cx="8" cy="28" r="1.5" fill={`url(#${id})`} opacity="0.7" />
    </svg>
  );
};

// Globe - for Global/International
export const GlobeNodeIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  const id = gradientId('globe', color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={mainColor} />
          <stop offset="100%" stopColor="hsl(var(--teal))" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="16" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
      <ellipse cx="20" cy="20" rx="8" ry="16" fill="none" stroke={`url(#${id})`} strokeWidth="1.5" />
      <line x1="4" y1="20" x2="36" y2="20" stroke={`url(#${id})`} strokeWidth="1.5" />
      <ellipse cx="20" cy="12" rx="12" ry="4" fill="none" stroke={`url(#${id})`} strokeWidth="1" opacity="0.5" />
      <ellipse cx="20" cy="28" rx="12" ry="4" fill="none" stroke={`url(#${id})`} strokeWidth="1" opacity="0.5" />
      <circle cx="20" cy="4" r="2" fill={`url(#${id})`} />
      <circle cx="20" cy="36" r="2" fill={`url(#${id})`} />
      <circle cx="4" cy="20" r="2" fill={`url(#${id})`} />
      <circle cx="36" cy="20" r="2" fill={`url(#${id})`} />
    </svg>
  );
};

// Link/External - for Links
export const LinkNodeIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  const id = gradientId('link', color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={mainColor} />
          <stop offset="100%" stopColor="hsl(var(--teal))" />
        </linearGradient>
      </defs>
      <path d="M16 24 L24 16" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round" />
      <path d="M22 12 L28 6 C30 4 34 4 36 6 C38 8 38 12 36 14 L30 20" fill="none" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round" />
      <path d="M18 28 L12 34 C10 36 6 36 4 34 C2 32 2 28 4 26 L10 20" fill="none" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="24" r="3" fill={`url(#${id})`} />
      <circle cx="24" cy="16" r="3" fill={`url(#${id})`} />
      <circle cx="32" cy="10" r="2" fill={`url(#${id})`} />
      <circle cx="8" cy="30" r="2" fill={`url(#${id})`} />
    </svg>
  );
};

// File/Document Check - for Compliance
export const FileCheckIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  const id = gradientId('filecheck', color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={mainColor} />
          <stop offset="100%" stopColor="hsl(var(--teal))" />
        </linearGradient>
      </defs>
      <path d="M8 4 L26 4 L32 10 L32 36 L8 36 Z" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
      <path d="M26 4 L26 10 L32 10" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
      <path d="M14 22 L18 26 L26 16" fill="none" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="14" cy="22" r="2" fill={`url(#${id})`} />
      <circle cx="18" cy="26" r="2" fill={`url(#${id})`} />
      <circle cx="26" cy="16" r="2" fill={`url(#${id})`} />
      <circle cx="26" cy="4" r="2" fill={`url(#${id})`} />
    </svg>
  );
};

// Award/Medal icon
export const AwardNodeIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  const id = gradientId('award', color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={mainColor} />
          <stop offset="100%" stopColor="hsl(var(--teal))" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="14" r="10" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
      <path d="M14 22 L10 36 L20 30 L30 36 L26 22" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
      <circle cx="20" cy="14" r="5" fill={`url(#${id})`} />
    </svg>
  );
};

// Star icon
export const StarNodeIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  const id = gradientId('star', color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={mainColor} />
          <stop offset="100%" stopColor="hsl(var(--teal))" />
        </linearGradient>
      </defs>
      <path d="M20 4 L24 14 L34 16 L27 24 L29 34 L20 29 L11 34 L13 24 L6 16 L16 14 Z" fill={`url(#${id})`} opacity="0.3" stroke={`url(#${id})`} strokeWidth="2" />
      <circle cx="20" cy="18" r="3" fill={`url(#${id})`} />
    </svg>
  );
};

// Percent icon
export const PercentNodeIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  const id = gradientId('percent', color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={mainColor} />
          <stop offset="100%" stopColor="hsl(var(--teal))" />
        </linearGradient>
      </defs>
      <line x1="32" y1="8" x2="8" y2="32" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="5" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
      <circle cx="28" cy="28" r="5" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
      <circle cx="12" cy="12" r="2" fill={`url(#${id})`} />
      <circle cx="28" cy="28" r="2" fill={`url(#${id})`} />
    </svg>
  );
};

// Menu hamburger
export const MenuNodeIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <line x1="6" y1="10" x2="34" y2="10" stroke={mainColor} strokeWidth="3" strokeLinecap="round" />
      <line x1="6" y1="20" x2="34" y2="20" stroke={mainColor} strokeWidth="3" strokeLinecap="round" />
      <line x1="6" y1="30" x2="34" y2="30" stroke={mainColor} strokeWidth="3" strokeLinecap="round" />
      <circle cx="6" cy="10" r="2" fill={mainColor} opacity="0.5" />
      <circle cx="6" cy="20" r="2" fill={mainColor} opacity="0.5" />
      <circle cx="6" cy="30" r="2" fill={mainColor} opacity="0.5" />
    </svg>
  );
};

// Close X
export const CloseNodeIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <line x1="10" y1="10" x2="30" y2="30" stroke={mainColor} strokeWidth="3" strokeLinecap="round" />
      <line x1="30" y1="10" x2="10" y2="30" stroke={mainColor} strokeWidth="3" strokeLinecap="round" />
      <circle cx="20" cy="20" r="3" fill={mainColor} opacity="0.4" />
    </svg>
  );
};

// Chevron down
export const ChevronNodeIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <path d="M10 15 L20 25 L30 15" fill="none" stroke={mainColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="20" cy="25" r="2" fill={mainColor} opacity="0.4" />
    </svg>
  );
};

// Social: LinkedIn
export const LinkedInNodeIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <rect x="6" y="6" width="28" height="28" rx="4" fill="none" stroke={mainColor} strokeWidth="2" />
      <path d="M14 16 L14 26 M14 12 L14 12.1" stroke={mainColor} strokeWidth="3" strokeLinecap="round" />
      <path d="M20 26 L20 20 C20 18 21 16 24 16 C27 16 28 18 28 20 L28 26" fill="none" stroke={mainColor} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
};

// Social: Twitter/X
export const TwitterNodeIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <path d="M8 8 L16 20 L8 32 L12 32 L18 23 L24 32 L32 32 L24 19 L31 8 L27 8 L22 16 L17 8 Z" fill={mainColor} />
    </svg>
  );
};

// Social: Facebook
export const FacebookNodeIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <rect x="6" y="6" width="28" height="28" rx="4" fill="none" stroke={mainColor} strokeWidth="2" />
      <path d="M22 34 L22 22 L26 22 L27 18 L22 18 L22 15 C22 14 22.5 13 24 13 L27 13 L27 9 C27 9 25 9 23 9 C20 9 18 11 18 14 L18 18 L14 18 L14 22 L18 22 L18 34" fill={mainColor} />
    </svg>
  );
};

// Social: Instagram
export const InstagramNodeIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <rect x="6" y="6" width="28" height="28" rx="6" fill="none" stroke={mainColor} strokeWidth="2" />
      <circle cx="20" cy="20" r="6" fill="none" stroke={mainColor} strokeWidth="2" />
      <circle cx="28" cy="12" r="2" fill={mainColor} />
    </svg>
  );
};

// Mail
export const MailNodeIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <rect x="4" y="8" width="32" height="24" rx="2" fill="none" stroke={mainColor} strokeWidth="2" />
      <path d="M4 10 L20 22 L36 10" fill="none" stroke={mainColor} strokeWidth="2" />
      <circle cx="20" cy="22" r="2" fill={mainColor} opacity="0.5" />
    </svg>
  );
};

// Phone
export const PhoneNodeIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <path d="M8 6 L14 6 L17 14 L13 17 C15 21 19 25 23 27 L26 23 L34 26 L34 32 C34 34 32 36 30 36 C16 36 4 24 4 10 C4 8 6 6 8 6 Z" fill="none" stroke={mainColor} strokeWidth="2" />
      <circle cx="14" cy="10" r="2" fill={mainColor} opacity="0.5" />
    </svg>
  );
};

// Map pin
export const MapPinNodeIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <path d="M20 36 C20 36 32 24 32 16 C32 9 27 4 20 4 C13 4 8 9 8 16 C8 24 20 36 20 36 Z" fill="none" stroke={mainColor} strokeWidth="2" />
      <circle cx="20" cy="16" r="5" fill={mainColor} />
    </svg>
  );
};

// External link
export const ExternalLinkNodeIcon = ({ className, color = 'primary' }: IconProps) => {
  const mainColor = getColor(color);
  return (
    <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
      <path d="M30 22 L30 32 C30 34 28 36 26 36 L8 36 C6 36 4 34 4 32 L4 14 C4 12 6 10 8 10 L18 10" fill="none" stroke={mainColor} strokeWidth="2" />
      <path d="M24 6 L34 6 L34 16" fill="none" stroke={mainColor} strokeWidth="2" strokeLinecap="round" />
      <path d="M16 24 L34 6" stroke={mainColor} strokeWidth="2" strokeLinecap="round" />
      <circle cx="34" cy="6" r="2" fill={mainColor} opacity="0.5" />
    </svg>
  );
};
