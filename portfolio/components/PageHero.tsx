"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, type LucideIcon } from "lucide-react";
import GradientOrbs from "@/components/GradientOrbs";
import { EASE_SMOOTH, DURATION_FAST, DURATION_NORMAL } from "@/lib/motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
  badge: string;
  icon: LucideIcon;
  gradient?: string;
  backHref?: string;
  backLabel?: string;
}

export default function PageHero({
  title,
  subtitle,
  badge,
  icon: Icon,
  gradient = "from-indigo to-cyan",
  backHref = "/",
  backLabel = "Back to Executive Home",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-28 pb-5 sm:pt-32 sm:pb-6 aurora-bg">
      <GradientOrbs variant="dark" />
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" />

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: DURATION_FAST, ease: EASE_SMOOTH }}
        >
          <Link
            href={backHref}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-cyan group"
          >
            <ArrowLeft size={13} className="transition-transform group-hover:-translate-x-0.5" />
            {backLabel}
          </Link>
        </motion.div>

        {/* Hero content */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION_NORMAL, ease: EASE_SMOOTH, delay: 0.06 }}
          className="mt-8"
        >
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${gradient} px-4 py-1.5 text-xs font-semibold text-white shadow-lg mb-4`}
          >
            <Icon size={13} />
            {badge}
          </div>

          {/* Title */}
          <h1 className="font-display text-3xl font-normal leading-tight tracking-[-0.02em] text-foreground sm:text-5xl md:text-[3rem]">
            <span className="gradient-text">{title}</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#908FA0] sm:text-base">
            {subtitle}
          </p>

          {/* Decorative separator */}
          <div className="mt-5 gradient-rule" />
        </motion.div>
      </div>
    </section>
  );
}
