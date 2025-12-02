"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { GlowingCard } from "../ui/GlowingCard";
import { AnimatedCounter } from "../ui/AnimatedCounter";

const testimonials = [
  {
    quote:
      "I used to spend 30 minutes every night deciding what to order. Now it takes 5 seconds. Nourishr literally gave me my evenings back.",
    author: "Sarah M.",
    role: "Product Designer",
    avatar: "👩‍💼",
    rating: 5,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    quote:
      "As someone with multiple food allergies, finding safe meals was a nightmare. Nourishr filters everything automatically. Game changer.",
    author: "Marcus T.",
    role: "Software Engineer",
    avatar: "👨‍💻",
    rating: 5,
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    quote:
      "The 'Cook What I Have' feature is genius. I've reduced my food waste by 60% and discovered recipes I never knew I could make.",
    author: "Emily R.",
    role: "Working Mom",
    avatar: "👩‍👧",
    rating: 5,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    quote:
      "Finally, an app that understands my keto diet. No more reading every menu item. Nourishr just knows.",
    author: "David K.",
    role: "Fitness Coach",
    avatar: "💪",
    rating: 5,
    gradient: "from-orange-500 to-amber-500",
  },
  {
    quote:
      "This app is a game-changer for busy professionals. I save at least an hour every day on meal decisions.",
    author: "Jennifer L.",
    role: "Marketing Director",
    avatar: "👩‍💻",
    rating: 5,
    gradient: "from-purple-500 to-violet-500",
  },
  {
    quote:
      "My whole family uses Nourishr now. It's made dinner planning so much easier and more fun!",
    author: "Michael R.",
    role: "Father of 3",
    avatar: "👨‍👩‍👧‍👦",
    rating: 5,
    gradient: "from-cyan-500 to-blue-500",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{ scale: [1.2, 1, 1.2], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-sm font-semibold mb-4 border border-emerald-200/50"
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💬
            </motion.span>
            TESTIMONIALS
          </motion.span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Loved by{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
                10,000+ Users
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-emerald-200 to-teal-200 -z-10 rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our early adopters are saying about Nourishr.
          </p>
        </motion.div>

        {/* Featured Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-16"
        >
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <GlowingCard>
                  <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
                    {/* Gradient accent */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonials[activeIndex].gradient}`} />

                    {/* Quote icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="absolute top-6 right-6 md:top-8 md:right-8"
                    >
                      <Quote className="w-12 h-12 md:w-16 md:h-16 text-emerald-100" />
                    </motion.div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                        >
                          <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Quote */}
                    <motion.p
                      className="text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed mb-8 font-medium"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      &ldquo;{testimonials[activeIndex].quote}&rdquo;
                    </motion.p>

                    {/* Author */}
                    <motion.div
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <motion.div
                        className={`w-14 h-14 bg-gradient-to-br ${testimonials[activeIndex].gradient} rounded-full flex items-center justify-center text-2xl shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                      >
                        {testimonials[activeIndex].avatar}
                      </motion.div>
                      <div>
                        <p className="font-bold text-gray-900 text-lg">
                          {testimonials[activeIndex].author}
                        </p>
                        <p className="text-gray-500">{testimonials[activeIndex].role}</p>
                      </div>
                    </motion.div>
                  </div>
                </GlowingCard>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4">
              <motion.button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-emerald-600 hover:shadow-xl transition-all pointer-events-auto"
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-emerald-600 hover:shadow-xl transition-all pointer-events-auto"
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setActiveIndex(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-gradient-to-r from-emerald-500 to-teal-500"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Mini testimonials grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 cursor-pointer group"
              onClick={() => {
                setIsAutoPlaying(false);
                setActiveIndex(index);
              }}
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm line-clamp-3 mb-4 group-hover:text-gray-900 transition-colors">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-sm`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">{testimonial.author}</p>
                  <p className="text-gray-400 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 rounded-3xl opacity-20 blur-xl" />
          <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: 10000, suffix: "+", label: "Active Users", icon: "👥" },
                { value: 4.9, suffix: "", label: "App Rating", icon: "⭐" },
                { value: 3500, suffix: "+", label: "Dishes", icon: "🍽️" },
                { value: 133, suffix: "+", label: "Restaurants", icon: "🏪" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="text-3xl mb-2"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <p className="text-3xl md:text-4xl font-bold text-gray-900">
                    {stat.value % 1 === 0 ? (
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    ) : (
                      <>
                        {stat.value}
                        {stat.suffix}
                      </>
                    )}
                  </p>
                  <p className="text-gray-500 mt-1 group-hover:text-emerald-600 transition-colors">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
