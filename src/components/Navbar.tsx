"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import GradientButton from "./ui/GradientButton";
import Icon from "./ui/Icon";
import { site } from "@/lib/content";

const links = [
  { label: "Get featured", href: "/build#featured" },
  { label: "Reels", href: "/build#reels" },
  { label: "Projects", href: "/projects" },
];

export default function Navbar() {
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
        {/* logo */}
        <a href="/build" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-grad text-white">
            <Icon name="spark" className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            {site.name}
          </span>
        </a>

        {/* desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <GradientButton href={site.instagram} external>
            <Icon name="instagram" className="h-4 w-4" />
            Follow
          </GradientButton>
        </div>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white md:hidden"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </nav>

      {/* mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-4 right-4 top-20 z-50 rounded-3xl border border-line bg-white p-3 shadow-xl md:hidden"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-base font-medium text-ink hover:bg-surface"
            >
              {l.label}
            </a>
          ))}
          <div className="p-2">
            <GradientButton href={site.instagram} external className="w-full">
              <Icon name="instagram" className="h-4 w-4" />
              Follow on Instagram
            </GradientButton>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
