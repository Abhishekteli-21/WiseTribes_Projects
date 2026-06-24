"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { useEffect, useRef } from "react";
import Img from "./ui/Img";

function Row({
  images,
  baseVelocity,
}: {
  images: string[];
  baseVelocity: number;
}) {
  const baseX = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const half = useRef(0);
  const dir = useRef(baseVelocity < 0 ? -1 : 1);
  const isMobile = useRef(false);

  const { scrollY } = useScroll();
  const scrollVel = useVelocity(scrollY);
  const smooth = useSpring(scrollVel, { damping: 50, stiffness: 350 });
  const velFactor = useTransform(smooth, [0, 1000], [0, 4], { clamp: false });

  useEffect(() => {
    isMobile.current = window.innerWidth < 768;
    const measure = () => {
      if (trackRef.current) half.current = trackRef.current.scrollWidth / 2;
    };
    measure();
    const id = setTimeout(measure, 500);
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(id);
    };
  }, [images]);

  useAnimationFrame((_t, delta) => {
    // Skip velocity-linked animation on mobile — too heavy for touch devices
    if (isMobile.current) return;
    const h = half.current;
    if (!h) return;
    let move = baseVelocity * (delta / 1000);
    const vf = velFactor.get();
    if (vf < 0) dir.current = -1;
    else if (vf > 0) dir.current = 1;
    move += dir.current * Math.abs(move) * Math.abs(vf);

    let nx = baseX.get() + move;
    while (nx <= -h) nx += h;
    while (nx > 0) nx -= h;
    baseX.set(nx);
  });

  const list = [...images, ...images];

  return (
    <motion.div
      ref={trackRef}
      className="flex w-max will-change-transform"
      style={{ x: baseX }}
    >
      {list.map((src, i) => (
        <div
          key={i}
          className="relative mr-3 h-[120px] w-[180px] shrink-0 overflow-hidden rounded-2xl bg-grad-soft shadow-[0_24px_50px_-28px_rgba(0,0,0,0.8)] ring-1 ring-white/10 sm:mr-4 sm:h-[210px] sm:w-[320px]"
        >
          <Img src={src} alt="" />
          <span className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      ))}
    </motion.div>
  );
}

export default function VelocityPlanes({ images }: { images: string[] }) {
  const a = images;
  const b = [...images].reverse();
  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      <Row images={a} baseVelocity={50} />
      <Row images={b} baseVelocity={-50} />
    </div>
  );
}
