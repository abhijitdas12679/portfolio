"use client";

import { dashboards } from "@/lib/data";
import { ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DashboardsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-24">
      <div className="mx-auto max-w-6xl px-5 pt-6 sm:px-6 md:px-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-teal"
        >
          <ArrowLeft size={14} /> Back to Executive Home
        </Link>
      </div>
      <div className="mx-auto max-w-5xl px-5 pb-12 pt-8 sm:px-6 md:px-10 md:pb-24 md:pt-12">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-display mb-12 text-center text-white"
      >
        Power BI Dashboards
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {dashboards.map((dash, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            key={idx}
          >
            <Link href={dash.link} target="_blank" className="block p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent shadow-xl transition-all hover:-translate-y-1 hover:border-white/20 group h-full">
              <div className="flex justify-between items-start gap-4">
                <h2 className="text-xl font-display text-white group-hover:text-teal transition-colors">{dash.title}</h2>
                <ExternalLink size={20} className="text-slate-500 group-hover:text-teal transition-colors" />
              </div>
              <p className="text-slate-400 text-sm mt-4">View interactive analytics dashboard →</p>
            </Link>
          </motion.div>
        ))}
      </div>
      </div>
    </main>
  );
}
