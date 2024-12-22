import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const AGB = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="container max-w-4xl mx-auto px-4 py-24 flex-grow">
        <h1 className="text-4xl font-bold mb-8 text-[#333333]">Allgemeine Geschäftsbedingungen</h1>
        <div className="prose max-w-none text-[#333333]">
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Geltungsbereich</h2>
          <p>Diese Allgemeinen Geschäftsbedingungen gelten für alle Bestellungen und Dienstleistungen zwischen der SingYourStory GmbH und ihren Kunden.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Vertragsschluss</h2>
          <p>Der Vertrag kommt durch die Bestellung des Kunden und unsere Auftragsbestätigung zustande.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Preise und Zahlungsbedingungen</h2>
          <p>Alle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer. Die Zahlung erfolgt per Vorkasse.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Lieferung und Lieferzeit</h2>
          <p>Die Lieferung erfolgt in der Regel innerhalb von 60 Minuten, spätestens jedoch innerhalb von 24 Stunden nach Zahlungseingang.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Widerrufsrecht</h2>
          <p>Da es sich um ein individuell für Sie erstelltes Produkt handelt, ist ein Widerruf nach Produktionsbeginn ausgeschlossen.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AGB;