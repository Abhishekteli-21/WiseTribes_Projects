"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import GradientButton from "../ui/GradientButton";
import Icon from "../ui/Icon";
import { nav, site } from "@/lib/landing";

export default function LandingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-5 pt-3 sm:px-8 sm:pt-4 lg:px-12"
    >
      <nav
        className={`flex w-full max-w-[88rem] items-center justify-between rounded-full px-3 py-2.5 transition-all duration-300 sm:px-4 ${
          scrolled
            ? "border border-line bg-white/80 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)] backdrop-blur-xl"
            : "border border-transparent bg-transparent"
        }`}
      >
        <a href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-grad text-white">
            <Icon name="spark" className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            {site.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="/build"
            className="rounded-full px-4 py-2 text-sm font-semibold text-ink transition-colors hover:text-violet-brand"
          >
            Build Projects
          </a>
          <GradientButton href="#pricing">Book demo</GradientButton>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white md:hidden"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-5 right-5 top-20 z-50 rounded-3xl border border-line bg-white p-3 shadow-xl md:hidden"
        >
          {nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-base font-medium text-ink hover:bg-surface"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/build"
            onClick={() => setOpen(false)}
            className="block rounded-2xl px-4 py-3 text-base font-semibold text-ink hover:bg-surface"
          >
            Build Projects →
          </a>
          <div className="p-2">
            <GradientButton href="#pricing" className="w-full">
              Book demo
            </GradientButton>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
