/* ============================================================
   WiseTribes — single source of truth for all editable content.
   We teach kids to BUILD WITH AI (no hardware/robotics).
   Swap video IDs, links, images and copy here.
   ============================================================ */

/** Indian-student imagery by keyword (swap for your own photos anytime).
 *  `lock` keeps each image stable & distinct. */
const IND = (lock: number, w = 600, h = 800) =>
  `https://loremflickr.com/${w}/${h}/india,student,classroom,technology?lock=${lock}`;

export const site = {
  name: "WiseTribes",
  tagline: "Learn AI. Build it. Show it off.",
  instagram: "https://www.instagram.com/wisetribes_26/",
  instagramHandle: "@wisetribes_26",
  youtube: "https://youtube.com/@wisetribes",
  whatsapp: "https://wa.me/919175066296",
  url: "https://wisetribes.io",
  description:
    "Watch the reel, follow the full build on its own page, and make your own AI project. Post what you build and get featured on our site and Instagram stories.",
};

const heroPortraits = [
  "/images/featured/aarav.png",
  "/images/featured/ananya.png",
  "/images/featured/diya.png",
  "/images/featured/sara.png",
  "/images/featured/kabir.png",
  "/images/hero-wall/boy-blue-screen.png",
  "/images/hero-wall/boy-evening.png",
  "/images/hero-wall/girls-laptop.png",
  "/images/hero-wall/girl-ai-generator.png",
];

/** Hero background image columns (scrolling wall) — Indian students. */
export const heroColumns: string[][] = [
  [heroPortraits[0], heroPortraits[1], heroPortraits[2], heroPortraits[3]],
  [heroPortraits[4], heroPortraits[5], heroPortraits[6], heroPortraits[7]],
  [heroPortraits[8], heroPortraits[0], heroPortraits[1], heroPortraits[2]],
  [heroPortraits[3], heroPortraits[4], heroPortraits[5], heroPortraits[6]],
  [heroPortraits[7], heroPortraits[8], heroPortraits[0], heroPortraits[1]],
  [heroPortraits[2], heroPortraits[3], heroPortraits[4], heroPortraits[5]],
];

/** Photos for the "Inside the tribe" velocity rows — Indian students. */
export const galleryImages: string[] = [
  "/images/landing-hero/classroom-wide.png",
  "/images/hero-wall/girls-laptop.png",
  "/images/hero-wall/girl-ai-generator.png",
  "/images/programme/group-a-young-kids.png",
  "/images/programme/group-c-teens-python.png",
  "/images/featured/aarav.png",
  "/images/featured/ananya.png",
  "/images/hero-wall/boy-blue-screen.png",
  "/images/hero-wall/boy-evening.png",
  "/images/featured/diya.png",
];

/** "Get featured" — real builds shared by the tribe. */
export type Build = {
  id: string;
  name: string;
  handle: string;
  project: string;
  image: string;
};

export const featured: Build[] = [
  { id: "b1", name: "Aarav, 13", handle: "@aarav.makes", project: "AI chatbot", image: "/images/featured/aarav.png" },
  { id: "b2", name: "Ananya, 11", handle: "@ananya.builds", project: "Image classifier", image: "/images/featured/ananya.png" },
  { id: "b3", name: "Diya, 14", handle: "@diya.ai", project: "AI art generator", image: "/images/featured/diya.png" },
  { id: "b4", name: "Sara, 12", handle: "@sara.codes", project: "Story writer AI", image: "/images/featured/sara.png" },
  { id: "b5", name: "Kabir, 13", handle: "@kabir.lab", project: "Voice assistant", image: "/images/featured/kabir.png" },
  { id: "b6", name: "Zoya, 10", handle: "@zoya.creates", project: "Emotion detector", image: "/images/featured/aarav.png" },
];

export const featureSteps = [
  { n: "01", title: "Build it", body: "Pick a project page and make your own AI version." },
  { n: "02", title: "Record & post", body: "Film a quick clip of your build and share it." },
  { n: "03", title: "Tag us", body: "Tag @wisetribes — we feature the best on our site & stories." },
];

/** Real Instagram reels embedded on the site. Add/remove permalinks here. */
export type Reel = { id: string; url: string };

export const reels: Reel[] = [
  { id: "r1", url: "https://www.instagram.com/reel/DY3yK6PxWKj/" },
  { id: "r2", url: "https://www.instagram.com/reel/DYhEd0UxuMw/" },
  { id: "r3", url: "https://www.instagram.com/reel/DYb4gAox_Be/" },
  { id: "r4", url: "https://www.instagram.com/reel/DYZvEc9SRCs/" },
  { id: "r5", url: "https://www.instagram.com/reel/DXwYDnsNUfI/" },
];

/* ============================================================
   PROJECTS — each gets its own dedicated page at /projects/[slug]
   All AI builds. The main YouTube tutorial + steps live here.
   ============================================================ */

export type Project = {
  slug: string;
  title: string;
  blurb: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  youtubeId: string;
  image: string;
  /** The prompt the kid copies and pastes into Claude. */
  prompt: string;
  steps: { title: string; body: string }[];
};

export const projects: Project[] = [
  {
    slug: "air-math",
    title: "Solve Maths Just by Showing Your Hands",
    blurb:
      "No pen, no keyboard — just your hands! Hold up your fingers and an AI counts them and does the maths with you, live on your webcam. Maths just became a game.",
    category: "Computer Vision · Maths",
    difficulty: "Beginner",
    duration: "Under 5 min",
    youtubeId: "aircAruvnKk",
    image: "/images/projects/coding-dark-laptop.png",
    prompt:
      'Create a single, self-contained HTML file — an "Air Math" game for WiseTribes.\n\n' +
      "Use MediaPipe Hands (from CDN) to detect both hands from the webcam and count how many fingers are raised on each hand. " +
      "Show a big, kid-friendly display: left number + right number = answer, updating live. " +
      "Add a toggle for + and ×, big colourful fonts, a fun pop sound on each new answer, a dark playful background, " +
      "and the webcam with the hand landmarks drawn on top.\n\n" +
      'At the bottom add a small footer that says "Built with WiseTribes" linking to https://wisetribes.io/.',
    steps: [
      { title: "Copy the prompt", body: "Hit the copy button on the prompt right here on this page." },
      { title: "Paste into Claude", body: "Paste it into Claude and let it write the whole app for you." },
      { title: "Download the file", body: "Download the single HTML file Claude gives you — one click." },
      { title: "Go live on Netlify", body: "Drag-and-drop it into Netlify, open your link, and do maths in the air!" },
    ],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
