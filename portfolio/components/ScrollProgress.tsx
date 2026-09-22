"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { SPRING_PROGRESS } from "@/lib/motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, SPRING_PROGRESS);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 right-0 z-[60] h-[3px] overflow-hidden"
    >
      <motion.div
        className="h-full w-full origin-left bg-gradient-to-r from-indigo via-cyan to-indigo"
        style={{ scaleX }}
      />
    </div>
  );
}
