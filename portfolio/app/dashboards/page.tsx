"use client";

import { useState } from "react";
import { dashboards } from "@/lib/data";
import { ExternalLink, BarChart3, Monitor, RefreshCw } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import TiltCard from "@/components/TiltCard";
import { EASE_SMOOTH, DURATION_NORMAL, STAGGER_SLOW } from "@/lib/motion";

const visuals = [
  {
    gradient: "from-violet to-indigo",
    accentColor: "#8B5CF6",
    glow: "rgba(139,92,246,0.22)",
    Icon: BarChart3,
  },
  {
    gradient: "from-indigo to-cyan",
    accentColor: "#6366F1",
    glow: "rgba(99,102,241,0.22)",
    Icon: Monitor,
  },
];

function DashboardCard({
  dash,
  idx,
}: {
  dash: { title: string; link: string; image?: string };
  idx: number;
}) {
  const [loaded, setLoaded] = useState(false);
  const v = visuals[idx % visuals.length];

  return (
    <TiltCard glowColor={v.glow}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION_NORMAL, delay: idx * STAGGER_SLOW, ease: EASE_SMOOTH }}
        className="glass-card overflow-hidden rounded-3xl flex flex-col group h-full"
      >
        {/* Gradient accent stripe */}
        <div className={`h-[3px] w-full bg-gradient-to-r ${v.gradient}`} />

        {/* Browser-chrome toolbar */}
        <div className="flex items-center gap-3 border-b border-[var(--card-border)] px-5 py-3"
          style={{ background: "rgba(8,12,20,0.5)" }}
        >
          {/* Traffic lights */}
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500 opacity-90" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500 opacity-90" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-500 opacity-90" />
          </div>

          {/* URL bar (decorative) */}
          <div className="ml-1 flex flex-1 items-center gap-2 rounded-md border border-[var(--card-border)] bg-[var(--muted)]/20 px-3 py-1.5 text-[11px] text-muted-foreground overflow-hidden">
            <span className={`font-mono text-[10px] font-medium`}
              style={{ color: v.accentColor }}
            >
              BI
            </span>
            <span className="truncate font-mono">{dash.title.toLowerCase().replace(/ /g, "-")}</span>
          </div>

          <RefreshCw size={13} className="shrink-0 text-muted-foreground/50 animate-[spin_3s_linear_infinite]" />
        </div>

        {/* Preview area */}
        <div className="relative flex-1 min-h-[260px] md:min-h-[300px] overflow-hidden group/img">
          {dash.image ? (
            <div className="relative h-full w-full min-h-[280px] overflow-hidden bg-[#080C14]">
              <Image
                src={dash.image}
                alt={dash.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-105"
                priority={idx === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080C14]/80 via-transparent to-transparent opacity-60 group-hover/img:opacity-30 transition-opacity duration-300" />
            </div>
          ) : (
            <>
              {/* Skeleton loader */}
              {!loaded && (
                <div className="absolute inset-0 flex flex-col gap-3 p-5" style={{ background: "rgba(8,12,20,0.6)" }}>
                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="rounded-xl border border-[var(--card-border)] p-4">
                        <div className="h-2 w-10 rounded bg-[var(--card-border)] mb-3 animate-pulse" />
                        <div
                          className="h-8 rounded bg-gradient-to-br from-[var(--card-border)] to-transparent animate-pulse"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3 flex-1">
                    <div className="flex-[2] rounded-xl border border-[var(--card-border)] overflow-hidden">
                      <div className="h-full w-full animate-pulse"
                        style={{ background: `linear-gradient(135deg, rgba(99,102,241,0.06) 0%, rgba(34,211,238,0.04) 100%)` }}
                      >
                        <div className="h-full flex items-end gap-1 px-4 pb-4">
                          {[60, 80, 45, 90, 70, 55, 85].map((h, i) => (
                            <div
                              key={i}
                              className="flex-1 rounded-t"
                              style={{
                                height: `${h}%`,
                                background: `rgba(${i % 2 === 0 ? "99,102,241" : "34,211,238"}, 0.3)`,
                                animationDelay: `${i * 0.15}s`,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      {[70, 40, 85, 55].map((w, i) => (
                        <div
                          key={i}
                          className="h-full rounded-xl border border-[var(--card-border)] animate-pulse"
                          style={{ background: `rgba(99,102,241, ${0.03 + i * 0.01})` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* The iframe itself */}
              <iframe
                src={dash.link}
                title={dash.title}
                className={`h-full w-full border-0 transition-opacity duration-500 ${
                  loaded ? "opacity-100" : "opacity-0"
                }`}
                allow="fullscreen"
                onLoad={() => setLoaded(true)}
                style={{ minHeight: "300px" }}
              />
            </>
          )}
        </div>

        {/* Footer link */}
        <div className="flex items-center justify-between border-t border-[var(--card-border)] px-6 py-4">
          <div className="flex items-center gap-3">
            <div className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${v.gradient} text-white shadow-lg`}>
              <v.Icon size={18} />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-foreground capitalize">{dash.title}</h2>
              <p className="text-[11px] text-muted-foreground font-mono">Power BI Report</p>
            </div>
          </div>

          <Link
            href={dash.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-press inline-flex items-center gap-1.5 rounded-full border border-[var(--card-border)] bg-[var(--card)] px-4 py-2 text-xs font-semibold text-muted-foreground transition-all hover:border-cyan/35 hover:text-cyan hover:bg-cyan/8 active:scale-95"
          >
            <ExternalLink size={13} /> Open
          </Link>
        </div>
      </motion.div>
    </TiltCard>
  );
}

export default function DashboardsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <PageHero
        title="PowerBI Dashboards"
        subtitle="Interactive analytics dashboards built for real business intelligence needs — from operational metrics to executive reporting."
        badge="BI & Analytics"
        icon={BarChart3}
        gradient="from-violet to-indigo"
      />

      <div className="mx-auto max-w-5xl px-5 pb-12 pt-4 sm:px-6 md:px-10 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dashboards.map((dash, idx) => (
            <DashboardCard key={idx} dash={dash} idx={idx} />
          ))}
        </div>
      </div>
    </main>
  );
}
