const PHRASE =
  "Build with AI ✦ Reels that teach ✦ No boring theory ✦ Chatbots · Vision · Art ✦ Learn by building ✦ Get featured ✦ ";
const TEXT = PHRASE.repeat(8);

/** A gentle wavy ribbon of brand phrases scrolling along a curved path.
 *  Single overfilled textPath = seamless loop, gentle curve = no letter pileup. */
export default function RibbonBand() {
  return (
    <section
      className="relative my-6 overflow-hidden border-y border-line bg-grad-soft sm:my-16"
      aria-hidden
    >
      <svg viewBox="0 0 1920 190" className="block w-full">
        <defs>
          <linearGradient id="ribGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <path
            id="ribPath"
            fill="none"
            d="M-40 108 C 240 64, 480 64, 720 108 C 960 152, 1200 152, 1440 108 C 1680 64, 1860 64, 1960 100"
          />
        </defs>

        <text
          className="font-display"
          style={{
            fill: "url(#ribGrad)",
            fontSize: 62,
            fontWeight: 800,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          <textPath href="#ribPath" startOffset="0%">
            <animate
              attributeName="startOffset"
              from="0%"
              to="-100%"
              dur="36s"
              repeatCount="indefinite"
            />
            {TEXT}
          </textPath>
        </text>
      </svg>
    </section>
  );
}
