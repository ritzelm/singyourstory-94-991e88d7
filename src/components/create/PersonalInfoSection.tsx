import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Wand2 } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { useState } from "react";

interface PersonalInfoSectionProps {
  form: UseFormReturn<any>;
}

export const PersonalInfoSection = ({ form }: PersonalInfoSectionProps) => {
  const [nameLength, setNameLength] = useState(0);
  const [hobbiesLength, setHobbiesLength] = useState(0);
  const [favoritesLength, setFavoritesLength] = useState(0);
  const [familyLength, setFamilyLength] = useState(0);

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
              <div className="relative">
                <Input
                  placeholder="z.B. Markus (maximal ein Name)"
                  className="bg-[#FFF0F9] border-none text-[#333333] placeholder:text-gray-400"
                  maxLength={50}
                  onChange={(e) => {
                    setNameLength(e.target.value.length);
                    field.onChange(e);
                  }}
                  {...field}
                />
                <span className="absolute right-3 top-2.5 text-sm text-gray-500">
                  {nameLength}/50
                </span>
              </div>
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
                placeholder="z.B. 5 (nur eine Zahl angeben)"
                className="bg-[#FFF0F9] border-none text-[#333333] placeholder:text-gray-400"
                type="number"
                min="0"
                max="99"
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
              <div className="relative">
                <Textarea
                  placeholder="z.B. Malen, Tanzen, Lego spielen (maximal 3 Hobbys)"
                  className="bg-[#FFF0F9] border-none text-[#333333] placeholder:text-gray-400"
                  maxLength={200}
                  onChange={(e) => {
                    setHobbiesLength(e.target.value.length);
                    field.onChange(e);
                  }}
                  {...field}
                />
                <span className="absolute right-3 bottom-3 text-sm text-gray-500">
                  {hobbiesLength}/200
                </span>
              </div>
            </FormControl>
            <p className="text-sm text-gray-500 mt-1">Bitte gib maximal 3 verschiedene Hobbys an.</p>
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
              <div className="relative">
                <Textarea
                  placeholder="z.B. Super Mario, Schoko Bananen, Spaghetti (maximal 3 Vorlieben)"
                  className="bg-[#FFF0F9] border-none text-[#333333] placeholder:text-gray-400"
                  maxLength={200}
                  onChange={(e) => {
                    setFavoritesLength(e.target.value.length);
                    field.onChange(e);
                  }}
                  {...field}
                />
                <span className="absolute right-3 bottom-3 text-sm text-gray-500">
                  {favoritesLength}/200
                </span>
              </div>
            </FormControl>
            <p className="text-sm text-gray-500 mt-1">Bitte gib maximal 3 verschiedene Vorlieben an.</p>
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
              <div className="relative">
                <Textarea
                  placeholder="z.B. Mama Katharina, Papa Lukas, Bruder Sami (maximal 5 Namen)"
                  className="bg-[#FFF0F9] border-none text-[#333333] placeholder:text-gray-400"
                  maxLength={200}
                  onChange={(e) => {
                    setFamilyLength(e.target.value.length);
                    field.onChange(e);
                  }}
                  {...field}
                />
                <span className="absolute right-3 bottom-3 text-sm text-gray-500">
                  {familyLength}/200
                </span>
              </div>
            </FormControl>
            <p className="text-sm text-gray-500 mt-1">Bitte gib maximal 5 verschiedene Namen an.</p>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};