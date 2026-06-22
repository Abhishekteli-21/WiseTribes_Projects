import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RibbonBand from "@/components/RibbonBand";
import Featured from "@/components/Featured";
import TribeGallery from "@/components/TribeGallery";
import Reels from "@/components/Reels";
import CylinderText from "@/components/CylinderText";
import ExploreBuilds from "@/components/ExploreBuilds";
import Footer from "@/components/Footer";

export default function BuildHome() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <RibbonBand />
        <Featured />
        <TribeGallery />
        <Reels />
        <CylinderText />
        <ExploreBuilds />
      </main>
      <Footer />
    </>
  );
}
