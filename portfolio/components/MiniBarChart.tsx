"use client";

import { motion } from "framer-motion";

const bars = [40, 65, 35, 80, 55, 95, 45];

export default function MiniBarChart({ colorFrom, colorTo }: { colorFrom: string; colorTo: string }) {
  return (
    <svg viewBox="0 0 140 60" className="h-14 w-32" fill="none">
      <defs>
        <linearGradient id={`bar-${colorFrom}-${colorTo}`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor={colorFrom} />
          <stop offset="100%" stopColor={colorTo} />
        </linearGradient>
      </defs>
      {bars.map((h, i) => (
        <motion.rect
          key={i}
          x={i * 20 + 4}
          width={12}
          rx={3}
          fill={`url(#bar-${colorFrom}-${colorTo})`}
          initial={{ height: 0, y: 60 }}
          whileInView={{ height: h * 0.6, y: 60 - h * 0.6 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
    </svg>
  );
}
