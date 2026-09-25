import Link from "next/link";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-32 border-t border-white/[0.06]">
      <div className="container-shell flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg text-ink-100">
            Jhomalyn<span className="text-electric-400">.</span>Automates
          </p>
          <p className="mt-2 max-w-sm text-sm text-ink-500">
            AI systems for GoHighLevel, Make.com, Zapier, and n8n — built to run
            your operations while you build your business.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink-300">
          <Link href="/case-studies" className="inline-flex items-center gap-1 hover:text-ink-100">
            Case studies <ArrowUpRight size={14} />
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-1 hover:text-ink-100">
            Book a call <ArrowUpRight size={14} />
          </Link>
          <a
            href="mailto:hello@jhomalynautomates.com"
            className="inline-flex items-center gap-2 hover:text-ink-100"
          >
            <Mail size={15} /> hello@jhomalynautomates.com
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-ink-100"
          >
            <Linkedin size={15} /> LinkedIn
          </a>
        </div>
      </div>
      <div className="container-shell flex flex-col-reverse gap-2 border-t border-white/[0.04] py-6 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Jhomalyn Automates. All rights reserved.</p>
        <p>Built with Next.js, Tailwind CSS, and Framer Motion.</p>
      </div>
    </footer>
  );
}
