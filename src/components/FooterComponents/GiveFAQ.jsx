const GiveFAQ = () => {
  const faqs = [
    {
      question: "Is my online donation secure?",
      answer:
        "Yes. All donations are processed securely using encrypted connections. We never store your card information.",
    },
    {
      question: "Will I receive a receipt?",
      answer:
        "Yes. You will receive an email receipt instantly after successful donation via online payment.",
    },
    {
      question: "Can I give monthly?",
      answer:
        "Yes. Recurring giving is available through our online platform (e.g. Stripe or PayPal).",
    },
    {
      question: "Is my donation tax-deductible?",
      answer:
        "Dunamis is a registered nonprofit. Donations may be tax-deductible depending on your country’s laws.",
    },
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-purple-700 mb-10 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-lg text-purple-600 mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiveFAQ;
