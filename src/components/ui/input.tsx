import React from "react";

type InputProps = {
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        className={`w-full px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-text-primary placeholder:text-text-primary/60 outline-none focus:border-sugarcane-yellow transition-all duration-300 ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input"; 