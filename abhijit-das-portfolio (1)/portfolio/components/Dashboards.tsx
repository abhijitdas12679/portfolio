"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ChapterHeading from "./ChapterHeading";
import GradientOrbs from "./GradientOrbs";
import MiniBarChart from "./MiniBarChart";
import { dashboards } from "@/lib/data";

const visuals = [
  { from: "#FBBF24", to: "#D97706" },
  { from: "#818CF8", to: "#4F46E5" },
];

export default function Dashboards() {
  return (
    <section id="dashboards" className="relative overflow-hidden bg-[#090D16] py-10 sm:py-12 md:py-16">
      <GradientOrbs variant="dark" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
        <ChapterHeading
          number="05"
          title="Power BI dashboards"
          note="Interactive business intelligence reports and analytics models"
          color="indigo"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {dashboards.map((d, i) => {
            const v = visuals[i];
            return (
              <motion.a
                key={d.title}
                href={d.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                className="glass-card glass-card-hover group flex flex-row items-center justify-between gap-4 rounded-3xl p-6 sm:p-7"
              >
                <div className="flex-1">
                  <span className="font-display text-lg font-medium text-white">{d.title}</span>
                  <div className="mt-4">
                    <MiniBarChart colorFrom={v.from} colorTo={v.to} />
                  </div>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all group-hover:scale-110 group-hover:bg-indigo group-hover:border-transparent">
                  <ArrowUpRight size={18} />
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
