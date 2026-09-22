"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { SPRING_CURSOR } from "@/lib/motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for outer aura ring
  const ringX = useSpring(mouseX, SPRING_CURSOR);
  const ringY = useSpring(mouseY, SPRING_CURSOR);

  useEffect(() => {
    // Only enable on desktop devices with fine pointer (mouse) and no reduced-motion preference
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!finePointer || reducedMotion) {
      return;
    }

    setIsEnabled(true);

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    // Check if hovering over clickable / interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = Boolean(
        target.closest("a, button, [role='button'], input, textarea, select, label, .interactive-hover")
      );
      setIsHovered(isInteractive);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isEnabled) return null;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Outer fluid halo ring */}
      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/40 backdrop-blur-[1px] transition-[width,height,background-color] duration-200 ease-out"
        style={{
          x: ringX,
          y: ringY,
          width: isHovered ? 44 : 28,
          height: isHovered ? 44 : 28,
          backgroundColor: isHovered ? "rgba(34, 211, 238, 0.12)" : "rgba(99, 102, 241, 0.05)",
          borderColor: isHovered ? "rgba(34, 211, 238, 0.7)" : "rgba(99, 102, 241, 0.35)",
        }}
      />

      {/* Inner sharp dot */}
      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan transition-[width,height] duration-150"
        style={{
          x: mouseX,
          y: mouseY,
          width: isHovered ? 6 : 4,
          height: isHovered ? 6 : 4,
          boxShadow: "0 0 10px rgba(34, 211, 238, 0.8)",
        }}
      />
    </div>
  );
}
