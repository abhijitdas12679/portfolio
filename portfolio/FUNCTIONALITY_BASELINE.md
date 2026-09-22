# FUNCTIONALITY BASELINE

> **Purpose**: Immutable checklist to verify nothing functional breaks during the UI redesign.
> **Rule**: Only presentation may change. Everything below must survive unchanged.

## 1. Routes

| Path | File | Page component |
|------|------|----------------|
| `/` | `app/page.tsx` | Home (`"use client"`) |
| `/engagements` | `app/engagements/page.tsx` | `EngagementsPage` |
| `/progress` | `app/progress/page.tsx` | `ProgressPage` |
| `/builds` | `app/builds/page.tsx` | `BuildsPage` |
| `/concepts` | `app/concepts/page.tsx` | `ConceptsPage` |
| `/dashboards` | `app/dashboards/page.tsx` | `DashboardsPage` |

## 2. Components (19 files)

**Shell**: `Nav`, `Footer`, `ThemeProvider`, `ThemeToggle`

**Home**: `GradientOrbs`, `NetworkGraphic`, `StatCounter`, `TiltCard`, `TechnologiesSection`

**Sub-pages**: `PageHero`, `ChapterHeading`, `ClientEngagements`, `ProgressTimeline`, `BenchApps`, `PocList`, `Dashboards`, `MiniBarChart`, `WaveDivider`, `Hero`

## 3. Frozen Links

- GitHub: `https://github.com/abhijitdas12679`
- Outlook mailto: `mailto:abhijitdas_virtualemployee@outlook.com?subject=Inquiry%20from%20Portfolio%20Visitor`
- 3x live app links (Vercel/Render)
- 8+ SharePoint doc links

## 4. Interactive Behaviours

- Animated count-up (StatCounter): 50K+, 6x, 7, 2
- 3-D tilt + spotlight (TiltCard)
- Tech carousel marquee 45s (TechnologiesSection)
- Animated network SVG (NetworkGraphic)
- Nav active indicator layoutId spring
- Mobile menu AnimatePresence height + stagger
- Theme toggle rotate animation
- Hero stagger reveal variants
- Scan-line overlay CSS
- Shimmer on competency chips
- Gradient orb float animations
- Ring pulse on profile card
- MiniBarChart whileInView grow
- whileInView fade-up throughout
- Underline sweep on gateway titles

## 5. CSS Approach

- Tailwind CSS v3, darkMode: 'class'
- CSS custom properties in `:root` and `.dark`
- Custom utilities: `.gradient-text`, `.gradient-text-aurora`, `.glass-card`, `.glass-card-hover`, `.glass-card-premium`, `.stat-tile`, `.shimmer`, `.underline-sweep`, `.scanline-overlay`, `.grid-glow`, `.gradient-rule`, `.ring-pulse`
- Tailwind keyframes: float, floatSlow, marquee, marquee-reverse, shimmer, scanline, ring-pulse, fade-up

## 6. Fonts

- Fraunces (serif): `--font-fraunces` → `font-display`; weights 400/500/600, normal+italic
- IBM Plex Sans: `--font-plex` → `font-body`; weights 300/400/500/600

## 7. Images

- `/images/profile.png` — hero profile card
- `/images/hero_abstract.jpg` — executive summary banner
- `/images/cloud_abstract.jpg` — contact section bg
- `/images/analytics_abstract.jpg` — reserved, not yet used

## 8. Frozen Copy

Headline, subtitle, stat targets, bio, highlights, all gateway/tech/poc/engagement/dashboard content — all from `lib/data.ts`, must not change.
