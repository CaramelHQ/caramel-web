"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TextTypeProps {
  text: string;
  speed?: number;
  onFinished?: () => void;
  className?: string;
  active?: boolean;
}

export default function TextType({
  text,
  speed = 50,
  onFinished,
  className = "",
  active = true
}: TextTypeProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!active) {
      setDisplayedText("");
      setIndex(0);
      return;
    }

    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (onFinished) {
      const timeout = setTimeout(onFinished, 1000);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed, onFinished, active]);

  return (
    <div className={`flex items-center ${className}`}>
      <span>{displayedText}</span>
      {active && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="w-[2px] h-[1em] bg-[#00a8fc] ml-0.5 inline-block"
        />
      )}
    </div>
  );
}
