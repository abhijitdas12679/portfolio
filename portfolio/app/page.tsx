"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Award, CheckCircle2, Sparkles, Zap, TrendingUp, Cpu, BarChart3, Layers, Github, Mail, Send } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientOrbs from "@/components/GradientOrbs";
import NetworkGraphic from "@/components/NetworkGraphic";
import StatCounter from "@/components/StatCounter";
import TiltCard from "@/components/TiltCard";
import { hero, profileBio, exploreGateways, contactInfo } from "@/lib/data";

const gatewayIcons = [TrendingUp, Cpu, Zap, Layers, BarChart3];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090D16] text-slate-100">
      <Nav />

      {/* Hero Section */}
      <section id="top" className="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16">
        <GradientOrbs variant="dark" />
        <div className="grid-glow pointer-events-none absolute inset-0 opacity-40" />

        <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-5 pb-8 pt-8 sm:px-6 md:flex-row md:items-center md:gap-16 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-2xl text-center md:text-left"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-xs font-semibold text-teal sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
              AI &amp; Data Specialist
            </div>

            <h1 className="font-display text-3xl font-normal leading-[1.15] text-white sm:text-5xl md:text-[3.3rem]">
              Architecting <span className="gradient-text">Next-Gen AI Agents</span> &amp; Data Infrastructure
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300 md:mx-0 sm:text-[1.05rem]">
              {hero.subtitle}
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3.5 sm:flex-row sm:items-center sm:justify-start sm:gap-4">
              <Link
                href="/engagements"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal via-indigo to-violet px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-indigo/25 transition-transform hover:scale-[1.02] active:scale-95"
              >
                {hero.cta}
                <ArrowRight size={16} />
              </Link>

              <a
                href={contactInfo.outlookMailto}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-teal/40 bg-teal/10 px-6 py-3.5 text-sm font-medium text-teal backdrop-blur-sm transition-colors hover:bg-teal/20 hover:text-white"
              >
                <Mail size={16} />
                Contact Me (Outlook)
              </a>

              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-slate-200 backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white"
              >
                <Github size={16} />
                GitHub Profile
              </a>
            </div>

            {/* Aligned Stat Counters */}
            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4 border-t border-white/10 pt-8">
              <StatCounter target={50} suffix="K+" label="Records analyzed" />
              <StatCounter target={6} suffix="x" label="Contract scope growth" />
              <StatCounter target={7} suffix="" label="AI solutions shipped" />
              <StatCounter target={2} suffix="" label="BI dashboards delivered" />
            </div>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative shrink-0"
          >
            <div className="absolute -inset-4 -z-10 rounded-[28px] bg-gradient-to-br from-teal via-indigo to-violet opacity-60 blur-2xl" />
            <div className="absolute -top-10 -left-10 -z-0 hidden w-[260px] opacity-80 sm:block">
              <NetworkGraphic className="w-full" />
            </div>
            <div className="glass-card relative w-52 rounded-3xl p-3 sm:w-64">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/profile.png"
                  alt="Portrait of Abhijit Das"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 640px) 208px, 256px"
                />
              </div>
              <div className="mt-3 flex items-baseline justify-between border-t border-white/15 pt-3">
                <span className="font-display text-sm italic text-white">
                  Abhijit Das
                </span>
                <span className="text-xs text-slate-400">AI &amp; Data Specialist</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Executive Bio & Profile Highlights Section */}
      <section className="relative mx-auto max-w-6xl px-5 py-12 sm:px-6 md:px-10 md:py-16">
        <div className="glass-card rounded-3xl p-7 sm:p-10 border border-white/10 bg-gradient-to-b from-[#131B2E]/80 to-[#0E1424]/90">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo/30 bg-indigo/10 px-3.5 py-1 text-xs font-semibold text-indigo">
                <Award size={14} /> Executive Summary
              </div>
              <h2 className="mt-4 font-display text-2xl font-normal text-white sm:text-3xl">
                Bridging Data Engineering &amp; Autonomous AI
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                {profileBio.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="w-full md:w-80 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Core Competencies
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Agentic AI", "LangChain", "LangGraph", "RAG Systems", "SQL Migration", "Power BI", "EDA & Analytics", "Python & FastAPI"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-teal/10 border border-teal/20 px-2.5 py-1 text-xs font-medium text-teal"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <h3 className="text-sm font-semibold text-white">Proven Track Record Highlights:</h3>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {profileBio.keyHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-teal" />
                  <span className="text-xs text-slate-300 sm:text-sm">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gateway Grid to Sub-Pages */}
      <section className="relative mx-auto max-w-6xl px-5 py-12 sm:px-6 md:px-10 md:py-16">
        <div className="mb-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet/30 bg-violet/10 px-3.5 py-1 text-xs font-semibold text-violet">
            <Sparkles size={14} /> Portfolio Gateways
          </div>
          <h2 className="mt-3 font-display text-2xl font-normal text-white sm:text-4xl">
            Explore Detailed Work &amp; Solution Architectures
          </h2>
          <p className="mt-2 text-sm text-slate-400 sm:text-base">
            Select a dedicated page below to dive into enterprise case studies, live builds, and monthly milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {exploreGateways.map((item, index) => {
            const Icon = gatewayIcons[index % gatewayIcons.length];
            return (
              <TiltCard key={item.title} glowColor="rgba(99,102,241,0.25)">
                <Link
                  href={item.href}
                  className="glass-card glass-card-hover group flex h-full flex-col justify-between overflow-hidden rounded-3xl p-7 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-lg`}>
                        <Icon size={20} />
                      </span>
                      <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold text-slate-300">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-xl font-medium text-white transition-colors group-hover:text-teal">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-xs leading-relaxed text-slate-300 sm:text-sm">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-semibold text-teal group-hover:underline">
                    <span>{item.cta}</span>
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </TiltCard>
            );
          })}
        </div>
      </section>

      {/* Dedicated Contact Me Section */}
      <section id="contact" className="relative mx-auto max-w-6xl px-5 py-12 sm:px-6 md:px-10 md:py-16">
        <div className="glass-card relative overflow-hidden rounded-3xl border border-teal/30 bg-gradient-to-br from-[#0E1424] via-[#131B2E] to-[#090D16] p-8 sm:p-12 text-center md:text-left">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal/20 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-indigo/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-3.5 py-1 text-xs font-semibold text-teal">
                <Send size={14} /> Get In Touch
              </div>
              <h2 className="mt-4 font-display text-2xl font-normal text-white sm:text-4xl">
                Let's Discuss Your Next AI &amp; Data Solution
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                Have a project idea, database migration challenge, or autonomous agent workflow requirement? Reach out directly via Outlook or explore my open-source code repositories on GitHub.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row md:flex-col shrink-0">
              <a
                href={contactInfo.outlookMailto}
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-teal to-indigo px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-teal/20 transition-transform hover:scale-[1.03] active:scale-95"
              >
                <Mail size={18} />
                Open Outlook Email
              </a>

              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white"
              >
                <Github size={18} />
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
