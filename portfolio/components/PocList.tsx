"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, HeartPulse, Home, Landmark, Scale, BarChart2, ChevronDown, ExternalLink, Layers } from "lucide-react";
import ChapterHeading from "./ChapterHeading";
import TiltCard from "./TiltCard";
import { pocs } from "@/lib/data";
import { EASE_SMOOTH, DURATION_NORMAL, DURATION_FAST, STAGGER_NORMAL } from "@/lib/motion";

const visuals = [
  { Icon: BarChart2,  gradient: "from-accent to-rose",   glow: "rgba(217,119,6,0.22)",    accentColor: "#F59E0B" },
  { Icon: HeartPulse, gradient: "from-rose to-accent",   glow: "rgba(225,29,72,0.22)",    accentColor: "#F43F5E" },
  { Icon: Home,       gradient: "from-teal to-indigo",   glow: "rgba(20,184,166,0.22)",   accentColor: "#14B8A6" },
  { Icon: Landmark,   gradient: "from-indigo to-violet", glow: "rgba(99,102,241,0.22)",   accentColor: "#6366F1" },
  { Icon: Scale,      gradient: "from-accent to-rose",   glow: "rgba(217,119,6,0.22)",    accentColor: "#F59E0B" },
  { Icon: BarChart2,  gradient: "from-violet to-indigo", glow: "rgba(139,92,246,0.22)",   accentColor: "#8B5CF6" },
];

export default function PocList() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="concepts" className="mx-auto max-w-6xl px-5 pb-12 pt-1 sm:px-6 sm:pb-16 sm:pt-3 md:px-10 md:pb-20 md:pt-3">
      <ChapterHeading
        number="04"
        title="Proof-of-concept designs"
        note="Solution architectures scoped and documented for prospective clients"
        color="rose"
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 items-start">
        {pocs.map((poc, i) => {
          const v = visuals[i % visuals.length];
          const isOpen = expanded === i;
          return (
            <TiltCard key={poc.title} glowColor={v.glow}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: DURATION_NORMAL, ease: EASE_SMOOTH, delay: (i % 2) * STAGGER_NORMAL }}
                className="glass-card relative z-10 flex flex-col rounded-3xl overflow-hidden border border-[var(--card-border)] transition-all duration-350"
                style={{ borderColor: isOpen ? v.accentColor + "40" : undefined }}
              >
                {/* Gradient top stripe */}
                <div className={`h-[2px] w-full bg-gradient-to-r ${v.gradient}`} />

                {/* Header — always visible, clickable to expand */}
                <button
                  type="button"
                  onClick={() => setExpanded(isOpen ? null : i)}
                  className={`flex w-full items-start gap-4 p-6 sm:p-7 text-left group cursor-pointer ${
                    !isOpen ? "min-h-[170px] sm:min-h-[180px]" : ""
                  }`}
                  aria-expanded={isOpen}
                  aria-controls={`poc-content-${i}`}
                >
                  <span
                    className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${v.gradient} text-white shadow-lg transition-transform duration-300 group-hover:scale-105`}
                  >
                    <v.Icon size={20} strokeWidth={1.75} />
                  </span>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-base font-medium tracking-[-0.01em] text-foreground sm:text-lg">
                      {poc.title}
                    </h3>
                    {/* Preview text when collapsed */}
                    <AnimatePresence initial={false}>
                      {!isOpen && (
                        <motion.p
                          key="preview"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-1.5 text-sm text-muted-foreground line-clamp-2"
                        >
                          {poc.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Expand/collapse chevron */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: DURATION_FAST, ease: EASE_SMOOTH }}
                    className="mt-0.5 shrink-0 text-muted-foreground group-hover:text-cyan transition-colors"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                {/* Expandable body — pre-rendered for SEO & accessibility, animated via height */}
                <motion.div
                  id={`poc-content-${i}`}
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: DURATION_NORMAL, ease: EASE_SMOOTH }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0">
                    <div className="border-t border-[var(--card-border)] pt-4">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {poc.description}
                      </p>
                      <a
                        href={poc.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-press mt-5 inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--card)] px-5 py-2.5 text-xs font-semibold text-foreground transition-all hover:border-cyan/35 hover:text-cyan hover:bg-cyan/8"
                      >
                        <FileText size={13} />
                        Read the brief
                        <ExternalLink size={11} className="text-muted-foreground" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </TiltCard>
          );
        })}
      </div>
    </section>
  );
}
