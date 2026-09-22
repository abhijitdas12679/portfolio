"use client";

import { monthlyProgress } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Calendar, Sparkles, Tag } from "lucide-react";
import PageHero from "@/components/PageHero";
import { EASE_SMOOTH, DURATION_NORMAL } from "@/lib/motion";

export default function ProgressPage() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 85%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <PageHero
        title="Monthly Progress Timeline"
        subtitle="A chronological record of technical growth, client deliverables, and product releases — March through September."
        badge="Work Timeline"
        icon={Calendar}
        gradient="from-teal to-indigo"
      />

      <div className="mx-auto max-w-5xl px-5 pb-12 pt-4 sm:px-6 md:px-10 md:pb-24">

        {/* Timeline track */}
        <div ref={timelineRef} className="relative">

          {/* Static track line (gray) */}
          <div className="absolute left-[11px] top-6 bottom-6 w-[2px] bg-[var(--card-border)]" />

          {/* Scroll-animated fill line (blue ray) */}
          <motion.div
            className="absolute left-[11px] top-6 w-[2px] origin-top shadow-[0_0_12px_#22D3EE]"
            style={{
              height: lineHeight,
              background: "linear-gradient(to bottom, #6366F1 0%, #38BDF8 60%, #22D3EE 100%)",
            }}
          />

          <div className="flex flex-col gap-8 pl-12">
            {monthlyProgress.map((item, idx) => (
              <motion.div
                key={item.month}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: DURATION_NORMAL, delay: 0.05, ease: EASE_SMOOTH }}
                className="relative"
              >
                {/* Dot on timeline - centered exactly in middle of line */}
                <div
                  className="absolute -left-12 top-6 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[var(--card-border)] bg-background shadow-md"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${item.color}`}
                  />
                </div>

                {/* Card */}
                <div className="glass-card glass-card-hover rounded-3xl overflow-hidden group cursor-default">
                  {/* Gradient left accent bar */}
                  <div className={`absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b ${item.color} rounded-l-3xl`} />

                  <div className="p-6 sm:p-7 pl-8">
                    {/* Header row */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo/30 bg-indigo/10 px-3 py-1 text-xs font-semibold text-[#8083FF]">
                          <Calendar size={12} />
                          {item.month}
                        </span>
                        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
                          {item.category}
                        </span>
                      </div>
                      {item.month === "September" && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-rose bg-rose/10 border border-rose/20 px-2.5 py-0.5 rounded-full">
                          <Sparkles size={11} /> Active Focus
                        </span>
                      )}
                    </div>

                    <h3 className="mt-4 font-display text-lg font-medium tracking-[-0.01em] text-foreground sm:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-[var(--card-border)] pt-3.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 rounded-md bg-[var(--muted)]/50 px-2.5 py-1 text-[11px] font-mono font-medium text-muted-foreground border border-[var(--card-border)] tracking-wide"
                        >
                          <Tag size={9} className="text-muted-foreground" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
