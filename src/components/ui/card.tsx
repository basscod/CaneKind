import React from "react";
import Link from "next/link";

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
  ctaLabel = "Buy Now",
  ctaHref = "#"
}: {
  title: string;
  price: string;
  imageSrc: string;
  description: string;
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
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <span className="bg-sugarcane-yellow px-3 py-1 rounded-full text-text-primary font-bold">
            {price}
          </span>
        </div>
        <p className="text-text-secondary mb-4">{description}</p>
        <Link 
          href={ctaHref}
          className="block w-full bg-sugarcane-yellow text-text-primary font-medium py-2 rounded-full hover:bg-secondary-yellow transition-colors text-center"
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}; 