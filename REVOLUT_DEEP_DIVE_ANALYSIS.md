# Revolut.com Deep Dive Analysis
## Complete Analysis of Transitions, Animations, Photo Positioning, Pricing, Menu & Everything

---

## Table of Contents
1. [Menu/Navigation System](#1-menunavigation-system)
2. [Transitions & Animations - All Levels](#2-transitions--animations---all-levels)
3. [Photo Positioning & Background Images](#3-photo-positioning--background-images)
4. [Pricing Section Deep Dive](#4-pricing-section-deep-dive)
5. [Card Layouts & Hover Effects](#5-card-layouts--hover-effects)
6. [Section Spacing & Visual Hierarchy](#6-section-spacing--visual-hierarchy)
7. [Implementation Code Examples](#7-implementation-code-examples)

---

## 1. Menu/Navigation System

### 1.1 Menu Structure Analysis

**Position & Behavior:**
- **Position**: `sticky` (stays at top on scroll)
- **Height**: `72px` (consistent across all states)
- **Top Position**: `-72px` initially, transitions to `0px` on scroll
- **Z-Index**: `3` (above content, below modals)

**Visual States:**

**Initial State (Transparent):**
```css
background-color: rgba(0, 0, 0, 0);
backdrop-filter: none;
box-shadow: none;
```

**Scrolled State (Glass Morphism):**
```css
background-color: rgba(255, 255, 255, 0.8);
backdrop-filter: blur(16px);
box-shadow: [subtle shadow on scroll];
```

**Transition:**
```css
transition: background-color 0.2s, top 0.2s, opacity 0.3s;
```

### 1.2 Menu Items Analysis

**Navigation Links:**
- **Items**: Personal, Business, Kids & Teens, Company
- **Transition**: `color 0.3s cubic-bezier(0.15, 0.5, 0.5, 1), background-color 0.3s cubic-bezier(0.15, 0.5, 0.5, 1)`
- **Hover Effect**: Color change to primary blue, subtle background change
- **Active State**: Underline or background highlight

**CTA Buttons:**
- **Log in**: Text link style, `transition: color 0.3s cubic-bezier(0.15, 0.5, 0.5, 1)`
- **Sign up**: Primary button with full transition suite:
  ```css
  transition: background-color 0.3s cubic-bezier(0.15, 0.5, 0.5, 1),
              color 0.3s cubic-bezier(0.15, 0.5, 0.5, 1),
              opacity 0.3s cubic-bezier(0.15, 0.5, 0.5, 1),
              box-shadow 0.2s cubic-bezier(0.4, 0.3, 0.8, 0.6),
              outline 0.2s cubic-bezier(0.4, 0.3, 0.8, 0.6),
              outline-offset 0.2s cubic-bezier(0.4, 0.3, 0.8, 0.6);
  ```

### 1.3 Menu Implementation Code

```css
/* Sticky Header with Glass Morphism */
.header-revolut {
  position: sticky;
  top: -72px;
  height: 72px;
  z-index: 3;
  transition: background-color 0.2s, top 0.2s, opacity 0.3s;
  background-color: rgba(0, 0, 0, 0);
  backdrop-filter: none;
}

.header-revolut.scrolled {
  top: 0;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(16px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

/* Menu Items */
.menu-item-revolut {
  transition: color 0.3s cubic-bezier(0.15, 0.5, 0.5, 1),
              background-color 0.3s cubic-bezier(0.15, 0.5, 0.5, 1);
  padding: 8px 16px;
  border-radius: 8px;
}

.menu-item-revolut:hover {
  color: rgb(76, 138, 204); /* Primary blue */
  background-color: rgba(76, 138, 204, 0.1);
}
```

```typescript
// React Hook for Scroll Detection
'use client';

import { useEffect, useState } from 'react';

export function useScrollHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrolled;
}
```

---

## 2. Transitions & Animations - All Levels

### 2.1 Transition Easing Curves (Complete Analysis)

Revolut uses **three primary easing curves** for different interaction types:

#### **Primary Easing (Smooth & Natural)**
```css
cubic-bezier(0.35, 0, 0, 1)
```
- **Use Case**: Transform animations, opacity changes, general smooth transitions
- **Duration**: 0.35s (350ms)
- **Feel**: Natural, smooth deceleration
- **Applied To**: Card transforms, image reveals, scroll animations

#### **Interactive Easing (Slightly Bouncy)**
```css
cubic-bezier(0.4, 0.3, 0.8, 0.6)
```
- **Use Case**: Interactive elements (buttons, shadows, outlines)
- **Duration**: 0.2s (200ms)
- **Feel**: Slight bounce, more responsive
- **Applied To**: Box shadows, button hovers, focus states, outline changes

#### **Gentle Easing (Controlled Motion)**
```css
cubic-bezier(0.15, 0.5, 0.5, 1)
```
- **Use Case**: Color changes, background transitions
- **Duration**: 0.3s (300ms)
- **Feel**: Gentle, controlled, no bounce
- **Applied To**: Background colors, text colors, menu items

### 2.2 Transition Duration Standards

| Element Type | Duration | Easing | Properties |
|-------------|----------|--------|------------|
| **Button Hover** | 200ms | `cubic-bezier(0.4, 0.3, 0.8, 0.6)` | box-shadow, outline |
| **Button Colors** | 300ms | `cubic-bezier(0.15, 0.5, 0.5, 1)` | background-color, color |
| **Card Transform** | 350ms | `cubic-bezier(0.35, 0, 0, 1)` | transform, opacity |
| **Menu Items** | 300ms | `cubic-bezier(0.15, 0.5, 0.5, 1)` | color, background-color |
| **Header Scroll** | 200ms | linear | background-color, top |
| **Opacity Fades** | 300-600ms | ease-in-out | opacity |
| **Link Colors** | 150ms | linear | color |

### 2.3 Multi-Property Transitions

Revolut uses **property-specific transitions** for optimal performance:

```css
/* Button - Multiple properties with different timings */
.button-revolut {
  transition: 
    background-color 0.3s cubic-bezier(0.15, 0.5, 0.5, 1),
    color 0.3s cubic-bezier(0.15, 0.5, 0.5, 1),
    opacity 0.3s cubic-bezier(0.15, 0.5, 0.5, 1),
    box-shadow 0.2s cubic-bezier(0.4, 0.3, 0.8, 0.6),
    outline 0.2s cubic-bezier(0.4, 0.3, 0.8, 0.6),
    outline-offset 0.2s cubic-bezier(0.4, 0.3, 0.8, 0.6);
}
```

**Why This Matters:**
- Colors transition slower (300ms) for smoothness
- Shadows/outlines transition faster (200ms) for responsiveness
- Each property gets optimal timing

### 2.4 Scroll-Triggered Animations

**Fade In on Scroll:**
```css
.animate-scroll-fade {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-in-out,
              transform 0.6s ease-in-out;
}

.animate-scroll-fade.visible {
  opacity: 1;
  transform: translateY(0);
}
```

**Staggered Animations:**
- Delay increments: 100ms between elements
- Applied to: Card grids, feature lists, pricing cards

---

## 3. Photo Positioning & Background Images

### 3.1 Card Photo Pattern (From Screenshot Analysis)

Based on the screenshot showing account cards with photos:

**Structure:**
```
Card Container
├── Background Image (Photo)
│   ├── background-size: cover
│   ├── background-position: center
│   └── position: absolute
├── Dark Overlay (Gradient)
│   ├── background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.7))
│   ├── position: absolute
│   └── z-index: 1
└── Content Layer
    ├── position: relative
    └── z-index: 2
```

### 3.2 Photo Card Implementation

```css
/* Photo Card with Overlay */
.photo-card-revolut {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  height: 400px; /* Adjust based on content */
  transition: transform 0.35s cubic-bezier(0.35, 0, 0, 1),
              box-shadow 0.2s cubic-bezier(0.4, 0.3, 0.8, 0.6);
}

.photo-card-revolut::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('/path/to/photo.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
}

.photo-card-revolut::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.7) 100%
  );
  z-index: 1;
}

.photo-card-revolut:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.photo-card-content {
  position: relative;
  z-index: 2;
  color: white;
  padding: 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
```

### 3.3 Photo Positioning Patterns

**Pattern 1: Full Cover**
```css
background-size: cover;
background-position: center;
```

**Pattern 2: Contained with Positioning**
```css
background-size: contain;
background-position: center bottom;
```

**Pattern 3: Hero Background**
```css
background-size: cover;
background-position: center top;
background-attachment: fixed; /* Parallax effect */
```

### 3.4 Overlay Gradients

**Dark Overlay (Most Common):**
```css
background: linear-gradient(
  to bottom,
  rgba(0, 0, 0, 0) 0%,
  rgba(0, 0, 0, 0.4) 60%,
  rgba(0, 0, 0, 0.8) 100%
);
```

**Subtle Overlay:**
```css
background: linear-gradient(
  to bottom,
  rgba(0, 0, 0, 0) 0%,
  rgba(0, 0, 0, 0.2) 100%
);
```

**Color Overlay (Brand Colors):**
```css
background: linear-gradient(
  135deg,
  rgba(76, 138, 204, 0.3) 0%,
  rgba(57, 145, 216, 0.3) 100%
);
```

---

## 4. Pricing Section Deep Dive

### 4.1 Pricing Card Layout

**Grid Structure:**
- **Desktop**: 5 cards in a row (Standard, Plus, Premium, Metal, Ultra)
- **Card Width**: ~264px for first 2 rows, ~432px for bottom row
- **Card Height**: ~234px for top cards, ~190px for bottom cards
- **Spacing**: Grid gap, no explicit margins

**Card Structure:**
```html
<a href="/plan" class="pricing-card">
  <div class="pricing-card-content">
    <h2>Plan Name</h2>
    <h3>Price</h3>
    <p>Description</p>
  </div>
</a>
```

### 4.2 Pricing Card Styling

**Base Styles:**
```css
.pricing-card-revolut {
  display: grid;
  padding: 0 0 16px;
  margin: 0;
  border-radius: 0px; /* No border radius on cards */
  background-color: rgba(0, 0, 0, 0); /* Transparent */
  border: 0px none;
  box-shadow: none;
  transition: all;
  text-decoration: none;
  color: inherit;
}

.pricing-card-revolut:hover {
  /* Subtle transform or color change */
}
```

**Key Observations:**
- **No borders** on pricing cards
- **No background color** (transparent)
- **No box shadow** in default state
- **Grid layout** for content organization
- **Minimal padding** (only bottom padding: 16px)

### 4.3 Pricing Section Background

**Section Background:**
- **Color**: Dark (`rgb(25, 28, 31)` or `rgb(0, 0, 0)`)
- **Text Color**: White
- **Spacing**: Generous margins (80px top/bottom)

### 4.4 Pricing Card Hover Effects

Based on analysis, pricing cards likely have:
- Subtle color change on hover
- Possible slight scale or translateY
- Transition: `color 0.15s` (very fast for links)

---

## 5. Card Layouts & Hover Effects

### 5.1 Card Hover Pattern

**Standard Card Hover:**
```css
.card-revolut {
  transition: transform 0.35s cubic-bezier(0.35, 0, 0, 1),
              box-shadow 0.2s cubic-bezier(0.4, 0.3, 0.8, 0.6);
  border-radius: 12px;
  background-color: white;
  padding: 24px;
}

.card-revolut:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}
```

**Photo Card Hover:**
```css
.photo-card-revolut:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
}
```

### 5.2 Button Hover Effects

**Primary Button:**
```css
.btn-primary-revolut {
  transition: 
    background-color 0.3s cubic-bezier(0.15, 0.5, 0.5, 1),
    color 0.3s cubic-bezier(0.15, 0.5, 0.5, 1),
    box-shadow 0.2s cubic-bezier(0.4, 0.3, 0.8, 0.6);
  background-color: rgb(76, 138, 204);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
}

.btn-primary-revolut:hover {
  background-color: rgb(57, 145, 216);
  box-shadow: 0 4px 12px rgba(76, 138, 204, 0.3);
  transform: translateY(-2px);
}

.btn-primary-revolut:active {
  transform: translateY(0);
  transition-duration: 0.1s;
}
```

**Secondary Button (Text Link):**
```css
.btn-secondary-revolut {
  transition: color 0.15s;
  color: rgb(76, 138, 204);
  background: transparent;
  border: none;
}

.btn-secondary-revolut:hover {
  color: rgb(57, 145, 216);
  text-decoration: underline;
}
```

---

## 6. Section Spacing & Visual Hierarchy

### 6.1 Section Spacing System

**Major Sections:**
```css
margin-top: 80px;
margin-bottom: 80px;
```

**Minor Sections:**
```css
margin-top: 40px;
margin-bottom: 40px;
```

**Container Padding:**
```css
padding-top: 48px;
padding-bottom: 24px;
```

### 6.2 Background Color System

**Section Types:**
1. **Hero Section**: Blue gradient
2. **Content Sections**: White (`rgb(255, 255, 255)`)
3. **Dark Sections**: Dark grey/black (`rgb(25, 28, 31)`)
4. **Light Sections**: Light grey (`rgb(244, 244, 244)`)

**No Borders Between Sections** - Color contrast creates natural separation

### 6.3 Typography Hierarchy

**Hero Heading:**
```css
font-size: clamp(2.5rem, 5vw, 4rem);
font-weight: 700;
line-height: 1.1;
letter-spacing: -0.02em;
color: white; /* On dark background */
```

**Section Heading:**
```css
font-size: clamp(2rem, 4vw, 3rem);
font-weight: 700;
line-height: 1.2;
letter-spacing: -0.01em;
```

**Body Large:**
```css
font-size: clamp(1.125rem, 2vw, 1.25rem);
line-height: 1.6;
font-weight: 400;
```

---

## 7. Implementation Code Examples

### 7.1 Complete Menu Component

```tsx
'use client';

import { useScrollHeader } from '@/hooks/useScrollHeader';
import Link from 'next/link';

export function RevolutMenu() {
  const scrolled = useScrollHeader();

  return (
    <header className={`header-revolut ${scrolled ? 'scrolled' : ''}`}>
      <nav className="container-coad flex items-center justify-between h-full">
        <Link href="/" className="logo">
          <img src="/logo.svg" alt="Revolut" />
        </Link>
        
        <div className="flex items-center gap-4">
          <Link href="/" className="menu-item-revolut">Personal</Link>
          <Link href="/business" className="menu-item-revolut">Business</Link>
          <Link href="/company" className="menu-item-revolut">Company</Link>
          
          <Link href="/login" className="menu-item-revolut">Log in</Link>
          <Link href="/signup" className="btn-primary-revolut">Sign up</Link>
        </div>
      </nav>
    </header>
  );
}
```

### 7.2 Photo Card Component

```tsx
interface PhotoCardProps {
  image: string;
  title: string;
  subtitle?: string;
  amount?: string;
  transaction?: {
    icon: string;
    label: string;
    date: string;
    value: string;
  };
}

export function PhotoCard({ image, title, subtitle, amount, transaction }: PhotoCardProps) {
  return (
    <div className="photo-card-revolut" style={{ '--bg-image': `url(${image})` } as React.CSSProperties}>
      <div className="photo-card-content">
        {subtitle && <span className="text-sm text-white/80">{subtitle}</span>}
        <h3 className="text-3xl font-bold text-white mb-2">{amount}</h3>
        {transaction && (
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/20">
            <div className="flex items-center gap-2">
              <span className="text-purple-400">{transaction.icon}</span>
              <div>
                <p className="text-white text-sm">{transaction.label}</p>
                <p className="text-white/60 text-xs">{transaction.date}</p>
              </div>
            </div>
            <span className="text-white font-semibold">{transaction.value}</span>
          </div>
        )}
      </div>
    </div>
  );
}
```

### 7.3 Pricing Section Component

```tsx
interface PricingPlan {
  name: string;
  price: string;
  description: string;
  href: string;
}

export function PricingSection({ plans }: { plans: PricingPlan[] }) {
  return (
    <section className="bg-section-dark section-spacing-revolut">
      <div className="container-coad">
        <h2 className="heading-revolut-section text-white text-center mb-12">
          Choose your plan
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {plans.map((plan, index) => (
            <Link
              key={plan.name}
              href={plan.href}
              className="pricing-card-revolut animate-scroll-fade-in"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="pricing-card-content">
                <h2 className="text-2xl font-bold text-white mb-2">{plan.name}</h2>
                <h3 className="text-xl text-white/80 mb-4">{plan.price}</h3>
                <p className="text-white/60 text-sm">{plan.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### 7.4 Complete CSS Implementation

```css
/* Add to globals.css */

/* Revolut Design System Variables */
:root {
  /* Colors */
  --revolut-blue: rgb(76, 138, 204);
  --revolut-blue-dark: rgb(57, 145, 216);
  --revolut-dark: rgb(25, 28, 31);
  --revolut-light: rgb(244, 244, 244);
  
  /* Easing Curves */
  --easing-primary: cubic-bezier(0.35, 0, 0, 1);
  --easing-interactive: cubic-bezier(0.4, 0.3, 0.8, 0.6);
  --easing-gentle: cubic-bezier(0.15, 0.5, 0.5, 1);
  
  /* Durations */
  --duration-fast: 0.2s;
  --duration-medium: 0.3s;
  --duration-slow: 0.35s;
  --duration-slowest: 0.6s;
}

/* Header */
.header-revolut {
  position: sticky;
  top: -72px;
  height: 72px;
  z-index: 3;
  transition: background-color var(--duration-fast),
              top var(--duration-fast),
              opacity var(--duration-medium);
  background-color: rgba(0, 0, 0, 0);
  backdrop-filter: none;
}

.header-revolut.scrolled {
  top: 0;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(16px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

/* Photo Card */
.photo-card-revolut {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  height: 400px;
  transition: transform var(--duration-slow) var(--easing-primary),
              box-shadow var(--duration-fast) var(--easing-interactive);
}

.photo-card-revolut::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: var(--bg-image);
  background-size: cover;
  background-position: center;
  z-index: 0;
}

.photo-card-revolut::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.7) 100%
  );
  z-index: 1;
}

.photo-card-revolut:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

/* Buttons */
.btn-primary-revolut {
  transition: 
    background-color var(--duration-medium) var(--easing-gentle),
    color var(--duration-medium) var(--easing-gentle),
    box-shadow var(--duration-fast) var(--easing-interactive);
  background-color: var(--revolut-blue);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}

.btn-primary-revolut:hover {
  background-color: var(--revolut-blue-dark);
  box-shadow: 0 4px 12px rgba(76, 138, 204, 0.3);
  transform: translateY(-2px);
}

.btn-primary-revolut:active {
  transform: translateY(0);
  transition-duration: 0.1s;
}

/* Scroll Animations */
.animate-scroll-fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity var(--duration-slowest) ease-in-out,
              transform var(--duration-slowest) ease-in-out;
}

.animate-scroll-fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

## Key Takeaways

### 1. **Menu System**
- Sticky header with glass morphism on scroll
- Smooth transitions (200ms for header, 300ms for items)
- Transparent → White with blur effect

### 2. **Transitions**
- Three distinct easing curves for different purposes
- Property-specific timing (colors slower, shadows faster)
- Multi-property transitions for complex interactions

### 3. **Photo Cards**
- Absolute positioned background images
- Gradient overlays for text readability
- Hover: translateY(-4px) + shadow increase

### 4. **Pricing**
- Grid layout, no borders
- Transparent cards on dark background
- Fast color transitions (150ms)

### 5. **Spacing**
- 80px margins between major sections
- Color contrast instead of borders
- Generous whitespace throughout

---

## Implementation Priority

1. **Phase 1**: Menu system with scroll detection
2. **Phase 2**: Transition system with easing curves
3. **Phase 3**: Photo card components
4. **Phase 4**: Pricing section layout
5. **Phase 5**: Scroll animations
6. **Phase 6**: Polish & refinement

---

*Analysis completed: January 15, 2025*
*Based on live analysis of revolut.com*
