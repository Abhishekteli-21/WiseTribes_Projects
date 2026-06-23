"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import Img from "./ui/Img";
import GradientButton from "./ui/GradientButton";
import Icon from "./ui/Icon";
import { heroColumns, site } from "@/lib/content";

const headline = ["Learn", "AI", "by", "*building*", "it."];

function Column({
  images,
  duration,
  reverse = false,
}: {
  images: string[];
  duration: string;
  reverse?: boolean;
}) {
  const list = [...images, ...images];
  return (
    <div
      className="animate-marquee-y flex w-[30vw] min-w-[190px] max-w-[300px] shrink-0 flex-col"
      style={{
        animationDuration: duration,
        animationDirection: reverse ? "reverse" : "normal",
      }}
    >
      {list.map((src, i) => (
        <div
          key={i}
          className="relative mb-2.5 aspect-[3/4] w-full shrink-0 overflow-hidden rounded-xl bg-grad-soft shadow-[0_18px_40px_-22px_rgba(0,0,0,0.55)] sm:mb-3"
        >
          <Img src={src} alt="" />
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(useTransform(mx, [-0.5, 0.5], [18, -18]), {
    stiffness: 80,
    damping: 20,
  });
  const y = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), {
    stiffness: 80,
    damping: 20,
  });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const sp = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const contentY = useTransform(sp, [0, 1], [0, -80]);
  const contentOpacity = useTransform(sp, [0, 0.7], [1, 0]);
  const wallScale = useTransform(sp, [0, 1], [1, 1.14]);

  return (
    <section className="pt-24 sm:px-4 sm:pt-28" id="top">
      <div className="mx-auto max-w-[88rem]">

        {/* ── Dark image card ── */}
        <div
          ref={ref}
          onMouseMove={onMove}
          className="relative isolate flex h-[52vw] min-h-[160px] items-center overflow-hidden rounded-b-[1.75rem] bg-ink sm:h-auto sm:min-h-[62vh] sm:rounded-[2.5rem]"
        >
          {/* animated image wall */}
          <motion.div
            style={{ x, y, scale: wallScale }}
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute -inset-[12%] flex -rotate-6 scale-[1.18] items-start justify-center gap-2.5 sm:gap-3">
              <Column images={heroColumns[0]} duration="36s" />
              <Column images={heroColumns[1]} duration="44s" reverse />
              <Column images={heroColumns[2]} duration="32s" />
              <Column images={heroColumns[3]} duration="48s" reverse />
              <Column images={heroColumns[4]} duration="38s" />
              <Column images={heroColumns[5]} duration="42s" reverse />
            </div>
          </motion.div>

          {/* gradient scrims */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/60 to-black/25" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-transparent to-black/40" />

          {/* content overlay */}
          <motion.div
            style={{ y: contentY, opacity: contentOpacity }}
            className="relative w-full px-5 py-4 sm:px-12 sm:py-20 lg:px-16"
          >
            <div className="max-w-2xl text-white">
              {/* badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mb-2 flex w-fit items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-medium text-white/90 backdrop-blur sm:mb-6 sm:gap-2 sm:px-4 sm:py-1.5 sm:text-sm"
              >
                <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-brand opacity-75" />
                  <span className="relative inline-flex h-full w-full rounded-full bg-grad" />
                </span>
                <span className="sm:hidden">New project every week</span>
                <span className="hidden sm:inline">
                  New AI project every week · {site.instagramHandle}
                </span>
              </motion.div>

              {/* headline — compact on mobile */}
              <h1 className="font-display text-[1.65rem] font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
                {headline.map((raw, i) => {
                  const emph = raw.startsWith("*") && raw.endsWith("*");
                  const word = emph ? raw.slice(1, -1) : raw;
                  return (
                    <span
                      key={i}
                      className="mr-[0.18em] inline-block overflow-hidden align-bottom"
                    >
                      <motion.span
                        initial={{ y: "120%", rotate: 8, opacity: 0 }}
                        animate={{ y: "0%", rotate: 0, opacity: 1 }}
                        transition={{
                          duration: 0.95,
                          delay: 0.15 + i * 0.09,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        style={{ transformOrigin: "0% 100%" }}
                        className={`inline-block ${emph ? "italic text-grad" : ""}`}
                      >
                        {word}
                      </motion.span>
                    </span>
                  );
                })}
              </h1>

              {/* paragraph + CTAs — desktop only (mobile version is below the card) */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="hidden sm:block"
              >
                <p className="mt-5 max-w-md text-lg font-medium text-white/80">
                  Managed by curiosity, built by you. WiseTribes turns the reels
                  you scroll past into real AI projects — follow the page
                  step-by-step, then post your version and get featured.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <GradientButton href="/projects" size="lg">
                    <Icon name="spark" className="h-4 w-4" />
                    Explore AI projects
                  </GradientButton>
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    <Icon name="instagram" className="h-4 w-4" />
                    Follow on Instagram
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* scroll cue — desktop only */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="pointer-events-none absolute bottom-5 right-6 hidden items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/60 sm:flex"
          >
            Scroll to explore
            <span className="flex h-8 w-5 items-start justify-center rounded-full border border-white/40 p-1">
              <motion.span
                animate={{ y: [0, 9, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="h-1.5 w-1.5 rounded-full bg-grad"
              />
            </span>
          </motion.div>
        </div>

        {/* ── Mobile-only: paragraph + CTAs below the card ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="px-5 pb-2 pt-5 sm:hidden"
        >
          <p className="text-[0.95rem] leading-relaxed text-muted">
            Managed by curiosity, built by you. WiseTribes turns the reels
            you scroll past into real AI projects.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <GradientButton href="/projects" size="md">
              <Icon name="spark" className="h-4 w-4" />
              Explore AI projects
            </GradientButton>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-surface"
            >
              <Icon name="instagram" className="h-4 w-4" />
              Follow
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
