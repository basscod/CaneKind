"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FrostyGlassDropdown } from "../ui/frosty-glass-dropdown";

export const UserProfileIcon = () => {
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

  // For this example, we'll assume the user is not logged in initially
  const isLoggedIn = false;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center text-text-primary hover:text-sugarcane-yellow transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="User profile"
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
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </button>

      <FrostyGlassDropdown isOpen={isOpen} width="w-48">
        {isLoggedIn ? (
          <>
            <h3 className="text-xs font-bold mb-3">Your Account</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/profile" 
                  className="block py-1 hover:text-sugarcane-yellow transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link 
                  href="/orders" 
                  className="block py-1 hover:text-sugarcane-yellow transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Orders
                </Link>
              </li>
              <li>
                <Link 
                  href="/favorites" 
                  className="block py-1 hover:text-sugarcane-yellow transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Favorites
                </Link>
              </li>
              <li>
                <button
                  className="block w-full text-left py-1 hover:text-sugarcane-yellow transition-colors"
                  onClick={() => {
                    // Handle logout logic here
                    setIsOpen(false);
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </>
        ) : (
          <>
            <h3 className="text-xs font-bold mb-3">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/login" 
                  className="block py-1 hover:text-sugarcane-yellow transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link 
                  href="/register" 
                  className="block py-1 hover:text-sugarcane-yellow transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
              </li>
            </ul>
          </>
        )}
      </FrostyGlassDropdown>
    </div>
  );
}; 