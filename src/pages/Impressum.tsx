import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="container max-w-4xl mx-auto px-4 py-24 flex-grow">
        <h1 className="text-4xl font-bold mb-8 text-[#333333]">Impressum</h1>
        <div className="prose max-w-none text-[#333333]">
          <h2 className="text-2xl font-semibold mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
          <p>SingYourStory GmbH<br />
          Musterstraße 123<br />
          12345 Musterstadt</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Kontakt</h2>
          <p>Telefon: +49 (0) 123 456789<br />
          E-Mail: info@singyourstory.de</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Geschäftsführung</h2>
          <p>Max Mustermann</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Registereintrag</h2>
          <p>Eingetragen im Handelsregister.<br />
          Registergericht: Amtsgericht Musterstadt<br />
          Registernummer: HRB 12345</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Umsatzsteuer-ID</h2>
          <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
          DE 123456789</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Impressum;