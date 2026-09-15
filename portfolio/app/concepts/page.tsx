"use client";

import PocList from "@/components/PocList";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ConceptsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-24">
      <div className="mx-auto max-w-6xl px-5 pt-6 sm:px-6 md:px-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-teal"
        >
          <ArrowLeft size={14} /> Back to Executive Home
        </Link>
      </div>

      <PocList />
    </main>
  );
}
