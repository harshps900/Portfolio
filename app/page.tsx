import Header from "@/common/Header";
import Hero from "@/common/Hero";
import About from "@/common/About";
import Skills from "@/common/Skills";
import Experience from "@/common/Experience";
import Projects from "@/common/Projects";
import Contact from "@/common/Contact";
import Footer from "@/common/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen bg-[#020617] transition-colors duration-500">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
