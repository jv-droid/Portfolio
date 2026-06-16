import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Showcase from "./components/Showcase";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import TradingCertifications from "./components/TradingCertifications";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pb-24">
        <Hero />
        <div className="grid md:grid-cols-2 gap-x-10 lg:gap-x-14 items-start">
          <About />
          <Experience />
        </div>
        <Skills />
        <Showcase />
        <Certifications />
        <TradingCertifications />
        <Education />
        <Contact />
      </main>
    </>
  );
}
