"use client";

import Header from "@/common/Header";
import Footer from "@/common/Footer";
import Experience from "@/common/Experience";

export default function ExperiencePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#09090b] text-[#f4f4f5] pt-12">
        <Experience />
      </main>
      <Footer />
    </>
  );
}
