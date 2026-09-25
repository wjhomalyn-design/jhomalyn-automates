import type { Metadata } from "next";
import GlassCard from "@/components/GlassCard";
import SectionReveal from "@/components/SectionReveal";
import Button from "@/components/Button";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Case Studies — Jhomalyn Automates",
  description:
    "Case studies of AI automation systems built with GoHighLevel, Make.com, Zapier, and n8n — lead capture, CRM, appointments, and reporting.",
};

export default function CaseStudies() {
  return (
    <div className="pt-40 pb-28">
      <section className="container-shell">
        <SectionReveal className="max-w-2xl">
          <p className="eyebrow">Case studies</p>
          <h1 className="mt-3 font-display text-4xl text-ink-100 sm:text-5xl">
            Workflows built, shipped, and left running.
          </h1>
          <p className="mt-6 text-lg text-ink-300">
            A look at the operational problems behind each build — what was
            manual, what got automated, and what changed.
          </p>
        </SectionReveal>
      </section>

      <section className="container-shell mt-20 space-y-8">
        {caseStudies.map((cs, i) => (
          <SectionReveal key={cs.slug} delay={i * 0.05}>
            <GlassCard hover={false} className="overflow-hidden p-8 sm:p-10">
              <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
                <div>
                  <p className="text-xs text-electric-glow/80">{cs.industry}</p>
                  <h2 className="mt-2 font-display text-2xl text-ink-100">
                    {cs.client}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-300">
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

                  <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/[0.06] pt-6">
                    {cs.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="font-display text-xl text-ink-100">
                          {m.value}
                        </p>
                        <p className="mt-1 text-[11px] text-ink-500">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6 border-t border-white/[0.06] pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-ink-500">
                      The problem
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-300">
                      {cs.problem}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-ink-500">
                      The system
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-300">
                      {cs.solution}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-ink-500">
                      The result
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-300">
                      {cs.result}
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </SectionReveal>
        ))}
      </section>

      <section className="container-shell mt-24 text-center">
        <SectionReveal>
          <h2 className="font-display text-2xl text-ink-100 sm:text-3xl">
            Have a similar bottleneck?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-ink-300">
            Let's map out what it would take to automate it.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact">Start a project</Button>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
}
