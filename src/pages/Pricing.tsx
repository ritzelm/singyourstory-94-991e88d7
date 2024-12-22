import { Navigation } from "@/components/Navigation";
import { PricingSection } from "@/components/PricingSection";
import { AudioExamplesSection } from "@/components/AudioExamplesSection";
import { Footer } from "@/components/Footer";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <div className="pt-16 flex-grow">
        <PricingSection />
        <AudioExamplesSection />
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;