"use client";

import Icon from "../ui/Icon";
import Container from "../ui/Container";
import AnimatedText from "../ui/AnimatedText";
import GradientButton from "../ui/GradientButton";
import { footer, site } from "@/lib/landing";

export default function LandingFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#0a0e1a] pt-20 text-white">
      <span className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <Container>
        {/* CTA */}
        <div className="flex flex-col items-start justify-between gap-8 pb-16 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <AnimatedText
              as="h2"
              text="Where does your child stand with *AI?*"
              className="block font-display text-4xl font-bold leading-[1.02] tracking-tight sm:text-6xl"
            />
            <p className="mt-5 max-w-xl text-lg text-white/65">
              The assessment takes 15 minutes. The results stay with them for
              years.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <GradientButton href={site.whatsapp} external size="lg">
              Book free assessment
            </GradientButton>
            <a
              href="/build"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Build Projects
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* links */}
        <div className="grid grid-cols-2 gap-8 border-t border-white/10 py-12 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-grad text-white">
                <Icon name="spark" className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-bold tracking-tight">
                {site.name}
              </span>
            </div>
            <p className="mt-3 max-w-[18rem] text-sm text-white/55">
              {footer.tagline}
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-white/90">Programme</p>
            <ul className="space-y-2 text-sm text-white/55">
              <li><a href="#programme" className="hover:text-white">Group A · B · C</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="/build" className="hover:text-white">Build Projects</a></li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-white/90">Start here</p>
            <ul className="space-y-2 text-sm text-white/55">
              <li><a href="#how" className="hover:text-white">How it works</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
              <li><a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white">Enroll</a></li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-white/90">Follow</p>
            <ul className="space-y-2 text-sm text-white/55">
              <li><a href={site.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white"><Icon name="instagram" className="h-4 w-4" />Instagram</a></li>
              <li><a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <p className="py-6 text-center text-sm text-white/40 sm:text-left">
          {footer.copyright}
        </p>
      </Container>

      {/* giant wordmark */}
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
