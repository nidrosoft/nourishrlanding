"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What is Nourishr?",
        a: "Nourishr is an AI-powered meal recommendation app that helps you decide what to eat in seconds, not hours. Whether you're ordering from a restaurant or cooking at home, Nourishr understands your cravings, dietary needs, and what's in your fridge to instantly recommend the perfect meal.",
      },
      {
        q: "How does Nourishr work?",
        a: "Simply tell us your mood (lazy, healthy, comfort food, etc.), and our AI analyzes 3,500+ dishes from local restaurants, filters by your dietary preferences, and serves up 3 perfect matches. You can then order directly through delivery apps or get a recipe to cook at home.",
      },
      {
        q: "Is Nourishr free to use?",
        a: "Yes! Nourishr is free to download and use. We may offer premium features in the future, but the core meal recommendation functionality will always be free.",
      },
      {
        q: "Which platforms is Nourishr available on?",
        a: "Nourishr is currently available for iOS devices. An Android version is in development and will be released soon. Stay tuned by joining our waitlist!",
      },
    ],
  },
  {
    category: "Features",
    questions: [
      {
        q: "What dietary preferences does Nourishr support?",
        a: "Nourishr supports a wide range of dietary preferences including vegetarian, vegan, keto, paleo, gluten-free, dairy-free, halal, kosher, and many more. You can also specify food allergies and intolerances.",
      },
      {
        q: "How does the 'Cook What I Have' feature work?",
        a: "Simply input the ingredients you have in your fridge, and our AI will suggest recipes you can make with those ingredients. It's a great way to reduce food waste and discover new dishes!",
      },
      {
        q: "Can I save my favorite meals?",
        a: "Yes! You can save any meal recommendation to your favorites for quick access later. You can also view your meal history to reorder dishes you've enjoyed.",
      },
      {
        q: "Does Nourishr work with food delivery apps?",
        a: "Yes, Nourishr integrates with popular delivery services like UberEats and DoorDash. When you find a meal you want, you can order it directly through these platforms with just one tap.",
      },
    ],
  },
  {
    category: "Account & Privacy",
    questions: [
      {
        q: "Do I need an account to use Nourishr?",
        a: "You can browse meal recommendations without an account, but creating one allows you to save preferences, track your meal history, and get personalized recommendations.",
      },
      {
        q: "How does Nourishr protect my data?",
        a: "We take your privacy seriously. All data is encrypted in transit and at rest. We never sell your personal information to third parties. Please see our Privacy Policy for complete details.",
      },
      {
        q: "Can I delete my account and data?",
        a: "Yes, you can delete your account at any time through the app settings. This will permanently remove all your personal data from our servers in accordance with GDPR requirements.",
      },
    ],
  },
  {
    category: "Technical",
    questions: [
      {
        q: "Why isn't Nourishr showing restaurants near me?",
        a: "Make sure you've enabled location services for Nourishr in your device settings. We use your location to find nearby restaurants. If you're in an area we don't cover yet, please let us know!",
      },
      {
        q: "The app is running slowly. What can I do?",
        a: "Try closing and reopening the app, or check for updates in the App Store. If the issue persists, try clearing the app cache in settings or reinstalling the app.",
      },
      {
        q: "How do I report a bug or issue?",
        a: "You can report bugs through the app's feedback feature or by emailing us at nidrosoft@outlook.com. Please include as much detail as possible about the issue.",
      },
    ],
  },
  {
    category: "Contact & Support",
    questions: [
      {
        q: "How can I contact Nourishr support?",
        a: "You can reach our support team at nidrosoft@outlook.com. We typically respond within 24-48 hours.",
      },
      {
        q: "Can I suggest a restaurant to be added?",
        a: "Absolutely! We're always looking to expand our restaurant database. Send your suggestions to nidrosoft@outlook.com with the restaurant name and location.",
      },
      {
        q: "How can I partner with Nourishr?",
        a: "If you're a restaurant owner or interested in business partnerships, please contact us at nidrosoft@outlook.com with details about your proposal.",
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left hover:text-emerald-600 transition-colors"
      >
        <span className="font-medium text-gray-900 pr-8">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-white/80 mt-2">
            Find answers to common questions about Nourishr
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {faqs.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.1 }}
            className="mb-8"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {category.category}
            </h2>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="px-6">
                {category.questions.map((faq, index) => (
                  <FAQItem key={index} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-center text-white mt-12"
        >
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-white/90 mb-6">
            Can&apos;t find the answer you&apos;re looking for? Our support team is here
            to help.
          </p>
          <a
            href="mailto:nidrosoft@outlook.com"
            className="inline-flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </main>
  );
}
