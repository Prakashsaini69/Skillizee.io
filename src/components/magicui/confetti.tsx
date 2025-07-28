"use client";

import React, { useRef, useImperativeHandle, forwardRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

interface ConfettiParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  size: number;
}

interface ConfettiProps {
  className?: string;
  onMouseEnter?: () => void;
}

export interface ConfettiRef {
  fire: (options?: { particleCount?: number; colors?: string[] }) => void;
}

const COLORS = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff", "#ff8800", "#8800ff"];

export const Confetti = forwardRef<ConfettiRef, ConfettiProps>(
  ({ className, onMouseEnter }, ref) => {
    const [particles, setParticles] = useState<ConfettiParticle[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number>();

    useImperativeHandle(ref, () => ({
      fire: (options: { particleCount?: number; colors?: string[] } = {}) => {
        const { particleCount = 50, colors = COLORS } = options;
        const newParticles: ConfettiParticle[] = [];

        for (let i = 0; i < particleCount; i++) {
          newParticles.push({
            id: Date.now() + i,
            x: Math.random() * (containerRef.current?.clientWidth || 400),
            y: -20,
            vx: (Math.random() - 0.5) * 8,
            vy: Math.random() * 3 + 2,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 8 + 4,
          });
        }

        setParticles(prev => [...prev, ...newParticles]);
      },
    }), []);

    useEffect(() => {
      const animate = () => {
        setParticles(prev => {
          const updated = prev.map(particle => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            vy: particle.vy + 0.1, // gravity
            rotation: particle.rotation + particle.rotationSpeed,
          })).filter(particle => {
            const container = containerRef.current;
            if (!container) return false;
            return particle.y < container.clientHeight + 50;
          });

          return updated;
        });

        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }, []);

    return (
      <div
        ref={containerRef}
        className={cn("relative overflow-hidden", className)}
        onMouseEnter={onMouseEnter}
      >
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute pointer-events-none"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              borderRadius: "2px",
            }}
            animate={{
              rotate: particle.rotation,
            }}
            transition={{
              duration: 0.1,
              ease: "linear",
            }}
          />
        ))}
      </div>
    );
  }
);

Confetti.displayName = "Confetti";

export const ConfettiButton: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  const confettiRef = useRef<ConfettiRef>(null);

  return (
    <div className="relative">
      <button
        className={cn(
          "px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors",
          className
        )}
        onClick={() => confettiRef.current?.fire()}
      >
        {children}
      </button>
      <Confetti
        ref={confettiRef}
        className="absolute inset-0 pointer-events-none"
      />
    </div>
  );
}; 