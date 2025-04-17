import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Logo = ({ size = "md", className = "" }: LogoProps) => {
  const sizeClasses = {
    sm: "h-12",
    md: "h-15",
    lg: "h-24"
  };

  return (
    <Link href="/" className={`flex items-center font-bold ${className}`}>
      <div className="flex items-center">
        <Image 
          src="/images/logo.png" 
          alt="CaneKind Logo" 
          width={0}
          height={0}
          sizes="100vw"
          className={`${sizeClasses[size]} w-auto mr-2`}
          priority
        />
      </div>
    </Link>
  );
}; 