import { useState, useCallback } from "react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import HeroSection from "@/components/HeroSection";
import PinnedAboutSection from "@/components/PinnedAboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  const handlePreloaderComplete = useCallback(() => {
    setShowPreloader(false);
  }, []);

  return (
    <>
      {/* SEO Meta Tags */}
      <SEO pageKey="home" />

      {/* Custom cursor - only on desktop */}
      <div className="hidden lg:block">
        <CustomCursor />
      </div>

      {/* Preloader */}
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}

      <div
        className={`min-h-screen bg-background transition-opacity duration-500 ${
          showPreloader ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />
        <HeroSection />
        <PinnedAboutSection />
        <ServicesSection />
        <PortfolioSection />
        <CTASection />
        <Footer />
      </div>
    </>
  );
};

export default Index;