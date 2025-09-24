import React from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import OverviewSection from "@/components/sections/OverviewSection";
import ChaptersSection from "@/components/sections/ChaptersSection";
import CharactersSection from "@/components/sections/CharactersSection";
import ThemesSection from "@/components/sections/ThemesSection";
import QuotesSection from "@/components/sections/QuotesSection";
import RelevanceSection from "@/components/sections/RelevanceSection";
import Footer from "@/components/sections/Footer";
import BackToTopButton from "@/components/BackToTopButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <OverviewSection />
        <ChaptersSection />
        <CharactersSection />
        <ThemesSection />
        <QuotesSection />
        <RelevanceSection />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Index;
