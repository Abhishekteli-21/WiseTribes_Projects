"use client";

import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import CountUp from "../ui/CountUp";
import { stats } from "@/lib/landing";

export default function StatStrip() {
  return (
    <section className="px-4 py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white p-6 sm:p-8">
                <div className="font-display text-4xl font-bold tracking-tight text-grad sm:text-5xl">
                  {"display" in s && s.display ? (
                    s.display
                  ) : (
                    <CountUp to={s.value} suffix={s.suffix} />
                  )}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
