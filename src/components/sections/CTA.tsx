"use client";

import { motion, useInView } from "framer-motion";
import { Apple, ArrowRight, Lock, Mail, Sparkles, Check } from "lucide-react";
import { useRef, useState } from "react";
import { MagneticButton } from "../ui/MagneticButton";
import { useIsMobile } from "@/hooks/useMediaQuery";

const floatingEmojis = [
  { emoji: "🍕", x: 5, y: 20 },
  { emoji: "🥗", x: 90, y: 15 },
  { emoji: "🍜", x: 85, y: 75 },
  { emoji: "🌮", x: 10, y: 80 },
];

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const isMobile = useIsMobile();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section
      ref={ref}
      className="py-24 md:py-40 relative overflow-hidden"
    >
      {/* Static gradient background - no animation for mobile performance */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-500 to-emerald-600" />

      {/* Static mesh gradient overlay - no animation on mobile */}
      <div className="absolute inset-0 opacity-30 pointer-events-none hidden md:block">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"
          style={{ transform: 'translateZ(0)' }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"
          style={{ transform: 'translateZ(0)' }}
        />
      </div>

      {/* Floating food emojis - hidden on mobile for performance */}
      {!isMobile && floatingEmojis.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl md:text-5xl pointer-events-none select-none opacity-20 hidden md:block"
          style={{ left: `${item.x}%`, top: `${item.y}%`, transform: 'translateZ(0)' }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        >
          {item.emoji}
        </motion.div>
      ))}

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="text-center"
        >
          {/* Animated badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-8 border border-white/30"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
            <span>Limited Beta Access</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Ready to End
            <br />
            <span className="relative">
              Decision Fatigue
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-3 bg-white/30 rounded-full -z-10"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            </span>
            ?
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            className="text-lg sm:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Join 10,000+ people who&apos;ve reclaimed their time and started eating
            smarter with Nourishr.
          </motion.p>

          {/* Email Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-lg mx-auto mb-10"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="relative">
                <motion.div
                  className={`absolute -inset-1 bg-white rounded-full blur-lg transition-opacity duration-300 ${
                    isFocused ? "opacity-30" : "opacity-0"
                  }`}
                />
                <div className="relative flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      placeholder="Enter your email"
                      className="w-full pl-14 pr-6 py-5 rounded-full bg-white text-gray-900 placeholder-gray-400 focus:outline-none shadow-2xl text-lg font-medium"
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="px-8 py-5 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all shadow-2xl flex items-center justify-center gap-2 cursor-pointer group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Join Waitlist
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </motion.button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/20 backdrop-blur-md rounded-3xl p-8 text-white border border-white/30"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Check className="w-8 h-8 text-emerald-500" />
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="font-bold text-2xl mb-2"
                >
                  You&apos;re on the list!
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-white/80"
                >
                  We&apos;ll notify you when Nourishr launches.
                </motion.p>
              </motion.div>
            )}
          </motion.div>

          {/* App Store Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <span className="text-white/80 font-medium">Or download now:</span>
            <MagneticButton className="px-8 py-4 bg-white text-gray-900 font-semibold shadow-2xl hover:shadow-white/20">
              <Apple className="w-5 h-5 mr-2" />
              Download for iOS
            </MagneticButton>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center justify-center gap-3 text-white/70 text-sm"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Lock className="w-4 h-4" />
            </motion.div>
            <span>We respect your privacy. Unsubscribe anytime.</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
