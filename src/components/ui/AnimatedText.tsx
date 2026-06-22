"use client";

import { motion, useInView } from "motion/react";
import { ElementType, useRef } from "react";

type Props = {
  /** Wrap words in *asterisks* to render them italic + gradient (emphasis).
   *  Works for single words or multi-word phrases: "Get *featured now*". */
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
};

/** Sevorse-style scroll reveal: each word rises from behind a mask,
 *  staggered, when the block scrolls into view. */
export default function AnimatedText({
  text,
  as: Tag = "span",
  className = "",
  delay = 0,
  stagger = 0.045,
  once = true,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once, margin: "-12% 0px -12% 0px" });

  // Split on *…* spans, then flatten to words tagged with emphasis.
  const words: { w: string; emph: boolean }[] = [];
  text
    .split(/(\*[^*]+\*)/g)
    .filter(Boolean)
    .forEach((part) => {
      const emph = part.startsWith("*") && part.endsWith("*");
      const clean = emph ? part.slice(1, -1) : part;
      clean
        .split(/\s+/)
        .filter((w) => w.length)
        .forEach((w) => words.push({ w, emph }));
    });

  return (
    <Tag ref={ref} className={className}>
      {words.map(({ w, emph }, i) => {
        const last = i === words.length - 1;
        return (
          <span
            key={i}
            className="inline-block overflow-hidden"
            style={{ verticalAlign: "bottom" }}
          >
            <motion.span
              className={`inline-block ${emph ? "italic text-grad" : ""}`}
              initial={{ y: "115%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{
                duration: 0.75,
                delay: delay + i * stagger,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {w}
              {!last && " "}
            </motion.span>
          </span>
        );
      })}
    </Tag>
  );
}
