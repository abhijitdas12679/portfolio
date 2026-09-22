import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import PageTransition from "@/components/PageTransition";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import PageIntro from "@/components/PageIntro";
import AnimatedBackground from "@/components/AnimatedBackground";
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
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Executive Portfolio | Abhijit Das",
  description:
    "Data Engineering, AI, and Cloud Architecture Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${plex.variable} ${mono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground font-body antialiased min-h-screen selection:bg-indigo/25 selection:text-white flex flex-col transition-colors duration-300 relative">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <PageIntro />
        <ScrollProgress />
        <CustomCursor />
        <AnimatedBackground />

        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <SmoothScrollProvider>
            <Nav />
            <div id="main-content" className="relative z-10 flex-1">
              <PageTransition>{children}</PageTransition>
            </div>
            <Footer />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
