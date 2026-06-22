"use client";

import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import AnimatedText from "../ui/AnimatedText";
import { how } from "@/lib/landing";

export default function Steps() {
  return (
    <section id="how" className="scroll-mt-24 px-4 py-20 sm:py-28">
      <Container>
        <div className="mb-14 max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-violet-brand">
              {how.kicker}
            </span>
          </Reveal>
          <AnimatedText
            as="h2"
            text={how.heading}
            className="mt-3 block font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl"
          />
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {how.steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="grad-border flex h-full flex-col p-7">
                <div className="flex items-center justify-between">
                  <span className="font-display text-5xl font-bold leading-none text-grad">
                    {s.n}
                  </span>
                  <span className="rounded-full bg-grad-soft px-3 py-1 text-xs font-semibold text-violet-brand">
                    {s.meta}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-bold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
