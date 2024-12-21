import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Music, Clock, Heart, Gift, Play, Pause } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const AudioCard = ({ title }: { title: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          <Music className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 text-center">{title}</h3>
        <Button
          variant="outline"
          size="icon"
          className="w-12 h-12 rounded-full hover:bg-primary/10"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? (
            <Pause className="h-6 w-6 text-primary" />
          ) : (
            <Play className="h-6 w-6 text-primary" />
          )}
        </Button>
      </div>
    </Card>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-primary">
              SingYourStory
            </div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/about" className={navigationMenuTriggerStyle()}>
                    Über uns
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/create" className={navigationMenuTriggerStyle()}>
                    Erstellen
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/examples" className={navigationMenuTriggerStyle()}>
                    Beispiele
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/faqs" className={navigationMenuTriggerStyle()}>
                    FAQs
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16 flex-grow">
        {/* Hero Section */}
        <motion.section 
          className="relative h-screen flex items-center justify-center px-4 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/singing-kid.jpg')",
              filter: "brightness(0.7)"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-pink-50/90 to-white/90 backdrop-blur-[2px]" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.span 
              className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-white/90 text-primary rounded-full shadow-sm backdrop-blur-sm"
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
              className="text-lg md:text-xl text-gray-800 mb-8 max-w-2xl mx-auto"
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
              <Button size="lg" variant="outline" className="bg-white/80 backdrop-blur-sm">
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

        {/* Audio Examples Section */}
        <section id="examples" className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#E535AB" }}>
                Hör dir unsere beliebtesten Lieder an!
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Entdecke, wie personalisierte Lieder klingen können
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full max-w-5xl mx-auto"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {[
                    "Anna räumt auf",
                    "Lukas putzt seine Zähne",
                    "Happy Birthday für Mia"
                  ].map((title, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <AudioCard title={title} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 SingYourStory. Alle Rechte vorbehalten.
            </div>
            <div className="flex space-x-6">
              <Link to="/impressum" className="text-sm text-gray-400 hover:text-white transition-colors">
                Impressum
              </Link>
              <Link to="/agb" className="text-sm text-gray-400 hover:text-white transition-colors">
                AGB
              </Link>
              <Link to="/datenschutz" className="text-sm text-gray-400 hover:text-white transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
