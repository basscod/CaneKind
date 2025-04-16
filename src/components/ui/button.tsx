"use client";

import React from "react";
import { Slot } from "@radix-ui/react-slot";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  asChild?: boolean;
};

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  asChild = false,
  onClick,
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const baseClasses = "font-medium rounded-full transition-all duration-300 focus:outline-none";
  
  const variantClasses = {
    primary: "glass-card border border-white/30 text-text-primary hover:bg-white/20",
    secondary: "bg-sugarcane-yellow/30 backdrop-filter backdrop-blur-md border border-sugarcane-yellow text-text-primary hover:bg-sugarcane-yellow/70 shadow-md",
    outline: "bg-transparent backdrop-filter backdrop-blur-md border-2 border-[#cecece] text-[#4d4d4d] shadow-[inset_4px_4px_10px_#bcbcbc,inset_-4px_-4px_10px_#ffffff] hover:shadow-[inset_2px_2px_5px_#bcbcbc,inset_-2px_-2px_5px_#ffffff,2px_2px_5px_#bcbcbc,-2px_-2px_5px_#ffffff] focus:shadow-[inset_2px_2px_5px_#bcbcbc,inset_-2px_-2px_5px_#ffffff,2px_2px_5px_#bcbcbc,-2px_-2px_5px_#ffffff] focus:outline-none"
  };
  
  const sizeClasses = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg"
  };

  const Comp = asChild ? Slot : "button";
  
  return (
    <Comp
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </Comp>
  );
}; 