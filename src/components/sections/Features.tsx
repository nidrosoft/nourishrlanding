"use client";

import { motion, useInView } from "framer-motion";
import {
  Brain,
  Camera,
  Check,
  ChefHat,
  Package,
  ScanLine,
  Sparkles,
  Utensils,
  Zap,
} from "lucide-react";
import { useRef } from "react";

interface Feature {
  badge: string;
  badgeIcon: React.ReactNode;
  title: string;
  titleHighlight: string;
  description: string;
  bullets: string[];
  image: React.ReactNode;
  reverse?: boolean;
}

const features: Feature[] = [
  {
    badge: "INSTANT RECOMMENDATIONS",
    badgeIcon: <Zap className="w-4 h-4" />,
    title: '"Show Me What to Eat"',
    titleHighlight: "Get Personalized Meals in 5 Seconds",
    description:
      "Tell us your vibe — lazy, healthy, quick, comfort food — and we'll instantly recommend 3 perfect meals from 133+ local restaurants or recipes you can cook. No more endless scrolling.",
    bullets: [
      "Personalized to your dietary preferences",
      "Filters by allergies automatically",
      "One-tap ordering via UberEats & DoorDash",
      "Learns your taste over time",
    ],
    image: (
      <div className="relative w-full h-80 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-3 p-6">
            {["🍕", "🥗", "🍜", "🌮", "🍱", "🥘"].map((emoji, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-3xl"
              >
                {emoji}
              </motion.div>
            ))}
          </div>
        </div>
        <Utensils className="absolute bottom-4 right-4 w-12 h-12 text-emerald-300" />
      </div>
    ),
  },
  {
    badge: "AI-POWERED SCANNING",
    badgeIcon: <Camera className="w-4 h-4" />,
    title: "Snap Your Ingredients,",
    titleHighlight: "Get Instant Recipes",
    description:
      "Take photos of what's in your fridge. Our AI identifies your ingredients and suggests delicious recipes by cuisine — Italian, Mexican, Asian, or whatever you're craving. Zero food waste, maximum flavor.",
    bullets: [
      "AI ingredient recognition",
      "Filter by cuisine type",
      "Step-by-step cooking instructions",
      "Adjusts to your skill level",
    ],
    image: (
      <div className="relative w-full h-80 bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl flex items-center justify-center overflow-hidden">
        <div className="relative">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="w-48 h-48 bg-white rounded-3xl shadow-xl flex items-center justify-center"
          >
            <div className="text-center">
              <Camera className="w-12 h-12 text-orange-400 mx-auto mb-2" />
              <p className="text-sm text-gray-500">Scanning...</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute -right-8 -bottom-4 bg-white rounded-xl p-3 shadow-lg"
          >
            <p className="text-xs text-gray-500">Found:</p>
            <p className="font-semibold text-gray-900">🥚 🧀 🥬</p>
          </motion.div>
        </div>
        <ChefHat className="absolute bottom-4 right-4 w-12 h-12 text-orange-300" />
      </div>
    ),
    reverse: true,
  },
  {
    badge: "INTELLIGENT MEMORY",
    badgeIcon: <Brain className="w-4 h-4" />,
    title: "Your Pantry, Always Updated",
    titleHighlight: "Never Re-Enter Ingredients",
    description:
      "Nourishr remembers everything — your pantry items, expiration dates, and what you love. Get alerts before food expires and suggestions based on what you actually have.",
    bullets: [
      "Automatic pantry tracking",
      "Expiration date alerts",
      "Smart shopping lists",
      "Batch scanning for quick updates",
    ],
    image: (
      <div className="relative w-full h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl flex items-center justify-center overflow-hidden">
        <div className="space-y-3 p-6">
          {[
            { name: "Eggs", qty: "12", exp: "5 days" },
            { name: "Milk", qty: "1L", exp: "3 days" },
            { name: "Chicken", qty: "500g", exp: "2 days" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.15 }}
              className="bg-white rounded-xl p-4 shadow-lg flex items-center justify-between min-w-[200px]"
            >
              <div>
                <p className="font-semibold text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500">{item.qty}</p>
              </div>
              <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
                {item.exp}
              </span>
            </motion.div>
          ))}
        </div>
        <Package className="absolute bottom-4 right-4 w-12 h-12 text-purple-300" />
      </div>
    ),
  },
  {
    badge: "INSTANT ANALYSIS",
    badgeIcon: <ScanLine className="w-4 h-4" />,
    title: "Snap a Photo,",
    titleHighlight: "Know Your Nutrition",
    description:
      "Point your camera at any meal and get instant nutritional breakdown — calories, macros, allergens, and diet compatibility. Perfect for tracking your health goals without the hassle.",
    bullets: [
      "Instant calorie estimation",
      "Full macro breakdown (protein, carbs, fat)",
      "Allergen detection",
      "Diet compatibility check (keto, vegan, etc.)",
    ],
    image: (
      <div className="relative w-full h-80 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-2xl p-6 shadow-xl"
        >
          <div className="text-center mb-4">
            <span className="text-4xl">🍝</span>
            <p className="font-semibold text-gray-900 mt-2">Pasta Carbonara</p>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-blue-500">520</p>
              <p className="text-xs text-gray-500">Calories</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-500">24g</p>
              <p className="text-xs text-gray-500">Protein</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-500">58g</p>
              <p className="text-xs text-gray-500">Carbs</p>
            </div>
          </div>
        </motion.div>
        <ScanLine className="absolute bottom-4 right-4 w-12 h-12 text-blue-300" />
      </div>
    ),
    reverse: true,
  },
  {
    badge: "TRULY PERSONAL",
    badgeIcon: <Sparkles className="w-4 h-4" />,
    title: "Gets Smarter Every Day",
    titleHighlight: "Adapts to Your Life",
    description:
      "Set your dietary preferences, allergies, and lifestyle once. Nourishr learns from every interaction — what you love, what you skip, and how your tastes evolve. It's like having a personal chef who knows you.",
    bullets: [
      "12+ dietary patterns supported",
      "Complete allergy management",
      "Cuisine preferences",
      "Household size adjustments",
    ],
    image: (
      <div className="relative w-full h-80 bg-gradient-to-br from-rose-100 to-red-100 rounded-3xl flex items-center justify-center overflow-hidden">
        <div className="flex flex-wrap gap-2 p-6 justify-center max-w-xs">
          {[
            "🥗 Vegetarian",
            "🥜 No Nuts",
            "🌾 Gluten-Free",
            "🥛 Lactose-Free",
            "🌶️ Spicy",
            "🇮🇹 Italian",
            "🇲🇽 Mexican",
            "🇯🇵 Japanese",
          ].map((pref, i) => (
            <motion.span
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.08 }}
              className="bg-white px-3 py-2 rounded-full text-sm font-medium text-gray-700 shadow-md"
            >
              {pref}
            </motion.span>
          ))}
        </div>
        <Sparkles className="absolute bottom-4 right-4 w-12 h-12 text-rose-300" />
      </div>
    ),
  },
];

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`grid lg:grid-cols-2 gap-12 items-center ${
        feature.reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className={feature.reverse ? "lg:order-2" : ""}>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-6">
          {feature.badgeIcon}
          {feature.badge}
        </div>

        {/* Title */}
        <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          {feature.title}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
            {feature.titleHighlight}
          </span>
        </h3>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-6">{feature.description}</p>

        {/* Bullets */}
        <ul className="space-y-3">
          {feature.bullets.map((bullet, i) => (
            <li key={i} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-emerald-600" />
              </div>
              <span className="text-gray-700">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={feature.reverse ? "lg:order-1" : ""}>{feature.image}</div>
    </motion.div>
  );
}

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
            FEATURES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
              Eat Smarter
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nourishr combines AI-powered recommendations with intuitive tools to
            make every meal decision effortless.
          </p>
        </motion.div>

        {/* Features */}
        <div className="space-y-32">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
