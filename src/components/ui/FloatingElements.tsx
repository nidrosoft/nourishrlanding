"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const foodEmojis = [
  "🍕", "🍔", "🌮", "🍜", "🥗", "🍣", "🥑", "🍩", "🍪", "🧁",
  "🍇", "🍓", "🥐", "🍱", "🥘", "🍝", "🌯", "🥙", "🍛", "🥞"
];

interface FloatingElement {
  id: number;
  emoji: string;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const newElements: FloatingElement[] = [];
    for (let i = 0; i < 15; i++) {
      newElements.push({
        id: i,
        emoji: foodEmojis[Math.floor(Math.random() * foodEmojis.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 20 + Math.random() * 30,
        duration: 15 + Math.random() * 20,
        delay: Math.random() * 5,
      });
    }
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute opacity-20"
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            fontSize: el.size,
          }}
          animate={{
            y: [0, -30, 0, 30, 0],
            x: [0, 15, -15, 10, 0],
            rotate: [0, 10, -10, 5, 0],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: "easeInOut",
          }}
        >
          {el.emoji}
        </motion.div>
      ))}
    </div>
  );
}
