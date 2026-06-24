import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import Reveal from "@/components/ui/Reveal";
import Container from "@/components/ui/Container";
import AnimatedText from "@/components/ui/AnimatedText";
import Img from "@/components/ui/Img";
import Icon from "@/components/ui/Icon";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "All Projects",
  description:
    "Browse every WiseTribes build. Each project has its own page with the full video, steps and materials.",
};

export default function ProjectsIndex() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="flex-1 pb-24 pt-32">
        <Container>
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-violet-brand">
              The library
            </span>
            <AnimatedText
              as="h1"
              text="Pick your next *build*"
              className="mt-2 block font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl"
            />
            <p className="mt-4 max-w-xl text-lg text-muted">
              Every project is a real, finishable build with its own page —
              full video, step-by-step, and a materials list.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) =>
              p.locked ? (
                /* ── Coming-soon locked card ── */
                <Reveal key={p.slug} delay={i * 0.05}>
                  <div className="group relative block overflow-hidden rounded-3xl border border-line bg-white">
                    <div className="relative aspect-[16/11] overflow-hidden">
                      <Img src={p.image} alt={p.title} />
                      {/* heavy blur + dark scrim to hide the image */}
                      <span className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
                      {/* Coming Soon badge */}
                      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-bold text-ink shadow-lg">
                        🔒 More projects coming soon
                      </span>
                    </div>
                    <div className="p-5 opacity-40">
                      <p className="text-xs uppercase tracking-widest text-violet-brand">
                        {p.category}
                      </p>
                      <h2 className="mt-1 font-display text-xl font-bold tracking-tight">
                        {p.title}
                      </h2>
                      <p className="mt-2 line-clamp-2 text-sm text-muted">
                        {p.blurb}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ) : (
                /* ── Live project card ── */
                <Reveal key={p.slug} delay={i * 0.05}>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="group block overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(139,92,246,0.5)]"
                  >
                    <div className="relative aspect-[16/11] overflow-hidden">
                      <Img src={p.image} alt={p.title} />
                      <span className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-ink backdrop-blur">
                        {p.difficulty} · {p.duration}
                      </span>
                    </div>
                    <div className="p-5">
                      <p className="text-xs uppercase tracking-widest text-violet-brand">
                        {p.category}
                      </p>
                      <h2 className="mt-1 font-display text-xl font-bold tracking-tight">
                        {p.title}
                      </h2>
                      <p className="mt-2 line-clamp-2 text-sm text-muted">
                        {p.blurb}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                        Open the build
                        <Icon
                          name="arrow"
                          className="h-4 w-4 text-pink-brand transition-transform group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              )
            )}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
