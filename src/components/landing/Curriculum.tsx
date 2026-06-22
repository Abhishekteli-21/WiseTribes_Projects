"use client";

import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import AnimatedText from "../ui/AnimatedText";
import { curriculum } from "@/lib/landing";

export default function Curriculum() {
  return (
    <section className="bg-surface px-4 py-20 sm:py-28">
      <Container>
        <div className="mb-12 max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-violet-brand">
              {curriculum.kicker}
            </span>
          </Reveal>
          <AnimatedText
            as="h2"
            text={curriculum.heading}
            className="mt-3 block font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl"
          />
          <Reveal delay={0.15}>
            <p className="mt-4 text-lg text-muted">{curriculum.body}</p>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {curriculum.skills.map((s, i) => (
            <Reveal key={s.n} delay={(i % 4) * 0.06}>
              <div className="group h-full rounded-3xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_24px_60px_-30px_rgba(139,92,246,0.5)]">
                <span className="font-display text-3xl font-bold text-grad">{s.n}</span>
                <h3 className="mt-3 font-display text-lg font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
