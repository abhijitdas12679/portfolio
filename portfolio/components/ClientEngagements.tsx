"use client";

import { motion } from "framer-motion";
import { Warehouse, Ship, TrendingUp, Clock, ArrowUpRight } from "lucide-react";
import ChapterHeading from "./ChapterHeading";
import TiltCard from "./TiltCard";
import StatCounter from "./StatCounter";
import { clientEngagements } from "@/lib/data";
import { EASE_SMOOTH, DURATION_NORMAL } from "@/lib/motion";

const visuals = [
  {
    Icon: Warehouse,
    gradient: "from-accent to-rose",
    glow: "rgba(217,119,6,0.22)",
    accentColor: "#F59E0B",
    statPrefix: "",
    statSuffix: "K+",
    statTarget: 50,
    statLabel: "records analyzed",
  },
  {
    Icon: Ship,
    gradient: "from-indigo to-cyan",
    glow: "rgba(99,102,241,0.22)",
    accentColor: "#6366F1",
    statPrefix: "2mo",
    statSuffix: "",
    statTarget: 0,  // display is text, not number
    statLabel: "→ 1yr+ scope growth",
  },
];

export default function ClientEngagements() {
  return (
    <section id="engagements" className="relative mx-auto max-w-6xl px-5 pb-12 pt-1 sm:px-6 sm:pb-16 sm:pt-3 md:px-10 md:pb-20 md:pt-3">
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
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: DURATION_NORMAL, ease: EASE_SMOOTH }}
                className="glass-card glass-card-hover relative z-10 overflow-hidden rounded-3xl"
              >
                {/* Gradient top accent stripe */}
                <div className={`h-[3px] w-full bg-gradient-to-r ${v.gradient}`} />

                <div className="p-6 sm:p-8 md:p-10">
                  {/* Watermark icon */}
                  <v.Icon
                    className="pointer-events-none absolute -right-8 -top-8 h-52 w-52 opacity-[0.025] text-foreground"
                    strokeWidth={0.75}
                  />

                  <div className="relative grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:gap-16">
                    {/* Left — content */}
                    <div className="max-w-2xl">
                      <div className="flex flex-wrap items-center gap-3">
                        <span
                          className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${v.gradient} text-white shadow-lg`}
                        >
                          <v.Icon size={20} strokeWidth={1.75} />
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--card-border)] bg-[var(--card)] px-3.5 py-1 text-xs font-medium text-muted-foreground">
                          <Clock size={11} />
                          {c.duration}
                        </span>
                      </div>

                      <h3 className="mt-5 font-display text-xl tracking-[-0.01em] text-foreground sm:text-2xl">
                        {c.title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {c.description}
                      </p>

                      {/* Key result pill */}
                      <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--card)]/60 px-4 py-2 text-xs font-medium text-muted-foreground">
                        <ArrowUpRight size={12} className="text-cyan" />
                        <span>Key result: </span>
                        <span
                          className="font-semibold"
                          style={{ color: v.accentColor }}
                        >
                          {c.metric} {c.metricLabel}
                        </span>
                      </div>
                    </div>

                    {/* Right — metric counter */}
                    <div className="flex items-start pt-2 md:items-center md:justify-end md:pt-0">
                      <div className="text-left md:text-right">
                        {/* For engagement 0 (50K+ records), use StatCounter */}
                        {i === 0 ? (
                          <StatCounter
                            target={50}
                            suffix="K+"
                            label={c.metricLabel}
                          />
                        ) : (
                          <>
                            <div
                              className={`bg-gradient-to-br ${v.gradient} bg-clip-text font-display text-3xl font-semibold text-transparent sm:text-4xl md:text-5xl`}
                            >
                              {c.metric}
                            </div>
                            <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground md:justify-end">
                              <TrendingUp size={12} />
                              {c.metricLabel}
                            </div>
                          </>
                        )}
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
