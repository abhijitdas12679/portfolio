"use client";

import { motion } from "framer-motion";
import { EASE_SMOOTH, DURATION_NORMAL } from "@/lib/motion";

const colorMap = {
  indigo: "from-indigo to-cyan",
  teal:   "from-teal to-indigo",
  amber:  "from-accent to-rose",
  rose:   "from-rose to-violet",
} as const;

export default function ChapterHeading({
  number,
  title,
  note,
  color = "indigo",
}: {
  number: string;
  title: string;
  note?: string;
  color?: keyof typeof colorMap;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: DURATION_NORMAL, ease: EASE_SMOOTH }}
      className="mb-8 flex items-center gap-4 md:mb-10"
    >
      {/* Number badge with shimmer glow ring */}
      <div className="relative shrink-0">
        <div
          className={`absolute -inset-[3px] rounded-[16px] bg-gradient-to-br ${colorMap[color]} opacity-50 blur-[6px]`}
        />
        <span
          className={`relative chapter-number flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px] bg-gradient-to-br ${colorMap[color]} font-display text-base text-white shadow-xl z-10`}
        >
          {number}
        </span>
      </div>

      {/* Title block */}
      <div
        className="flex-1 pb-4"
        style={{
          borderBottom: "1px solid transparent",
          backgroundImage: "linear-gradient(90deg, transparent, var(--border), transparent)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 1px",
          backgroundPosition: "bottom",
        }}
      >
        <h2 className="font-display text-2xl tracking-[-0.01em] text-foreground sm:text-3xl">{title}</h2>
        {note && <p className="mt-1 text-sm text-muted-foreground">{note}</p>}
      </div>
    </motion.div>
  );
}
