"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedContentProps {
  children: ReactNode;
  distance?: number;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  config?: { tension: number; friction: number };
  initialOpacity?: number;
  animateOpacity?: number;
  scale?: number;
  threshold?: number;
  delay?: number;
}

export default function AnimatedContent({
  children,
  distance = 30,
  direction = "vertical",
  reverse = false,
  initialOpacity = 0,
  animateOpacity = 1,
  scale = 1,
  delay = 0,
}: AnimatedContentProps) {
  const x = direction === "horizontal" ? (reverse ? -distance : distance) : 0;
  const y = direction === "vertical" ? (reverse ? -distance : distance) : 0;

  return (
    <motion.div
      initial={{ opacity: initialOpacity, x, y, scale }}
      animate={{ opacity: animateOpacity, x: 0, y: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
}
