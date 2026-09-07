"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Home as HomeIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/engagements", label: "Client Engagements" },
  { href: "/progress", label: "Monthly Progress" },
  { href: "/builds", label: "Applied Builds" },
  { href: "/concepts", label: "Proof of Concepts" },
  { href: "/dashboards", label: "Dashboards" },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#090D16]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-6 md:px-10">
        <Link href="/" className="flex items-center gap-2 font-display text-lg italic text-white transition-opacity hover:opacity-90">
          Abhijit <span className="gradient-text">Das</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-xs lg:text-sm font-medium transition-colors ${
                  isActive ? "text-white font-semibold" : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-teal to-indigo rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-200 transition-colors hover:bg-white/10 md:hidden"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/10 bg-[#090D16]/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-4">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      isActive
                        ? "bg-teal/15 text-teal border border-teal/30"
                        : "text-slate-200 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
