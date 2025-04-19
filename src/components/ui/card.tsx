"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./button";
import { QuantityModal } from "./quantity-modal";
import { Product } from "@/lib/data/products";

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
  ctaLabel = "Add to Cart",
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Create a product object to pass to the modal
  const product: Product = {
    id: parseInt(ctaHref.split('/').pop() || '0'),
    title,
    price,
    imageSrc,
    description,
    category: category as "Classic" | "Blends" | "Special Edition"
  };

  return (
    <>
      <Link href={ctaHref} className="block">
        <div className="glass-card overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]">
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
            <div onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}>
              <Button 
                variant="secondary" 
                className="w-full"
                onClick={() => setIsModalOpen(true)}
              >
                {ctaLabel}
              </Button>
            </div>
          </div>
        </div>
      </Link>
      
      {/* Quantity Modal */}
      <QuantityModal 
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}; 