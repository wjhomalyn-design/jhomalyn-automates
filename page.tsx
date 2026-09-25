import Link from "next/link";
import { Download, ArrowDown, ArrowUpRight } from "lucide-react";
import Button from "@/components/Button";
import GlassCard from "@/components/GlassCard";
import SectionReveal from "@/components/SectionReveal";
import WorkflowGraphic from "@/components/WorkflowGraphic";
import { caseStudies, services, stats, tools } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-28 sm:pt-48">
        <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
        <div className="container-shell relative grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">AI Automation for GoHighLevel · Make.com · Zapier · n8n</p>
            <h1 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-[1.1] text-ink-100 sm:text-5xl lg:text-[3.4rem]">
              I build AI systems that automate repetitive business operations.
            </h1>
            <p className="mt-6 max-w-lg text-base text-ink-300 sm:text-lg">
              From lead capture to CRM, appointments, reporting, and AI follow-ups.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/resume.pdf" download icon={<Download size={16} />}>
                Download Resume
              </Button>
              <Button href="#case-studies-preview" variant="ghost" icon={<ArrowDown size={16} />}>
                View Case Studies
              </Button>
            </div>

            <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl text-ink-100">{s.value}</p>
                  <p className="text-xs text-ink-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute -inset-10 -z-10 rounded-full bg-electric-500/10 blur-3xl animate-pulse-glow" />
            <WorkflowGraphic />
          </div>
        </div>
      </section>

      {/* Tools strip */}
      <SectionReveal className="border-y border-white/[0.06] py-6">
        <div className="container-shell flex flex-wrap items-center justify-between gap-6">
          <p className="text-xs uppercase tracking-wide text-ink-500">Built on</p>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3 text-sm text-ink-300">
            {tools.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* Services */}
      <section className="py-28">
        <div className="container-shell">
          <SectionReveal>
            <p className="eyebrow">What I automate</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl text-ink-100 sm:text-4xl">
              Systems that run your operations while you run your business.
            </h2>
          </SectionReveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <SectionReveal key={service.title} delay={i * 0.06}>
                <GlassCard className="h-full p-6">
                  <h3 className="font-display text-lg text-ink-100">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-300">
                    {service.description}
                  </p>
                </GlassCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies preview */}
      <section id="case-studies-preview" className="scroll-mt-28 py-28">
        <div className="container-shell">
          <SectionReveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Recent work</p>
              <h2 className="mt-3 max-w-xl font-display text-3xl text-ink-100 sm:text-4xl">
                Real workflows, running for real businesses.
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1 text-sm text-electric-400 hover:text-electric-glow"
            >
              All case studies <ArrowUpRight size={15} />
            </Link>
          </SectionReveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {caseStudies.map((cs, i) => (
              <SectionReveal key={cs.slug} delay={i * 0.08}>
                <GlassCard className="flex h-full flex-col p-6">
                  <p className="text-xs text-electric-glow/80">{cs.industry}</p>
                  <h3 className="mt-2 font-display text-lg text-ink-100">
                    {cs.headline}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-300">
                    {cs.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {cs.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/[0.08] px-2.5 py-1 text-[11px] text-ink-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-32">
        <div className="container-shell">
          <SectionReveal>
            <GlassCard hover={false} className="overflow-hidden p-10 text-center sm:p-16">
              <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
              <div className="relative">
                <h2 className="mx-auto max-w-2xl font-display text-3xl text-ink-100 sm:text-4xl">
                  Ready to take repetitive work off your plate?
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-ink-300">
                  Tell me where the manual work is happening, and I'll show you
                  what it looks like automated.
                </p>
                <div className="mt-8 flex justify-center">
                  <Button href="/contact">Start a project</Button>
                </div>
              </div>
            </GlassCard>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
