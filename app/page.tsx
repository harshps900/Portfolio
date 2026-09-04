"use client";

import Preloader from "@/common/Preloader";
import Header from "@/common/Header";
import Hero from "@/common/Hero";
import MarqueeBanner from "@/common/MarqueeBanner";
import Projects from "@/common/Projects";
import Experience from "@/common/Experience";
import Achievements from "@/common/Achievements";
import Skills from "@/common/Skills";
import AboutPreview from "@/common/AboutPreview";
import ContactCTA from "@/common/ContactCTA";
import Footer from "@/common/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <main className="flex flex-col min-h-screen bg-[#f7f4eb] text-[#000000] overflow-x-hidden">
        <Hero />
        <MarqueeBanner />
        <Projects />
        <Experience />
        <Achievements />
        <Skills />
        <AboutPreview />
        <ContactCTA />
        <Footer />
      </main>
    </>
  );
}


