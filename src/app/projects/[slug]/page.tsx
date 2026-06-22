import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import Reveal from "@/components/ui/Reveal";
import Container from "@/components/ui/Container";
import AnimatedText from "@/components/ui/AnimatedText";
import Img from "@/components/ui/Img";
import Icon from "@/components/ui/Icon";
import PromptBox from "@/components/ui/PromptBox";
import YouTubeEmbed from "@/components/ui/YouTubeEmbed";
import { getProject, projects, site } from "@/lib/content";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return { title: "Project not found" };
  return {
    title: p.title,
    description: p.blurb,
    openGraph: { title: `${p.title} · ${site.name}`, description: p.blurb },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        {/* ───────── hero: video left, info right ───────── */}
        <section className="grain relative overflow-hidden pb-12 pt-28 sm:pt-32">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="animate-float-slow absolute -left-20 top-16 h-72 w-72 rounded-full bg-indigo-brand/15 blur-3xl" />
            <div className="animate-float-slow absolute right-0 top-0 h-80 w-80 rounded-full bg-pink-brand/15 blur-3xl [animation-delay:-5s]" />
          </div>

          <Container>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              <Icon name="arrow" className="h-4 w-4 rotate-180" />
              All projects
            </Link>

            {/* header */}
            <div className="mt-6 max-w-3xl">
              <Reveal>
                <span className="inline-block rounded-full bg-grad px-3 py-1 text-xs font-semibold text-white">
                  {project.category}
                </span>
              </Reveal>
              <AnimatedText
                as="h1"
                text={project.title}
                className="mt-4 block font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl"
              />
              <Reveal delay={0.15}>
                <p className="mt-4 text-lg leading-relaxed text-muted">
                  {project.blurb}
                </p>
              </Reveal>
            </div>

            {/* video + prompt — equal-height panels (prompt matches video height) */}
            <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-[1.6fr_1fr] lg:gap-8">
              <Reveal className="h-full">
                <div className="grad-border h-full p-2 shadow-[0_30px_80px_-30px_rgba(79,70,229,0.4)]">
                  <YouTubeEmbed id={project.youtubeId} title={project.title} />
                </div>
              </Reveal>

              <Reveal className="h-full" delay={0.1}>
                <PromptBox prompt={project.prompt} />
              </Reveal>
            </div>

            {/* tutorial caption — below, so it doesn't affect panel heights */}
            <Reveal delay={0.15}>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-white px-4 py-3 lg:max-w-[62%]">
                <span className="flex items-center gap-2 text-sm font-medium text-muted">
                  <Icon name="youtube" className="h-4 w-4 text-pink-brand" />
                  Watch the full tutorial
                </span>
                <a
                  href={site.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-grad"
                >
                  Open on YouTube →
                </a>
              </div>
            </Reveal>

            {/* share CTA */}
            <Reveal delay={0.15}>
              <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-3xl bg-grad p-6 text-white sm:flex-row sm:items-center">
                <div>
                  <h2 className="font-display text-lg font-bold tracking-tight">
                    Built it? Show the tribe.
                  </h2>
                  <p className="mt-1 text-sm text-white/85">
                    Post your version and tag {site.instagramHandle} to get
                    featured on our site &amp; stories.
                  </p>
                </div>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:scale-105 active:scale-95"
                >
                  <Icon name="instagram" className="h-4 w-4" />
                  Share your build
                </a>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* ───────── build steps ───────── */}
        <section className="bg-surface py-16 sm:py-24">
          <Container>
            <AnimatedText
              as="h2"
              text="Build it *yourself*"
              className="mb-3 block font-display text-3xl font-bold tracking-tight sm:text-5xl"
            />
            <Reveal>
              <p className="mb-10 max-w-xl text-lg text-muted">
                Follow along at your own pace. Pause, rewind, and make it your
                own version.
              </p>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {project.steps.map((s, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <div className="grad-border h-full p-6">
                    <div className="flex items-start gap-4">
                      <span className="font-display text-5xl font-bold leading-none text-grad">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="pt-1">
                        <h3 className="font-display text-lg font-semibold tracking-tight">
                          {s.title}
                        </h3>
                        <p className="mt-1.5 text-muted">{s.body}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* ───────── more builds ───────── */}
        {others.length > 0 && (
        <section className="py-16 sm:py-24">
          <Container>
            <AnimatedText
              as="h2"
              text="More *builds*"
              className="mb-8 block font-display text-3xl font-bold tracking-tight sm:text-4xl"
            />
            <div className="grid gap-5 sm:grid-cols-3">
              {others.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.06}>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="group block overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(139,92,246,0.5)]"
                  >
                    <div className="relative aspect-[16/11] overflow-hidden">
                      <Img src={p.image} alt={p.title} />
                    </div>
                    <div className="p-4">
                      <h3 className="font-display font-bold tracking-tight">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted">
                        {p.difficulty} · {p.duration}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
        )}
      </main>
      <Footer />
    </>
  );
}
