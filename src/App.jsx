import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import About from "./components/About";
import FAQ from "./components/FAQ";
import RomanticGallery from "./components/RomanticGallery";

export default function App() {
  return (
<div className="scroll-smooth pt-20">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="photo-gallery">
        <RomanticGallery />
      </section>

      <section id="contact">
        <CTA />
      </section>

      <Footer />
    </div>
  );
}
