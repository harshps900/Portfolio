"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Palette, Cpu } from "lucide-react";

const SOCIALS = [
    { name: "Github", icon: <Github size={18} />, link: "https://github.com/harshps900", metric: "24+ Repos" },
    { name: "LinkedIn", icon: <Linkedin size={18} />, link: "https://www.linkedin.com/in/harsh-pal-singh-dev/", metric: "500+ Conn." },
    { name: "Behance", icon: <Palette size={18} />, link: "https://www.behance.net/educationtime", metric: "10+ Projects" },
];

export default function Footer() {
    return (
        <footer className="w-full py-20 bg-[#f5f4ef] border-t border-zinc-200">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="space-y-4 text-center md:text-left">
                        <h3 className="text-xl font-bold text-[#1c1b1a] font-serif-luxury tracking-widest">HARSH PAL SINGH</h3>
                        <p className="text-zinc-500 font-medium text-sm max-w-xs leading-relaxed">
                            Engineering high-performance digital ecosystems with a focus on logic and aesthetics.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {SOCIALS.map((social) => (
                            <a 
                                key={social.name} 
                                href={social.link}
                                className="group flex items-center gap-4 text-zinc-500 hover:text-[#1c1b1a] transition-colors"
                            >
                                <div className="p-3 bg-white border border-zinc-200 rounded-xl group-hover:bg-[#bda682] group-hover:text-white transition-all">
                                    {social.icon}
                                </div>
                                <div>
                                    <p className="text-xs font-black uppercase tracking-widest">{social.name}</p>
                                    <p className="text-[10px] font-bold text-zinc-400 group-hover:text-[#bda682] transition-colors">{social.metric}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-zinc-200/60 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                        © 2026 HARSH PAL SINGH. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                        <Cpu size={12} className="text-[#bda682]" />
                        BUILT WITH NEXT.JS & TAILWIND 4
                    </div>
                </div>
            </div>
        </footer>
    );
}
