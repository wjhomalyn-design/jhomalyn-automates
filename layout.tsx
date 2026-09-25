import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Jhomalyn Automates — AI Automation Specialist",
  description:
    "Jhomalyn Automates builds AI systems that automate repetitive business operations — lead capture, CRM, appointments, reporting, and AI follow-ups, using GoHighLevel, Make.com, Zapier, and n8n.",
  metadataBase: new URL("https://jhomalynautomates.com"),
  openGraph: {
    title: "Jhomalyn Automates — AI Automation Specialist",
    description:
      "AI systems that automate repetitive business operations, built on GoHighLevel, Make.com, Zapier, and n8n.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="relative min-h-screen overflow-x-hidden">
        <ParticlesBackground />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
