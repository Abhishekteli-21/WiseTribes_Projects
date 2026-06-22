"use client";

import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import AnimatedText from "../ui/AnimatedText";
import { testimonials } from "@/lib/landing";

export default function Testimonials() {
  return (
    <section className="bg-surface px-4 py-20 sm:py-28">
      <Container>
        <div className="mb-14 max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-violet-brand">
              What parents say
            </span>
          </Reveal>
          <AnimatedText
            as="h2"
            text="Heard from our *community.*"
            className="mt-3 block font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 0.08}>
              <figure className="flex h-full flex-col rounded-3xl border border-line bg-white p-7">
                <div className="mb-3 text-pink-brand">★★★★★</div>
                <blockquote className="flex-1 font-display text-lg font-medium leading-relaxed tracking-tight text-ink">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-grad text-sm font-bold text-white">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{t.name}</p>
                    <p className="text-sm text-muted">{t.meta}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
