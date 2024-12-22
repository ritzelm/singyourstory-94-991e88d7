import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center">
      {/* Background image with adjusted brightness */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/77cc710b-6b57-4c3d-9ae3-c9e5f499eb0d.png')",
          filter: "brightness(0.85)" // Increased from 0.7 to 0.85 for better visibility
        }}
      />
      
      {/* Overlay gradient for text readability */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.4))"
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Personalisierte Kinderlieder für magische Momente
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8">
          Lass uns gemeinsam einen Song kreieren, der dein Kind begeistert und den Alltag verzaubert
        </p>
        <Link to="/create">
          <Button
            size="lg"
            className="bg-[#E535AB] hover:bg-[#E535AB]/90 text-white px-8 py-6 rounded-full text-lg"
          >
            Jetzt Song erstellen
          </Button>
        </Link>
      </div>
    </div>
  );
};