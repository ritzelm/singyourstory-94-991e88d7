import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";

interface SummarySectionProps {
  form: UseFormReturn<any>;
  onSubmit: () => void;
}

export const SummarySection = ({ form, onSubmit }: SummarySectionProps) => {
  const formValues = form.getValues();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-[#333333]">Zusammenfassung deiner Bestellung</h2>
      
      <div className="bg-[#FFF0F9] p-6 rounded-lg space-y-4">
        <div>
          <h3 className="font-semibold">Altersgruppe:</h3>
          <p>{formValues.ageGroup} Jahre</p>
        </div>
        <div>
          <h3 className="font-semibold">Anlass:</h3>
          <p>{formValues.occasion}</p>
        </div>
        <div>
          <h3 className="font-semibold">Genre:</h3>
          <p>{formValues.genre}</p>
        </div>
        <div>
          <h3 className="font-semibold">Name des Kindes:</h3>
          <p>{formValues.childName}</p>
        </div>
        <div>
          <h3 className="font-semibold">Alter des Kindes:</h3>
          <p>{formValues.childAge} Jahre</p>
        </div>
        <div>
          <h3 className="font-semibold">Hobbys:</h3>
          <p>{formValues.hobbies}</p>
        </div>
        <div>
          <h3 className="font-semibold">Vorlieben:</h3>
          <p>{formValues.favorites}</p>
        </div>
        <div>
          <h3 className="font-semibold">Familienmitglieder:</h3>
          <p>{formValues.familyMembers}</p>
        </div>
      </div>

      <div className="bg-[#FFF0F9] p-6 rounded-lg">
        <h3 className="font-semibold mb-4">Preis: 19,90€</h3>
        <p className="text-sm text-gray-600 mb-6">
          Inkl. MwSt., 2 Versionen des Songs als MP3 und Songtext
        </p>

        <div className="space-y-4">
          <FormField
            control={form.control}
            name="agbAccepted"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <label className="text-sm font-medium leading-none">
                    Ich akzeptiere die <Link to="/agb" className="text-primary hover:underline">AGB</Link>
                  </label>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="widerrufsrechtAccepted"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <label className="text-sm font-medium leading-none">
                    Ich bin damit einverstanden, dass der Anbieter vor Ablauf der Widerrufsfrist mit der Erbringung der Leistung beginnt und mein Widerrufsrecht mit vollständiger Vertragserfüllung (Übermittlung des Liedes per E-Mail innerhalb von 24 Std.) erlischt.
                  </label>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
        </div>

        <Button
          onClick={onSubmit}
          disabled={!form.getValues().agbAccepted || !form.getValues().widerrufsrechtAccepted}
          className="w-full mt-6 bg-primary hover:bg-primary/90"
        >
          Weiter zur Zahlung
        </Button>
      </div>
    </div>
  );
};