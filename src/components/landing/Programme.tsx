"use client";

import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import AnimatedText from "../ui/AnimatedText";
import Img from "../ui/Img";
import Icon from "../ui/Icon";
import { groups } from "@/lib/landing";

export default function Programme() {
  return (
    <section id="programme" className="scroll-mt-24 bg-surface px-4 py-20 sm:py-28">
      <Container>
        <div className="mb-14 max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-violet-brand">
              The programme
            </span>
          </Reveal>
          <AnimatedText
            as="h2"
            text="Built for every stage of *school.*"
            className="mt-3 block font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl"
          />
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.tag} delay={i * 0.08}>
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(139,92,246,0.45)]">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Img src={g.image} alt={g.tag} />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                  <span className="absolute left-4 top-4 w-fit rounded-full bg-grad px-3 py-1 text-xs font-semibold text-white">
                    {g.tag}
                  </span>
                  <p className="absolute bottom-3 left-4 text-sm font-medium text-white/90">
                    {g.ages}
                  </p>
                </div>
                <div className="flex flex-1 flex-col p-7">
                <p className="text-xs font-semibold uppercase tracking-widest text-ink/40">
                  Modules
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {g.modules.map((m) => (
                    <span
                      key={m}
                      className="rounded-full border border-line px-2.5 py-1 text-xs text-muted"
                    >
                      {m}
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-ink/40">
                  Tools
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {g.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-grad-soft px-2.5 py-1 text-xs font-medium text-violet-brand"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-surface p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-ink/40">
                    Sample project
                  </p>
                  <p className="mt-1 text-sm font-medium text-ink">{g.project}</p>
                </div>

                <a
                  href="/build"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-grad"
                >
                  <Icon name="play" className="h-4 w-4 text-pink-brand" />
                  See projects they'll build
                </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
