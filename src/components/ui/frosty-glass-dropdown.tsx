"use client";

import React, { ReactNode } from "react";

interface FrostyGlassDropdownProps {
  children: ReactNode;
  isOpen: boolean;
  width?: string;
  position?: "left" | "right";
  className?: string;
}

export const FrostyGlassDropdown = ({
  children,
  isOpen,
  width = "w-48",
  position = "right",
  className = "",
}: FrostyGlassDropdownProps) => {
  if (!isOpen) return null;
  
  return (
    <div 
      className={`
        absolute ${position === "right" ? "right-0" : "left-0"} mt-2 
        ${width} z-50 
        frosty-glass-panel
        shadow-xl 
        bg-gradient-to-br from-white/30 to-white/15
        backdrop-blur-xl
        p-4 rounded-lg 
        border border-white/30
        animate-fadeIn
        ${className}
      `}
      style={{
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
      }}
    >
      {children}
    </div>
  );
}; 