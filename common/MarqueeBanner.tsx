"use client";

const MARQUEE_ITEMS = [
  "Problem Solver",
  "Design Enthusiast",
  "MERN Stack Developer",
  "Interactive Experiences",
  "Smooth Motion",
  "Clean Architecture",
  "Frontend Engineer",
];

export default function MarqueeBanner() {
  return (
    <section className="w-full bg-[#e8e4d9] border-y border-[#181c12]/20 py-4 overflow-hidden select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex items-center gap-8 px-4 text-[#181c12] font-display text-xl md:text-2xl tracking-wider">
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={i} className="flex items-center gap-8">
              <span>{item}</span>
              <span className="text-[#bda682]">★</span>
            </span>
          ))}
        </div>
        <div className="flex items-center gap-8 px-4 text-[#181c12] font-display text-xl md:text-2xl tracking-wider" aria-hidden="true">
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={`dup-${i}`} className="flex items-center gap-8">
              <span>{item}</span>
              <span className="text-[#bda682]">★</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
