"use client";

import { motion, useInView } from "motion/react";
import { ReactNode, useRef } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "span" | "li" | "section";
};

/** Scroll-triggered fade + rise. Editorial easing, fires once. */
export default function Reveal({
  children,
  delay = 0,
  y = 40,
  className = "",
}: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px -12% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
