import { cn } from '@/lib/utils';

interface IconProps {
  className?: string;
  color?: 'primary' | 'teal' | 'success';
}

const gradientId = (name: string) => `coadGradient-${name}`;

// Neural network node icon - for AI/Brain related
export const NeuralBrainIcon = ({ className, color = 'primary' }: IconProps) => (
  <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
    <defs>
      <linearGradient id={gradientId('brain')} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={color === 'teal' ? 'hsl(var(--teal))' : color === 'success' ? 'hsl(var(--success))' : 'hsl(var(--primary))'} />
        <stop offset="100%" stopColor="hsl(var(--teal))" />
      </linearGradient>
    </defs>
    {/* Central brain node */}
    <circle cx="20" cy="20" r="6" fill={`url(#${gradientId('brain')})`} />
    {/* Outer nodes */}
    <circle cx="8" cy="12" r="3" fill={`url(#${gradientId('brain')})`} opacity="0.8" />
    <circle cx="32" cy="12" r="3" fill={`url(#${gradientId('brain')})`} opacity="0.8" />
    <circle cx="8" cy="28" r="3" fill={`url(#${gradientId('brain')})`} opacity="0.8" />
    <circle cx="32" cy="28" r="3" fill={`url(#${gradientId('brain')})`} opacity="0.8" />
    {/* Connecting lines */}
    <line x1="8" y1="12" x2="20" y2="20" stroke={`url(#${gradientId('brain')})`} strokeWidth="1.5" opacity="0.6" />
    <line x1="32" y1="12" x2="20" y2="20" stroke={`url(#${gradientId('brain')})`} strokeWidth="1.5" opacity="0.6" />
    <line x1="8" y1="28" x2="20" y2="20" stroke={`url(#${gradientId('brain')})`} strokeWidth="1.5" opacity="0.6" />
    <line x1="32" y1="28" x2="20" y2="20" stroke={`url(#${gradientId('brain')})`} strokeWidth="1.5" opacity="0.6" />
    {/* Outer ring */}
    <circle cx="20" cy="20" r="17" fill="none" stroke={`url(#${gradientId('brain')})`} strokeWidth="1" opacity="0.3" />
  </svg>
);

// Connected nodes icon - for Multi-Agent/Network
export const NetworkNodesIcon = ({ className, color = 'primary' }: IconProps) => (
  <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
    <defs>
      <linearGradient id={gradientId('network')} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={color === 'teal' ? 'hsl(var(--teal))' : color === 'success' ? 'hsl(var(--success))' : 'hsl(var(--primary))'} />
        <stop offset="100%" stopColor="hsl(var(--teal))" />
      </linearGradient>
    </defs>
    {/* Hexagonal arrangement of nodes */}
    <circle cx="20" cy="8" r="4" fill={`url(#${gradientId('network')})`} />
    <circle cx="8" cy="20" r="4" fill={`url(#${gradientId('network')})`} />
    <circle cx="32" cy="20" r="4" fill={`url(#${gradientId('network')})`} />
    <circle cx="20" cy="32" r="4" fill={`url(#${gradientId('network')})`} />
    <circle cx="20" cy="20" r="3" fill={`url(#${gradientId('network')})`} opacity="0.6" />
    {/* Connections */}
    <line x1="20" y1="8" x2="8" y2="20" stroke={`url(#${gradientId('network')})`} strokeWidth="1.5" />
    <line x1="20" y1="8" x2="32" y2="20" stroke={`url(#${gradientId('network')})`} strokeWidth="1.5" />
    <line x1="8" y1="20" x2="20" y2="32" stroke={`url(#${gradientId('network')})`} strokeWidth="1.5" />
    <line x1="32" y1="20" x2="20" y2="32" stroke={`url(#${gradientId('network')})`} strokeWidth="1.5" />
    <line x1="20" y1="8" x2="20" y2="20" stroke={`url(#${gradientId('network')})`} strokeWidth="1" opacity="0.5" />
    <line x1="20" y1="20" x2="20" y2="32" stroke={`url(#${gradientId('network')})`} strokeWidth="1" opacity="0.5" />
  </svg>
);

// Shield with nodes - for Security/Protection
export const ShieldNodeIcon = ({ className, color = 'primary' }: IconProps) => (
  <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
    <defs>
      <linearGradient id={gradientId('shield')} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={color === 'teal' ? 'hsl(var(--teal))' : color === 'success' ? 'hsl(var(--success))' : 'hsl(var(--primary))'} />
        <stop offset="100%" stopColor="hsl(var(--teal))" />
      </linearGradient>
    </defs>
    {/* Shield outline */}
    <path 
      d="M20 4 L34 10 L34 20 C34 28 27 34 20 38 C13 34 6 28 6 20 L6 10 Z" 
      fill="none" 
      stroke={`url(#${gradientId('shield')})`} 
      strokeWidth="2"
    />
    {/* Inner nodes */}
    <circle cx="20" cy="16" r="3" fill={`url(#${gradientId('shield')})`} />
    <circle cx="14" cy="24" r="2.5" fill={`url(#${gradientId('shield')})`} opacity="0.8" />
    <circle cx="26" cy="24" r="2.5" fill={`url(#${gradientId('shield')})`} opacity="0.8" />
    {/* Connections */}
    <line x1="20" y1="16" x2="14" y2="24" stroke={`url(#${gradientId('shield')})`} strokeWidth="1.5" />
    <line x1="20" y1="16" x2="26" y2="24" stroke={`url(#${gradientId('shield')})`} strokeWidth="1.5" />
  </svg>
);

// Circuit layers - for Layers/Architecture
export const CircuitLayersIcon = ({ className, color = 'primary' }: IconProps) => (
  <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
    <defs>
      <linearGradient id={gradientId('layers')} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={color === 'teal' ? 'hsl(var(--teal))' : color === 'success' ? 'hsl(var(--success))' : 'hsl(var(--primary))'} />
        <stop offset="100%" stopColor="hsl(var(--teal))" />
      </linearGradient>
    </defs>
    {/* Three horizontal layers with nodes */}
    {/* Top layer */}
    <line x1="8" y1="10" x2="32" y2="10" stroke={`url(#${gradientId('layers')})`} strokeWidth="2" />
    <circle cx="12" cy="10" r="3" fill={`url(#${gradientId('layers')})`} />
    <circle cx="28" cy="10" r="3" fill={`url(#${gradientId('layers')})`} />
    {/* Middle layer */}
    <line x1="8" y1="20" x2="32" y2="20" stroke={`url(#${gradientId('layers')})`} strokeWidth="2" />
    <circle cx="20" cy="20" r="4" fill={`url(#${gradientId('layers')})`} />
    {/* Bottom layer */}
    <line x1="8" y1="30" x2="32" y2="30" stroke={`url(#${gradientId('layers')})`} strokeWidth="2" />
    <circle cx="12" cy="30" r="3" fill={`url(#${gradientId('layers')})`} />
    <circle cx="28" cy="30" r="3" fill={`url(#${gradientId('layers')})`} />
    {/* Vertical connections */}
    <line x1="12" y1="10" x2="20" y2="20" stroke={`url(#${gradientId('layers')})`} strokeWidth="1" opacity="0.5" />
    <line x1="28" y1="10" x2="20" y2="20" stroke={`url(#${gradientId('layers')})`} strokeWidth="1" opacity="0.5" />
    <line x1="20" y1="20" x2="12" y2="30" stroke={`url(#${gradientId('layers')})`} strokeWidth="1" opacity="0.5" />
    <line x1="20" y1="20" x2="28" y2="30" stroke={`url(#${gradientId('layers')})`} strokeWidth="1" opacity="0.5" />
  </svg>
);

// Data flow icon - for Workflow/Process
export const DataFlowIcon = ({ className, color = 'primary' }: IconProps) => (
  <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
    <defs>
      <linearGradient id={gradientId('flow')} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={color === 'teal' ? 'hsl(var(--teal))' : color === 'success' ? 'hsl(var(--success))' : 'hsl(var(--primary))'} />
        <stop offset="100%" stopColor="hsl(var(--teal))" />
      </linearGradient>
    </defs>
    {/* Flow path */}
    <path 
      d="M8 20 Q14 8 20 20 Q26 32 32 20" 
      fill="none" 
      stroke={`url(#${gradientId('flow')})`} 
      strokeWidth="2"
    />
    {/* Nodes along path */}
    <circle cx="8" cy="20" r="4" fill={`url(#${gradientId('flow')})`} />
    <circle cx="20" cy="20" r="4" fill={`url(#${gradientId('flow')})`} />
    <circle cx="32" cy="20" r="4" fill={`url(#${gradientId('flow')})`} />
    {/* Arrow indicators */}
    <path d="M28 16 L32 20 L28 24" fill="none" stroke={`url(#${gradientId('flow')})`} strokeWidth="2" />
  </svg>
);

// Spark/Energy icon - for Performance/Speed
export const EnergyNodeIcon = ({ className, color = 'primary' }: IconProps) => (
  <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
    <defs>
      <linearGradient id={gradientId('energy')} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={color === 'teal' ? 'hsl(var(--teal))' : color === 'success' ? 'hsl(var(--success))' : 'hsl(var(--primary))'} />
        <stop offset="100%" stopColor="hsl(var(--teal))" />
      </linearGradient>
    </defs>
    {/* Lightning bolt shape with nodes */}
    <path 
      d="M22 4 L12 18 L18 18 L16 36 L28 20 L22 20 Z" 
      fill={`url(#${gradientId('energy')})`}
      opacity="0.3"
    />
    <path 
      d="M22 4 L12 18 L18 18 L16 36 L28 20 L22 20 Z" 
      fill="none"
      stroke={`url(#${gradientId('energy')})`}
      strokeWidth="2"
    />
    {/* Energy nodes */}
    <circle cx="20" cy="12" r="3" fill={`url(#${gradientId('energy')})`} />
    <circle cx="18" cy="24" r="3" fill={`url(#${gradientId('energy')})`} />
  </svg>
);

// Lock with circuit - for Security/Lock
export const CircuitLockIcon = ({ className, color = 'primary' }: IconProps) => (
  <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
    <defs>
      <linearGradient id={gradientId('lock')} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={color === 'teal' ? 'hsl(var(--teal))' : color === 'success' ? 'hsl(var(--success))' : 'hsl(var(--primary))'} />
        <stop offset="100%" stopColor="hsl(var(--teal))" />
      </linearGradient>
    </defs>
    {/* Lock body */}
    <rect x="10" y="18" width="20" height="16" rx="2" fill="none" stroke={`url(#${gradientId('lock')})`} strokeWidth="2" />
    {/* Lock shackle */}
    <path d="M14 18 V12 C14 8 17 5 20 5 C23 5 26 8 26 12 V18" fill="none" stroke={`url(#${gradientId('lock')})`} strokeWidth="2" />
    {/* Inner circuit nodes */}
    <circle cx="20" cy="26" r="4" fill={`url(#${gradientId('lock')})`} />
    <line x1="20" y1="26" x2="20" y2="31" stroke={`url(#${gradientId('lock')})`} strokeWidth="2" />
  </svg>
);

// Leaf with nodes - for Sustainability
export const SustainabilityIcon = ({ className, color = 'success' }: IconProps) => (
  <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
    <defs>
      <linearGradient id={gradientId('leaf')} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={color === 'teal' ? 'hsl(var(--teal))' : color === 'success' ? 'hsl(var(--success))' : 'hsl(var(--primary))'} />
        <stop offset="100%" stopColor="hsl(var(--teal))" />
      </linearGradient>
    </defs>
    {/* Leaf shape */}
    <path 
      d="M20 6 C30 6 34 16 34 24 C34 30 28 36 20 36 C12 36 8 28 8 20 C8 12 14 6 20 6 Z" 
      fill="none" 
      stroke={`url(#${gradientId('leaf')})`} 
      strokeWidth="2"
    />
    {/* Leaf vein as circuit */}
    <path d="M20 12 L20 32" stroke={`url(#${gradientId('leaf')})`} strokeWidth="1.5" />
    <path d="M20 18 L14 22" stroke={`url(#${gradientId('leaf')})`} strokeWidth="1" />
    <path d="M20 18 L26 22" stroke={`url(#${gradientId('leaf')})`} strokeWidth="1" />
    <path d="M20 26 L13 28" stroke={`url(#${gradientId('leaf')})`} strokeWidth="1" />
    <path d="M20 26 L27 28" stroke={`url(#${gradientId('leaf')})`} strokeWidth="1" />
    {/* Nodes */}
    <circle cx="20" cy="12" r="2.5" fill={`url(#${gradientId('leaf')})`} />
    <circle cx="20" cy="20" r="2" fill={`url(#${gradientId('leaf')})`} />
    <circle cx="20" cy="28" r="2" fill={`url(#${gradientId('leaf')})`} />
  </svg>
);

// Graduation cap with nodes - for Education
export const GraduationNodeIcon = ({ className, color = 'teal' }: IconProps) => (
  <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
    <defs>
      <linearGradient id={gradientId('grad')} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={color === 'teal' ? 'hsl(var(--teal))' : color === 'success' ? 'hsl(var(--success))' : 'hsl(var(--primary))'} />
        <stop offset="100%" stopColor="hsl(var(--teal))" />
      </linearGradient>
    </defs>
    {/* Cap top */}
    <polygon points="20,6 36,14 20,22 4,14" fill="none" stroke={`url(#${gradientId('grad')})`} strokeWidth="2" />
    {/* Cap body */}
    <path d="M10 16 L10 26 C10 30 14 34 20 34 C26 34 30 30 30 26 L30 16" fill="none" stroke={`url(#${gradientId('grad')})`} strokeWidth="2" />
    {/* Tassel */}
    <line x1="36" y1="14" x2="36" y2="26" stroke={`url(#${gradientId('grad')})`} strokeWidth="2" />
    <circle cx="36" cy="28" r="3" fill={`url(#${gradientId('grad')})`} />
    {/* Center node */}
    <circle cx="20" cy="14" r="3" fill={`url(#${gradientId('grad')})`} />
  </svg>
);

// Certificate/Document with nodes - for Credentials
export const CredentialIcon = ({ className, color = 'primary' }: IconProps) => (
  <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
    <defs>
      <linearGradient id={gradientId('cred')} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={color === 'teal' ? 'hsl(var(--teal))' : color === 'success' ? 'hsl(var(--success))' : 'hsl(var(--primary))'} />
        <stop offset="100%" stopColor="hsl(var(--teal))" />
      </linearGradient>
    </defs>
    {/* Document outline */}
    <rect x="8" y="4" width="24" height="32" rx="2" fill="none" stroke={`url(#${gradientId('cred')})`} strokeWidth="2" />
    {/* Lines representing text */}
    <line x1="12" y1="12" x2="28" y2="12" stroke={`url(#${gradientId('cred')})`} strokeWidth="1.5" opacity="0.5" />
    <line x1="12" y1="18" x2="24" y2="18" stroke={`url(#${gradientId('cred')})`} strokeWidth="1.5" opacity="0.5" />
    {/* Verification badge */}
    <circle cx="20" cy="28" r="6" fill="none" stroke={`url(#${gradientId('cred')})`} strokeWidth="2" />
    <circle cx="20" cy="28" r="3" fill={`url(#${gradientId('cred')})`} />
    {/* Corner nodes */}
    <circle cx="8" cy="4" r="2" fill={`url(#${gradientId('cred')})`} />
    <circle cx="32" cy="4" r="2" fill={`url(#${gradientId('cred')})`} />
  </svg>
);

// Eye with circuit - for Oversight/Monitoring
export const OversightEyeIcon = ({ className, color = 'primary' }: IconProps) => (
  <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
    <defs>
      <linearGradient id={gradientId('eye')} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={color === 'teal' ? 'hsl(var(--teal))' : color === 'success' ? 'hsl(var(--success))' : 'hsl(var(--primary))'} />
        <stop offset="100%" stopColor="hsl(var(--teal))" />
      </linearGradient>
    </defs>
    {/* Eye shape */}
    <path 
      d="M4 20 C8 10 14 6 20 6 C26 6 32 10 36 20 C32 30 26 34 20 34 C14 34 8 30 4 20 Z" 
      fill="none" 
      stroke={`url(#${gradientId('eye')})`} 
      strokeWidth="2"
    />
    {/* Iris */}
    <circle cx="20" cy="20" r="8" fill="none" stroke={`url(#${gradientId('eye')})`} strokeWidth="1.5" />
    {/* Pupil with nodes */}
    <circle cx="20" cy="20" r="4" fill={`url(#${gradientId('eye')})`} />
    {/* Circuit nodes around iris */}
    <circle cx="14" cy="16" r="1.5" fill={`url(#${gradientId('eye')})`} />
    <circle cx="26" cy="16" r="1.5" fill={`url(#${gradientId('eye')})`} />
    <circle cx="14" cy="24" r="1.5" fill={`url(#${gradientId('eye')})`} />
    <circle cx="26" cy="24" r="1.5" fill={`url(#${gradientId('eye')})`} />
  </svg>
);

// Warning triangle with nodes - for Risk/Alert
export const RiskAlertIcon = ({ className, color = 'primary' }: IconProps) => (
  <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
    <defs>
      <linearGradient id={gradientId('risk')} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={color === 'teal' ? 'hsl(var(--teal))' : color === 'success' ? 'hsl(var(--success))' : 'hsl(var(--primary))'} />
        <stop offset="100%" stopColor="hsl(var(--teal))" />
      </linearGradient>
    </defs>
    {/* Triangle */}
    <path 
      d="M20 4 L36 34 L4 34 Z" 
      fill="none" 
      stroke={`url(#${gradientId('risk')})`} 
      strokeWidth="2"
      strokeLinejoin="round"
    />
    {/* Exclamation with nodes */}
    <line x1="20" y1="14" x2="20" y2="24" stroke={`url(#${gradientId('risk')})`} strokeWidth="3" strokeLinecap="round" />
    <circle cx="20" cy="29" r="2" fill={`url(#${gradientId('risk')})`} />
    {/* Corner nodes */}
    <circle cx="20" cy="4" r="2" fill={`url(#${gradientId('risk')})`} />
    <circle cx="4" cy="34" r="2" fill={`url(#${gradientId('risk')})`} />
    <circle cx="36" cy="34" r="2" fill={`url(#${gradientId('risk')})`} />
  </svg>
);

// Database with nodes - for Data
export const DataNodeIcon = ({ className, color = 'primary' }: IconProps) => (
  <svg viewBox="0 0 40 40" className={cn('w-6 h-6', className)}>
    <defs>
      <linearGradient id={gradientId('data')} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={color === 'teal' ? 'hsl(var(--teal))' : color === 'success' ? 'hsl(var(--success))' : 'hsl(var(--primary))'} />
        <stop offset="100%" stopColor="hsl(var(--teal))" />
      </linearGradient>
    </defs>
    {/* Database cylinders */}
    <ellipse cx="20" cy="10" rx="14" ry="5" fill="none" stroke={`url(#${gradientId('data')})`} strokeWidth="2" />
    <path d="M6 10 L6 30 C6 33 12 36 20 36 C28 36 34 33 34 30 L34 10" fill="none" stroke={`url(#${gradientId('data')})`} strokeWidth="2" />
    <ellipse cx="20" cy="20" rx="14" ry="5" fill="none" stroke={`url(#${gradientId('data')})`} strokeWidth="1.5" opacity="0.5" />
    {/* Data nodes */}
    <circle cx="14" cy="10" r="2" fill={`url(#${gradientId('data')})`} />
    <circle cx="26" cy="10" r="2" fill={`url(#${gradientId('data')})`} />
    <circle cx="20" cy="28" r="3" fill={`url(#${gradientId('data')})`} />
  </svg>
);
