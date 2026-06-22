"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import AnimatedText from "../ui/AnimatedText";
import Icon from "../ui/Icon";
import { faqs } from "@/lib/landing";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-surface px-4 py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-widest text-violet-brand">
                Questions
              </span>
            </Reveal>
            <AnimatedText
              as="h2"
              text="Answered *honestly.*"
              className="mt-3 block font-display text-3xl font-bold tracking-tight sm:text-5xl"
            />
          </div>

          <div className="space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={f.q} delay={i * 0.04}>
                  <div className="overflow-hidden rounded-2xl border border-line bg-white">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="font-display text-base font-semibold tracking-tight sm:text-lg">
                        {f.q}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-grad-soft text-violet-brand transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        <Icon name="plus" className="h-4 w-4" />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <p className="px-5 pb-5 text-muted">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
