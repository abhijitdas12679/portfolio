"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE_SMOOTH } from "@/lib/motion";

export default function PageIntro() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only run on first mount if not reduced motion
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReduced) return;

    const hasLoadedBefore = sessionStorage.getItem("page_intro_seen");
    if (!hasLoadedBefore) {
      setMounted(true);
      sessionStorage.setItem("page_intro_seen", "true");
      const timer = setTimeout(() => {
        setMounted(false);
      }, 280);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {mounted && (
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: EASE_SMOOTH }}
          className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-[#080C14]"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.05, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE_SMOOTH }}
            className="flex items-center gap-2 font-display text-2xl italic tracking-tight"
          >
            <span className="text-[#DFE2EE]">Abhijit</span>
            <span className="gradient-text">Das</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
