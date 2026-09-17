"use client";

import { motion, Variants } from "framer-motion";

export default function SplitText({
  text,
  className = "",
  delay = 0.06,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: delay, delayChildren: 0.15 },
    },
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        damping: 18,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 25,
      filter: "blur(6px)",
    },
  };

  return (
    <motion.div
      className={`flex flex-wrap items-center justify-center gap-x-[0.28em] ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={`${word}-${index}`} className="inline-block">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
