import ScrollProgress from "@/components/ScrollProgress";
import LandingNav from "@/components/landing/LandingNav";
import LandingHero from "@/components/landing/LandingHero";
import StatStrip from "@/components/landing/StatStrip";
import Problem from "@/components/landing/Problem";
import Curriculum from "@/components/landing/Curriculum";
import Steps from "@/components/landing/Steps";
import Programme from "@/components/landing/Programme";
import BuildCTA from "@/components/landing/BuildCTA";
import Pricing from "@/components/landing/Pricing";
import Testimonials from "@/components/landing/Testimonials";
import Press from "@/components/landing/Press";
import Faq from "@/components/landing/Faq";
import LandingFooter from "@/components/landing/LandingFooter";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <LandingNav />
      <main className="flex-1">
        <LandingHero />
        <StatStrip />
        <Problem />
        <Curriculum />
        <Steps />
        <Programme />
        <BuildCTA />
        <Pricing />
        <Testimonials />
        <Press />
        <Faq />
      </main>
      <LandingFooter />
    </>
  );
}
