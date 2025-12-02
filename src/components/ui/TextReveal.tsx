"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export function TextReveal({
  children,
  className,
  delay = 0,
  staggerDelay = 0.03,
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const words = children.split(" ");

  return (
    <span ref={ref} className={cn("inline-block", className)}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.5,
              delay: delay + i * staggerDelay,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

interface GradientTextProps {
  children: string;
  className?: string;
  from?: string;
  to?: string;
}

export function GradientText({
  children,
  className,
  from = "from-emerald-500",
  to = "to-teal-500",
}: GradientTextProps) {
  return (
    <motion.span
      className={cn(
        "text-transparent bg-clip-text bg-gradient-to-r bg-[length:200%_auto]",
        from,
        to,
        className
      )}
      animate={{
        backgroundPosition: ["0% center", "100% center", "0% center"],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {children}
    </motion.span>
  );
}

interface TypewriterProps {
  words: string[];
  className?: string;
}

export function Typewriter({ words, className }: TypewriterProps) {
  return (
    <span className={cn("inline-block", className)}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="absolute"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [20, 0, 0, -20],
          }}
          transition={{
            duration: 3,
            delay: i * 3,
            repeat: Infinity,
            repeatDelay: (words.length - 1) * 3,
            times: [0, 0.1, 0.9, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
