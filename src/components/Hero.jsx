import React from "react";

const Hero = () => {
  return (
    <section  className="bg-gradient-to-r from-purple-600  to-blue-500 text-white py-32 text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">Get the Best PDF Notes</h1>
      <p className="text-xl md:text-2xl mb-8">
        Learn JavaScript, React, HTML, CSS & more with our easy-to-download PDFs
      </p>
      <a
        href="#pricing"
        className="bg-white text-purple-600 font-bold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition transform inline-block"
      >
        Explore Plans
      </a>
    </section>
  );
};

export default Hero;
