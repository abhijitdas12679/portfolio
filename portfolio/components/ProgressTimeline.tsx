"use client";

import { motion } from "framer-motion";
import { Calendar, Sparkles, Tag } from "lucide-react";
import ChapterHeading from "./ChapterHeading";
import TiltCard from "./TiltCard";
import { monthlyProgress } from "@/lib/data";

export default function ProgressTimeline() {
  return (
    <section id="timeline" className="relative mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-12 md:px-10 md:py-16">
      <ChapterHeading
        number="02"
        title="Monthly work progress"
        note="Timeline of technical growth, client engagements, and product releases (March – September)"
        color="teal"
      />

      <div className="relative border-l-2 border-white/10 pl-6 sm:pl-8 md:ml-4 md:pl-10">
        <div className="flex flex-col gap-8">
          {monthlyProgress.map((item, index) => (
            <motion.div
              key={item.month}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-[#090D16] sm:-left-[39px] md:-left-[47px]">
                <div className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${item.color}`} />
              </div>

              <TiltCard glowColor="rgba(20,184,166,0.2)">
                <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-teal/30 bg-teal/10 px-3 py-1 text-xs font-semibold text-teal">
                        <Calendar size={13} />
                        {item.month}
                      </span>
                      <span className="text-xs font-medium text-slate-400">
                        {item.category}
                      </span>
                    </div>
                    {item.month === "September" && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-rose bg-rose/10 border border-rose/20 px-2.5 py-0.5 rounded-full">
                        <Sparkles size={11} /> Active Focus
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 font-display text-lg font-medium text-white sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                    {item.description}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-white/10 pt-3.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 rounded-md bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-slate-400 border border-white/5"
                      >
                        <Tag size={10} className="text-slate-500" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
