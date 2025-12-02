"use client";

import { motion, useInView } from "framer-motion";
import { Brain, Camera, Lock, Zap } from "lucide-react";
import { useRef } from "react";

const techFeatures = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI Recommendation Engine",
    description:
      "Our ML models analyze your preferences, dietary needs, and past choices to serve perfect recommendations.",
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Computer Vision",
    description:
      "Advanced image recognition identifies ingredients and meals with 85-95% accuracy.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Privacy First",
    description:
      "Your data stays yours. We use end-to-end encryption and never sell your information.",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Real-Time Sync",
    description:
      "Instant updates across all your devices. Your pantry and preferences are always current.",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
  },
];

export function Technology() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white/10 text-emerald-400 rounded-full text-sm font-semibold mb-4">
            TECHNOLOGY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Built for the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              Future of Food
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Nourishr combines cutting-edge AI with a beautiful, intuitive
            interface. Our recommendation engine learns from millions of data
            points to understand exactly what you want to eat.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors group"
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-4 group-hover:scale-110 transition-transform`}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Code-like decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-black/30 rounded-2xl p-6 font-mono text-sm overflow-hidden"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="space-y-2 text-gray-400">
            <p>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-400">recommendation</span> ={" "}
              <span className="text-yellow-400">await</span>{" "}
              <span className="text-emerald-400">nourishr</span>.
              <span className="text-blue-300">getMeal</span>({"{"}
            </p>
            <p className="pl-4">
              <span className="text-gray-500">mood:</span>{" "}
              <span className="text-orange-400">&quot;comfort&quot;</span>,
            </p>
            <p className="pl-4">
              <span className="text-gray-500">dietary:</span> [
              <span className="text-orange-400">&quot;vegetarian&quot;</span>,{" "}
              <span className="text-orange-400">&quot;gluten-free&quot;</span>],
            </p>
            <p className="pl-4">
              <span className="text-gray-500">time:</span>{" "}
              <span className="text-orange-400">&quot;quick&quot;</span>
            </p>
            <p>{"}"});</p>
            <p className="mt-4 text-emerald-400">
              // ✨ Perfect match found in 0.3s
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
