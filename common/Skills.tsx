"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";

export const SKILL_CATEGORIES = [
  {
    number: "01",
    category: "Frontend Engineering",
    description: "Building modern, responsive, and performant web interfaces using React and Next.js ecosystem.",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "Redux Toolkit", "Tailwind CSS", "Axios"],
  },
  {
    number: "02",
    category: "Backend & Database",
    description: "Creating RESTful API endpoints, server controllers, authentication flows, and database schemas.",
    skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs", "Socket.io", "JWT Auth"],
  },
  {
    number: "03",
    category: "Web & Product Design",
    description: "Translating wireframes and visual design systems into interactive code layouts with focus on UX.",
    skills: ["Figma", "Wireframing", "Prototyping", "Responsive Layouts"],
  },
  {
    number: "04",
    category: "Tools & Ecosystem",
    description: "Developer tooling for version control, automated building, testing, and continuous cloud deployments.",
    skills: ["Git", "GitHub", "Vercel", "Postman", "VS Code", "NPM / Yarn", "Vite"],
  },
];

const Skills = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section id="skills" ref={ref} className="w-full py-16 sm:py-24 bg-[#09090b] text-[#f4f4f5] border-b border-zinc-800/60">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 space-y-12"
      >
        
        {/* Section Header */}
        <div className="space-y-2">
          <span className="text-xs font-mono font-medium text-emerald-400 uppercase tracking-widest">
            / Technical Capabilities
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100">
            Skills & Stack
          </h2>
        </div>

        {/* 4 Categorized Skill Cards with Motion Stagger & Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((block, idx) => (
            <motion.div
              key={block.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 sm:p-8 rounded-2xl bg-[#121215] border border-zinc-800/80 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.08)] transition-all space-y-6 flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-emerald-300 transition-colors">
                    {block.category}
                  </h3>
                  <span className="text-xs font-mono text-emerald-400 font-medium">
                    {block.number}
                  </span>
                </div>
                <p className="text-zinc-400 text-sm font-normal leading-relaxed">
                  {block.description}
                </p>
              </div>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/80">
                {block.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.06, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-2.5 py-1 rounded-md border border-zinc-800 bg-zinc-900/80 text-zinc-300 text-xs font-medium hover:border-emerald-500/50 hover:text-emerald-300 transition-colors inline-block cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
});

Skills.displayName = 'Skills';

export default Skills;
