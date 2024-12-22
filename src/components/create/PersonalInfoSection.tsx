import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Wand2 } from "lucide-react";
import { UseFormReturn } from "react-hook-form";

interface PersonalInfoSectionProps {
  form: UseFormReturn<any>;
}

export const PersonalInfoSection = ({ form }: PersonalInfoSectionProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold flex items-center gap-2 text-[#333333]">
        <Wand2 className="h-6 w-6 text-[#E535AB]" />
        Individuelle Angaben
      </h2>

      <FormField
        control={form.control}
        name="childName"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#333333]">Name des Kindes?</FormLabel>
            <FormControl>
              <Input
                placeholder="z.B. Markus (maximal ein Name)"
                className="bg-[#FFF0F9] border-none text-[#333333] placeholder:text-gray-400"
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
            <FormLabel className="text-[#333333]">Wie alt ist / wird dein Kind?</FormLabel>
            <FormControl>
              <Input
                placeholder="z.B. 5 Jahre (nur eine Zahl angeben)"
                className="bg-[#FFF0F9] border-none text-[#333333] placeholder:text-gray-400"
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
            <FormLabel className="text-[#333333]">Was sind die Hobbys deines Kindes?</FormLabel>
            <FormControl>
              <Textarea
                placeholder="z.B. Malen, Tanzen, Lego spielen, Lesen, Radfahren (maximal 5 Hobbys)"
                className="bg-[#FFF0F9] border-none text-[#333333] placeholder:text-gray-400"
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
            <FormLabel className="text-[#333333]">Was hat das Kind gerne?</FormLabel>
            <FormControl>
              <Textarea
                placeholder="z.B. Super Mario, Schoko Bananen, Spaghetti Bolognese, Pizza, Saft (max. 5 Dinge)"
                className="bg-[#FFF0F9] border-none text-[#333333] placeholder:text-gray-400"
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
            <FormLabel className="text-[#333333]">Welche Freunde und Familienmitglieder sollen mit eingebunden werden?</FormLabel>
            <FormControl>
              <Textarea
                placeholder="z.B. Mama Katharina, Papa Lukas, Bruder Sami (maximal 5 Familienmitglieder)"
                className="bg-[#FFF0F9] border-none text-[#333333] placeholder:text-gray-400"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};