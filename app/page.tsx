"use client";

import Preloader from "@/common/Preloader";
import Header from "@/common/Header";
import Hero from "@/common/Hero";
import About from "@/common/About";
import Skills from "@/common/Skills";
import Experience from "@/common/Experience";
import Projects from "@/common/Projects";
import Contact from "@/common/Contact";
import Footer from "@/common/Footer";
import FloatingWatch from "@/common/FloatingWatch";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Preloader />
      <Header />
      <main className="flex flex-col min-h-screen bg-background transition-colors duration-500 overflow-x-hidden">
        <div ref={containerRef} className="relative overflow-visible">
            <FloatingWatch />
            <Hero />
            <About />
        </div>
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
