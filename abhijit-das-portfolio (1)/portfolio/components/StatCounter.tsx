"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

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
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={`flex flex-col justify-start text-left ${className}`}
    >
      <div className="flex items-baseline font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl min-h-[2.5rem]">
        {prefix}
        {decimals > 0 ? display.toFixed(decimals) : Math.round(display).toLocaleString()}
        {suffix}
      </div>
      <div className="mt-1.5 text-xs font-medium leading-snug text-slate-400">{label}</div>
    </motion.div>
  );
}
