"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Sparkles,
  Zap,
  TrendingUp,
  Cpu,
  BarChart3,
  Layers,
  Github,
  Mail,
  Send,
} from "lucide-react";
import GradientOrbs from "@/components/GradientOrbs";
import NetworkGraphic from "@/components/NetworkGraphic";
import StatCounter from "@/components/StatCounter";
import TiltCard from "@/components/TiltCard";
import TechnologiesSection from "@/components/TechnologiesSection";
import { hero, profileBio, exploreGateways, contactInfo } from "@/lib/data";
import { EASE_SMOOTH, DURATION_NORMAL, DURATION_SLOW, STAGGER_NORMAL } from "@/lib/motion";

const gatewayIcons = [TrendingUp, Cpu, Zap, Layers, BarChart3];

const heroContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: STAGGER_NORMAL, delayChildren: 0.08 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION_SLOW, ease: EASE_SMOOTH },
  },
};

const skills = [
  "Agentic AI",
  "LangChain",
  "LangGraph",
  "RAG Systems",
  "Power BI",
  "EDA & Analytics",
  "Python & FastAPI",
  "Docker",
  "Docker Compose",
  "Jenkins",
  "Amazon Web Services",
  "Microsoft Azure",
  "Databricks",
  "PySpark",
  "Apache Spark",
  "SQL Server",
  "PostgreSQL",
  "Microsoft SQL Server",
  "ETL",
  "Apache Airflow",
  "Hadoop",
  "Microsoft Fabric",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* ─── Hero Section ─────────────────────────────────────────── */}
      <section id="top" className="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16 aurora-bg">
        {/* Background layers */}
        <GradientOrbs variant="dark" />
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-60" />

        <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-5 pb-8 pt-8 sm:px-6 md:flex-row md:items-center md:gap-16 md:px-10">

          {/* Left — Copy */}
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="show"
            className="w-full max-w-2xl text-center md:text-left"
          >
            {/* Status badge */}
            <motion.div variants={heroItem}>
              <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1.5 text-xs font-semibold text-cyan sm:text-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-60" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-cyan" />
                </span>
                AI &amp; Data Specialist
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={heroItem}
              className="font-display text-3xl font-normal leading-[1.12] tracking-[-0.02em] text-foreground sm:text-5xl md:text-[3.4rem]"
            >
              Architecting{" "}
              <span className="gradient-text">Next-Gen AI Agents</span>
              {" "}& Data Infrastructure
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={heroItem}
              className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#C7C4D7] md:mx-0 sm:text-[1.05rem]"
            >
              {hero.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={heroItem}
              className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-start"
            >
              <Link
                href="/engagements"
                className="group btn-press relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-bold text-[#080C14] shadow-lg shadow-indigo/25 transition-all hover:scale-[1.03] hover:shadow-indigo/40 active:scale-95"
                style={{ background: "linear-gradient(135deg, #6366F1 0%, #22D3EE 100%)" }}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 group-hover:translate-x-[100%]"
                />
                {hero.cta}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>

              <a
                href={contactInfo.outlookMailto}
                className="btn-press inline-flex items-center justify-center gap-2 rounded-full border border-cyan/40 bg-cyan/8 px-6 py-3.5 text-sm font-medium text-cyan backdrop-blur-sm transition-all hover:bg-cyan/15 hover:border-cyan/60 hover:text-white active:scale-95"
              >
                <Mail size={16} />
                Contact Me (Outlook)
              </a>

              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press inline-flex items-center justify-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--card)] px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:border-indigo/35 hover:bg-indigo/8 hover:text-[#8083FF] active:scale-95"
              >
                <Github size={16} />
                GitHub Profile
              </a>
            </motion.div>

            {/* Stat Counters */}
            <motion.div
              variants={heroItem}
              className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              <StatCounter target={50} suffix="K+" label="Records analyzed" />
              <StatCounter target={6}  suffix="x"  label="Contract scope growth" />
              <StatCounter target={7}  suffix=""   label="AI solutions shipped" />
              <StatCounter target={2}  suffix=""   label="BI dashboards delivered" />
            </motion.div>
          </motion.div>

          {/* Right — Profile card */}
          <motion.div
            initial={{ scale: 0.96 }}
            animate={{ scale: 1 }}
            transition={{ duration: DURATION_NORMAL, ease: EASE_SMOOTH }}
            className="relative shrink-0"
          >
            {/* Glow bloom */}
            <div className="absolute -inset-8 -z-10 rounded-[40px] bg-gradient-to-br from-indigo via-cyan to-violet opacity-30 blur-3xl" />
            {/* Network graphic */}
            <div className="absolute -top-10 -left-10 -z-0 hidden w-[260px] opacity-65 sm:block">
              <NetworkGraphic className="w-full" />
            </div>
            {/* Animated gradient ring */}
            <div
              className="absolute -inset-[3px] -z-0 rounded-[28px] ring-pulse"
              style={{
                background:
                  "linear-gradient(135deg, rgba(99,102,241,0.6), rgba(34,211,238,0.5), rgba(139,92,246,0.5))",
                borderRadius: "28px",
                padding: "2px",
              }}
            />
            <div className="glass-card relative w-52 rounded-3xl p-3 sm:w-64 z-10">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/profile.png"
                  alt="Portrait of Abhijit Das, AI & Data Specialist"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 640px) 208px, 256px"
                />
              </div>
              <div className="mt-3 flex items-baseline justify-between border-t border-[var(--card-border)] pt-3">
                <span className="font-display text-sm italic text-foreground">
                  Abhijit Das
                </span>
                <span className="font-mono text-[10px] text-muted-foreground tracking-wide">AI &amp; Data</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Executive Bio & Profile Highlights ───────────────────── */}
      <section className="relative mx-auto max-w-6xl px-5 py-12 sm:px-6 md:px-10 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: DURATION_NORMAL, ease: EASE_SMOOTH }}
          className="glass-card rounded-3xl overflow-hidden border border-[var(--card-border)]"
        >
          {/* Hero banner image */}
          <div className="w-full h-52 relative">
            <Image
              src="/images/hero_abstract.jpg"
              alt="Abstract visualization of enterprise data architecture and AI systems"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 1024px, 1152px"
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--card)]/50 to-[var(--card)]" />
            {/* Gradient top accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, #6366F1, #22D3EE, #8B5CF6)" }} />
          </div>

          <div className="p-7 sm:p-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between relative z-10">
            {/* Bio text with left rule */}
            <div className="max-w-2xl border-l-4 border-l-transparent pl-0 md:border-l-indigo/40 md:pl-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo/30 bg-indigo/10 px-3.5 py-1 text-xs font-semibold text-[#8083FF]">
                <Award size={14} /> Executive Summary
              </div>
              <h2 className="mt-4 font-display text-2xl font-normal sm:text-3xl tracking-[-0.01em]">
                <span className="gradient-text-aurora">Bridging Data Engineering</span>{" "}
                <span className="text-foreground">&amp; Autonomous AI</span>
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#908FA0] sm:text-base">
                {profileBio.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Skills panel */}
            <div className="w-full md:w-80 rounded-2xl border border-[var(--card-border)] bg-[var(--muted)]/30 p-5 backdrop-blur-sm">
              <h3 className="font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                Core Competencies
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span
                    key={skill}
                    className="chip-mono shimmer"
                    style={{ animationDelay: `${i * 0.08}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="border-t border-[var(--card-border)] pt-6 px-7 pb-7 sm:px-10 sm:pb-10 relative z-10">
            <h3 className="text-sm font-semibold text-foreground">Proven Track Record Highlights:</h3>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {profileBio.keyHighlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="flex items-start gap-3 rounded-xl border border-[var(--card-border)] bg-[var(--card)]/60 p-3 transition-all hover:border-cyan/25 hover:bg-cyan/5"
                >
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan" />
                  <span className="text-xs text-muted-foreground sm:text-sm">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── Gateway Grid ─────────────────────────────────────────── */}
      <section className="relative mx-auto max-w-6xl px-5 py-12 sm:px-6 md:px-10 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: DURATION_NORMAL, ease: EASE_SMOOTH }}
          className="mb-10 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#8B5CF6]/35 bg-[#8B5CF6]/15 px-3.5 py-1 text-xs font-semibold text-[#C4B5FD]">
            <Sparkles size={14} /> Portfolio Gateways
          </div>
          <h2 className="mt-3 font-display text-2xl font-normal tracking-[-0.01em] text-foreground sm:text-4xl">
            Explore Detailed Work &amp; Solution Architectures
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Select a dedicated page below to dive into enterprise case studies, live builds, and monthly milestones.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {exploreGateways.map((item, index) => {
            const Icon = gatewayIcons[index % gatewayIcons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: DURATION_NORMAL, delay: index * STAGGER_NORMAL, ease: EASE_SMOOTH }}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <TiltCard glowColor="rgba(99,102,241,0.25)">
                  <Link
                    href={item.href}
                    className="glass-card glass-card-hover group flex h-full flex-col justify-between overflow-hidden rounded-3xl transition-all items-center text-center"
                  >
                    {/* Gradient top accent stripe */}
                    <div className={`w-full h-[3px] bg-gradient-to-r ${item.gradient} opacity-80`} />

                    <div className="flex flex-col items-center p-7 w-full flex-1">
                      <div className="flex flex-col items-center gap-3">
                        {/* Icon */}
                        <span
                          className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl`}
                        >
                          <Icon size={22} />
                        </span>
                        <span className="font-mono rounded-full border border-[var(--card-border)] bg-[var(--card)] px-3 py-1 text-[10px] font-medium tracking-wide text-muted-foreground uppercase">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="mt-5 font-display text-xl font-medium text-foreground transition-colors group-hover:text-cyan underline-sweep">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-auto flex w-full items-center justify-center gap-2 border-t border-[var(--card-border)] px-7 pb-5 pt-4 text-xs font-semibold text-cyan">
                      <span>{item.cta}</span>
                      <ArrowRight size={15} className="transition-transform group-hover:translate-x-1.5" />
                    </div>
                  </Link>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ─── Technologies Section ──────────────────────────────────── */}
      <TechnologiesSection />

      {/* ─── Contact Section ───────────────────────────────────────── */}
      <section id="contact" className="relative mx-auto max-w-6xl px-5 py-12 sm:px-6 md:px-10 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: DURATION_NORMAL, ease: EASE_SMOOTH }}
          className="scanline-overlay glass-card relative overflow-hidden rounded-3xl border border-cyan/20 p-8 sm:p-12 text-center md:text-left"
        >
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/cloud_abstract.jpg"
              alt="Abstract illustration of cloud network connectivity"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 1152px"
              className="object-cover opacity-20 dark:opacity-30 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/60" />
          </div>

          {/* Glow orbs */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan/15 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-indigo/15 blur-3xl pointer-events-none" />

          {/* Gradient top edge accent */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px] z-10 pointer-events-none"
            style={{ background: "linear-gradient(90deg, #6366F1, #22D3EE, #8B5CF6)" }}
          />

          <div className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1 text-xs font-semibold text-cyan">
                <Send size={14} /> Get In Touch
              </div>
              <h2 className="mt-4 font-display text-2xl font-normal tracking-[-0.01em] text-foreground sm:text-4xl">
                Let&apos;s Discuss Your Next AI &amp; Data Solution
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Have a project idea, database migration challenge, or autonomous agent workflow requirement? Reach out directly via Outlook or explore my open-source code repositories on GitHub.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row md:flex-col shrink-0">
              <a
                href={contactInfo.outlookMailto}
                className="group btn-press relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-2xl px-7 py-4 text-sm font-bold text-[#080C14] shadow-xl shadow-indigo/20 transition-all hover:scale-[1.03] hover:shadow-indigo/35 active:scale-95"
                style={{ background: "linear-gradient(135deg, #6366F1 0%, #22D3EE 100%)" }}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-[100%]"
                />
                <Mail size={18} />
                Open Outlook Email
              </a>

              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press inline-flex items-center justify-center gap-2.5 rounded-2xl border border-[var(--card-border)] bg-[var(--card)] px-7 py-4 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-indigo/35 hover:bg-indigo/8 hover:text-[#8083FF] active:scale-95"
              >
                <Github size={18} />
                View GitHub Profile
              </a>
            </div>
          </div>
        </motion.div>
      </section>

    </main>
  );
}
