"use client";

import ClientEngagements from "@/components/ClientEngagements";
import PageHero from "@/components/PageHero";
import { Briefcase } from "lucide-react";

export default function EngagementsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <PageHero
        title="Client Engagements"
        subtitle="Contracted work delivered directly for enterprise clients — end-to-end data engineering, AI agent deployment, and cloud architecture."
        badge="Enterprise Work"
        icon={Briefcase}
        gradient="from-accent to-rose"
      />
      <ClientEngagements />
    </main>
  );
}
