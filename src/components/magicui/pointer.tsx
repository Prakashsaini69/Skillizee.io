"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

interface PointerProps {
  children?: React.ReactNode;
  className?: string;
}

export const Pointer: React.FC<PointerProps> = ({ children, className }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      className={cn(
        "pointer-events-none fixed left-0 top-0 z-50",
        className
      )}
      animate={{
        x: position.x - 20,
        y: position.y - 20,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    >
      {children || (
        <div className="h-10 w-10 rounded-full border-2 border-black bg-white shadow-lg" />
      )}
    </motion.div>
  );
}; 