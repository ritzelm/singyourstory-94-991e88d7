import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { BasicInfoSection } from "@/components/create/BasicInfoSection";
import { PersonalInfoSection } from "@/components/create/PersonalInfoSection";
import { SummarySection } from "@/components/create/SummarySection";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  ageGroup: z.string(),
  occasion: z.string(),
  genre: z.string(),
  childName: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein"),
  childAge: z.string(),
  hobbies: z.string(),
  favorites: z.string(),
  familyMembers: z.string(),
  agbAccepted: z.boolean().refine(val => val === true, {
    message: "Sie müssen die AGB akzeptieren"
  }),
  widerrufsrechtAccepted: z.boolean().refine(val => val === true, {
    message: "Sie müssen dem Widerrufsrecht zustimmen"
  })
});

const Create = () => {
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ageGroup: "0-2",
      occasion: "aufraumen",
      genre: "pop",
      agbAccepted: false,
      widerrufsrechtAccepted: false
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (step < 3) {
      setStep(step + 1);
      return;
    }

    try {
      // Here we would integrate with Stripe and send the email
      // For now, just show a success message
      toast({
        title: "Bestellung erfolgreich",
        description: "Wir haben deine Bestellung erhalten und beginnen mit der Erstellung deines Songs.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Fehler",
        description: "Es gab einen Fehler bei der Verarbeitung deiner Bestellung.",
      });
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <BasicInfoSection form={form} />;
      case 2:
        return <PersonalInfoSection form={form} />;
      case 3:
        return <SummarySection form={form} onSubmit={form.handleSubmit(onSubmit)} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] flex flex-col">
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center mb-4 text-[#333333]">
          Lass uns jetzt euren Song generieren!
        </h1>
        <p className="text-center mb-8 text-[#333333]">
          Gebe deine persönlichen und individuellen Details ein, und du erhältst einen Song, der die Alltagsroutinen rockt!
        </p>

        <div className="bg-[#FFF0F9] p-6 rounded-lg mb-8">
          <p className="text-center text-lg text-[#333333]">
            Generiere jetzt deinen Song für <span className="text-[#E535AB]">19,90€</span> und erhalte deinen Song in der Regel innerhalb der nächsten 60 Minuten.
            <br />
            Du erhältst 1 Ki-Song in 2 Varianten inkl. Songtext als mp3 Datei.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-2xl mx-auto">
            {renderStep()}
            
            {step < 3 && (
              <button
                type="submit"
                className="w-full bg-[#E535AB] hover:bg-[#E535AB]/90 text-white py-4 rounded-full text-lg font-semibold"
              >
                Weiter
              </button>
            )}
          </form>
        </Form>
      </div>
      <Footer />
    </div>
  );
};

export default Create;