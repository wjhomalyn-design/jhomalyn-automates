import type { Metadata } from "next";
import { Download } from "lucide-react";
import Button from "@/components/Button";
import GlassCard from "@/components/GlassCard";
import SectionReveal from "@/components/SectionReveal";
import { tools } from "@/lib/data";

export const metadata: Metadata = {
  title: "About — Jhomalyn Automates",
  description:
    "AI automation specialist working across GoHighLevel, Make.com, Zapier, and n8n to remove repetitive work from business operations.",
};

const timeline = [
  {
    year: "Now",
    title: "AI Automation Specialist",
    description:
      "Designing and building automation systems for service businesses — lead capture, CRM, appointments, reporting, and AI-driven follow-up.",
  },
  {
    year: "Earlier",
    title: "Operations & Systems Work",
    description:
      "Spent years inside the operational side of growing businesses, seeing firsthand which tasks ate the most time and which of them could be removed entirely.",
  },
  {
    year: "Foundations",
    title: "Automation Tooling",
    description:
      "Went deep on GoHighLevel, Make.com, Zapier, and n8n — learning not just how to connect tools, but how to design workflows that hold up under real business volume.",
  },
];

const principles = [
  {
    title: "Automate the bottleneck, not the busywork",
    description:
      "The goal isn't fewer clicks — it's removing the step that's actually slowing the business down.",
  },
  {
    title: "Systems should fail loudly, not silently",
    description:
      "Every workflow is built with visibility, so if something breaks, you know before a lead falls through.",
  },
  {
    title: "Simple beats clever",
    description:
      "A workflow your team understands and can hand off is worth more than an impressive one nobody can maintain.",
  },
];

export default function About() {
  return (
    <div className="pt-40 pb-28">
      <section className="container-shell">
        <SectionReveal className="max-w-2xl">
          <p className="eyebrow">About</p>
          <h1 className="mt-3 font-display text-4xl text-ink-100 sm:text-5xl">
            I automate the parts of your business that shouldn't need a human.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-300">
            I'm Jhomalyn — an AI automation specialist who builds the systems
            sitting behind lead capture, CRM, appointments, reporting, and
            follow-up, so business owners spend their time on the work only
            they can do.
          </p>
          <div className="mt-8">
            <Button href="/resume.pdf" download icon={<Download size={16} />}>
              Download Resume
            </Button>
          </div>
        </SectionReveal>
      </section>

      <section className="container-shell mt-24">
        <SectionReveal>
          <p className="eyebrow">Background</p>
          <h2 className="mt-3 font-display text-2xl text-ink-100 sm:text-3xl">
            How I got here
          </h2>
        </SectionReveal>

        <div className="mt-10 space-y-4">
          {timeline.map((item, i) => (
            <SectionReveal key={item.title} delay={i * 0.08}>
              <GlassCard className="grid gap-2 p-6 sm:grid-cols-[120px_1fr] sm:items-start sm:gap-8">
                <p className="text-sm text-electric-glow/80">{item.year}</p>
                <div>
                  <h3 className="font-display text-lg text-ink-100">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">
                    {item.description}
                  </p>
                </div>
              </GlassCard>
            </SectionReveal>
          ))}
        </div>
      </section>

      <section className="container-shell mt-24">
        <SectionReveal>
          <p className="eyebrow">How I work</p>
          <h2 className="mt-3 font-display text-2xl text-ink-100 sm:text-3xl">
            Principles behind every build
          </h2>
        </SectionReveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {principles.map((p, i) => (
            <SectionReveal key={p.title} delay={i * 0.08}>
              <GlassCard className="h-full p-6">
                <h3 className="font-display text-base text-ink-100">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">
                  {p.description}
                </p>
              </GlassCard>
            </SectionReveal>
          ))}
        </div>
      </section>

      <section className="container-shell mt-24">
        <SectionReveal>
          <GlassCard hover={false} className="p-8">
            <p className="eyebrow">Toolkit</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {tools.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/[0.08] px-3 py-1.5 text-sm text-ink-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </GlassCard>
        </SectionReveal>
      </section>
    </div>
  );
}
