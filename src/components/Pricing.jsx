import React, { useState } from "react";
import pricingData from "../data/pricing";
import CheckoutPopup from "./CheckoutPopup";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <section  id="pricing" className="py-12 px-4 sm:px-6 lg:px-16 bg-gradient-to-r from-purple-50 to-blue-50">
      
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800">
        Pricing Plans <span className="text-yellow-400">🔥</span>
      </h2>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {pricingData.map((plan) => (
          <div
            key={plan.id}
            className={`relative p-6 sm:p-8 rounded-3xl shadow-xl transform transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl border-4 border-transparent ${
              plan.highlight ? "scale-105" : ""
            }`}
            style={{
              borderImageSlice: 1,
              borderImageSource:
                "linear-gradient(135deg, #8b5cf6, #3b82f6, #ec4899)",
              background: "linear-gradient(180deg, #ffffff, #f9f9ff)",
            }}
          >

            {/* Badge */}
            {plan.badge && (
              <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 text-white font-bold px-4 py-1 rounded-full shadow-lg text-xs sm:text-sm md:text-base">
                {plan.badge}
              </span>
            )}

            {/* Plan Title */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center text-gray-900">
              {plan.plan}
            </h3>

            {/* Price Section */}
            <div className="text-center mb-6">
              <p className="text-3xl sm:text-4xl font-extrabold text-gray-800">
                ₹{plan.price}
              </p>
              <p className="text-gray-500 text-sm line-through">
                ₹{plan.originalPrice}
              </p>
            </div>

            {/* Features */}
            <ul className="mb-6 space-y-2 text-gray-700">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-1"></span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Buy Button */}
            <button
              onClick={() => setSelectedPlan(plan)}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold py-3 rounded-2xl hover:scale-105 transition transform shadow-lg"
            >
              {plan.btnText || "Buy Now"}
            </button>
          </div>
        ))}
      </div>

      {/* Popup */}
      {selectedPlan && (
        <CheckoutPopup plan={selectedPlan} close={() => setSelectedPlan(null)} />
      )}
    </section>
  );
};

export default Pricing;
