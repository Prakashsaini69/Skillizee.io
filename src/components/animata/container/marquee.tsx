"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "../../../lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  [key: string]: any;
}

export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  ...props
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Duplicate content multiple times to ensure infinite loop
      scrollerContent.forEach((item) => {
        // Create 5 copies to ensure seamless infinite loop
        for (let i = 0; i < 5; i++) {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        }
      });

      setStart(true);
    }
  }

  const speedVariant = {
    slow: "300s",
    normal: "180s",
    fast: "90s",
  };

  const {
    speed = "normal",
    direction = "left",
    pauseOnHover: pauseOnHoverProp = false,
    className: classNameProp,
    ...otherProps
  } = props;

  const duration =
    typeof speed === "number" ? speed : speedVariant[speed as keyof typeof speedVariant];

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 w-max flex-nowrap",
          start && "animate-scroll",
          reverse && "animate-scroll-reverse",
          pauseOnHoverProp && "hover:pause-animation"
        )}
        style={{
          "--animation-duration": `${duration}`,
        } as React.CSSProperties & { "--animation-duration": string }}
        {...otherProps}
      >
        {children}
      </ul>
    </div>
  );
} 