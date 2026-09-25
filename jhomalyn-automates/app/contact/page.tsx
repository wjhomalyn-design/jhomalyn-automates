import type { Metadata } from "next";
import { Mail, Linkedin, Clock } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import SectionReveal from "@/components/SectionReveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Jhomalyn Automates",
  description:
    "Start an AI automation project — lead capture, CRM, appointments, reporting, or AI follow-up systems built on GoHighLevel, Make.com, Zapier, or n8n.",
};

const details = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@jhomalynautomates.com",
    href: "mailto:hello@jhomalynautomates.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://linkedin.com",
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within 1 business day",
  },
];

export default function Contact() {
  return (
    <div className="pt-40 pb-28">
      <section className="container-shell">
        <SectionReveal className="max-w-2xl">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-3 font-display text-4xl text-ink-100 sm:text-5xl">
            Let's automate the part of your business that's holding you back.
          </h1>
          <p className="mt-6 text-lg text-ink-300">
            Tell me about the process eating your team's time, and I'll come
            back with how it could run itself.
          </p>
        </SectionReveal>
      </section>

      <section className="container-shell mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionReveal>
          <div className="space-y-4">
            {details.map((d) => {
              const Icon = d.icon;
              const content = (
                <GlassCard className="flex items-center gap-4 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-electric-500/15 text-electric-glow">
                    <Icon size={17} />
                  </div>
                  <div>
                    <p className="text-xs text-ink-500">{d.label}</p>
                    <p className="text-sm text-ink-100">{d.value}</p>
                  </div>
                </GlassCard>
              );
              return d.href ? (
                <a key={d.label} href={d.href} target="_blank" rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                <div key={d.label}>{content}</div>
              );
            })}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <GlassCard hover={false} className="p-8 sm:p-10">
            <ContactForm />
          </GlassCard>
        </SectionReveal>
      </section>
    </div>
  );
}
