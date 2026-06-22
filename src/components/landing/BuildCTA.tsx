"use client";

import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import AnimatedText from "../ui/AnimatedText";
import Icon from "../ui/Icon";

const tags = [
  "AI Chatbot",
  "Image Classifier",
  "AI Art Generator",
  "Voice Assistant",
  "Story Writer",
  "Emotion Detector",
  "Movie Recommender",
  "Study Helper",
];

export default function BuildCTA() {
  return (
    <section className="px-4 py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="grain relative overflow-hidden rounded-[2.5rem] bg-[#0a0e1a] px-6 py-16 text-white sm:px-12 sm:py-20">
            {/* glow */}
            <div className="pointer-events-none absolute inset-0 opacity-50">
              <div className="absolute -left-10 top-0 h-64 w-64 animate-float-slow rounded-full bg-indigo-brand/30 blur-3xl" />
              <div className="absolute -right-10 bottom-0 h-72 w-72 animate-float-slow rounded-full bg-pink-brand/30 blur-3xl [animation-delay:-6s]" />
            </div>

            <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <span className="text-sm font-semibold uppercase tracking-widest text-white/60">
                  Don't just learn it — build it
                </span>
                <AnimatedText
                  as="h2"
                  text="Step inside the *project studio.*"
                  className="mt-3 block font-display text-3xl font-bold leading-[1.05] tracking-tight sm:text-5xl"
                />
                <p className="mt-5 max-w-md text-lg text-white/70">
                  Explore the real AI projects your child will build — each with
                  its own video, steps and a finished result. Watch a reel, follow
                  the page, make your own.
                </p>
                <div className="mt-8">
                  <a
                    href="/build"
                    className="group inline-flex items-center gap-2 rounded-full bg-grad px-8 py-4 text-base font-semibold text-white shadow-[0_12px_40px_-8px_rgba(236,72,153,0.6)] transition-transform hover:scale-105 active:scale-95"
                  >
                    <Icon name="spark" className="h-5 w-5" />
                    Build Projects
                    <Icon
                      name="arrow"
                      className="h-5 w-5 transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>

              {/* floating project tags */}
              <div className="flex flex-wrap gap-2.5">
                {tags.map((t, i) => (
                  <Reveal key={t} delay={i * 0.05}>
                    <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/85 backdrop-blur">
                      {t}
                    </span>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
