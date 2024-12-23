import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Music, Play, Pause } from "lucide-react";
import { useState, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const AudioCard = ({ title, audioUrl }: { title: string; audioUrl?: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

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
          onClick={togglePlay}
        >
          {isPlaying ? (
            <Pause className="h-6 w-6 text-primary" />
          ) : (
            <Play className="h-6 w-6 text-primary" />
          )}
        </Button>
        {audioUrl && <audio ref={audioRef} src={audioUrl} />}
      </div>
    </Card>
  );
};

export const AudioExamplesSection = () => {
  const songs = [
    {
      title: "Anna räumt auf",
      url: "https://meinkinderlied.de/songs/annaräumtauf.mp3"
    },
    {
      title: "Lukas putzt seine Zähne",
      url: ""
    },
    {
      title: "Happy Birthday für Mia",
      url: ""
    }
  ];

  return (
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
              {songs.map((song, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <AudioCard title={song.title} audioUrl={song.url} />
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
  );
};