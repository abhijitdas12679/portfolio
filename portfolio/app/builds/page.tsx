"use client";

import { benchApps } from "@/lib/data";
import { ExternalLink, FileText, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BuildsPage() {
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
      <div className="mx-auto max-w-6xl px-5 pb-12 pt-8 sm:px-6 md:px-10 md:pb-24 md:pt-12">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-display mb-12 text-center text-white"
      >
        Applied AI Builds
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {benchApps.map((app, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            key={idx} 
            className="p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent shadow-xl flex flex-col transition-all hover:border-white/20"
          >
            <h2 className="text-2xl font-display text-white mb-4">{app.title}</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">{app.description}</p>
            <div className="flex flex-wrap gap-4 mt-auto">
              {app.webLink && (
                <Link href={app.webLink} target="_blank" className="inline-flex items-center gap-2 bg-teal/10 text-teal border border-teal/20 px-4 py-2 rounded-full text-sm font-medium hover:bg-teal/20 transition-colors">
                  <ExternalLink size={16} /> Live Demo
                </Link>
              )}
              {app.docLink && (
                <Link href={app.docLink} target="_blank" className="inline-flex items-center gap-2 bg-white/5 text-slate-300 border border-white/10 px-4 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-colors">
                  <FileText size={16} /> Read Docs
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </main>
  );
}
