"use client";

import React, { useState } from "react";
import { Button } from "./button";
import { Product } from "@/lib/data/products";
import { useCart } from "@/lib/context/cart-context";

interface QuantityModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export const QuantityModal = ({ product, isOpen, onClose }: QuantityModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="glass-card p-6 md:p-8 z-10 w-[90%] max-w-md mx-auto">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold">{product.title}</h3>
          <button 
            onClick={onClose}
            className="text-text-secondary hover:text-sugarcane-yellow"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="mb-4">
          <span className="bg-sugarcane-yellow px-3 py-1 rounded-full text-text-primary font-bold inline-block">
            {product.price}
          </span>
        </div>
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Quantity</h4>
          <div className="flex items-center glass-card inline-flex p-1 rounded-full">
            <button 
              className="w-8 h-8 flex items-center justify-center hover:text-sugarcane-yellow" 
              onClick={handleDecrement}
            >
              -
            </button>
            <span className="w-12 text-center">{quantity}</span>
            <button 
              className="w-8 h-8 flex items-center justify-center hover:text-sugarcane-yellow" 
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
        </div>
        
        <div className="flex flex-col space-y-2">
          <Button variant="secondary" onClick={handleAddToCart}>
            Add to Cart
          </Button>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}; 