import React, { useState } from "react";
import { FaClock, FaCheckCircle, FaHeadset } from "react-icons/fa";
import { kitFeatures, kitHighlights } from "../data/kitData";

const colorMap = {
  yellow: "text-yellow-500",
  green: "text-green-500",
  blue: "text-blue-500",
};

const KitSection = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <section  id="home" className="p-16 bg-gray-50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Our Note Kits <span className="text-yellow-400">🔥</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {kitFeatures.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.id}
              className={`relative transform transition hover:-translate-y-3 hover:shadow-2xl ${
                feature.highlight ? "scale-105 md:scale-110" : ""
              }`}
            >
              <div className="rounded-3xl p-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500">
                <div className="bg-white rounded-3xl p-6 shadow-lg relative">
                  
                  {feature.highlight && (
                    <span className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-red-500 text-black font-bold px-3 py-1 rounded-xl shadow-lg text-sm md:text-base">
                      Best One
                    </span>
                  )}

                  <div className="mb-4 text-purple-600">
                    <Icon size={40} />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold mb-3">
                    {feature.title}
                  </h3>

                  {/* highlights */}
                  <div className="flex justify-center flex-wrap gap-3 mb-4">
                    {kitHighlights.map((item, idx) => (
                      <span
                        key={idx}
                        className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-xs sm:text-sm font-semibold shadow-sm"
                      >
                        {item.text === "Instant Access" && (
                          <FaClock className={`${colorMap[item.color]} mr-1`} />
                        )}
                        {item.text === "97% Success Rate" && (
                          <FaCheckCircle className={`${colorMap[item.color]} mr-1`} />
                        )}
                        {item.text === "Lifetime Support" && (
                          <FaHeadset className={`${colorMap[item.color]} mr-1`} />
                        )}
                        {item.text}
                      </span>
                    ))}
                  </div>

                  {/* syllabus */}
                  <ul className="text-left list-disc list-inside text-gray-700 space-y-1 mb-4">
                    {(expanded === feature.id
                      ? feature.syllabus
                      : feature.syllabus.slice(0, 3)
                    ).map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>

                  {feature.syllabus.length > 3 && (
                    <button
                      onClick={() =>
                        setExpanded(expanded === feature.id ? null : feature.id)
                      }
                      className="text-purple-600 font-semibold hover:underline transition"
                    >
                      {expanded === feature.id ? "Show Less" : "Read More"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default KitSection;
