import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const StepsSection = () => {
  return (
    <section className="py-24 px-4" style={{ backgroundColor: "#FFF0F9" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#E535AB" }}>
            In 3 einfachen Schritten zu deinem Lied
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: "1. Wähle den Anlass",
              description: "Zähneputzen, Geburtstag oder Bewegungslied",
              image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
            },
            {
              title: "2. Personalisieren",
              description: "Füge den Namen deines Kindes und Lieblingsaktivitäten hinzu",
              image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            },
            {
              title: "3. Vorschau und Download",
              description: "Lade dein Lied herunter oder verschenke es!",
              image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            }
          ].map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <Card className="p-6 h-full bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button 
            size="lg"
            className="text-white"
            style={{ backgroundColor: "#E535AB" }}
          >
            Jetzt ausprobieren
          </Button>
        </motion.div>
      </div>
    </section>
  );
};