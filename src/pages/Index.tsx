import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { StepsSection } from "@/components/StepsSection";
import { AudioExamplesSection } from "@/components/AudioExamplesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <div className="pt-16 flex-grow">
        <HeroSection />
        <FeaturesSection />
        <StepsSection />
        <AudioExamplesSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;