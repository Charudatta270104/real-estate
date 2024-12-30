import "../src/assets/css/style.css"
import About from "./components/about/About";
import BlogSection from "./components/blog/Blog";
import CtaSection from "./components/CTA/CTA";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/home/Home";
import Property from "./components/property/Property";
import Service from "./components/Service";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Service />
      <Property />
      <Features />
      <BlogSection />
      <CtaSection />
      <Footer/>
    </>
  );
}

export default App;
