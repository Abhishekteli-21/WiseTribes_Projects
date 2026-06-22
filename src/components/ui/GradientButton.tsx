"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "solid" | "outline";
  size?: "md" | "lg";
  className?: string;
  external?: boolean;
};

export default function GradientButton({
  children,
  href = "#",
  variant = "solid",
  size = "md",
  className = "",
  external = false,
}: Props) {
  const pad = size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm";

  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-shadow";

  const solid =
    "bg-grad text-white shadow-[0_8px_30px_-8px_rgba(139,92,246,0.6)] hover:shadow-[0_12px_40px_-8px_rgba(236,72,153,0.55)]";

  const outline =
    "grad-border text-ink hover:text-ink bg-white";

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={`${base} ${pad} ${variant === "solid" ? solid : outline} ${className}`}
    >
      {children}
    </motion.a>
  );
}
