import React from "react";
import Header from "../components/header/Header";
import Hero from "../components/home/Home";
import About from "../components/about/About";
import Service from "../components/service/Service";
import Property from "../components/property/Property";
import Features from "../components/features/Features";
import BlogSection from "../components/blog/Blog";
import CtaSection from "../components/CTA/CTA";
import Footer from "../components/footer/Footer";

const Home1 = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Service />
      <Property />
      <Features />
      <BlogSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Home1;
