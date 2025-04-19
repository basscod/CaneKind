"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/lib/context/cart-context";
import { Button } from "../ui/button";
import { FrostyGlassDropdown } from "../ui/frosty-glass-dropdown";

export const CartDropdown = () => {
  const { items, removeFromCart, updateQuantity, getTotalItems, getTotalPrice } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice().toFixed(2);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center text-text-primary hover:text-sugarcane-yellow transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Shopping cart"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-sugarcane-yellow text-text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
            {totalItems}
          </span>
        )}
      </button>

      <FrostyGlassDropdown isOpen={isOpen} width="w-72">
        <h3 className="text-xs font-bold mb-3">Your Cart</h3>
          
        {items.length === 0 ? (
          <p className="text-text-secondary py-3">Your cart is empty</p>
        ) : (
          <>
            <div className="max-h-64 overflow-y-auto">
              {items.map((item) => (
                <div key={item.product.id} className="flex items-start py-2 border-b border-white/10">
                  <img
                    src={item.product.imageSrc}
                    alt={item.product.title}
                    className="w-12 h-12 object-cover rounded mr-3"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">{item.product.title}</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-text-secondary">{item.product.price} x {item.quantity}</span>
                      <div className="flex items-center">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="text-xs px-1 hover:text-sugarcane-yellow"
                        >
                          -
                        </button>
                        <span className="text-xs px-1">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="text-xs px-1 hover:text-sugarcane-yellow"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="ml-2 text-xs hover:text-sugarcane-yellow"
                        >
                          <svg 
                            className="w-4 h-4" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="py-3 border-t border-white/10">
              <div className="flex justify-between">
                <span className="font-semibold">Total:</span>
                <span className="font-bold">${totalPrice}</span>
              </div>
            </div>
            
            <div className="mt-3 flex flex-col space-y-2">
              <Button variant="secondary" asChild>
                <Link href="/cart" onClick={() => setIsOpen(false)}>
                  View Cart
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/checkout" onClick={() => setIsOpen(false)}>
                  Checkout
                </Link>
              </Button>
            </div>
          </>
        )}
      </FrostyGlassDropdown>
    </div>
  );
}; 