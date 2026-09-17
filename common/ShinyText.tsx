"use client";

import { motion } from "framer-motion";

export default function ShinyText({
  text,
  className = "",
  speed = 3.5,
}: {
  text: string;
  className?: string;
  speed?: number;
}) {
  return (
    <span className={`relative inline-flex items-center overflow-hidden ${className}`}>
      <span className="relative z-10">{text}</span>
      <motion.span
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent pointer-events-none mix-blend-screen"
      />
    </span>
  );
}
