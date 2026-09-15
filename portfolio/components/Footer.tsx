import Link from "next/link";
import { Github, Mail } from "lucide-react";
import { contactInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-12 sm:px-6 md:flex-row md:items-center md:px-10">
        <div>
          <Link href="/" className="font-display text-xl italic text-foreground transition-opacity hover:opacity-90">
            Abhijit <span className="gradient-text">Das</span>
          </Link>
          <p className="mt-1 text-xs font-medium text-muted-foreground">AI &amp; Data Specialist</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={contactInfo.outlookMailto}
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-medium text-muted-foreground transition-colors hover:border-teal/40 hover:bg-teal/10 hover:text-teal"
          >
            <Mail size={15} />
            Email (Outlook)
          </a>

          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-medium text-muted-foreground transition-colors hover:border-border hover:bg-card-hover hover:text-foreground"
          >
            <Github size={15} />
            GitHub Profile
          </a>
        </div>
      </div>
    </footer>
  );
}
