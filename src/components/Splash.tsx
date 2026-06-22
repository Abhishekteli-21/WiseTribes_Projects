"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import Icon from "./ui/Icon";
import { site } from "@/lib/content";

/* ── Tweak these two to experiment ──────────────────────────────
   COUNT_MS  = how long the 0→100 counter takes (the main length)
   HOLD_MS   = pause at 100% before the curtain lifts
   ──────────────────────────────────────────────────────────── */
const COUNT_MS = 1400;
const HOLD_MS = 250;

export default function Splash() {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("wt-splash")) {
      setShow(false);
      return;
    }
    document.documentElement.style.overflow = "hidden";

    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / COUNT_MS, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        sessionStorage.setItem("wt-splash", "1");
        setTimeout(() => setShow(false), HOLD_MS);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!show) document.documentElement.style.overflow = "";
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col overflow-hidden bg-[#0a0e1a]"
        >
          {/* soft brand glow */}
          <div className="pointer-events-none absolute inset-0 opacity-50">
            <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-brand/20 blur-[120px]" />
          </div>

          {/* center brand */}
          <div className="relative flex flex-1 flex-col items-center justify-center">
            <motion.span
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-grad text-white shadow-2xl"
            >
              <Icon name="spark" className="h-8 w-8" />
            </motion.span>

            <span className="overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="block font-display text-4xl font-bold tracking-tight text-white sm:text-6xl"
              >
                {site.name}
              </motion.span>
            </span>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-3 text-xs font-medium uppercase tracking-[0.35em] text-white/45 sm:text-sm"
            >
              {site.tagline}
            </motion.span>
          </div>

          {/* bottom loader */}
          <div className="relative px-6 pb-8 sm:px-10 sm:pb-10">
            <div className="mb-3 flex items-end justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
                Loading
              </span>
              <span className="font-display text-4xl font-bold tabular-nums text-white sm:text-6xl">
                {count}
                <span className="text-grad">%</span>
              </span>
            </div>
            <div className="h-px w-full overflow-hidden bg-white/15">
              <motion.div
                className="h-full origin-left bg-grad"
                style={{ scaleX: count / 100 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
