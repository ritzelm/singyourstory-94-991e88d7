import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Music, FileText, Clock, Download, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const FeatureCard = ({ title, icon, description }: { title: string; icon: React.ReactNode; description: string }) => {
  return (
    <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-center">{description}</p>
      </div>
    </Card>
  );
};

const calculateTimeLeft = () => {
  const difference = new Date('2024-12-31T23:59:59').getTime() - new Date().getTime();
  
  if (difference <= 0) {
    return {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00'
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0'),
    minutes: Math.floor((difference / 1000 / 60) % 60).toString().padStart(2, '0'),
    seconds: Math.floor((difference / 1000) % 60).toString().padStart(2, '0')
  };
};

export const PricingSection = () => {
  const [showDiscount, setShowDiscount] = useState(true);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      
      // Check if the countdown has ended
      if (Object.values(newTimeLeft).every(value => value === '00')) {
        setShowDiscount(false);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-4" style={{ backgroundColor: "#FFF0F9" }}>
      {showDiscount && (
        <div className="fixed top-0 left-0 right-0 bg-primary text-white py-3 px-4 flex justify-center items-center z-[100]">
          <div className="flex items-center justify-center space-x-4 max-w-6xl mx-auto">
            <div className="flex items-center space-x-4 font-sans">
              <span className="text-sm">
                Spare 20% mit dem Code: WINTER24
              </span>
              <div className="hidden sm:flex items-center space-x-2 text-sm">
                <span>Endet in:</span>
                <div className="flex space-x-1">
                  <span>{timeLeft.days}d</span>
                  <span>{timeLeft.hours}h</span>
                  <span>{timeLeft.minutes}m</span>
                  <span>{timeLeft.seconds}s</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowDiscount(false)}
              className="absolute right-4 hover:opacity-80"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#E535AB" }}>
            Dein personalisierter KI-Song – Einfach und einzigartig!
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <FeatureCard
            title="Individuell"
            icon={<Music className="w-8 h-8 text-primary" />}
            description="Jedes Lied ist einzigartig und auf dein Kind personalisiert."
          />
          <FeatureCard
            title="Songtext inklusive"
            icon={<FileText className="w-8 h-8 text-primary" />}
            description="Der Text wird mitgeliefert – perfekt zum Mitsingen!"
          />
          <FeatureCard
            title="Schnell"
            icon={<Clock className="w-8 h-8 text-primary" />}
            description="Dein Song ist in der Regel innerhalb von 60 Minuten fertig, garantiert innerhalb von 24 Stunden."
          />
          <FeatureCard
            title="Flexibel"
            icon={<Download className="w-8 h-8 text-primary" />}
            description="Direkt als MP3-Download verfügbar."
          />
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/create">
            <Button 
              size="lg"
              className="text-lg px-8 py-6"
              style={{ backgroundColor: "#E535AB" }}
            >
              Jetzt deinen Song erstellen – für nur 19,90 €!
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};