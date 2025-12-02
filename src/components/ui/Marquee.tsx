"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
}

export function Marquee({
  children,
  className,
  speed = 30,
  direction = "left",
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <motion.div
        className={cn(
          "flex shrink-0 gap-8 py-4",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        animate={{
          x: direction === "left" ? [0, "-50%"] : ["-50%", 0],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

interface MarqueeItemProps {
  children: ReactNode;
  className?: string;
}

export function MarqueeItem({ children, className }: MarqueeItemProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 px-6 py-3 bg-white rounded-full shadow-md border border-gray-100",
        className
      )}
    >
      {children}
    </div>
  );
}
