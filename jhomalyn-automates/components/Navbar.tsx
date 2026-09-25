"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-shell">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/[0.06] bg-base-950/70 px-5 py-3 backdrop-blur-xl">
          <Link href="/" className="font-display text-lg font-semibold text-ink-100">
            Jhomalyn<span className="text-electric-400">.</span>Automates
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm transition-colors ${
                    active ? "text-ink-100" : "text-ink-300 hover:text-ink-100"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 h-px w-full bg-electric-400"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="hidden rounded-full bg-electric-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-electric-600 md:inline-block"
          >
            Start a project
          </Link>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="text-ink-100 md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2 overflow-hidden rounded-2xl border border-white/[0.06] bg-base-950/90 backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-1 p-4">
                {LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-3 py-2 text-sm ${
                      pathname === link.href
                        ? "bg-white/[0.06] text-ink-100"
                        : "text-ink-300 hover:text-ink-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-full bg-electric-500 px-4 py-2 text-center text-sm font-medium text-white"
                >
                  Start a project
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
