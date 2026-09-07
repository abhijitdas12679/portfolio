"use client";

import { motion } from "framer-motion";
import { FileText, HeartPulse, Home, Landmark, Scale } from "lucide-react";
import ChapterHeading from "./ChapterHeading";
import TiltCard from "./TiltCard";
import { pocs } from "@/lib/data";

const visuals = [
  { Icon: HeartPulse, gradient: "from-rose to-accent", glow: "rgba(225,29,72,0.25)" },
  { Icon: Home, gradient: "from-teal to-indigo", glow: "rgba(13,148,136,0.25)" },
  { Icon: Landmark, gradient: "from-indigo to-violet", glow: "rgba(79,70,229,0.25)" },
  { Icon: Scale, gradient: "from-accent to-rose", glow: "rgba(217,119,6,0.25)" },
];

export default function PocList() {
  return (
    <section id="concepts" className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-12 md:px-10 md:py-16">
      <ChapterHeading
        number="04"
        title="Proof-of-concept designs"
        note="Solution architectures scoped and documented for prospective clients"
        color="rose"
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {pocs.map((poc, i) => {
          const v = visuals[i];
          return (
            <TiltCard key={poc.title} glowColor={v.glow}>
              <motion.a
                href={poc.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: (i % 2) * 0.08 }}
                className="glass-card glass-card-hover relative z-10 flex h-full flex-col rounded-3xl p-6 sm:p-7"
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${v.gradient} text-white shadow-lg`}
                >
                  <v.Icon size={22} strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-lg font-medium text-white">{poc.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">
                  {poc.description}
                </p>
                <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-4 text-xs font-medium text-slate-300 transition-colors group-hover:text-rose">
                  <FileText size={15} strokeWidth={1.75} />
                  Read the brief
                </div>
              </motion.a>
            </TiltCard>
          );
        })}
      </div>
    </section>
  );
}
