"use client";

import { forwardRef } from "react";

const SKILL_CATEGORIES = [
    {
        number: "01",
        category: "FRONTEND ENGINEERING",
        description: "Building modern, responsive, and interactive user interfaces with optimal performance.",
        skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "Redux Toolkit", "Tailwind CSS", "Axios"],
    },
    {
        number: "02",
        category: "BACKEND ARCHITECTURE",
        description: "Creating scalable RESTful APIs, authentication protocols, and server-side applications.",
        skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs", "Socket.io", "JWT Auth"],
    },
    {
        number: "03",
        category: "Web design",
        description: "Creating visually appealing, user-friendly, and responsive website layouts using modern design principles and tools.",
        skills: ["Figma", "Wireframing", "Prototyping", "UI/UX Design"],
    },
    {
        number: "04",
        category: "TOOLS & WORKFLOW",
        description: "Developer tooling for building, testing, version control, and production deployments.",
        skills: ["Git", "GitHub", "Vercel", "Postman", "VS Code", "NPM", "Webpack / Vite"],
    },
];

const Skills = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section id="skills" ref={ref} className="w-full py-20 md:py-28 bg-[#f7f4eb] text-[#11140e]  relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl space-y-16">
                
                {/* Section Header */}
                <div className="space-y-4">
                    <p className="text-[#bda682] font-mono tracking-widest text-sm uppercase font-bold">
                        / TECHNICAL CAPABILITIES
                    </p>
                    <h2 className="text-5xl sm:text-7xl md:text-8xl font-display tracking-tight text-[#11140e] uppercase">
                        SKILLS & <span className="text-[#bda682]">TECHNOLOGIES</span>
                    </h2>
                </div>

                {/* 4 Categorized Skill Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {SKILL_CATEGORIES.map((block) => (
                        <div
                            key={block.number}
                            className="p-8 md:p-10 rounded-3xl bg-[#181c12] text-[#f7f4eb] border border-[#181c12]/20 shadow-xl space-y-6 flex flex-col justify-between"
                        >
                            <div className="space-y-3">
                                <span className="text-2xl font-mono text-[#bda682] font-bold">
                                    {block.number} SKILL
                                </span>
                                <h3 className="text-3xl font-display text-[#f7f4eb] tracking-wide">
                                    {block.category}
                                </h3>
                                <p className="text-zinc-400 text-sm font-sans leading-relaxed">
                                    {block.description}
                                </p>
                            </div>

                            {/* Skills Pills */}
                            <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800">
                                {block.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3.5 py-1.5 rounded-full border border-zinc-700 bg-zinc-900/80 text-[#f7f4eb] text-xs font-mono font-medium hover:border-[#bda682] hover:text-[#bda682] transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
});

Skills.displayName = 'Skills';

export default Skills;

