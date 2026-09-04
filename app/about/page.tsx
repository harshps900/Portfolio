"use client";

import Header from "@/common/Header";
import Footer from "@/common/Footer";
import Image from "next/image";
import Link from "next/link";

const METRICS = [
  { number: "1", label: "YEAR OF EXPERIENCE" },
  { number: "15+", label: "PROJECTS COMPLETED" },
  { number: "15+", label: "TECHNOLOGIES USED" },
];

const INTERESTS = [
  { number: "01", title: "Photography", text: "Capturing visual perspectives and storytelling through architectural & portrait frames." },
  { number: "02", title: "Content Creation", text: "Writing technical tutorials, architectural breakdowns, and frontend coding snippets." },
  { number: "03", title: "Writing", text: "Documenting software engineering principles and user experience design patterns." },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f7f4eb] text-[#000000] pt-28 pb-20 px-6">
        <div className="container mx-auto max-w-6xl space-y-20">
          
          {/* Header Banner */}
          <div className="space-y-4 pt-8">
            <p className="text-zinc-600 font-mono tracking-widest text-sm uppercase font-bold">
              Who I Am ?
            </p>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-display tracking-tight text-[#000000] uppercase">
              LET&apos;S <span className="text-[#bda682]">KNOW ABOUT ME</span>
            </h1>
          </div>

          {/* Quote Banner */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#000000] text-[#f7f4eb] space-y-4 shadow-xl">
            <p className="text-[#bda682] font-mono text-xs tracking-widest uppercase font-bold">PHILOSOPHY</p>
            <blockquote className="text-2xl sm:text-4xl font-display tracking-wide leading-snug">
              &ldquo;I&apos;m not just here to make things work — I want to create work that people remember&rdquo;
            </blockquote>
          </div>

          {/* Profile Bio & Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-[350px] md:h-[350px] rounded-3xl border-2 border-black/20 shadow-xl bg-[#000000] overflow-hidden relative">
                <Image
                  src="/profile.jpg"
                  alt="Harsh Pal Singh"
                  fill
                  sizes="(max-width: 768px) 100vw, 350px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-lg font-sans text-zinc-800 leading-relaxed">
              <p>
                I&apos;m a Full Stack & Frontend Engineer with a passion for designing and building interactive digital web applications that deliver speed, accessibility, and intuitive UX.
              </p>
              <p>
                Specializing in <span className="font-bold text-[#000000]">React.js, Next.js, Node.js, and MongoDB</span>, I take pride in engineering clean software architectures, implementing smooth animation timelines, and writing scalable code.
              </p>
              <p>
                Having developed production-ready web features at <span className="font-bold text-[#000000]">SoftSource Technolabs</span>, I combine clean user interfaces with backend API integration to solve real-world problems.
              </p>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-black/15">
            {METRICS.map((metric) => (
              <div key={metric.label} className="p-8 rounded-3xl bg-[#e8e4d9]/60 border border-black/20 space-y-2">
                <p className="text-5xl sm:text-6xl font-display text-[#000000]">{metric.number}</p>
                <p className="text-xs font-mono font-bold text-zinc-600 tracking-widest uppercase">{metric.label}</p>
              </div>
            ))}
          </div>

          {/* Personal Interests Grid */}
          <div className="space-y-8 pt-8">
            <div className="space-y-2">
              <p className="text-zinc-600 font-mono tracking-widest text-sm uppercase font-bold">Beyond Code</p>
              <h2 className="text-4xl sm:text-5xl font-display text-[#000000] uppercase">PERSONAL INTERESTS</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {INTERESTS.map((item) => (
                <div key={item.number} className="p-8 rounded-3xl bg-[#000000] text-[#f7f4eb] space-y-4 shadow-lg">
                  <span className="text-xl font-mono text-[#bda682] font-bold">{item.number}</span>
                  <h3 className="text-2xl font-display text-[#f7f4eb]">{item.title}</h3>
                  <p className="text-zinc-400 text-sm font-sans leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <div className="p-12 rounded-3xl bg-[#000000] text-[#f7f4eb] text-center space-y-6 shadow-2xl">
            <h2 className="text-4xl sm:text-6xl font-display uppercase tracking-tight">
              BUILD SOMETHING <span className="text-[#bda682]">TOGETHER</span>
            </h2>
            <p className="text-zinc-400 text-base max-w-xl mx-auto font-sans">
              Looking for a creative developer for your team or upcoming project? Let&apos;s talk.
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-block px-8 py-3.5 rounded-full bg-[#f7f4eb] text-[#000000] font-display text-lg tracking-wider hover:bg-[#bda682] hover:text-[#000000] transition-colors"
              >
                Get In Touch ➔
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
