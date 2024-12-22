import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="container max-w-4xl mx-auto px-4 py-24 flex-grow">
        <h1 className="text-4xl font-bold mb-8 text-[#333333]">Datenschutzerklärung</h1>
        <div className="prose max-w-none text-[#333333]">
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Datenschutz auf einen Blick</h2>
          <p>Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Datenerfassung auf unserer Website</h2>
          <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Ihre Daten werden dabei nur zur Erstellung der personalisierten Lieder verwendet.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht auf Auskunft über die Sie betreffenden personenbezogenen Daten. Sie können auch die Berichtigung unrichtiger Daten verlangen.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Datensicherheit</h2>
          <p>Wir verwenden modernste Sicherheitsstandards, um Ihre persönlichen Daten vor unbefugtem Zugriff zu schützen.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Kontakt</h2>
          <p>Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten können Sie sich jederzeit an uns wenden.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Datenschutz;