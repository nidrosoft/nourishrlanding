"use client";

import { motion } from "framer-motion";
import { Marquee, MarqueeItem } from "../ui/Marquee";

const reviews = [
  { text: "Life-changing app!", author: "Sarah M.", rating: 5 },
  { text: "No more food decision stress", author: "Mike T.", rating: 5 },
  { text: "My new favorite app", author: "Emily R.", rating: 5 },
  { text: "Finally, an app that gets me", author: "David K.", rating: 5 },
  { text: "Saved me so much time", author: "Lisa P.", rating: 5 },
  { text: "The AI is incredible", author: "James W.", rating: 5 },
  { text: "Perfect for my keto diet", author: "Anna S.", rating: 5 },
  { text: "Reduced my food waste by 50%", author: "Chris L.", rating: 5 },
];

const partners = [
  "🍕 Pizza Hut",
  "🍔 Shake Shack",
  "🌮 Chipotle",
  "🥗 Sweetgreen",
  "🍜 Panda Express",
  "🍣 Nobu",
  "🥪 Subway",
  "🍝 Olive Garden",
  "🌯 Qdoba",
  "🥙 Cava",
];

export function SocialProof() {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Reviews Marquee */}
      <Marquee speed={40} className="mb-8">
        {reviews.map((review, i) => (
          <MarqueeItem key={i} className="bg-white hover:bg-emerald-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(review.rating)].map((_, j) => (
                  <span key={j} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 font-medium">&ldquo;{review.text}&rdquo;</p>
              <p className="text-gray-400 text-sm">— {review.author}</p>
            </div>
          </MarqueeItem>
        ))}
      </Marquee>

      {/* Partners Marquee */}
      <Marquee speed={30} direction="right">
        {partners.map((partner, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 bg-gray-100 rounded-full text-gray-600 font-medium hover:bg-emerald-100 hover:text-emerald-700 transition-colors cursor-default"
          >
            {partner}
          </motion.div>
        ))}
      </Marquee>
    </section>
  );
}
