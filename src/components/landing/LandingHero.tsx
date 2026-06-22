"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Container from "../ui/Container";
import Img from "../ui/Img";
import GradientButton from "../ui/GradientButton";
import Icon from "../ui/Icon";
import { hero, heroImages } from "@/lib/landing";

export default function LandingHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  // raw progress — Lenis already smooths it, so it tracks scroll 1:1 in
  // BOTH directions (a spring here lags/feels wrong on reverse).
  const p = scrollYProgress;

  // the word rushes toward you, then dissolves to reveal the scene behind it
  const maskScale = useTransform(p, [0, 0.85], [1, 16]);
  const maskOpacity = useTransform(p, [0, 0.5, 0.82], [1, 1, 0]);
  const sceneScale = useTransform(p, [0, 1], [1.25, 1]);
  const darken = useTransform(p, [0.5, 1], [0.1, 0.5]);
  // surrounding UI recedes as you enter
  const uiOpacity = useTransform(p, [0, 0.16], [1, 0]);
  // payoff once you're inside
  const payoff = useTransform(p, [0.8, 1], [0, 1]);
  const payoffY = useTransform(p, [0.8, 1], [26, 0]);

  return (
    <section ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-white">
        {/* scene behind the letters (image base + optional video) */}
        <motion.div
          style={{ scale: sceneScale }}
          className="absolute inset-0 will-change-transform"
        >
          <Img src={heroImages.wide} alt="Inside a WiseTribes class" />
          {/* Drop /public/hero.mp4 to play a real reel inside the letters */}
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={heroImages.wide}
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          <motion.span
            style={{ opacity: darken }}
            className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/30"
          />
        </motion.div>

        {/* WHITE mask overlay — the word WISETRIBES is knocked out, so the
            scene/video shows only through the letters. Scales up + dissolves. */}
        <motion.div
          style={{ scale: maskScale, opacity: maskOpacity }}
          className="absolute inset-0 origin-center will-change-transform"
        >
          <svg
            className="h-full w-full"
            viewBox="0 0 1280 720"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <mask id="wt-mask">
                <rect width="1280" height="720" fill="white" />
                <text
                  x="640"
                  y="368"
                  textAnchor="middle"
                  dominantBaseline="central"
                  style={{
                    fontFamily: "var(--font-display), sans-serif",
                    fontWeight: 800,
                    fontSize: "168px",
                    letterSpacing: "-4px",
                  }}
                  fill="black"
                >
                  WISETRIBES
                </text>
              </mask>
            </defs>
            <rect width="1280" height="720" fill="#ffffff" mask="url(#wt-mask)" />
          </svg>
        </motion.div>

        {/* top meta */}
        <motion.div style={{ opacity: uiOpacity }} className="absolute inset-x-0 top-24 z-20 sm:top-28">
          <Container>
            <div className="flex items-center justify-between border-b border-line pb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
              <span>AI school for kids</span>
              <span className="hidden sm:block">Class 5–10 · India</span>
              <span>(2025)</span>
            </div>
          </Container>
        </motion.div>

        {/* sub + CTAs + scroll hint */}
        <motion.div
          style={{ opacity: uiOpacity }}
          className="absolute inset-x-0 bottom-[10%] z-20 px-4 text-center"
        >
          <p className="mx-auto max-w-xl text-base font-medium text-ink sm:text-lg">
            Your child's future runs on AI. We prepare them to{" "}
            <span className="text-grad">think with it</span> — not just use it.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <GradientButton href={hero.ctaPrimary.href} size="lg">
              <Icon name="play" className="h-4 w-4" />
              {hero.ctaPrimary.label}
            </GradientButton>
            <a
              href={hero.ctaWhatsApp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-4 text-sm font-semibold text-[#1aa251] transition-colors hover:text-[#25D366]"
            >
              💬 {hero.ctaWhatsApp.label}
            </a>
          </div>
          <div className="mt-7 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-muted">
            Scroll to enter
            <span className="flex h-7 w-4 items-start justify-center rounded-full border border-ink/25 p-1">
              <motion.span
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="h-1.5 w-1.5 rounded-full bg-grad"
              />
            </span>
          </div>
        </motion.div>

        {/* payoff once inside */}
        <motion.div
          style={{ opacity: payoff, y: payoffY }}
          className="pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center px-4 text-center text-white"
        >
          <span className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
            Welcome to WiseTribes
          </span>
          <p className="max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-6xl">
            Where kids learn to <span className="text-grad">build with AI.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
