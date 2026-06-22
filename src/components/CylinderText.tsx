const COUNT = 16;
const ANGLE = 360 / COUNT; // 22.5°

/** 3D rotating text cylinder (faithful to the classic EAT-SLEEP-RAVE technique).
 *  translateZ is in `em` so the radius scales with the font — rows stay evenly
 *  spaced at any size, and it covers the full width via a fluid font size. */
export default function CylinderText() {
  return (
    <section className="relative grid place-items-center overflow-hidden bg-white pb-16 pt-24 sm:pb-20 sm:pt-32">
      <div
        className="relative flex h-[240px] w-full items-center justify-center sm:h-[360px]"
        style={{ perspective: "1100px" }}
      >
        <div
          className="animate-spin-x relative"
          style={{
            transformStyle: "preserve-3d",
            fontSize: "clamp(2rem, 6.6vw, 7rem)",
          }}
        >
          {Array.from({ length: COUNT }).map((_, i) => (
            <span
              key={i}
              className="absolute left-1/2 top-1/2 block whitespace-nowrap font-display font-extrabold uppercase leading-[0.78] tracking-tight text-ink"
              style={{
                transform: `translate(-50%, -50%) rotateX(${i * ANGLE}deg) translateZ(1.95em)`,
                backfaceVisibility: "hidden",
              }}
            >
              <i className="text-grad not-italic">Learn</i>
              <span className="mx-[0.3em] text-violet-brand">✦</span>
              <i className="not-italic text-indigo-brand">Build</i>
              <span className="mx-[0.3em] text-violet-brand">✦</span>
              <i className="text-grad not-italic">Share</i>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
