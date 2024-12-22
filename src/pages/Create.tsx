import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Music, Wand2 } from "lucide-react";

const formSchema = z.object({
  ageGroup: z.string(),
  occasion: z.string(),
  genre: z.string(),
  childName: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein"),
  childAge: z.string(),
  hobbies: z.string(),
  favorites: z.string(),
  familyMembers: z.string(),
});

const Create = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ageGroup: "0-2",
      occasion: "aufraumen",
      genre: "pop",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="min-h-screen bg-[#1a237e] text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">Lass uns jetzt euren Song generieren!</h1>
        <p className="text-center mb-8 text-gray-300">
          Gebe deine persönlichen und individuellen Details ein, und du erhältst einen Song, der die Alltagsroutinen rockt!
        </p>

        <div className="bg-[#0d1442] p-6 rounded-lg mb-8">
          <p className="text-center text-lg">
            Generiere jetzt deinen Song für <span className="text-[#ffa726]">19,90€</span> und erhalte deinen Song in der Regel innerhalb der nächsten 60 Minuten.
            <br />
            Du erhältst 1 Ki-Song in 2 Varianten inkl. Songtext als mp3 Datei.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-2xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Music className="h-6 w-6" />
                Altersgruppe, Anlass und Genre
              </h2>

              <FormField
                control={form.control}
                name="ageGroup"
                render={({ field }) => (
                  <FormItem className="space-y-4">
                    <FormLabel>Für welche Altersgruppe soll der Song generiert werden?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="grid grid-cols-2 md:grid-cols-5 gap-4"
                      >
                        {["0-2", "3-5", "6-8", "9-10", "10-99"].map((age) => (
                          <div key={age} className="relative">
                            <RadioGroupItem
                              value={age}
                              id={`age-${age}`}
                              className="peer sr-only"
                            />
                            <label
                              htmlFor={`age-${age}`}
                              className="flex items-center justify-center px-4 py-2 bg-[#0d1442] rounded-md cursor-pointer peer-checked:bg-[#ffa726] hover:bg-[#1a237e] transition-colors"
                            >
                              {age}
                            </label>
                          </div>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="occasion"
                render={({ field }) => (
                  <FormItem className="space-y-4">
                    <FormLabel>Für welchen Anlass soll der Song generiert werden?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="grid grid-cols-2 md:grid-cols-3 gap-4"
                      >
                        {[
                          { value: "weihnachten", label: "Weihnachten" },
                          { value: "kreativ", label: "Kreativer Freiraum" },
                          { value: "zahneputzen", label: "Zähneputzen" },
                          { value: "aufraumen", label: "Aufräumen" },
                          { value: "geburtstag", label: "Geburtstag" },
                        ].map((option) => (
                          <div key={option.value} className="relative">
                            <RadioGroupItem
                              value={option.value}
                              id={`occasion-${option.value}`}
                              className="peer sr-only"
                            />
                            <label
                              htmlFor={`occasion-${option.value}`}
                              className="flex items-center justify-center px-4 py-2 bg-[#0d1442] rounded-md cursor-pointer peer-checked:bg-[#ffa726] hover:bg-[#1a237e] transition-colors"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="genre"
                render={({ field }) => (
                  <FormItem className="space-y-4">
                    <FormLabel>In welchem Genre soll dein Song generiert werden?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4"
                      >
                        {[
                          { value: "pop", label: "Pop" },
                          { value: "schlager", label: "Schlager" },
                          { value: "hiphop", label: "HipHop" },
                          { value: "rnb", label: "R&B/Soul" },
                        ].map((option) => (
                          <div key={option.value} className="relative">
                            <RadioGroupItem
                              value={option.value}
                              id={`genre-${option.value}`}
                              className="peer sr-only"
                            />
                            <label
                              htmlFor={`genre-${option.value}`}
                              className="flex items-center justify-center px-4 py-2 bg-[#0d1442] rounded-md cursor-pointer peer-checked:bg-[#ffa726] hover:bg-[#1a237e] transition-colors"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Wand2 className="h-6 w-6" />
                Individuelle Angaben
              </h2>

              <FormField
                control={form.control}
                name="childName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name des Kindes?</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="z.B. Markus (maximal ein Name)"
                        className="bg-[#0d1442] border-none text-white placeholder:text-gray-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="childAge"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Wie alt ist / wird dein Kind?</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="z.B. 5 Jahre (nur eine Zahl angeben)"
                        className="bg-[#0d1442] border-none text-white placeholder:text-gray-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="hobbies"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Was sind die Hobbys deines Kindes?</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="z.B. Malen, Tanzen, Lego spielen, Lesen, Radfahren (maximal 5 Hobbys)"
                        className="bg-[#0d1442] border-none text-white placeholder:text-gray-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="favorites"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Was hat das Kind gerne?</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="z.B. Super Mario, Schoko Bananen, Spaghetti Bolognese, Pizza, Saft (max. 5 Dinge)"
                        className="bg-[#0d1442] border-none text-white placeholder:text-gray-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="familyMembers"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Welche Freunde und Familienmitglieder sollen mit eingebunden werden?</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="z.B. Mama Katharina, Papa Lukas, Bruder Sami (maximal 5 Familienmitglieder)"
                        className="bg-[#0d1442] border-none text-white placeholder:text-gray-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#ffa726] to-[#ff7043] hover:from-[#ff9100] hover:to-[#ff5722] text-white py-4 rounded-full text-lg font-semibold"
            >
              Eingaben prüfen
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Create;