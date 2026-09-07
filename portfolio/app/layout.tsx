import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhijit Das — AI & Data Trainee",
  description:
    "Portfolio of Abhijit Das, AI & Data Trainee — client engagements, applied AI builds, and proof-of-concept work.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plex.variable} scroll-smooth`}>
      <body className="bg-dark text-slate-100 font-body antialiased min-h-screen selection:bg-teal/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
