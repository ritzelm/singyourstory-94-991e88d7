import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const AGB = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="container max-w-4xl mx-auto px-4 py-24 flex-grow">
        <h1 className="text-4xl font-bold mb-8 text-[#333333]">Allgemeine Geschäftsbedingungen (AGB)</h1>
        <div className="prose max-w-none text-[#333333]">
          <h2 className="text-2xl font-semibold mt-8 mb-4">§ 1 Geltungsbereich</h2>
          <p>(1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, die zwischen MeinKinderlied.de bzw. der RiTZELMUt Ventures GmbH, Mariahilfstr. 18, 81541 München, Deutschland (nachfolgend Anbieter) und ihren Kunden (nachfolgend Kunde oder Kunden) über den Online-Shop der Anbieter abgeschlossen werden. Durch die Nutzung des Online-Shops erklärt sich der Kunde mit diesen AGB einverstanden. Abweichenden Bedingungen des Kunden wird ausdrücklich widersprochen, es sei denn, der Anbieter hat ihrer Geltung schriftlich zugestimmt.</p>
          <p>(2) Die für den Vertragsschluss zur Verfügung stehende Sprache ist ausschließlich Deutsch.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">§ 2 Vertragsgegenstand</h2>
          <p>(1) Der Anbieter betreibt einen Online-Shop, über den Kunden KI-generierte Kinderlieder und Liedtexte auf Basis ihrer angegebenen Schlagworte und Themen erstellen lassen können. Kunden müssen die Eingabemaske mit individuellen Wünschen und Schlagworten ausfüllen.</p>
          <p>(2) Die generierten Lieder basieren auf den eingegebenen Informationen, jedoch hat der Anbieter keinen Einfluss auf das genaue Ergebnis, da dieses durch die KI-Plattformen Dritter erstellt wird. Fehlerhafte Eingaben können nicht korrigiert werden.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">§ 3 Vertragsschluss</h2>
          <p>(1) Die Darstellung der Produkte im Online-Shop stellt kein rechtlich bindendes Angebot dar, sondern eine Aufforderung zur Bestellung (invitatio ad offerendum).</p>
          <p>(2) Mit der Bestellung eines Liedes gibt der Kunde ein verbindliches Angebot ab, indem er im letzten Schritt des Bestellprozesses den Button „Kostenpflichtig bestellen" anklickt.</p>
          <p>(3) Der Vertrag kommt zustande, sobald der Anbieter die Bestellung durch eine Bestätigung per E-Mail annimmt und/oder das fertige KI-generierte Lied per E-Mail an den Kunden übersendet. Kunden sollten regelmäßig den Spam-Ordner ihres E-Mail-Postfachs überprüfen.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">§ 4 Preise und Zahlungsbedingungen</h2>
          <p>(1) Alle angegebenen Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer.</p>
          <p>(2) Die Zahlung erfolgt über die vom Kunden gewählte Zahlungsmethode (z. B. PayPal, Kreditkarte). Der Kunde ist verpflichtet, den gesamten Betrag vor der Lieferung des Liedes zu begleichen.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">§ 5 Widerrufsrecht</h2>
          <p>(1) Kunden haben das Recht, diesen Vertrag innerhalb von 14 Tagen ab Vertragsschluss ohne Angabe von Gründen zu widerrufen.</p>
          <p>(2) Um das Widerrufsrecht auszuüben, muss der Kunde den Anbieter – RiTZELMUt Ventures GmbH, Mariahilfstr. 18, 81541 München, E-Mail: info@meinkinderlied.de – mittels einer eindeutigen Erklärung über den Entschluss informieren. Ein Muster-Widerrufsformular wird bereitgestellt.</p>
          <p>(3) Das Widerrufsrecht erlischt bei digitalen Inhalten, wenn der Kunde ausdrücklich zugestimmt hat, dass der Anbieter mit der Ausführung des Vertrages beginnt, und gleichzeitig bestätigt hat, dass er sein Widerrufsrecht verliert.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">§ 6 Lieferung</h2>
          <p>(1) Das fertige Lied wird innerhalb von 24 Stunden nach Zahlungseingang an die angegebene E-Mail-Adresse des Kunden als Download-Link übermittelt.</p>
          <p>(2) Der Anbieter übernimmt keine Haftung für technische Probleme, die die Lieferung oder den Download verhindern, sofern diese nicht durch den Anbieter verursacht wurden.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">§ 7 Urheberrechte und Nutzungslizenz</h2>
          <p>(1) Der Kunde erhält an dem erstellten Lied eine nicht ausschließliche, nicht übertragbare Lizenz zur privaten Nutzung. Eine kommerzielle Verwertung ist nicht gestattet.</p>
          <p>(2) Das Lied darf nicht bearbeitet, vervielfältigt oder öffentlich zugänglich gemacht werden.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">§ 8 Haftung</h2>
          <p>(1) Der Anbieter haftet nur für Schäden, die auf vorsätzliches oder grob fahrlässiges Verhalten des Anbieters oder seiner Erfüllungsgehilfen zurückzuführen sind.</p>
          <p>(2) Der Anbieter übernimmt keine Haftung für die Vollständigkeit und Richtigkeit der vom Kunden eingegebenen Informationen.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">§ 9 Datenschutz</h2>
          <p>(1) Der Anbieter verarbeitet personenbezogene Daten nur im Einklang mit der Datenschutz-Grundverordnung (DSGVO) und den geltenden Datenschutzgesetzen.</p>
          <p>(2) Weitere Informationen sind in der Datenschutzerklärung des Anbieters enthalten.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">§ 10 Schlussbestimmungen</h2>
          <p>(1) Es gilt das Recht der Bundesrepublik Deutschland.</p>
          <p>(2) Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</p>
          <p>(3) Die EU-Kommission stellt unter https://ec.europa.eu/consumers/odr eine Plattform zur Online-Streitbeilegung bereit. Der Anbieter ist nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AGB;