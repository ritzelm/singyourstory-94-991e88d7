import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Music, Clock, Heart, Gift } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section 
        className="relative h-screen flex items-center justify-center px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-pink-50 to-white pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.span 
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-white/80 text-primary rounded-full shadow-sm backdrop-blur-sm"
            {...fadeIn}
          >
            Personalisierte Kinderlieder
          </motion.span>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            Magische Momente durch Musik
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            {...fadeIn}
            transition={{ delay: 0.3 }}
          >
            Erschaffe einzigartige Lieder für besondere Anlässe, die dein Kind zum Strahlen bringen
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            {...fadeIn}
            transition={{ delay: 0.4 }}
          >
            <Button size="lg" className="group">
              Lied erstellen
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Beispiele anhören
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Warum personalisierte Lieder?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Entdecke die Magie personalisierter Musik für dein Kind</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Music, title: "Individuell", desc: "Maßgeschneidert für jedes Kind" },
              { icon: Clock, title: "Schnell", desc: "In nur 3 Minuten fertig" },
              { icon: Heart, title: "Liebevoll", desc: "Mit Herz komponiert" },
              { icon: Gift, title: "Besonders", desc: "Das perfekte Geschenk" }
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;