"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Smartphone, Sparkles, UtensilsCrossed, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import { TiltCard } from "../ui/GlowingCard";

const steps = [
  {
    number: "01",
    icon: <Smartphone className="w-8 h-8" />,
    emoji: "📱",
    title: "Tell Us Your Vibe",
    description:
      "Select your meal type and mood. Feeling lazy? Want something healthy? Craving comfort food? Just tap and go.",
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
    shadowColor: "shadow-blue-500/20",
    borderColor: "border-blue-100",
  },
  {
    number: "02",
    icon: <Sparkles className="w-8 h-8" />,
    emoji: "✨",
    title: "Get AI Recommendations",
    description:
      "Our AI analyzes 3,500+ dishes from local restaurants, filters by your preferences, and serves up 3 perfect matches.",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
    shadowColor: "shadow-emerald-500/20",
    borderColor: "border-emerald-100",
  },
  {
    number: "03",
    icon: <UtensilsCrossed className="w-8 h-8" />,
    emoji: "🍽️",
    title: "Order or Cook",
    description:
      "One tap to order via UberEats/DoorDash, or get the recipe to cook at home. Either way, you're eating in minutes.",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
    shadowColor: "shadow-orange-500/20",
    borderColor: "border-orange-100",
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineProgress = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="py-24 md:py-40 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-sm font-semibold mb-6 border border-emerald-200/50"
          >
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              ⚡
            </motion.span>
            HOW IT WORKS
          </motion.span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
            From Hungry to Happy{" "}
            <br className="hidden sm:block" />
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
                in 3 Simple Steps
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-emerald-200 to-teal-200 -z-10 rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            No more endless scrolling or decision paralysis. Nourishr makes
            finding your next meal effortless.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Animated Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-1 bg-gray-200 -translate-y-1/2 z-0 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-emerald-500 to-orange-500 rounded-full"
              style={{ width: lineProgress }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className="relative"
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <TiltCard>
                  <motion.div
                    className={`${step.bgColor} rounded-3xl p-8 h-full border ${step.borderColor} shadow-xl ${step.shadowColor} relative overflow-hidden`}
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Animated background pattern */}
                    <motion.div
                      className="absolute inset-0 opacity-0"
                      animate={{ opacity: hoveredStep === index ? 0.1 : 0 }}
                      style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                        backgroundSize: "20px 20px",
                      }}
                    />

                    {/* Step Number Badge */}
                    <motion.div
                      className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} text-white text-3xl font-bold mb-6 shadow-lg relative`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      animate={hoveredStep === index ? { rotate: [0, -5, 5, 0] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {step.emoji}
                      {/* Pulse effect */}
                      <motion.div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color}`}
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Step indicator */}
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-sm font-bold bg-gradient-to-r ${step.color} text-transparent bg-clip-text`}
                      >
                        Step {step.number}
                      </span>
                      <motion.div
                        className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <motion.div
                          className={`h-full bg-gradient-to-r ${step.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: "100%" } : {}}
                          transition={{ delay: 0.5 + index * 0.3, duration: 0.8 }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                </TiltCard>

                {/* Animated Arrow for desktop */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.2 }}
                  >
                    <motion.div
                      className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-100"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5 text-emerald-500" />
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive Demo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 text-center"
        >
          <motion.div
            className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-xl border border-gray-100"
            whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
          >
            <div className="flex -space-x-3">
              {["😴", "🥦", "⚡", "🍲", "💪", "🤯"].map((emoji, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 1.2 + i * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.2, zIndex: 10 }}
                  className="w-12 h-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full flex items-center justify-center text-xl border-2 border-white shadow-md cursor-pointer"
                >
                  {emoji}
                </motion.div>
              ))}
            </div>
            <div className="h-8 w-px bg-gray-200" />
            <span className="text-gray-700 font-medium">
              Pick your mood and get eating in seconds
            </span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5 text-emerald-500" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
