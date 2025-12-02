"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Apple, Check, ChevronDown, Play, Sparkles } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { MagneticButton } from "../ui/MagneticButton";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { GradientText } from "../ui/TextReveal";
import { useIsMobile } from "@/hooks/useMediaQuery";

const moods = [
  { emoji: "😴", label: "Lazy", color: "from-purple-400 to-indigo-500" },
  { emoji: "🥦", label: "Healthy", color: "from-green-400 to-emerald-500" },
  { emoji: "⚡", label: "Quick", color: "from-yellow-400 to-orange-500" },
  { emoji: "🍲", label: "Comfort", color: "from-orange-400 to-red-500" },
  { emoji: "💪", label: "Protein", color: "from-blue-400 to-indigo-500" },
  { emoji: "🤯", label: "Surprise", color: "from-pink-400 to-purple-500" },
];

const floatingFoods = [
  { emoji: "🍕", x: 10, y: 20, delay: 0 },
  { emoji: "🥗", x: 85, y: 15, delay: 0.5 },
  { emoji: "🍜", x: 75, y: 70, delay: 1 },
  { emoji: "🌮", x: 15, y: 75, delay: 1.5 },
];

export function Hero() {
  const containerRef = useRef(null);
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Disable parallax on mobile for performance
  const y = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, isMobile ? 1 : 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, isMobile ? 1 : 0.95]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Static gradient background - no animation for performance */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50" />

      {/* Simplified blobs - CSS only, no JS animation on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-300 rounded-full opacity-20 blur-3xl md:opacity-30"
          style={{ transform: 'translateZ(0)' }}
        />
        <div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-300 rounded-full opacity-20 blur-3xl md:opacity-30"
          style={{ transform: 'translateZ(0)' }}
        />
        {!isMobile && (
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-200 rounded-full blur-3xl opacity-20"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transform: 'translateZ(0)' }}
          />
        )}
      </div>

      {/* Floating food emojis - hidden on mobile for performance */}
      {!isMobile && floatingFoods.map((food, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl md:text-5xl pointer-events-none select-none hidden md:block"
          style={{ left: `${food.x}%`, top: `${food.y}%`, transform: 'translateZ(0)' }}
          initial={{ opacity: 0, scale: 0 }}
          animate={isLoaded ? {
            opacity: [0.15, 0.3, 0.15],
            scale: [1, 1.2, 1],
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          } : {}}
          transition={{
            duration: 6,
            delay: food.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {food.emoji}
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-sm font-medium mb-6 border border-emerald-200/50 shadow-lg shadow-emerald-100/50"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4" />
              </motion.div>
              <span>Now in Beta</span>
              <span className="w-1 h-1 bg-emerald-400 rounded-full" />
              <span>Join 10,000+ Early Users</span>
            </motion.div>

            {/* Headline with staggered animation */}
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-[1.15] mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.span
                className="inline"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              >
                Decide What to Eat{" "}
              </motion.span>
              <motion.span
                className="inline"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              >
                <GradientText>in 5 Seconds</GradientText>
              </motion.span>
              <motion.span
                className="inline"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              >
                , Not Hours
              </motion.span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Nourishr uses AI to understand your cravings, dietary needs, and
              what&apos;s in your fridge to instantly recommend the perfect meal —
              whether you&apos;re cooking or ordering.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <MagneticButton className="px-8 py-4 text-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40">
                <Apple className="w-5 h-5 mr-2" />
                Download for iOS
              </MagneticButton>
              <MagneticButton className="px-8 py-4 text-lg bg-white text-gray-900 border border-gray-200 shadow-lg hover:shadow-xl">
                <Play className="w-5 h-5 mr-2" />
                Join Waitlist
              </MagneticButton>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              {[
                "Free to use",
                "No credit card required",
                "Works with 133+ restaurants",
              ].map((text, i) => (
                <motion.span
                  key={i}
                  className="flex items-center gap-1.5"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.1 + i * 0.1, type: "spring" }}
                  >
                    <Check className="w-4 h-4 text-emerald-500" />
                  </motion.div>
                  {text}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Interactive Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="relative flex justify-center perspective-1000"
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Phone glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-[3rem] blur-3xl opacity-30 scale-90" />

              {/* Phone Frame */}
              <motion.div
                className="relative w-72 h-[580px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-2xl z-10 flex items-center justify-center">
                  <div className="w-16 h-4 bg-gray-800 rounded-full" />
                </div>

                {/* Screen */}
                <div className="w-full h-full bg-gradient-to-br from-emerald-400 via-teal-500 to-emerald-600 rounded-[2.5rem] overflow-hidden relative">
                  {/* Animated gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                    animate={{ opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {/* App Screen Content */}
                  <div className="p-6 h-full flex flex-col relative z-10">
                    <motion.div
                      className="text-white text-center mb-6 pt-4"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <p className="text-sm opacity-80">Good evening!</p>
                      <h3 className="text-xl font-bold">What&apos;s your vibe?</h3>
                    </motion.div>

                    {/* Mood Cards */}
                    <div className="grid grid-cols-2 gap-3 flex-1">
                      {moods.map((mood, i) => (
                        <motion.div
                          key={mood.label}
                          initial={{ opacity: 0, scale: 0.5, y: 20 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{
                            delay: 1 + i * 0.1,
                            type: "spring",
                            stiffness: 200,
                          }}
                          whileHover={{ scale: 1.05, y: -5 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedMood(i)}
                          className={`relative bg-white/20 backdrop-blur-sm rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 overflow-hidden ${
                            selectedMood === i
                              ? "ring-2 ring-white bg-white/30"
                              : ""
                          }`}
                        >
                          {/* Selection glow */}
                          {selectedMood === i && (
                            <motion.div
                              className={`absolute inset-0 bg-gradient-to-br ${mood.color} opacity-30`}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                            />
                          )}
                          <motion.span
                            className="text-3xl mb-2 relative z-10"
                            animate={
                              selectedMood === i
                                ? { scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] }
                                : {}
                            }
                            transition={{ duration: 0.5 }}
                          >
                            {mood.emoji}
                          </motion.span>
                          <span className="text-white text-sm font-medium relative z-10">
                            {mood.label}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Bottom indicator */}
                    <motion.div
                      className="mt-4 flex justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                    >
                      <div className="w-32 h-1 bg-white/30 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-white rounded-full"
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Cards - z-20 to stay in front of phone content */}
              <motion.div
                initial={{ opacity: 0, x: -50, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
                className="absolute -left-20 top-16 hidden lg:block z-20"
              >
                <motion.div
                  className="bg-white rounded-2xl p-4 shadow-2xl shadow-gray-200/50 border border-gray-100"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center text-2xl"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      🍕
                    </motion.div>
                    <div>
                      <p className="font-semibold text-gray-900">Pizza Night</p>
                      <p className="text-sm text-gray-500">3 options found</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.4, type: "spring", stiffness: 100 }}
                className="absolute -right-16 bottom-28 hidden lg:block z-20"
              >
                <motion.div
                  className="bg-white rounded-2xl p-4 shadow-2xl shadow-gray-200/50 border border-gray-100"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  whileHover={{ scale: 1.05, rotate: -2 }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-200 rounded-xl flex items-center justify-center text-2xl"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      🥗
                    </motion.div>
                    <div>
                      <p className="font-semibold text-gray-900">Healthy Bowl</p>
                      <div className="flex items-center gap-1">
                        <motion.span
                          className="w-2 h-2 bg-emerald-500 rounded-full"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                        <p className="text-sm text-emerald-500 font-medium">Perfect match!</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* New floating notification - z-20 to stay in front */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, type: "spring" }}
                className="absolute -right-8 top-8 hidden lg:block z-20"
              >
                <motion.div
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full px-4 py-2 shadow-lg text-sm font-medium"
                  animate={{ y: [0, -5, 0], rotate: [0, 3, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  ✨ AI Powered
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats with animated counters */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: 10000, suffix: "+", label: "Active Users", decimals: 0 },
            { value: 4.9, suffix: "", label: "App Rating", icon: "⭐", decimals: 1 },
            { value: 133, suffix: "+", label: "Restaurants", decimals: 0 },
            { value: 3500, suffix: "+", label: "Dishes", decimals: 0 },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="inline-block"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center justify-center gap-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                  {stat.icon && (
                    <motion.span
                      className="text-2xl"
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {stat.icon}
                    </motion.span>
                  )}
                </p>
                <p className="text-gray-500 mt-1 group-hover:text-emerald-600 transition-colors">
                  {stat.label}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-gray-400 cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
