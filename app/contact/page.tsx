"use client";

import Header from "@/common/Header";
import Footer from "@/common/Footer";
import Contact from "@/common/Contact";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#09090b] text-[#f4f4f5] pt-12">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
