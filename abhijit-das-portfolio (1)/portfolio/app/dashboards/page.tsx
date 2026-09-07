"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Dashboards from "@/components/Dashboards";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DashboardsPage() {
  return (
    <main className="min-h-screen bg-[#090D16] text-slate-100 pt-24">
      <Nav />
      <div className="mx-auto max-w-6xl px-5 pt-6 sm:px-6 md:px-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 transition-colors hover:text-teal"
        >
          <ArrowLeft size={14} /> Back to Executive Home
        </Link>
      </div>

      <Dashboards />

      <Footer />
    </main>
  );
}
