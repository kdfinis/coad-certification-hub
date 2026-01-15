# Revolut.com Code Analysis
## Positioning, Content Density, Spacing, Colors & Box Animations

**Source:** Extracted from `/Users/karlodefinis/Downloads/Revolut _ All-in-one finance app for your money _ Revolut United Kingdom_files/3af5188a0f624e56.css`

---

## 1. Spacing System (Content Density)

### Spacing Scale
Revolut uses a **precise 8px-based spacing system** with consistent increments:

| Variable | Value | Pixels | Use Case |
|----------|-------|--------|----------|
| `--rui-space-none` | `0` | 0px | No spacing |
| `--rui-space-s2` | `0.125rem` | 2px | Tight spacing, icons |
| `--rui-space-s4` | `0.25rem` | 4px | Very tight spacing |
| `--rui-space-s6` | `0.375rem` | 6px | Compact spacing |
| `--rui-space-s8` | `0.5rem` | 8px | **Base unit** - small gaps |
| `--rui-space-s12` | `0.75rem` | 12px | Small gaps, padding |
| `--rui-space-s16` | `1rem` | 16px | **Standard spacing** - most common |
| `--rui-space-s20` | `1.25rem` | 20px | Medium spacing |
| `--rui-space-s24` | `1.5rem` | 24px | **Section spacing** - cards, sections |
| `--rui-space-s32` | `2rem` | 32px | Large spacing |
| `--rui-space-s40` | `2.5rem` | 40px | Extra large spacing |
| `--rui-space-s48` | `3rem` | 48px | Section gaps |
| `--rui-space-s56` | `3.5rem` | 56px | Major section spacing |
| `--rui-space-s64` | `4rem` | 64px | Hero spacing |
| `--rui-space-s72` | `4.5rem` | 72px | Maximum spacing |

### Content Density Principles
- **Tight but readable**: Uses 16px (1rem) as standard spacing
- **Consistent rhythm**: 8px base unit creates visual harmony
- **Hierarchical spacing**: Smaller values for related items, larger for sections
- **Responsive density**: Spacing adapts but maintains proportions

---

## 2. Border Radius System (Box Shape)

### Radius Scale
Revolut uses **rounded corners** with a systematic scale:

| Variable | Value | Pixels | Use Case |
|----------|-------|--------|----------|
| `--rui-radius-none` | `unset` | - | Sharp corners (rare) |
| `--rui-radius-r2` | `0.125rem` | 2px | Subtle rounding |
| `--rui-radius-r4` | `0.25rem` | 4px | Small elements |
| `--rui-radius-r6` | `0.375rem` | 6px | Buttons, inputs |
| `--rui-radius-r8` | `0.5rem` | 8px | Standard buttons |
| `--rui-radius-r12` | `0.75rem` | 12px | **Cards, containers** |
| `--rui-radius-r16` | `1rem` | 16px | **Widgets** (default) |
| `--rui-radius-r24` | `1.5rem` | 24px | **Popups, modals** |
| `--rui-radius-r32` | `2rem` | 32px | Large containers |
| `--rui-radius-round` | `9999px` | - | Fully rounded (pills) |

### Box Shape Principles
- **12px-16px**: Most common for cards and interactive elements
- **24px**: Used for modals and prominent containers
- **Consistent rounding**: Creates cohesive, modern feel
- **No sharp corners**: Even smallest elements get 2-4px rounding

---

## 3. Shadow System (Box Depth)

### Shadow Levels
Revolut uses **4 shadow levels** for depth hierarchy:

| Variable | Shadow Value | Use Case |
|----------|--------------|----------|
| `--rui-shadow-none` | `none` | Flat elements |
| `--rui-shadow-level1` | `0 0.125rem 0.1875rem rgb(var(--rui-color-channel-black)/0.05)` | Subtle elevation |
| `--rui-shadow-level2` | `0 0.1875rem 0.5rem rgb(var(--rui-color-channel-black)/0.1)` | **Standard cards** |
| `--rui-shadow-level3` | `0 0.1875rem 1.875rem rgb(var(--rui-color-channel-black)/0.08)` | Elevated elements |
| `--rui-shadow-level4` | `0 1rem 4rem rgb(var(--rui-color-channel-black)/0.12)` | Major elevation |
| `--rui-shadow-side` | `0 0.125rem 0.25rem rgb(...)/0.05), 0 0.1875rem 1rem rgb(...)/0.1` | Side panels |

### Shadow Principles
- **Subtle opacity**: 5-12% black opacity (very light)
- **Layered depth**: Multiple shadow levels create hierarchy
- **Soft blur**: Large blur radius (1.875rem) for softness
- **Y-offset only**: Shadows go downward (0.125rem - 1rem)

---

## 4. Color System

### Primary Colors (Light Theme)
| Color | Variable | Hex Value | Use Case |
|-------|----------|-----------|----------|
| **Accent/Blue** | `--rui-color-accent` | `#4f55f1` | Primary actions, links |
| **Cold Blue** | `--rui-color-cold-blue` | `#0666eb` | Secondary actions |
| **Pink** | `--rui-color-pink` | `#e950a4` | Accents |
| **Green** | `--rui-color-green` | `#09be67` | Success, positive |
| **Orange** | `--rui-color-orange` | `#ec7e00` | Warning |
| **Red** | `--rui-color-red` | `#f54c3e` | Danger, negative |

### Background Colors
| Color | Variable | Hex Value | Use Case |
|-------|----------|-----------|----------|
| **White** | `--rui-color-white` | `#ffffff` | Primary background |
| **Grouped BG** | `--rui-color-grouped-background` | `#f7f7f7` | Section backgrounds |
| **Action Blue** | `--rui-color-action-blue` | `#edeefd` | Interactive backgrounds |
| **Grey Tone 2** | `--rui-color-grey-tone-2` | `#f7f7f7` | Subtle backgrounds |
| **Grey Tone 5** | `--rui-color-grey-tone-5` | `#f1f2f4` | Light dividers |
| **Grey Tone 8** | `--rui-color-grey-tone-8` | `#ebebf0` | Input backgrounds |

### Text Colors
| Color | Variable | Hex Value | Use Case |
|-------|----------|-----------|----------|
| **Foreground** | `--rui-color-foreground` | `#191c1f` | Primary text |
| **Grey 50** | `--rui-color-grey-50` | `#717173` | Secondary text |
| **Grey 20** | `--rui-color-grey-20` | `#c9c9cd` | Disabled text |

### Color Principles
- **High contrast**: Primary text (#191c1f) on white (#ffffff) = 15.8:1
- **Subtle backgrounds**: Very light greys (#f7f7f7, #f1f2f4) for depth
- **Consistent palette**: RGB channel system for theme variations
- **Action colors**: Light blue backgrounds (#edeefd) for interactive states

---

## 5. Animation & Transition System

### Duration Scale
| Variable | Value | Milliseconds | Use Case |
|----------|-------|--------------|----------|
| `--rui-duration-xs` | `100ms` | 100ms | Instant feedback |
| `--rui-duration-sm` | `200ms` | 200ms | **Fast interactions** (shadows, hovers) |
| `--rui-duration-md` | `300ms` | 300ms | **Standard transitions** (colors, backgrounds) |
| `--rui-duration-lg` | `450ms` | 450ms | Smooth transforms |
| `--rui-duration-xl` | `900ms` | 900ms | Slow reveals |
| `--rui-duration-skeleton` | `1500ms` | 1500ms | Loading animations |

### Easing Functions
| Variable | Easing | Use Case |
|----------|--------|----------|
| `--rui-easing-default` | `cubic-bezier(0.15, 0.5, 0.5, 1)` | **Standard transitions** (colors, backgrounds) |
| `--rui-easing-shadow` | `cubic-bezier(0.4, 0.3, 0.8, 0.6)` | **Shadows, outlines** (slight bounce) |
| `--rui-easing-toast` | `cubic-bezier(0.175, 0.885, 0.21, 1.65)` | **Toasts, modals** (bouncy entrance) |
| `--rui-easing-linear` | `linear` | Progress bars, loading |

### Timing Combinations
| Variable | Duration + Easing | Use Case |
|----------|-------------------|----------|
| `--rui-timing-sm` | `200ms cubic-bezier(0.15, 0.5, 0.5, 1)` | Quick feedback |
| `--rui-timing-md` | `300ms cubic-bezier(0.15, 0.5, 0.5, 1)` | **Standard transitions** |
| `--rui-timing-lg` | `450ms cubic-bezier(0.15, 0.5, 0.5, 1)` | Smooth animations |
| `--rui-timing-xl` | `900ms cubic-bezier(0.15, 0.5, 0.5, 1)` | Slow reveals |
| `--rui-timing-shadow` | `200ms cubic-bezier(0.4, 0.3, 0.8, 0.6)` | **Shadow changes** |

---

## 6. Box Animation Patterns

### Card Hover Animation
```css
.card-revolut {
  /* Initial State */
  border-radius: var(--rui-radius-r12); /* 12px */
  box-shadow: var(--rui-shadow-level2);
  transition: 
    transform var(--rui-timing-lg),
    box-shadow var(--rui-timing-shadow);
}

.card-revolut:hover {
  /* Hover State */
  transform: translateY(-4px);
  box-shadow: var(--rui-shadow-level3);
}
```

**Animation Details:**
- **Transform**: `translateY(-4px)` on hover
- **Shadow**: Upgrades from level2 to level3
- **Duration**: 450ms for transform, 200ms for shadow
- **Easing**: Default for transform, shadow easing for shadow

### Button Animation
```css
.button-revolut {
  /* Multi-property transition */
  transition: 
    background-color var(--rui-timing-md),
    color var(--rui-timing-md),
    box-shadow var(--rui-timing-shadow),
    outline var(--rui-timing-shadow);
}

.button-revolut:hover {
  box-shadow: var(--rui-shadow-level2);
}

.button-revolut:active {
  transform: scale(0.98);
  transition-duration: 100ms; /* Faster on click */
}
```

**Animation Details:**
- **Colors**: 300ms (slower for smoothness)
- **Shadows/Outlines**: 200ms (faster for responsiveness)
- **Active state**: Scale down to 0.98 with 100ms duration

### Drop Zone Animation (Example from Code)
```css
.DropZoneWrapper_d112venf {
  padding-top: var(--rui-space-s24); /* 24px */
  padding-bottom: var(--rui-space-s24); /* 24px */
  border-radius: var(--rui-radius-r12); /* 12px */
  border: 1px dashed var(--rui-color-grey-tone-10);
  transition: background-color var(--rui-timing-md);
}

.DropZoneWrapper_d112venf:hover {
  background-color: var(--rui-color-grey-tone-2);
}

.DropZoneWrapper_d112venf:active {
  background-color: rgb(var(--rui-color-channel-action-background-neutral) / 0.7);
}
```

**Animation Details:**
- **Background color**: 300ms transition
- **Hover**: Light grey background (#f7f7f7)
- **Active**: 70% opacity of action background

---

## 7. Positioning System

### Layout Sizes
| Variable | Value | Pixels | Use Case |
|----------|-------|--------|----------|
| `--rui-size-layout` | `94.375rem` | 1510px | Max content width |
| `--rui-size-layout-side-medium` | `25rem` | 400px | Sidebar medium |
| `--rui-size-layout-side-wide` | `36.5rem` | 584px | Sidebar wide |
| `--rui-size-layout-menu-md` | `5.5rem` | 88px | Menu medium |
| `--rui-size-layout-menu-lg` | `6.5rem` | 104px | Menu large |
| `--rui-size-layout-menu-xl` | `15.5rem` | 248px | Menu extra large |
| `--rui-size-layout-menu-xxl` | `25rem` | 400px | Menu maximum |

### Button Sizes
| Variable | Value | Pixels | Use Case |
|----------|-------|--------|----------|
| `--rui-size-button-xs` | `1.875rem` | 30px | Extra small buttons |
| `--rui-size-button-sm` | `2.5rem` | 40px | Small buttons |
| `--rui-size-button-md` | `3.25rem` | 52px | **Standard buttons** |

### Positioning Principles
- **Max width**: 1510px for main content (prevents over-stretching)
- **Consistent heights**: Button sizes follow 8px increments
- **Responsive**: Sizes adapt but maintain proportions

---

## 8. Typography System (Content Density)

### Font Sizes
| Variable | Size | Line Height | Weight | Use Case |
|----------|------|-------------|--------|----------|
| `--rui-font-size-marketing-display1` | `3.5rem` | `1` | `900` | Hero headlines |
| `--rui-font-size-marketing-display2` | `2.5rem` | `1` | `900` | Section headlines |
| `--rui-font-size-display1` | `3.5rem` | `1.2857` | `700` | Large displays |
| `--rui-font-size-display2` | `2.75rem` | `1.1818` | `700` | Medium displays |
| `--rui-font-size-heading1` | `2rem` | `1.1875` | `700` | Page headings |
| `--rui-font-size-heading2` | `1.5rem` | `1.25` | `700` | Section headings |
| `--rui-font-size-heading3` | `1.25rem` | `1.4` | `700` | Subsection headings |
| `--rui-font-size-body1` | `1rem` | `1.375` | `400` | **Body text** |
| `--rui-font-size-body2` | `0.875rem` | `1.4286` | `400` | Small body text |
| `--rui-font-size-emphasis1` | `1rem` | `1.375` | `500` | Emphasized text |
| `--rui-font-size-emphasis2` | `0.875rem` | `1.4286` | `500` | Small emphasis |

### Letter Spacing
- **Tight spacing**: Negative letter-spacing for large text (e.g., `calc(-0.56em / 56)`)
- **Normal spacing**: `0` for body text
- **Wide spacing**: Positive for small caps (e.g., `calc(0.16em / 11)`)

---

## 9. Implementation Examples

### Complete Card Component
```css
.revolut-card {
  /* Spacing */
  padding: var(--rui-space-s24); /* 24px */
  margin-bottom: var(--rui-space-s16); /* 16px */
  
  /* Shape */
  border-radius: var(--rui-radius-r12); /* 12px */
  
  /* Depth */
  box-shadow: var(--rui-shadow-level2);
  
  /* Colors */
  background-color: var(--rui-color-widget-background); /* #fff */
  color: var(--rui-color-foreground); /* #191c1f */
  
  /* Animation */
  transition: 
    transform var(--rui-timing-lg),
    box-shadow var(--rui-timing-shadow);
}

.revolut-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--rui-shadow-level3);
}
```

### Button Component
```css
.revolut-button {
  /* Size */
  height: var(--rui-size-button-md); /* 52px */
  padding: 0 var(--rui-space-s24); /* 0 24px */
  
  /* Shape */
  border-radius: var(--rui-radius-r8); /* 8px */
  
  /* Colors */
  background-color: var(--rui-color-accent); /* #4f55f1 */
  color: var(--rui-color-on-accent); /* #fff */
  
  /* Animation */
  transition: 
    background-color var(--rui-timing-md),
    color var(--rui-timing-md),
    box-shadow var(--rui-timing-shadow);
}

.revolut-button:hover {
  box-shadow: var(--rui-shadow-level2);
}

.revolut-button:active {
  transform: scale(0.98);
  transition-duration: 100ms;
}
```

### Section Container
```css
.revolut-section {
  /* Spacing */
  padding: var(--rui-space-s64) var(--rui-space-s24); /* 64px 24px */
  margin-bottom: var(--rui-space-s48); /* 48px */
  
  /* Max width */
  max-width: var(--rui-size-layout); /* 1510px */
  margin-left: auto;
  margin-right: auto;
  
  /* Background */
  background-color: var(--rui-color-grouped-background); /* #f7f7f7 */
}
```

---

## 10. Key Takeaways

### Spacing & Density
1. **8px base unit**: All spacing follows 8px increments
2. **16px standard**: Most common spacing value
3. **24px sections**: Standard for card padding and section gaps
4. **Consistent rhythm**: Creates visual harmony

### Colors
1. **High contrast**: #191c1f on #ffffff for readability
2. **Subtle backgrounds**: Very light greys (#f7f7f7) for depth
3. **Action colors**: Light blue (#edeefd) for interactive states
4. **Systematic palette**: RGB channel system for theming

### Animations
1. **Fast shadows**: 200ms for responsive feel
2. **Slow colors**: 300ms for smooth transitions
3. **Multi-property**: Different timings for different properties
4. **Subtle transforms**: translateY(-4px) for cards

### Box Design
1. **12px radius**: Standard for cards
2. **16px radius**: Widgets and containers
3. **24px radius**: Modals and popups
4. **Soft shadows**: 5-12% opacity for subtle depth

---

## 11. Comparison with Your Current Implementation

### What to Adopt
- ✅ **8px spacing system**: Already using rem-based spacing
- ✅ **12px border radius**: Cards use similar rounding
- ✅ **Multi-property transitions**: Different timings for different properties
- ⚠️ **Shadow system**: Consider adopting 4-level shadow hierarchy
- ⚠️ **Animation durations**: Standardize on 200ms/300ms/450ms scale
- ⚠️ **Color system**: Consider RGB channel system for theming

### What's Already Good
- ✅ Card hover animations (translateY)
- ✅ Button transitions
- ✅ Consistent spacing scale
- ✅ Border radius system

---

**Next Steps:**
1. Implement 4-level shadow system
2. Standardize animation durations to match Revolut scale
3. Adopt RGB channel color system for better theming
4. Apply 12px/16px/24px radius hierarchy consistently
