import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <main className="bg-white min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <div className="max-w-[1024px] mx-auto w-full px-4 sm:px-6 md:px-8 pb-16">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
