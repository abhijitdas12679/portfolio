"use client";

import { motion } from "framer-motion";

const colorMap = {
  indigo: "from-indigo to-violet",
  teal: "from-teal to-indigo",
  amber: "from-accent to-rose",
  rose: "from-rose to-violet",
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
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-8 flex items-center gap-4 md:mb-10"
    >
      <span
        className={`chapter-number flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${colorMap[color]} font-display text-base text-white shadow-lg`}
      >
        {number}
      </span>
      <div className="border-b border-white/10 pb-4 flex-1">
        <h2 className="font-display text-2xl text-white sm:text-3xl">{title}</h2>
        {note && <p className="mt-1 text-sm text-slate-400">{note}</p>}
      </div>
    </motion.div>
  );
}
