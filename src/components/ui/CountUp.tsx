"use client";

import { useEffect, useRef } from "react";
import { useInView, animate, useMotionValue } from "framer-motion";

interface CountUpProps {
  to: number;
  from?: number;
  direction?: "up" | "down";
  delay?: number;
  duration?: number; // en segundos
  className?: string;
  onTargetReached?: () => void;
  targetTrigger?: number;
}

export default function CountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2,
  className = "",
  onTargetReached,
  targetTrigger
}: CountUpProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const count = useMotionValue(from);
  const isInView = useInView(nodeRef, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, {
        duration: duration,
        delay: delay,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (nodeRef.current) {
            nodeRef.current.textContent = Intl.NumberFormat("en-US").format(
              Math.floor(latest)
            );
          }
          if (onTargetReached && targetTrigger !== undefined && latest >= targetTrigger) {
            onTargetReached();
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, to, from, duration, delay, onTargetReached, targetTrigger, count]);

  return <span ref={nodeRef} className={className}>{from}</span>;
}
