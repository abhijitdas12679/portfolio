"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { hero } from "@/lib/data";
import GradientOrbs from "./GradientOrbs";
import NetworkGraphic from "./NetworkGraphic";
import StatCounter from "./StatCounter";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const photoRotate = useTransform(scrollYProgress, [0, 1], [0, 4]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative overflow-hidden bg-night pt-28"
    >
      <GradientOrbs variant="dark" />
      <div className="grid-glow pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-5 pb-8 pt-10 sm:px-6 md:flex-row md:items-center md:gap-16 md:px-10 md:pb-12 md:pt-14">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full max-w-xl text-center md:text-left"
        >
          <motion.p
            variants={item}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/10 px-4 py-1.5 text-xs font-medium text-teal sm:text-sm"
          >
            <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
            AI &amp; Data Trainee
          </motion.p>
          <motion.h1
            variants={item}
            className="font-display text-3xl font-normal leading-[1.15] text-white sm:text-5xl md:text-[3.3rem]"
          >
            Transforming <span className="gradient-text">data</span> into
            actionable AI solutions
          </motion.h1>
          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-md text-base leading-relaxed text-slate-300 md:mx-0 sm:text-[1.05rem]"
          >
            {hero.subtitle}
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-col items-stretch justify-center gap-3.5 sm:flex-row sm:items-center sm:justify-start sm:gap-4">
            <a
              href="#engagements"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal via-indigo to-violet px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-indigo/25 transition-transform hover:scale-[1.02] active:scale-95"
            >
              {hero.cta}
            </a>
            <a
              href="#builds"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-medium text-slate-200 backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white"
            >
              See the builds
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4 sm:gap-x-8"
          >
            <StatCounter target={50} suffix="K+" label="Records analyzed" />
            <StatCounter target={6} suffix="x" label="Contract scope growth" />
            <StatCounter target={7} suffix="" label="AI solutions shipped" />
            <StatCounter target={2} suffix="" label="BI dashboards delivered" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          style={{ y: photoY, rotate: photoRotate }}
          className="relative shrink-0"
        >
          <div className="absolute -inset-4 -z-10 rounded-[28px] bg-gradient-to-br from-teal via-indigo to-violet opacity-60 blur-2xl" />
          <div className="absolute -top-10 -left-10 -z-0 hidden w-[260px] opacity-80 sm:block">
            <NetworkGraphic className="w-full" />
          </div>
          <div className="glass-card relative w-48 rounded-3xl p-3 sm:w-64">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/profile.png"
                alt="Portrait of Abhijit Das"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 640px) 192px, 256px"
              />
            </div>
            <div className="mt-3 flex items-baseline justify-between border-t border-white/15 pt-3">
              <span className="font-display text-sm italic text-white">
                Abhijit Das
              </span>
              <span className="text-xs text-slate-400">Trainee</span>
            </div>
          </div>
        </motion.div>
      </div>

      <svg
        className="relative block w-full text-[#090D16]"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        style={{ height: 24 }}
      >
        <path d="M0,32 C480,90 960,-10 1440,32 L1440,60 L0,60 Z" fill="currentColor" />
      </svg>
    </section>
  );
}
