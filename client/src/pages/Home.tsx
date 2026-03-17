/*
 * DESIGN: Art Deco / Vintage Board Game Parlor
 * Home: Assembles all sections in order
 * Theme: Dark navy + champagne gold, Playfair Display + Cinzel + Raleway
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import GamesSection from "@/components/GamesSection";
import FeaturesSection from "@/components/FeaturesSection";
import MenuSection from "@/components/MenuSection";
import ScheduleSection from "@/components/ScheduleSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.13_0.03_260)]">
      <Navbar />
      <HeroSection />
      <GallerySection />
      <GamesSection />
      <FeaturesSection />
      <MenuSection />
      <ScheduleSection />
      <Footer />
    </div>
  );
}
