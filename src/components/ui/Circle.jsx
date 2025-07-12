import React from "react";
import { cn } from "../../lib/utils";

export function Circle({ children, className = "", size = 48 }) {
  return (
    <div
      className={cn(
        "z-10 flex items-center justify-center rounded-full border-2 border-gray-700 bg-gray-800 p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] hover:border-cyan-300 hover:bg-gray-700 transition-all duration-200 cursor-pointer",
        className
      )}
      style={{ width: size, height: size }}
    >
      {children}
    </div>
  );
} 