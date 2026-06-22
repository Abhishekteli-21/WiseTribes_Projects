"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Reveal from "./ui/Reveal";
import Container from "./ui/Container";
import AnimatedText from "./ui/AnimatedText";
import Img from "./ui/Img";
import Icon from "./ui/Icon";
import { projects } from "@/lib/content";

export default function ExploreBuilds() {
  const track = useRef<HTMLDivElement>(null);
  const [drag, setDrag] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!track.current) return;
      setDrag(track.current.scrollWidth - track.current.offsetWidth);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* full-bleed background image + overlay */}
      <div className="absolute inset-0 -z-10">
        <Img
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&q=80&fit=crop&auto=format"
          alt=""
        />
        <span className="absolute inset-0 bg-ink/85" />
        <span className="absolute inset-0 bg-gradient-to-tr from-indigo-brand/40 via-violet-brand/20 to-pink-brand/40 mix-blend-screen" />
      </div>

      <Container>
        <Reveal>
          <div className="mb-10 flex flex-col items-start justify-between gap-4 text-white sm:flex-row sm:items-end">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-white/70">
                Explore the builds
              </span>
              <AnimatedText
                as="h2"
                text="Every project has its *own page*"
                className="mt-2 block max-w-xl font-display text-3xl font-bold leading-[1.08] tracking-tight sm:text-5xl"
              />
            </div>
            <p className="flex items-center gap-2 text-sm text-white/70">
              <Icon name="arrow" className="h-4 w-4" />
              Drag to browse · tap to open
            </p>
          </div>
        </Reveal>

        {/* draggable gallery */}
        <motion.div
          ref={track}
          className="no-scrollbar cursor-grab overflow-hidden active:cursor-grabbing"
        >
          <motion.div
            drag="x"
            dragConstraints={{ left: -drag, right: 0 }}
            dragElastic={0.08}
            className="flex w-max gap-4 sm:gap-5"
          >
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              draggable={false}
              className="group relative block w-[260px] shrink-0 overflow-hidden rounded-3xl bg-ink sm:w-[320px]"
            >
              <div className="relative aspect-[4/5]">
                <Img src={p.image} alt={p.title} />
                <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/10 transition-opacity group-hover:from-black/90" />

                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-ink backdrop-blur">
                  {p.difficulty} · {p.duration}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <p className="text-xs uppercase tracking-widest text-white/60">
                    {p.category}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold leading-tight tracking-tight">
                    {p.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                    <span className="bg-grad bg-clip-text text-transparent">
                      Open the build
                    </span>
                    <Icon
                      name="arrow"
                      className="h-4 w-4 text-pink-brand transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </div>
            </Link>
          ))}

          {/* tail CTA card */}
          <Link
            href="/projects"
            draggable={false}
            className="flex w-[200px] shrink-0 flex-col items-center justify-center gap-3 rounded-3xl border border-white/25 bg-white/5 p-6 text-center text-white backdrop-blur transition-colors hover:bg-white/10"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-grad">
              <Icon name="arrow" className="h-6 w-6" />
            </span>
            <span className="font-display font-semibold tracking-tight">
              See all projects
            </span>
          </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
