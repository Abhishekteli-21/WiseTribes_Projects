"use client";

import { motion } from "motion/react";
import Reveal from "./ui/Reveal";
import Container from "./ui/Container";
import AnimatedText from "./ui/AnimatedText";
import Img from "./ui/Img";
import Icon from "./ui/Icon";
import GradientButton from "./ui/GradientButton";
import { featured, featureSteps, site } from "@/lib/content";

export default function Featured() {
  return (
    <section
      id="featured"
      className="relative scroll-mt-24 overflow-hidden py-12 sm:py-28"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* left: pitch + steps */}
          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-widest text-violet-brand">
                Get featured
              </span>
            </Reveal>
            <AnimatedText
              as="h2"
              text="Build it. Post it."
              className="mt-2 block font-display text-3xl font-bold leading-[1.05] tracking-tight sm:text-5xl"
            />
            <AnimatedText
              as="h2"
              text="*Get featured.*"
              delay={0.25}
              className="block font-display text-3xl font-bold leading-[1.05] tracking-tight sm:text-5xl"
            />
            <Reveal delay={0.2}>
              <p className="mt-4 max-w-md text-lg text-muted">
                Made something from a WiseTribes project? Record it, post it, and
                tag us. We feature the best builds on our website and in our
                Instagram stories — every single week.
              </p>
            </Reveal>

            <div className="mt-8 space-y-3">
              {featureSteps.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.08}>
                  <div className="flex items-center gap-4 rounded-2xl border border-line bg-white/70 p-3 backdrop-blur">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-grad font-display text-sm font-bold text-white">
                      {s.n}
                    </span>
                    <div>
                      <p className="font-display font-semibold tracking-tight">
                        {s.title}
                      </p>
                      <p className="text-sm text-muted">{s.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-8">
                <GradientButton href={site.instagram} external size="lg">
                  <Icon name="instagram" className="h-4 w-4" />
                  Tag {site.instagramHandle}
                </GradientButton>
              </div>
            </Reveal>
          </div>

          {/* right: featured story cards */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {featured.map((b, i) => (
              <Reveal key={b.id} delay={i * 0.06}>
                <motion.div
                  whileHover={{ rotate: 0, y: -8, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 280, damping: 18 }}
                  style={{ rotate: i % 2 === 0 ? -3 : 3 }}
                  className="group relative aspect-[9/16] overflow-hidden rounded-2xl bg-ink p-[2.5px]"
                >
                  {/* story-ring gradient frame */}
                  <span className="absolute inset-0 rounded-2xl bg-grad opacity-90" />
                  <div className="relative h-full w-full overflow-hidden rounded-[14px] bg-ink">
                    <Img src={b.image} alt={`${b.name} — ${b.project}`} />
                    <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />

                    <span className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-ink backdrop-blur">
                      <Icon name="spark" className="h-3 w-3 text-pink-brand" />
                      Featured
                    </span>

                    <div className="absolute inset-x-0 bottom-0 p-2.5">
                      <p className="text-[11px] font-bold leading-tight text-white">
                        {b.project}
                      </p>
                      <p className="mt-0.5 truncate text-[10px] text-white/75">
                        {b.handle}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
