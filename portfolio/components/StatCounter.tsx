"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { EASE_OUT_EXPO, EASE_SMOOTH, DURATION_NORMAL } from "@/lib/motion";

export default function StatCounter({
  target,
  prefix = "",
  suffix = "",
  label,
  decimals = 0,
  className = "",
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: EASE_OUT_EXPO,
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: DURATION_NORMAL, ease: EASE_SMOOTH }}
      className={`stat-tile flex flex-col items-center justify-center text-center ${className}`}
    >
      {/* Number */}
      <div className="flex items-baseline justify-center gap-0.5 font-display text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl min-h-[2.5rem]">
        <span className="gradient-text-aurora">
          {prefix}
          {decimals > 0 ? display.toFixed(decimals) : Math.round(display).toLocaleString()}
          {suffix}
        </span>
      </div>
      {/* Label */}
      <div className="mt-1.5 text-xs font-medium leading-snug text-muted-foreground">{label}</div>
    </motion.div>
  );
}
