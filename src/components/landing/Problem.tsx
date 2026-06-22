"use client";

import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import AnimatedText from "../ui/AnimatedText";
import Icon from "../ui/Icon";
import { problem } from "@/lib/landing";

export default function Problem() {
  return (
    <section className="px-4 py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-violet-brand">
              {problem.kicker}
            </span>
          </Reveal>
          <AnimatedText
            as="h2"
            text={problem.heading}
            className="mt-3 block font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl"
          />
          <Reveal delay={0.15}>
            <p
              className="mt-5 text-lg text-muted"
              dangerouslySetInnerHTML={{
                __html: problem.body.replace(
                  /\*(.+?)\*/g,
                  '<em class="text-grad not-italic font-semibold">$1</em>'
                ),
              }}
            />
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-line bg-surface p-7">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-semibold text-ink/70">
                {problem.without.title}
              </p>
              <ul className="space-y-4">
                {problem.without.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-muted">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink/10 text-ink/50">
                      ✕
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grad-border h-full p-7">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-grad px-3 py-1 text-sm font-semibold text-white">
                <Icon name="spark" className="h-4 w-4" />
                {problem.with.title}
              </p>
              <ul className="space-y-4">
                {problem.with.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-ink">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-grad text-white">
                      <Icon name="check" className="h-3.5 w-3.5" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
