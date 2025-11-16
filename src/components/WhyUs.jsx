import React from "react";
import whyUsData from "../data/whyUs";

const WhyUs = () => {
  return (
    <section className="p-10 bg-gradient-to-r from-purple-50 to-blue-50">
      <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {whyUsData.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
