"use client";

import { motion } from "framer-motion";

const nodes = [
  { x: 40, y: 60, r: 5, color: "#FBBF24", delay: 0 },
  { x: 140, y: 30, r: 4, color: "#818CF8", delay: 0.2 },
  { x: 230, y: 90, r: 6, color: "#2DD4BF", delay: 0.4 },
  { x: 110, y: 140, r: 4, color: "#F472B6", delay: 0.6 },
  { x: 300, y: 40, r: 4, color: "#FBBF24", delay: 0.3 },
  { x: 260, y: 160, r: 5, color: "#818CF8", delay: 0.5 },
  { x: 30, y: 160, r: 4, color: "#2DD4BF", delay: 0.1 },
];

const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [1, 3],
  [2, 4],
  [2, 5],
  [3, 6],
  [0, 3],
  [4, 5],
];

export default function NetworkGraphic({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 340 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {edges.map(([a, b], i) => {
        const from = nodes[a];
        const to = nodes[b];
        return (
          <motion.line
            key={i}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke="rgba(255,255,255,0.28)"
            strokeWidth={1}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 + i * 0.12, ease: "easeOut" }}
          />
        );
      })}
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={n.r}
          fill={n.color}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.3, 1], opacity: 1 }}
          transition={{ duration: 0.6, delay: n.delay + 0.3 }}
        />
      ))}
      {nodes.map((n, i) => (
        <motion.circle
          key={`pulse-${i}`}
          cx={n.x}
          cy={n.y}
          r={n.r}
          fill="none"
          stroke={n.color}
          strokeWidth={1}
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ scale: [1, 2.4], opacity: [0.5, 0] }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            delay: n.delay + 1.5,
            ease: "easeOut",
          }}
        />
      ))}
    </svg>
  );
}
