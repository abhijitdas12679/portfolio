"use client";

import { motion } from "framer-motion";
import { Warehouse, Ship, TrendingUp } from "lucide-react";
import ChapterHeading from "./ChapterHeading";
import TiltCard from "./TiltCard";
import { clientEngagements } from "@/lib/data";

const visuals = [
  { Icon: Warehouse, gradient: "from-accent to-rose", glow: "rgba(217,119,6,0.28)" },
  { Icon: Ship, gradient: "from-indigo to-teal", glow: "rgba(79,70,229,0.28)" },
];

export default function ClientEngagements() {
  return (
    <section id="engagements" className="relative mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-12 md:px-10 md:py-16">
      <ChapterHeading
        number="01"
        title="Client engagements"
        note="Contracted work delivered directly for clients"
        color="amber"
      />
      <div className="grid grid-cols-1 gap-8">
        {clientEngagements.map((c, i) => {
          const v = visuals[i];
          return (
            <TiltCard key={c.title} glowColor={v.glow} className="group">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card glass-card-hover relative z-10 overflow-hidden rounded-3xl p-6 sm:p-8 md:p-10"
              >
                <v.Icon
                  className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 text-white/[0.03]"
                  strokeWidth={1}
                />
                <div className="relative grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto] md:gap-14">
                  <div className="max-w-2xl">
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${v.gradient} text-white shadow-lg shadow-amber-500/10`}
                      >
                        <v.Icon size={20} strokeWidth={1.75} />
                      </span>
                      <span className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-xs font-medium text-slate-300">
                        {c.duration}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-xl text-white sm:text-2xl">
                      {c.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">{c.description}</p>
                  </div>
                  <div className="flex items-start pt-2 md:items-center md:justify-end md:pt-0">
                    <div className="text-left md:text-right">
                      <div
                        className={`bg-gradient-to-br ${v.gradient} bg-clip-text font-display text-3xl font-semibold text-transparent sm:text-4xl md:text-5xl`}
                      >
                        {c.metric}
                      </div>
                      <div className="mt-1 flex items-center gap-1 text-xs text-slate-400 md:justify-end">
                        <TrendingUp size={12} />
                        {c.metricLabel}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            </TiltCard>
          );
        })}
      </div>
    </section>
  );
}
