"use client";

import { useState, useEffect } from "react";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText = ({ text, disabled = false, speed = 2, className = "" }: ShinyTextProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const animationDuration = `${speed}s`;

  // Estilo base para evitar el mismatch de hidratación
  const baseStyle: React.CSSProperties = {
    backgroundImage: "linear-gradient(120deg, rgba(255, 255, 255, 0.3) 30%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0.3) 70%)",
    backgroundSize: "200% 100%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animationDuration: mounted ? animationDuration : "0s",
  };

  return (
    <div
      className={`bg-clip-text inline-block ${
        !disabled && mounted ? "animate-shiny-text" : ""
      } ${className}`}
      style={baseStyle}
    >
      {text}
    </div>
  );
};

export default ShinyText;
