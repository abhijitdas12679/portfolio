"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { EASE_SMOOTH, DURATION_FAST, DURATION_MICRO, STAGGER_FAST } from "@/lib/motion";

const links = [
  { href: "/",            label: "Home" },
  { href: "/engagements", label: "Client Engagements" },
  { href: "/progress",    label: "Monthly Progress" },
  { href: "/builds",      label: "Applied Builds" },
  { href: "/concepts",    label: "Proof of Concepts" },
  { href: "/dashboards",  label: "PowerBI Dashboards" },
];

const mobileItemVariants = {
  hidden: { opacity: 0, x: -14 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: DURATION_FAST, delay: i * STAGGER_FAST, ease: EASE_SMOOTH },
  }),
  exit: { opacity: 0, x: -8, transition: { duration: DURATION_MICRO, ease: EASE_SMOOTH } },
};

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080C14]/88 backdrop-blur-2xl border-b border-white/[0.06]"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      {/* Gradient bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo/40 to-transparent pointer-events-none" />

      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-6 md:px-10">
        {/* Wordmark */}
        <Link
          href="/"
          className="group flex items-center gap-1.5 font-display text-lg italic text-foreground transition-opacity hover:opacity-90"
        >
          <span className="transition-all duration-300 group-hover:drop-shadow-[0_0_14px_rgba(99,102,241,0.55)]">
            Abhijit
          </span>
          <span className="gradient-text transition-all duration-300 group-hover:drop-shadow-[0_0_18px_rgba(34,211,238,0.45)]">
            Das
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-5 lg:gap-7 md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-xs lg:text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-foreground font-semibold"
                    : "text-[#908FA0] hover:text-foreground"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-[18px] left-0 h-[2px] w-full rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #6366F1, #22D3EE)",
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 dark:border-white/10 bg-white/5 dark:bg-white/5 text-foreground transition-colors hover:bg-white/10 md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileMenuOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0,   opacity: 1 }}
                exit={{   rotate:  90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{   opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/[0.06] bg-[#080C14]/95 backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-4">
              {links.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    custom={i}
                    variants={mobileItemVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                  >
                    <Link
                      href={link.href}
                      className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-indigo/12 text-[#8083FF] border border-indigo/25"
                          : "text-[#908FA0] hover:bg-white/[0.05] hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
