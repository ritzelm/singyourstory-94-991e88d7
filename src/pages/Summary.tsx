import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

interface FormData {
  ageGroup: string;
  occasion: string;
  genre: string;
  childName: string;
  childAge: string;
  hobbies: string;
  favorites: string;
  familyMembers: string;
}

const Summary = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData | null>(null);
  const [agbAccepted, setAgbAccepted] = useState(false);
  const [widerrufsrechtAccepted, setWiderrufsrechtAccepted] = useState(false);

  useEffect(() => {
    const savedData = sessionStorage.getItem('songFormData');
    if (!savedData) {
      navigate('/create');
      return;
    }
    setFormData(JSON.parse(savedData));
  }, [navigate]);

  if (!formData) return null;

  const handlePayment = () => {
    // Handle payment logic here
    console.log('Proceeding to payment...');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="container mx-auto px-4 py-24 flex-grow">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-[#333333]">Zusammenfassung deiner Bestellung</h1>
          
          <div className="bg-[#FFF0F9] p-6 rounded-lg mb-8 space-y-4">
            <h2 className="text-xl font-semibold text-[#333333] mb-4">Deine Angaben:</h2>
            <p><strong>Name des Kindes:</strong> {formData.childName}</p>
            <p><strong>Alter:</strong> {formData.childAge}</p>
            <p><strong>Altersgruppe:</strong> {formData.ageGroup}</p>
            <p><strong>Anlass:</strong> {formData.occasion}</p>
            <p><strong>Genre:</strong> {formData.genre}</p>
            <p><strong>Hobbys:</strong> {formData.hobbies}</p>
            <p><strong>Lieblingsdinge:</strong> {formData.favorites}</p>
            <p><strong>Familienmitglieder:</strong> {formData.familyMembers}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h2 className="text-xl font-semibold text-[#333333] mb-4">Preis</h2>
            <p className="text-3xl font-bold text-[#E535AB]">19,90€</p>
            <p className="text-sm text-gray-600">inkl. MwSt.</p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="agb" 
                checked={agbAccepted}
                onCheckedChange={(checked) => setAgbAccepted(checked as boolean)}
              />
              <label htmlFor="agb" className="text-sm">
                Ich akzeptiere die <Link to="/agb" className="text-[#E535AB] hover:underline">AGB</Link>
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox 
                id="widerrufsrecht" 
                checked={widerrufsrechtAccepted}
                onCheckedChange={(checked) => setWiderrufsrechtAccepted(checked as boolean)}
              />
              <label htmlFor="widerrufsrecht" className="text-sm">
                Ich habe das <Link to="/widerrufsrecht" className="text-[#E535AB] hover:underline">Widerrufsrecht</Link> zur Kenntnis genommen
              </label>
            </div>
          </div>

          <Button
            onClick={handlePayment}
            disabled={!agbAccepted || !widerrufsrechtAccepted}
            className="w-full bg-[#E535AB] hover:bg-[#E535AB]/90 text-white py-4 rounded-full text-lg font-semibold disabled:opacity-50"
          >
            Weiter zur Zahlung
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Summary;