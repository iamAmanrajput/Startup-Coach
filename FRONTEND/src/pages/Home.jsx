import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import Navbar from "../components/Navbar";
import News from "../components/News";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <News />
      <Newsletter />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
