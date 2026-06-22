"use client";

import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import AnimatedText from "../ui/AnimatedText";
import GradientButton from "../ui/GradientButton";
import Icon from "../ui/Icon";
import { pricing, site } from "@/lib/landing";

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 px-4 py-20 sm:py-28">
      <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-violet-brand">
              Pricing
            </span>
          </Reveal>
          <AnimatedText
            as="h2"
            text="Start with one session — *no commitment.*"
            className="mt-3 block font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl"
          />
        </div>

        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
          {pricing.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <div
                className={`flex h-full flex-col rounded-3xl p-8 ${
                  p.highlight
                    ? "bg-[#0a0e1a] text-white shadow-2xl"
                    : "border border-line bg-white"
                }`}
              >
                {p.highlight && (
                  <span className="mb-3 w-fit rounded-full bg-grad px-3 py-1 text-xs font-semibold text-white">
                    Most popular
                  </span>
                )}
                <p
                  className={`text-sm font-semibold uppercase tracking-widest ${
                    p.highlight ? "text-white/60" : "text-muted"
                  }`}
                >
                  {p.name}
                </p>
                <div className="mt-2 flex items-end gap-2">
                  <span className="font-display text-5xl font-bold tracking-tight">
                    {p.price}
                  </span>
                  <span
                    className={`pb-1 text-sm ${
                      p.highlight ? "text-white/60" : "text-muted"
                    }`}
                  >
                    {p.note}
                  </span>
                </div>

                <ul className="mt-7 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-grad text-white">
                        <Icon name="check" className="h-3.5 w-3.5" />
                      </span>
                      <span className={p.highlight ? "text-white/85" : "text-ink"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  {p.highlight ? (
                    <a
                      href={site.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full rounded-full bg-grad px-6 py-4 text-center font-semibold text-white transition-transform hover:scale-[1.02] active:scale-95"
                    >
                      {p.cta} →
                    </a>
                  ) : (
                    <GradientButton
                      href={site.whatsapp}
                      external
                      variant="outline"
                      className="w-full"
                    >
                      {p.cta} →
                    </GradientButton>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
