/**
 * Unified Motion System for Executive Portfolio
 * Standardized easing curves, durations, staggers, and variants.
 * Guarantees that animations strictly use transform and opacity for 60fps GPU execution.
 */

// ─── Easing Curves ───────────────────────────────────────────────────────────
export const EASE_SMOOTH: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const EASE_IN_OUT: [number, number, number, number] = [0.65, 0, 0.35, 1];

// ─── Standard Durations (seconds) ────────────────────────────────────────────
export const DURATION_MICRO = 0.18; // Micro-interactions (hover, tap)
export const DURATION_FAST = 0.35;  // Toggles, tags, badges
export const DURATION_NORMAL = 0.55; // Cards, section reveals, popovers
export const DURATION_SLOW = 0.75;  // Page heroes, large focal elements

// ─── Standard Staggers (seconds) ─────────────────────────────────────────────
export const STAGGER_FAST = 0.05;
export const STAGGER_NORMAL = 0.08;
export const STAGGER_SLOW = 0.12;

// ─── Standard Springs ────────────────────────────────────────────────────────
export const SPRING_TILT = { stiffness: 220, damping: 20 };
export const SPRING_PROGRESS = { stiffness: 350, damping: 35 };
export const SPRING_CURSOR = { stiffness: 450, damping: 32 };
export const SPRING_BOUNCE = { stiffness: 400, damping: 25 };

// ─── Shared Framer Motion Variants ───────────────────────────────────────────

/**
 * Standard container that staggers its direct children
 */
export const staggerContainer = (
  stagger = STAGGER_NORMAL,
  delayChildren = 0.05
) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

/**
 * Clean GPU-accelerated fade up (animates only opacity and translateY)
 */
export const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION_NORMAL,
      ease: EASE_SMOOTH,
    },
  },
};

/**
 * Section reveal variant with subtle vertical translation
 */
export const sectionReveal = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION_NORMAL,
      ease: EASE_SMOOTH,
    },
  },
};

/**
 * Scale-in variant for cards and profile images
 */
export const fadeInScale = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATION_SLOW,
      ease: EASE_SMOOTH,
    },
  },
};

/**
 * Global Page Transition variants
 */
export const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: EASE_SMOOTH,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.22,
      ease: EASE_SMOOTH,
    },
  },
};
