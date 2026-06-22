"use client";

import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import AnimatedText from "../ui/AnimatedText";
import { press } from "@/lib/landing";

export default function Press() {
  return (
    <section className="px-4 py-20 sm:py-28">
      <Container>
        <div className="mb-12 max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-violet-brand">
              In the news
            </span>
          </Reveal>
          <AnimatedText
            as="h2"
            text="India's press on a *Pune founder.*"
            className="mt-3 block font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {press.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.06}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-6">
                <p className="flex-1 font-display text-lg font-medium leading-snug tracking-tight text-ink">
                  “{p.quote}”
                </p>
                <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-grad">
                  {p.name}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
