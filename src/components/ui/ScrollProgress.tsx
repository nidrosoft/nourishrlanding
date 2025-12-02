"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Hide after hero section (approximately 100vh)
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.2], [1, 1, 0]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 origin-left z-[100]"
      style={{ scaleX, opacity }}
    />
  );
}
