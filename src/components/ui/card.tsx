import React from "react";
import Link from "next/link";
import { Button } from "./button";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  glowEffect?: boolean;
};

export const Card = ({ 
  children, 
  className = "",
  glowEffect = false,
  ...props
}: CardProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div 
      className={`glass-card p-6 ${glowEffect ? 'yellow-glow' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const ProductCard = ({ 
  title,
  price,
  imageSrc,
  description,
  category,
  ctaLabel = "Buy Now",
  ctaHref = "#"
}: {
  title: string;
  price: string;
  imageSrc: string;
  description: string;
  category?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) => {
  return (
    <div className="glass-card overflow-hidden">
      <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        {category && (
          <div className="absolute top-2 left-2">
            <span className="bg-sugarcane-yellow/90 px-3 py-1 rounded-full text-text-primary text-sm font-medium">
              {category}
            </span>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <span className="bg-sugarcane-yellow px-3 py-1 rounded-full text-text-primary font-bold">
            {price}
          </span>
        </div>
        <p className="text-text-secondary mb-4">{description}</p>
        <Button variant="secondary" className="w-full" asChild>
          <Link href={ctaHref}>
            {ctaLabel}
          </Link>
        </Button>
      </div>
    </div>
  );
}; 