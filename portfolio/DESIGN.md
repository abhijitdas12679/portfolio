# DESIGN.md — Portfolio Redesign Design System
> Extracted from Stitch MCP generation: project `5030653677948318775`
> Design system: `assets/2b5dc41e284c49c08daf73a5e3be5794`
> Name: **Synthetic Intelligence & Data Architecture**

---

## Color Palette

### Base Colors (CSS Custom Properties)

```css
/* ── Canvas ───────────────────────────────────────── */
--color-canvas:         #080C14;   /* near-black deep navy — ground substrate */
--color-surface:        #0F131C;   /* primary surface */
--color-surface-low:    #181C24;   /* raised card surface */
--color-surface-mid:    #1C2028;   /* container surface */
--color-surface-high:   #262A33;   /* elevated container */
--color-surface-top:    #31353E;   /* highest elevation */

/* ── Accent Triad ────────────────────────────────── */
--color-indigo:         #6366F1;   /* primary / focal vector */
--color-indigo-light:   #8083FF;   /* primary container / hover state */
--color-indigo-soft:    #C0C1FF;   /* primary soft / muted indigo */
--color-cyan:           #22D3EE;   /* secondary / energy / data states */
--color-cyan-mid:       #5DE6FF;   /* secondary accent */
--color-cyan-bright:    #2FD9F4;   /* secondary fixed dim */
--color-amber:          #F59E0B;   /* tertiary / live metrics / highlights */
--color-amber-soft:     #FFB95F;   /* tertiary soft */

/* ── Typographic Tones ───────────────────────────── */
--color-text-primary:   #DFE2EE;   /* high contrast body text */
--color-text-secondary: #C7C4D7;   /* secondary / body reads */
--color-text-muted:     #908FA0;   /* muted metadata / outline */
--color-text-subtle:    #464554;   /* outline-variant */

/* ── Glass Surface Palette ───────────────────────── */
--glass-level-0:        rgba(8, 12, 20, 1.0);             /* canvas void */
--glass-level-1:        rgba(14, 23, 42, 0.55);           /* structural cards */
--glass-level-2:        rgba(30, 41, 59, 0.65);           /* hover surface */
--glass-level-3:        rgba(30, 41, 59, 0.80);           /* nav / tooltips */

/* ── Gradients ───────────────────────────────────── */
--gradient-aurora:      linear-gradient(135deg, #6366F1 0%, #22D3EE 100%);
--gradient-aurora-warm: linear-gradient(135deg, #6366F1 0%, #22D3EE 60%, #F59E0B 100%);
--gradient-indigo-violet: linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
--gradient-teal-indigo: linear-gradient(135deg, #14B8A6 0%, #6366F1 100%);
--gradient-amber-rose:  linear-gradient(135deg, #F59E0B 0%, #F43F5E 100%);
--gradient-rose-teal:   linear-gradient(135deg, #F43F5E 0%, #14B8A6 100%);
--gradient-violet-amber: linear-gradient(135deg, #8B5CF6 0%, #F59E0B 100%);

/* ── Border Colors ───────────────────────────────── */
--border-default:       rgba(255, 255, 255, 0.08);
--border-glass:         rgba(99, 102, 241, 0.35);         /* indigo glass border */
--border-glass-hover:   rgba(34, 211, 238, 0.35);         /* cyan hover border */
--border-gradient-from: rgba(99, 102, 241, 0.40);
--border-gradient-to:   rgba(34, 211, 238, 0.05);

/* ── Glow Colors ─────────────────────────────────── */
--glow-indigo:          rgba(99, 102, 241, 0.15);
--glow-cyan:            rgba(34, 211, 238, 0.12);
--glow-amber:           rgba(245, 158, 11, 0.12);
--glow-hover:           rgba(34, 211, 238, 0.15);
```

---

## Typography

The system uses three-tier typography: editorial serif headings, clean sans body, monospace tech labels.

### Font Families
| Role | Family | Tailwind var | Usage |
|------|--------|-------------|-------|
| **Display / Headings** | Fraunces (keep existing) | `--font-fraunces` | h1, h2 display, wordmark |
| **Body / UI** | IBM Plex Sans | `--font-plex` | body copy, nav, buttons |
| **Tech Labels** | JetBrains Mono | `--font-mono` | chips, badges, stat suffixes, monospace tags |

> **Note**: Keep `Fraunces` (already loaded) as display serif. Add `JetBrains Mono` for label/chip font role. IBM Plex Sans is already loaded.

### Type Scale
```css
/* Display — hero headlines */
.text-display      { font-size: 4.5rem;  line-height: 4.75rem; letter-spacing: -0.02em; }
.text-display-sm   { font-size: 2.75rem; line-height: 3rem;    letter-spacing: -0.015em; }

/* Headlines */
.text-headline-lg  { font-size: 3rem;    line-height: 3.5rem;  letter-spacing: -0.015em; }
.text-headline-md  { font-size: 2.25rem; line-height: 2.75rem; letter-spacing: -0.01em; }
.text-headline-sm  { font-size: 1.375rem; line-height: 1.875rem; letter-spacing: -0.005em; font-weight: 600; }

/* Title */
.text-title-md     { font-size: 1.125rem; line-height: 1.625rem; font-weight: 500; }

/* Body */
.text-body-lg      { font-size: 1.125rem; line-height: 1.875rem; }
.text-body-md      { font-size: 1rem;     line-height: 1.625rem; }
.text-body-sm      { font-size: 0.875rem; line-height: 1.375rem; letter-spacing: 0.01em; }

/* Labels / Monospace */
.text-label-md     { font-size: 0.8125rem; line-height: 1rem;     letter-spacing: 0.06em; font-weight: 500; }
.text-label-sm     { font-size: 0.6875rem; line-height: 0.875rem; letter-spacing: 0.08em; font-weight: 500; }
.text-code-inline  { font-size: 0.875rem; line-height: 1.25rem; }
```

---

## Elevation & Depth System (Glassmorphism)

### Aurora Mesh Underlay (canvas-level)
```css
/* Static / slow-drifting radial gradient field behind all glass */
background:
  radial-gradient(ellipse at top left, rgba(99, 102, 241, 0.15) 0%, transparent 60%),
  radial-gradient(ellipse at bottom right, rgba(34, 211, 238, 0.12) 0%, transparent 50%),
  radial-gradient(ellipse at center, rgba(245, 158, 11, 0.05) 0%, transparent 70%),
  #080C14;
```

### Glass Elevation Levels
| Level | Use | Surface | Blur | Border |
|-------|-----|---------|------|--------|
| 0 (Canvas) | Page background | `#080C14` + 2% noise | — | — |
| 1 (Cards) | Content cards, section panels | `rgba(14,23,42,0.55)` | `blur(16px) saturate(180%)` | 1px indigo→cyan gradient |
| 2 (Hover / Active) | Hovered cards | `rgba(30,41,59,0.65)` | `blur(16px) saturate(180%)` | 1px stronger glow |
| 3 (Nav / Overlay) | Sticky nav, dropdowns | `rgba(30,41,59,0.80)` | `blur(24px)` | 1px bottom border |

### Inset Edge Highlight (every raised card)
```css
box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.08);
```

### Card Shadows
```css
/* Default */
box-shadow:
  0 8px 32px -8px rgba(8, 12, 20, 0.6),
  inset 0 1px 0 0 rgba(255, 255, 255, 0.08);

/* Hover / Active */
box-shadow:
  0 16px 48px -12px rgba(8, 12, 20, 0.8),
  0 0 24px -4px rgba(34, 211, 238, 0.15),
  inset 0 1px 0 0 rgba(255, 255, 255, 0.10);
```

---

## Spacing Scale

```css
--space-xs:   0.25rem;  /*  4px */
--space-sm:   0.5rem;   /*  8px */
--space-md:   1rem;     /* 16px */
--space-lg:   1.5rem;   /* 24px */
--space-xl:   2.5rem;   /* 40px */
--space-2xl:  4rem;     /* 64px */

--gutter-sm:  1rem;
--gutter:     1.5rem;
--gutter-lg:  2rem;

--margin:     1.5rem;
--margin-md:  3rem;
--margin-lg:  5rem;

/* Max layout width */
--max-width:  1440px;
/* Content width (narrow) */
--max-content: 1200px;  /* max-w-6xl equivalent */
```

---

## Border Radii

```css
--radius-sm:  0.25rem;   /*  4px — micro elements */
--radius:     0.5rem;    /*  8px — inputs, inner wells */
--radius-md:  0.75rem;   /* 12px — chips, small cards */
--radius-lg:  1rem;      /* 16px — cards, panels */
--radius-xl:  1.5rem;    /* 24px — large cards */
--radius-2xl: 1.75rem;   /* 28px — hero card */
--radius-full: 9999px;   /* pills / full-round */
```

---

## Component Specifications

### Buttons
```css
/* Primary (Aurora Gradient) */
.btn-primary {
  background: linear-gradient(135deg, #6366F1 0%, #22D3EE 100%);
  color: #080C14;
  font-weight: 700;
  border-radius: 9999px;
  padding: 0.875rem 1.75rem;
}
.btn-primary:hover {
  box-shadow: 0 0 24px -2px rgba(99, 102, 241, 0.5);
  transform: translateY(-1px) scale(1.02);
}

/* Secondary (Glass Outline) */
.btn-secondary {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(99, 102, 241, 0.4);
  color: #DFE2EE;
  border-radius: 9999px;
}
.btn-secondary:hover {
  border-color: #22D3EE;
  background: rgba(34, 211, 238, 0.08);
}

/* Ghost (Dark Glass) */
.btn-ghost {
  background: rgba(8, 12, 20, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.10);
  color: #DFE2EE;
  border-radius: 9999px;
}
```

### Glassmorphism Cards
```css
.glass-card-v2 {
  background: rgba(14, 23, 42, 0.55);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(99, 102, 241, 0.2);
  box-shadow: 
    0 8px 32px -8px rgba(8, 12, 20, 0.6),
    inset 0 1px 0 0 rgba(255, 255, 255, 0.08);
  border-radius: 1.5rem;  /* 24px */
}
.glass-card-v2:hover {
  background: rgba(30, 41, 59, 0.65);
  border-color: rgba(34, 211, 238, 0.25);
  box-shadow:
    0 16px 48px -12px rgba(8, 12, 20, 0.8),
    0 0 24px -4px rgba(34, 211, 238, 0.15),
    inset 0 1px 0 0 rgba(255, 255, 255, 0.10);
  transform: translateY(-4px);
}
```

### Stat Tiles (upgraded)
```css
.stat-tile-v2 {
  background: rgba(14, 23, 42, 0.55);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 1rem;
  padding: 1.25rem 1rem;
  position: relative;
  overflow: hidden;
}
.stat-tile-v2::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, #6366F1, #22D3EE);
}
```

### Chip / Badge (JetBrains Mono)
```css
.chip-tech {
  background: rgba(15, 23, 42, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
  color: #22D3EE;
}

.chip-live {
  background: rgba(245, 158, 11, 0.10);
  border: 1px solid rgba(245, 158, 11, 0.30);
  color: #F59E0B;
}
/* Prefix with 6px pulsing amber dot */

.chip-indigo {
  background: rgba(99, 102, 241, 0.10);
  border: 1px solid rgba(99, 102, 241, 0.30);
  color: #8083FF;
}
```

### Navbar (Glass sticky)
```css
.nav-glass {
  position: fixed;
  top: 0; left: 0; right: 0;
  background: rgba(8, 12, 20, 0.80);
  backdrop-filter: blur(24px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  z-index: 50;
}
/* Gradient underline on bottom edge */
.nav-glass::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(99,102,241,0.4), rgba(34,211,238,0.3), transparent);
}
```

### Active Nav Indicator (framer-motion layoutId)
```css
/* gradient underline that slides between nav links */
.nav-active-bar {
  height: 2px;
  background: linear-gradient(90deg, #6366F1, #22D3EE);
  border-radius: 2px;
}
```

---

## Aurora Background (Hero section)
```css
.aurora-bg {
  background:
    radial-gradient(ellipse 80% 60% at 20% 20%, rgba(99, 102, 241, 0.18) 0%, transparent 60%),
    radial-gradient(ellipse 60% 50% at 80% 10%, rgba(34, 211, 238, 0.14) 0%, transparent 50%),
    radial-gradient(ellipse 50% 70% at 50% 80%, rgba(245, 158, 11, 0.08) 0%, transparent 60%),
    #080C14;
}
```

---

## Grid Dot Overlay
```css
.dot-grid {
  background-image:
    radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px);
  background-size: 28px 28px;
}

.line-grid {
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 36px 36px;
}
```

---

## Gradient Text
```css
/* Primary aurora gradient text */
.gradient-text-primary {
  background: linear-gradient(100deg, #22D3EE 0%, #6366F1 45%, #8B5CF6 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* Warm teal-indigo text */
.gradient-text-teal {
  background: linear-gradient(135deg, #14B8A6 0%, #6366F1 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
```

---

## Section-Specific Notes

### Hero
- Two-column layout: text left, profile card right (md:flex-row)
- Background: aurora mesh + dot grid + animated indigo/cyan/amber orbs (float animation)
- Profile card: glass level 2, gradient ring (indigo→cyan), `ring-pulse` animation
- Floating node chips: JetBrains Mono, amber/teal/indigo colors
- Stat tiles: gradient top accent bar (indigo-cyan), count-up animation

### Executive Summary
- Full-width glass card with hero_abstract.jpg banner, dark overlay fade to card
- Left: bio with indigo left border rule
- Right: Competency chips in JetBrains Mono (teal)
- Bottom: 2-col highlight grid with cyan checkmarks

### Portfolio Gateways (Bento)
- 5 cards in flex-wrap (2+2+1 or 3+2 layout)
- Each card: TiltCard wrapper, gradient top accent stripe, badge, icon, title, description, CTA arrow
- Hover: lift -4px, border transitions to cyan glow

### Technologies Marquee
- Single horizontal track, auto-scroll 45s
- Domain cards (glassmorphism): accent color bar, title, description, icon grid
- Fade mask: `mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent)`

### Contact Section
- Scanline overlay animation
- cloud_abstract.jpg: opacity 20-30%, mix-blend-luminosity
- Gradient top accent: teal→indigo→violet
- Two CTAs: aurora gradient + dark glass
- Glow orbs: cyan top-right, indigo bottom-left

---

## Motion Tokens

```css
/* Easing */
--ease-premium:   cubic-bezier(0.22, 1, 0.36, 1);
--ease-spring:    cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-smooth:    cubic-bezier(0.4, 0, 0.2, 1);

/* Durations */
--duration-fast:  0.18s;
--duration-base:  0.35s;
--duration-slow:  0.65s;
--duration-enter: 0.85s;
```
