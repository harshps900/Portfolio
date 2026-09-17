"use client";

import Header from "@/common/Header";
import Hero from "@/common/Hero";
import MarqueeBanner from "@/common/MarqueeBanner";
import Projects from "@/common/Projects";
import Process from "@/common/Process";
import Engagement from "@/common/Engagement";
import Experience from "@/common/Experience";
import Achievements from "@/common/Achievements";
import Skills from "@/common/Skills";
import AboutPreview from "@/common/AboutPreview";
import ContactCTA from "@/common/ContactCTA";
import Footer from "@/common/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen bg-[#09090b] text-[#f4f4f5] overflow-x-hidden">
        <Hero />
        <MarqueeBanner />
        <Projects />
        <Process />
        <Engagement />
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
