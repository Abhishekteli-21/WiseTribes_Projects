/* ============================================================
   WiseTribes — MAIN landing page content (rebuilt wisetribes.io).
   AI education for kids (Class 5–10). Edit copy/prices here.
   ============================================================ */

import { site } from "./content";

export { site };

const U = (id: string, w = 1000) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&fit=crop&auto=format`;

/** Cinematic hero imagery (swap with your own kids-building-AI photos). */
export const heroImages = {
  main: "/images/hero-wall/girl-ai-generator.png",
  secondary: "/images/hero-wall/girls-laptop.png",
  tertiary: "/images/hero-wall/boy-evening.png",
  wide: "/images/landing-hero/classroom-wide.png",
};

export const nav = [
  { label: "How it works", href: "#how" },
  { label: "Programme", href: "#programme" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  trust: "Trusted by 100+ families across Tier 1 & Tier 2 cities",
  ctaPrimary: { label: "Book a free demo class", href: "#pricing" },
  ctaSecondary: { label: "Take the free AI assessment", href: "#how" },
  ctaWhatsApp: { label: "WhatsApp to enquire", href: site.whatsapp },
  ticker: [
    "65% of today's kids will work in jobs that don't exist yet",
    "By 2030, AI will transform 85 million jobs",
    "India's school AI-skill gap is 5+ years behind",
    "No coding background needed to start",
  ],
};

export const stats = [
  { value: 65, suffix: "%", label: "of children will work in jobs that don't exist yet" },
  { value: 2030, suffix: "", label: "AI transforms 85 million jobs worldwide" },
  { value: 5, suffix: " yrs", label: "India's AI education lags industry by" },
  { value: 0, suffix: "", display: "Zero", label: "coding background needed to start" },
];

export const problem = {
  kicker: "The quiet divide",
  heading: "The gap between AI-ready kids and the rest is opening *quietly.*",
  body: "Two children, same classroom, same marks. In five years they live in different worlds — and the difference isn't talent. It's whether they learned to think *with* AI.",
  without: {
    title: "Without AI literacy",
    points: [
      "Uses AI to copy answers, never to create",
      "Believes whatever the chatbot says",
      "Falls behind as AI reshapes every career",
    ],
  },
  with: {
    title: "The WiseTribes child",
    points: [
      "Understands how AI works — and when not to trust it",
      "Has built real projects: models, dashboards, bots",
      "Directs AI intelligently instead of depending on it",
    ],
  },
};

export const curriculum = {
  kicker: "Curriculum",
  heading: "8 skills. Real projects. *Zero fluff.*",
  body: "Every skill ends in something your child actually built — not a worksheet.",
  skills: [
    { n: "01", title: "How AI Thinks", body: "The intuition behind models, data and predictions." },
    { n: "02", title: "How AI Sees", body: "Image recognition with Teachable Machine & OpenCV." },
    { n: "03", title: "How AI Talks", body: "Chatbots, language models and prompting that works." },
    { n: "04", title: "Data Detectives", body: "Find patterns, clean data, read what numbers say." },
    { n: "05", title: "AI & Creativity", body: "Generate art, stories and music — responsibly." },
    { n: "06", title: "Python for AI", body: "From first variable to real, runnable scripts." },
    { n: "07", title: "Machine Learning", body: "Train, test and tune models that actually learn." },
    { n: "08", title: "Responsible AI", body: "Bias, ethics and knowing when AI is wrong." },
  ],
};

export const how = {
  kicker: "How it works",
  heading: "Three steps to *AI confidence.*",
  steps: [
    {
      n: "01",
      title: "Free AI Assessment",
      meta: "15 minutes · Free",
      body: "A guided activity (not a test) that maps your child's AI awareness and critical thinking. You get a readiness report.",
    },
    {
      n: "02",
      title: "Trial — 4 Live Sessions",
      meta: "₹944 incl. GST",
      body: "Hands-on mini-projects with a live mentor, so you can see the spark before committing to anything.",
    },
    {
      n: "03",
      title: "Full Programme",
      meta: "₹6,000 / 3 months",
      body: "48 live sessions across 12 modules, a real AI project every module, and a capstone build with a certificate.",
    },
  ],
};

export const groups = [
  {
    tag: "Group A · Foundation",
    ages: "Class 5–6 · Ages 10–12",
    image: "/images/programme/group-a-young-kids.png",
    modules: ["What is AI", "How AI Sees", "How AI Talks", "AI & Creativity", "Data Detectives", "Smart Assistants"],
    tools: ["Scratch AI", "Teachable Machine", "ChatGPT", "Canva AI"],
    project: "A chatbot that answers questions about the school timetable.",
  },
  {
    tag: "Group B · Explorer",
    ages: "Class 7–8 · Ages 12–14",
    image: "/images/landing-hero/classroom-wide.png",
    modules: ["AI Decoded", "Data Science", "Language & AI", "Computer Vision", "Python Foundations", "AI APIs"],
    tools: ["Python", "Jupyter", "OpenCV", "HuggingFace"],
    project: "A sentiment analyser that reads real product reviews.",
  },
  {
    tag: "Group C · Builder",
    ages: "Class 9–10 · Ages 14–16",
    image: "/images/programme/group-c-teens-python.png",
    modules: ["Python for AI", "ML in Practice", "NLP & Text AI", "Generative AI", "Responsible AI", "Portfolio & Career"],
    tools: ["Python", "TensorFlow", "OpenAI API", "Streamlit"],
    project: "A custom AI story generator with user-defined rules.",
  },
];

export const pricing = [
  {
    name: "Trial",
    price: "₹944",
    note: "incl. GST · one-time",
    highlight: false,
    cta: "Start the trial",
    features: [
      "4 live sessions",
      "AI readiness assessment report",
      "Student portal access",
      "A completed mini-project",
    ],
  },
  {
    name: "Full Enrolment",
    price: "₹6,000",
    note: "per 3 months",
    highlight: true,
    cta: "Enroll now",
    features: [
      "48 live sessions · 12 modules",
      "A real AI project every module",
      "Weekly progress reports",
      "Capstone build + certificate",
      "Graduation ceremony",
      "Parent portal access",
    ],
  },
];

export const testimonials = [
  { name: "Anita Patel", meta: "Mumbai · Parent, Class 7", quote: "After the trial, my daughter came home and explained how a recommendation algorithm works. I was stunned." },
  { name: "Rohit Kulkarni", meta: "Pune · Parent, Class 9", quote: "My son is already building small Python scripts. Six months ago he didn't know what a variable was." },
  { name: "Sunita Mehta", meta: "Bangalore · Parent, Class 6", quote: "The assessment alone was worth it. The instructors feel like mentors, not tutors." },
  { name: "Sunita Verma", meta: "Delhi · Parent, Class 8", quote: "WiseTribes gives him skills his school won't teach for another decade — and at a price that's genuinely fair." },
];

export const press = [
  { name: "The Indian Bulletin", quote: "India's AI skill gap is not a future problem." },
  { name: "A Reporter Live", quote: "Children should learn to question AI before they use it." },
  { name: "Republic News India", quote: "How one Pune founder is closing India's AI readiness gap." },
  { name: "Hindustan Metro", quote: "Pune startup WiseTribes builds an AI school." },
  { name: "Flipboard", quote: "Betting every Indian child can build real AI projects." },
  { name: "Daily Hunt", quote: "WiseTribes is preparing India's next generation." },
];

export const faqs = [
  { q: "Does my child need a coding background?", a: "Not at all. We start from zero — the first projects are no-code, and code is introduced gently only when your child is ready." },
  { q: "How is this different from YouTube or school?", a: "It's live, project-based and mentor-led. Your child builds real things, gets feedback, and learns to think with AI — not just watch someone else do it." },
  { q: "What does a typical session look like?", a: "A small live batch, a quick concept, then most of the time spent building a mini-project hands-on with a mentor." },
  { q: "Will this affect school studies?", a: "It runs alongside school, once or twice a week, and reinforces maths and logic. It adds to school — it doesn't compete with it." },
  { q: "What if my child wants to stop?", a: "Start with the ₹944 trial — no commitment. Continue only if your child loves it." },
  { q: "How many children per batch?", a: "Small batches so every child gets attention and real mentor time." },
  { q: "Is this only for future engineers?", a: "No. AI literacy helps every future — doctors, artists, founders, lawyers. It's how to think in an AI world." },
];

export const footer = {
  tagline:
    "Preparing every child in Class 5–10 to think with AI — alongside school, not instead of it.",
  copyright: "© 2025 WiseTribes. All rights reserved. · Pune, India",
};
