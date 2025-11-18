import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import KitSection from "../components/KitSection";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Reviews from "../components/Reviews";
import WhyUs from "../components/WhyUs";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <KitSection />
      <Pricing />
     
      <Reviews />
      <WhyUs />
       <FAQ />
      <Footer />
    </>
  );
};

export default Home;
