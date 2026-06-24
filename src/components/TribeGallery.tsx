"use client";

import Container from "./ui/Container";
import AnimatedText from "./ui/AnimatedText";
import Icon from "./ui/Icon";
import VelocityPlanes from "./VelocityPlanes";
import { galleryImages } from "@/lib/content";

export default function TribeGallery() {
  return (
    <section className="relative overflow-hidden bg-[#0a0e1a] py-10 text-white sm:py-28">
      {/* soft brand glow */}
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-violet-brand/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-pink-brand/20 blur-3xl" />
      </div>

      <Container className="relative">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end sm:gap-4">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-white/50">
              Inside the tribe
            </span>
            <AnimatedText
              as="h2"
              text="Real kids. *Real builds.*"
              className="mt-2 block font-display text-2xl font-bold tracking-tight sm:text-5xl"
            />
          </div>
          <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/50">
            <Icon name="arrow" className="h-4 w-4" />
            Scroll to surf
          </span>
        </div>
      </Container>

      {/* full-bleed velocity-linked rows */}
      <div className="relative mt-10 overflow-hidden">
        <VelocityPlanes images={galleryImages} />
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0a0e1a] to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0a0e1a] to-transparent sm:w-40" />
      </div>
    </section>
  );
}
