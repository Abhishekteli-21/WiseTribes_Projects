"use client";

import { useEffect, useRef } from "react";
import Container from "./ui/Container";
import AnimatedText from "./ui/AnimatedText";
import Icon from "./ui/Icon";
import { reels } from "@/lib/content";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export default function Reels() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = "instagram-embed-script";
    const process = () => window.instgrm?.Embeds?.process();
    if (document.getElementById(id)) {
      process();
      return;
    }
    const s = document.createElement("script");
    s.id = id;
    s.src = "https://www.instagram.com/embed.js";
    s.async = true;
    s.onload = process;
    document.body.appendChild(s);
  }, []);

  const scrollBy = (dir: number) =>
    trackRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });

  return (
    <section id="reels" className="overflow-hidden bg-white py-10 sm:py-24">
      <Container>
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-violet-brand">
              The reels
            </span>
            <AnimatedText
              as="h2"
              text="The reels that started it *all*"
              className="mt-2 block max-w-xl font-display text-3xl font-bold leading-[1.08] tracking-tight sm:text-5xl"
            />
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-muted sm:block">
              Straight from @wisetribes
            </span>
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Previous reels"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:bg-surface"
            >
              <Icon name="arrow" className="h-5 w-5 rotate-180" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="More reels"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:bg-surface"
            >
              <Icon name="arrow" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>

      {/* horizontal reel rail */}
      <div
        ref={trackRef}
        className="no-scrollbar overflow-x-auto scroll-smooth px-5 pb-2 sm:px-8 lg:px-12"
      >
        <div className="flex w-max gap-5">
          {reels.map((r) => (
            <div key={r.id} className="shrink-0">
              {/* gradient-ring card; fixed height crops the IG footer chrome */}
              <div className="rounded-[20px] bg-grad p-[2px] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)]">
                <div className="relative h-[400px] w-[265px] overflow-hidden rounded-[18px] bg-white sm:h-[530px] sm:w-[330px]">
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={r.url}
                    data-instgrm-version="14"
                    style={{ background: "#fff", border: 0, margin: 0, width: "100%" }}
                  >
                    <a href={r.url} target="_blank" rel="noopener noreferrer">
                      Watch this reel on Instagram
                    </a>
                  </blockquote>

                  {/* our own footer bar (masks the cropped IG chrome) */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 flex h-16 items-end justify-center bg-gradient-to-t from-white via-white/95 to-transparent pb-3">
                    <span className="flex items-center gap-1.5 text-sm font-semibold text-grad">
                      <Icon name="play" className="h-4 w-4 text-pink-brand" />
                      Watch the reel
                    </span>
                  </div>

                  {/* transparent click layer (embed is pointer-events:none) */}
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Watch reel on Instagram"
                    className="absolute inset-0 z-10"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
