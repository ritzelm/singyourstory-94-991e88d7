import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="container max-w-4xl mx-auto px-4 py-24 flex-grow">
        <h1 className="text-4xl font-bold mb-8 text-[#333333]">Datenschutzerklärung</h1>
        <div className="prose max-w-none text-[#333333]">
          <p className="mb-8">Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie über die Erhebung, Verarbeitung und Nutzung Ihrer Daten im Rahmen der Nutzung unserer Website gemäß der Datenschutz-Grundverordnung (DSGVO).</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Verantwortlicher</h2>
          <p>Verantwortlich für die Datenverarbeitung ist:</p>
          <p>RiTZELMUt Ventures GmbH<br />
          Mariahilfstr. 18<br />
          81541 München<br />
          Deutschland<br />
          E-Mail: info@meinkinderlied.de</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck von deren Verwendung</h2>
          <h3 className="text-xl font-semibold mt-6 mb-3">2.1 Besuch der Website</h3>
          <p>Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sogenannten Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>IP-Adresse des anfragenden Rechners,</li>
            <li>Datum und Uhrzeit des Zugriffs,</li>
            <li>Name und URL der abgerufenen Datei,</li>
            <li>Website, von der aus der Zugriff erfolgt (Referrer-URL),</li>
            <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers.</li>
          </ul>
          <p>Die genannten Daten werden von uns zu folgenden Zwecken verarbeitet:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Gewährleistung eines reibungslosen Verbindungsaufbaus der Website,</li>
            <li>Gewährleistung einer komfortablen Nutzung unserer Website,</li>
            <li>Auswertung der Systemsicherheit und -stabilität sowie</li>
            <li>zu weiteren administrativen Zwecken.</li>
          </ul>
          <p>Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Unser berechtigtes Interesse folgt aus den oben aufgelisteten Zwecken zur Datenerhebung. In keinem Fall verwenden wir die erhobenen Daten zu dem Zweck, Rückschlüsse auf Ihre Person zu ziehen.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">2.2 Nutzung des Kontaktformulars</h3>
          <p>Bei Fragen jeglicher Art bieten wir Ihnen die Möglichkeit, mit uns über ein auf der Website bereitgestelltes Formular Kontakt aufzunehmen. Dabei ist die Angabe einer gültigen E-Mail-Adresse erforderlich, damit wir wissen, von wem die Anfrage stammt und um diese beantworten zu können. Weitere Angaben können freiwillig getätigt werden.</p>
          <p>Die Datenverarbeitung zum Zwecke der Kontaktaufnahme mit uns erfolgt nach Art. 6 Abs. 1 S. 1 lit. a DSGVO auf Grundlage Ihrer freiwillig erteilten Einwilligung.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Weitergabe von Daten</h2>
          <p>Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken findet nicht statt.</p>
          <p>Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Sie Ihre ausdrückliche Einwilligung dazu erteilt haben (Art. 6 Abs. 1 S. 1 lit. a DSGVO),</li>
            <li>die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DSGVO zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben,</li>
            <li>für die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. c DSGVO eine gesetzliche Verpflichtung besteht, sowie</li>
            <li>dies gesetzlich zulässig und nach Art. 6 Abs. 1 S. 1 lit. b DSGVO für die Abwicklung von Vertragsverhältnissen mit Ihnen erforderlich ist.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Betroffenenrechte</h2>
          <p>Sie haben das Recht:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen;</li>
            <li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen;</li>
            <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen;</li>
            <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen;</li>
            <li>gemäß Art. 20 DSGVO Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen;</li>
            <li>gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber uns zu widerrufen;</li>
            <li>gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Datensicherheit</h2>
          <p>Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Aktualität und Änderung dieser Datenschutzerklärung</h2>
          <p>Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Dezember 2024. Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Datenschutz;