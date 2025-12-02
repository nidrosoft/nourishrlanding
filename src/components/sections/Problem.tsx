"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimatedCounter } from "../ui/AnimatedCounter";

export function Problem() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const painPoints = [
    { emoji: "😩", text: '"I don\'t know what I want to eat"', delay: 0 },
    { emoji: "🤔", text: '"What can I make with what I have?"', delay: 0.1 },
    { emoji: "📱", text: '"I\'ve been scrolling for 30 minutes"', delay: 0.2 },
    { emoji: "🥗", text: '"This doesn\'t fit my diet"', delay: 0.3 },
    { emoji: "💸", text: '"I keep ordering the same thing"', delay: 0.4 },
  ];

  const stats = [
    { value: 250, suffix: "+", label: "hours spent deciding what to eat per year", icon: "⏰" },
    { value: 40, suffix: "", label: "minutes average time to pick a meal", icon: "⏱️" },
    { value: 3000, prefix: "$", suffix: "+", label: "wasted on food that doesn't match your diet", icon: "💸" },
  ];

  return (
    <section
      ref={containerRef}
      className="py-20 md:py-32 bg-gray-900 text-white relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" />
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </motion.div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
          animate={{ backgroundPosition: ["0px 0px", "50px 50px"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <span className="text-6xl">😱</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-block"
            >
              The Average Person Spends
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="inline-block"
            >
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 animate-pulse">
                  250+ Hours
                </span>
                <motion.span
                  className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 blur-xl rounded-lg"
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </span>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="inline-block"
            >
              {" "}a Year
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="inline-block"
            >
              Deciding What to Eat
            </motion.span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            We&apos;ve all been there. Standing in front of the fridge, scrolling through
            delivery apps, or asking &quot;what do you want to eat?&quot; for the hundredth time.
            <br />
            <span className="text-white font-medium">Decision fatigue is real</span>, and it&apos;s stealing your time and energy.
          </motion.p>
        </motion.div>

        {/* Stats with animated counters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative"
            >
              {/* Card glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500" />

              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5"
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                />

                {/* Icon */}
                <motion.div
                  className="text-4xl mb-4"
                  animate={{ y: [0, -5, 0], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                >
                  {stat.icon}
                </motion.div>

                {/* Value */}
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-3">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </p>

                {/* Label */}
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pain Points with staggered animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.8 + point.delay,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.15)",
              }}
              className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-3 border border-white/10 cursor-default group"
            >
              <motion.span
                className="text-2xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              >
                {point.emoji}
              </motion.span>
              <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                {point.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Transition to solution */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
            className="inline-block"
          >
            <motion.div
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/30"
              animate={{
                boxShadow: [
                  "0 10px 40px rgba(16, 185, 129, 0.3)",
                  "0 10px 60px rgba(16, 185, 129, 0.5)",
                  "0 10px 40px rgba(16, 185, 129, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.span
                className="text-3xl"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                ✨
              </motion.span>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.5 }}
            className="text-emerald-400 font-semibold text-xl mb-4"
          >
            There&apos;s a better way
          </motion.p>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-4xl text-emerald-400"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
