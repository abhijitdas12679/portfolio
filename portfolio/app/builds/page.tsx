"use client";

import { benchApps } from "@/lib/data";
import { ExternalLink, FileText, Zap, Circle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import TiltCard from "@/components/TiltCard";
import { EASE_SMOOTH, DURATION_NORMAL, STAGGER_NORMAL } from "@/lib/motion";

const visuals = [
  { gradient: "from-teal to-indigo",   accentColor: "#14B8A6", dot1: "#ef4444", dot2: "#f59e0b", dot3: "#22c55e" },
  { gradient: "from-indigo to-violet", accentColor: "#6366F1", dot1: "#ef4444", dot2: "#f59e0b", dot3: "#22c55e" },
  { gradient: "from-rose to-accent",   accentColor: "#F43F5E", dot1: "#ef4444", dot2: "#f59e0b", dot3: "#22c55e" },
];

export default function BuildsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <PageHero
        title="Applied AI Builds"
        subtitle="Production-grade AI applications and tools — from autonomous agent workflows to real-time data pipelines and interactive demos."
        badge="Applied Builds"
        icon={Zap}
        gradient="from-violet to-rose"
      />

      <div className="mx-auto max-w-6xl px-5 pb-12 pt-4 sm:px-6 md:px-10 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benchApps.map((app, idx) => {
            const v = visuals[idx % visuals.length];
            const isLastOdd = benchApps.length % 2 !== 0 && idx === benchApps.length - 1;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: DURATION_NORMAL, delay: idx * STAGGER_NORMAL, ease: EASE_SMOOTH }}
                className={isLastOdd ? "md:col-span-2 md:max-w-xl md:mx-auto w-full" : "w-full"}
              >
                <TiltCard glowColor={`${v.accentColor}33`} className="h-full">
                  <div className="glass-card glass-card-hover rounded-3xl overflow-hidden h-full flex flex-col group">

                    {/* ── Browser chrome frame ── */}
                    <div
                      className="flex items-center gap-2 px-4 py-3 border-b border-[var(--card-border)]"
                      style={{ background: "rgba(8,12,20,0.6)" }}
                    >
                      {/* Traffic light dots */}
                      <Circle size={11} fill={v.dot1} stroke="none" className="opacity-90" />
                      <Circle size={11} fill={v.dot2} stroke="none" className="opacity-90" />
                      <Circle size={11} fill={v.dot3} stroke="none" className="opacity-90" />

                      {/* Fake URL bar */}
                      <div className="ml-2 flex-1 max-w-xs">
                        <div className="flex items-center gap-1.5 rounded-md border border-[var(--card-border)] bg-[var(--muted)]/30 px-3 py-1 text-[10px] font-mono text-muted-foreground truncate">
                          <span className="text-cyan shrink-0">●</span>
                          <span className="truncate">
                            {app.webLink?.replace("https://", "") ?? "localhost:3000"}
                          </span>
                        </div>
                      </div>

                      {/* Gradient top indicator */}
                      <div className={`ml-auto h-2 w-2 rounded-full bg-gradient-to-br ${v.gradient} shadow-lg`} />
                    </div>

                    {/* ── Card body ── */}
                    <div className="flex flex-col flex-1 p-7">
                      {/* Icon badge */}
                      <div className={`w-fit rounded-2xl bg-gradient-to-br ${v.gradient} p-2.5 shadow-lg mb-4`}>
                        <Zap size={20} className="text-white" />
                      </div>

                      <h2 className="font-display text-xl tracking-[-0.01em] text-foreground group-hover:text-cyan transition-colors">
                        {app.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-1">
                        {app.description}
                      </p>

                      {/* Action links */}
                      <div className="mt-6 flex flex-wrap gap-3 border-t border-[var(--card-border)] pt-5">
                        {app.webLink && (
                          <Link
                            href={app.webLink}
                            target="_blank"
                            className="group/btn btn-press relative inline-flex items-center gap-2 overflow-hidden rounded-full px-5 py-2 text-sm font-semibold text-[#080C14] shadow-lg transition-all hover:scale-[1.03] hover:shadow-xl active:scale-95"
                            style={{ background: `linear-gradient(135deg, ${v.accentColor}, #6366F1)` }}
                          >
                            <span
                              aria-hidden
                              className="pointer-events-none absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover/btn:translate-x-[100%]"
                            />
                            <ExternalLink size={14} /> Live Demo
                          </Link>
                        )}
                        {app.docLink && (
                          <Link
                            href={app.docLink}
                            target="_blank"
                            className="btn-press inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--card)] px-5 py-2 text-sm font-medium text-muted-foreground transition-all hover:border-indigo/35 hover:text-foreground active:scale-95"
                          >
                            <FileText size={14} /> Read Docs
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
