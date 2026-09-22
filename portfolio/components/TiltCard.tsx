"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { SPRING_TILT } from "@/lib/motion";

export default function TiltCard({
  children,
  className = "",
  glowColor = "rgba(99,102,241,0.22)",
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [canTilt, setCanTilt] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // Only enable tilt on desktop devices with hover support and without reduced motion
    const hasHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setCanTilt(hasHover && !reducedMotion);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), SPRING_TILT);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), SPRING_TILT);
  const glowX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!canTilt) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
    setHovering(false);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => {
        if (canTilt) setHovering(true);
      }}
      onMouseLeave={handleLeave}
      style={
        canTilt
          ? { rotateX, rotateY, transformPerspective: 900 }
          : undefined
      }
      className={`relative ${className}`}
    >
      {/* Spotlight radial gradient on mouse hover */}
      {canTilt && (
        <motion.div
          aria-hidden="true"
          style={{
            background: `radial-gradient(220px circle at ${glowX} ${glowY}, ${glowColor}, transparent 70%)`,
            opacity: hovering ? 1 : 0,
          }}
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 rounded-3xl"
        />
      )}
      {children}
    </motion.div>
  );
}
