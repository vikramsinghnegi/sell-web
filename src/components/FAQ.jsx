import React, { useState } from "react";
import faqData from "../data/faq";

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  const toggle = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="p-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.map((faq) => (
          <div
            key={faq.id}
            className="bg-white shadow rounded-lg p-4 cursor-pointer transition hover:shadow-lg"
            onClick={() => toggle(faq.id)}
          >
            <h3 className="text-xl font-semibold">{faq.question}</h3>
            {activeId === faq.id && <p className="mt-2 text-gray-600">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
