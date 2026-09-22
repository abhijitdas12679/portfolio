"use client";

import PocList from "@/components/PocList";
import PageHero from "@/components/PageHero";
import { Layers } from "lucide-react";

export default function ConceptsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <PageHero
        title="Proof of Concepts"
        subtitle="Experimental builds and research implementations exploring the frontier of AI, automation, and data architecture."
        badge="PoC Research"
        icon={Layers}
        gradient="from-emerald to-teal"
      />
      <PocList />
    </main>
  );
}
