"use client";

import { motion } from "framer-motion";
import { ExternalLink, FileText, Mail, ClipboardList, Plane } from "lucide-react";
import ChapterHeading from "./ChapterHeading";
import TiltCard from "./TiltCard";
import { benchApps } from "@/lib/data";
import { EASE_SMOOTH, DURATION_NORMAL, STAGGER_NORMAL } from "@/lib/motion";

const visuals = [
  { Icon: Mail, gradient: "from-teal to-indigo", glow: "rgba(13,148,136,0.28)" },
  { Icon: ClipboardList, gradient: "from-indigo to-violet", glow: "rgba(124,58,237,0.28)" },
  { Icon: Plane, gradient: "from-rose to-accent", glow: "rgba(225,29,72,0.28)" },
];

export default function BenchApps() {
  return (
    <section id="builds" className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-12 md:px-10 md:py-16">
        <ChapterHeading
          number="03"
          title="Applied builds"
          note="Full products designed and shipped independently between client engagements"
          color="teal"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benchApps.map((app, i) => {
            const v = visuals[i];
            const isLastOdd = benchApps.length % 3 !== 0 && i === benchApps.length - 1;
            return (
              <TiltCard key={app.title} glowColor={v.glow} className={isLastOdd ? "sm:max-lg:col-span-2 sm:max-lg:max-w-xl sm:max-lg:mx-auto w-full" : "w-full"}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: DURATION_NORMAL, ease: EASE_SMOOTH, delay: i * STAGGER_NORMAL }}
                  className="glass-card glass-card-hover relative z-10 flex h-full flex-col overflow-hidden rounded-3xl p-6 sm:p-7"
                >
                  <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${v.gradient}`} />
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${v.gradient} text-white shadow-lg`}
                  >
                    <v.Icon size={22} strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-medium text-foreground">{app.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {app.description}
                  </p>
                  <div className="mt-6 flex flex-col gap-2.5 border-t border-border pt-4 text-sm">
                    <a
                      href={app.webLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-medium text-teal transition-colors hover:text-teal/80 hover:underline"
                    >
                      <ExternalLink size={15} strokeWidth={1.75} />
                      View live build
                    </a>
                    {app.docLink && (
                      <a
                        href={app.docLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground hover:underline"
                      >
                        <FileText size={14} strokeWidth={1.75} />
                        Read the write-up
                      </a>
                    )}
                  </div>
                </motion.div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
