import Link from "next/link";
import { Github, Mail } from "lucide-react";
import { contactInfo } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-background">
      {/* Gradient separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-indigo/30 to-transparent" />
      {/* Subtle aurora glow behind footer */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-20 left-1/4 h-48 w-96 rounded-full bg-indigo/10 blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 h-48 w-64 rounded-full bg-cyan/8 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-10 sm:px-6 md:flex-row md:items-center md:px-10">
        {/* Brand */}
        <div>
          <Link
            href="/"
            className="group flex items-center gap-1.5 font-display text-2xl italic text-foreground transition-opacity hover:opacity-90"
          >
            <span className="transition-all duration-300 group-hover:drop-shadow-[0_0_14px_rgba(99,102,241,0.55)]">
              Abhijit
            </span>
            <span className="gradient-text transition-all duration-300 group-hover:drop-shadow-[0_0_16px_rgba(34,211,238,0.4)]">
              Das
            </span>
          </Link>
          <p className="mt-1 text-xs font-medium text-muted-foreground">AI &amp; Data Specialist</p>
          <p className="mt-0.5 text-[11px] text-muted-foreground/50">
            &copy; {year} Abhijit Das. All rights reserved.
          </p>
        </div>

        {/* Contact links */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={contactInfo.outlookMailto}
            className="btn-press inline-flex items-center gap-2 rounded-xl border border-[var(--card-border)] bg-[var(--card)] px-4 py-2.5 text-xs font-medium text-muted-foreground backdrop-blur-sm transition-all hover:border-cyan/35 hover:bg-cyan/8 hover:text-cyan hover:shadow-md hover:shadow-cyan/10"
          >
            <Mail size={14} />
            Email (Outlook)
          </a>

          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-press inline-flex items-center gap-2 rounded-xl border border-[var(--card-border)] bg-[var(--card)] px-4 py-2.5 text-xs font-medium text-muted-foreground backdrop-blur-sm transition-all hover:border-indigo/35 hover:bg-indigo/8 hover:text-[#8083FF] hover:shadow-md hover:shadow-indigo/10"
          >
            <Github size={14} />
            GitHub Profile
          </a>
        </div>
      </div>
    </footer>
  );
}
