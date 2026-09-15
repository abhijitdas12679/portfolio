"use client";

import { monthlyProgress } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProgressPage() {
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
        className="text-4xl font-display mb-12 text-center text-foreground"
      >
        Monthly Progress Timeline
      </motion.h1>
      <div className="space-y-8">
        {monthlyProgress.map((item, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            key={idx} 
            className={`p-6 rounded-2xl border border-border bg-card shadow-lg flex flex-col md:flex-row gap-6 relative overflow-hidden group hover:border-teal/50 transition-all`}
          >
            <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${item.color}`} />
            <div className="flex-1 pl-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-semibold text-teal uppercase tracking-wider">{item.month}</span>
                <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground border border-border">{item.category}</span>
              </div>
              <h2 className="text-2xl font-display text-foreground mb-3">{item.title}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="text-xs border border-border bg-muted/50 text-muted-foreground px-2.5 py-1 rounded-md">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </main>
  );
}
