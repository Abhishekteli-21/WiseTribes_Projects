"use client";

import Link from "next/link";
import { useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import Icon from "./ui/Icon";
import Container from "./ui/Container";
import AnimatedText from "./ui/AnimatedText";
import GradientButton from "./ui/GradientButton";
import { site } from "@/lib/content";

export default function Footer() {
  const { scrollYProgress } = useScroll();
  const [pct, setPct] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) =>
    setPct(Math.round(v * 100))
  );

  return (
    <footer className="relative overflow-hidden bg-[#0a0e1a] pt-12 text-white sm:pt-20">
      {/* faint top hairline */}
      <span className="absolute inset-x-0 top-0 h-px bg-white/10" />

      <Container>
        {/* CTA */}
        <div className="flex flex-col items-start justify-between gap-6 pb-10 sm:gap-8 sm:pb-16 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <AnimatedText
              as="h2"
              text="The sky was never *the limit.*"
              className="block font-display text-2xl font-bold leading-[1.02] tracking-tight sm:text-6xl"
            />
            <p className="mt-3 max-w-xl text-base leading-relaxed text-white/65 sm:mt-5 sm:text-lg">
              It&apos;s just the beginning. Join a tribe of young makers learning
              AI, building real projects, and proving that{" "}
              <span className="font-semibold text-white">
                curiosity has no ceiling.
              </span>
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <GradientButton href={site.instagram} external size="lg">
              <Icon name="instagram" className="h-4 w-4" />
              Follow
            </GradientButton>
            <a
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Browse projects
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* links */}
        <div className="grid grid-cols-2 gap-8 border-t border-white/10 py-12 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo/logo.webp"
                alt="WiseTribes"
                className="h-11 w-11 rounded-xl bg-white/95 object-contain p-1"
              />
              <span className="font-display text-lg font-bold tracking-tight">
                {site.name}
              </span>
            </div>
            <p className="mt-3 max-w-[16rem] text-sm text-white/55">
              {site.tagline}
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-white/90">Explore</p>
            <ul className="space-y-2 text-sm text-white/55">
              <li>
                <Link href="/build#featured" className="hover:text-white">
                  Get featured
                </Link>
              </li>
              <li>
                <Link href="/build#reels" className="hover:text-white">
                  The reels
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white">
                  All projects
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-white/90">Follow</p>
            <ul className="space-y-2 text-sm text-white/55">
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white"
                >
                  <Icon name="instagram" className="h-4 w-4" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={site.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white"
                >
                  <Icon name="youtube" className="h-4 w-4" />
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-white/90">
              Get featured
            </p>
            <p className="text-sm text-white/55">
              Build a project, post it, and tag {site.instagramHandle} to appear
              on our site.
            </p>
          </div>
        </div>

        {/* meta row (sevorse-style scroll indicator) */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-5 text-xs uppercase tracking-widest text-white/40 sm:flex-row">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <span>Learn it. Build it. Show it off.</span>
          <span className="tabular-nums">Scroll {pct}%</span>
        </div>
      </Container>

      {/* giant tone-on-tone wordmark */}
      <div className="relative select-none px-2 pt-4">
        <div className="pointer-events-none text-center font-display font-bold leading-[0.78] tracking-tighter text-white/[0.04]">
          <span className="block text-[22vw] sm:text-[20vw] lg:text-[18vw]">
            WISETRIBES
          </span>
        </div>
      </div>
    </footer>
  );
}
