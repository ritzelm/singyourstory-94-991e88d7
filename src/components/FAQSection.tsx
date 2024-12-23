import React from "react";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Was ist ein personalisiertes Kinderlied?",
      answer: "Ein personalisiertes Kinderlied ist ein Lied, das speziell für Ihr Kind erstellt wird, mit dessen Namen und besonderen Erinnerungen."
    },
    {
      question: "Wie lange dauert es, ein Lied zu erstellen?",
      answer: "In der Regel dauert es etwa 1-2 Wochen, um ein personalisiertes Kinderlied zu erstellen."
    },
    {
      question: "Kann ich das Lied für kommerzielle Zwecke verwenden?",
      answer: "Die Nutzung der Lieder ist in der Regel für den persönlichen Gebrauch vorgesehen. Für kommerzielle Nutzung kontaktieren Sie uns bitte."
    },
    {
      question: "Wie erhalte ich das Lied?",
      answer: "Nach der Fertigstellung erhalten Sie einen Download-Link per E-Mail."
    },
  ];

  const contactEmail = "info@meinkinderlied.de";

  const CTASection = () => {
    return (
      <div className="text-center mt-12">
        <h3 className="text-2xl font-semibold mb-4">Weitere Fragen? Kontaktiere uns!</h3>
        <a
          href={`mailto:${contactEmail}`}
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
        >
          Kontakt aufnehmen
        </a>
      </div>
    );
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Häufig gestellte Fragen</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
        <CTASection />
      </div>
    </section>
  );
};