import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

export function AnimatedBeam({
  containerRef,
  fromRef,
  toRef,
  curvature = 50,
  reverse = false,
  duration = 3,
  delay = 0,
  pathColor = "#ffffff",
  pathWidth = 2,
  pathOpacity = 0.3,
  gradientStartColor = "#ffaa40",
  gradientStopColor = "#9c40ff",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
  className = "",
  isStraight = false
}) {
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });
  const [gradientPosition, setGradientPosition] = useState(0);
  const animationRef = useRef();
  const id = useRef(crypto.randomUUID().slice(0, 8));

  const updatePath = () => {
    if (!containerRef?.current || !fromRef?.current || !toRef?.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const rectA = fromRef.current.getBoundingClientRect();
    const rectB = toRef.current.getBoundingClientRect();

    const svgWidth = containerRect.width;
    const svgHeight = containerRect.height;
    setSvgDimensions({ width: svgWidth, height: svgHeight });

    const startX = rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
    const startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
    const endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
    const endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

    let d;
    if (isStraight) {
      // Create a straight line
      d = `M ${startX},${startY} L ${endX},${endY}`;
    } else {
      // Create a curved path with better control points
      const midX = (startX + endX) / 2;
      const midY = (startY + endY) / 2 - curvature;
      d = `M ${startX},${startY} Q ${midX},${midY} ${endX},${endY}`;
    }
    
    setPathD(d);
  };

  useEffect(() => {
    const updatePathWithDelay = () => {
      setTimeout(updatePath, 100); // Small delay to ensure DOM is ready
    };
    
    updatePathWithDelay();

    const resizeObserver = new ResizeObserver(() => {
      updatePathWithDelay();
    });

    if (containerRef?.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [containerRef, fromRef, toRef]);

  useEffect(() => {
    let startTime = Date.now();
    let animationId;

    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      const progress = (elapsed % duration) / duration;
      
      setGradientPosition(progress);
      animationId = requestAnimationFrame(animate);
    };

    const timeoutId = setTimeout(() => {
      startTime = Date.now();
      animationId = requestAnimationFrame(animate);
    }, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [delay, duration]);

  // Calculate gradient coordinates based on the path direction
  const gradientCoordinates = reverse
    ? {
        x1: `${100 - gradientPosition * 120}%`,
        x2: `${110 - gradientPosition * 120}%`,
        y1: "0%",
        y2: "0%",
      }
    : {
        x1: `${-20 + gradientPosition * 120}%`,
        x2: `${10 + gradientPosition * 120}%`,
        y1: "0%",
        y2: "0%",
      };

  if (!pathD || svgDimensions.width === 0) return null;

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "pointer-events-none absolute left-0 top-0 transform-gpu",
        className
      )}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      {/* Background path */}
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
      />
      
      {/* Animated gradient path */}
      <path
        d={pathD}
        strokeWidth={pathWidth}
        stroke={`url(#${id.current})`}
        strokeOpacity="1"
        strokeLinecap="round"
      />
      
      <defs>
        <linearGradient
          id={id.current}
          gradientUnits="userSpaceOnUse"
          x1={gradientCoordinates.x1}
          x2={gradientCoordinates.x2}
          y1={gradientCoordinates.y1}
          y2={gradientCoordinates.y2}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop stopColor={gradientStartColor} />
          <stop offset="50%" stopColor={gradientStopColor} />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
} 