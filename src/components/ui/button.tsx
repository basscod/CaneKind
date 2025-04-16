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
    secondary: "bg-white/10 backdrop-filter backdrop-blur-md border border-white/30 text-text-primary hover:bg-white/20 shadow-md bg-sugarcane-yellow/20",
    outline: "bg-white/40 backdrop-filter backdrop-blur-md border border-white/50 text-text-primary hover:bg-white/50 shadow-md"
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