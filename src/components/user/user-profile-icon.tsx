"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/context/auth-context";
import Link from "next/link";

export const UserProfileIcon = () => {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const isLoggedIn = !!user;
  
  const handleProfileClick = () => {
    if (isLoggedIn) {
      setDropdownOpen(!dropdownOpen);
    } else {
      router.push("/auth");
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center text-text-primary hover:text-sugarcane-yellow transition-colors duration-300"
        onClick={handleProfileClick}
        aria-label={isLoggedIn ? "View profile" : "Sign in"}
        aria-expanded={dropdownOpen}
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
        
        {isLoggedIn && (
          <span className="ml-2 hidden md:inline-block truncate max-w-[100px]">
            {user.first_name}
          </span>
        )}
      </button>
      
      {dropdownOpen && isLoggedIn && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-10">
          <div className="px-4 py-2 border-b border-gray-100">
            <p className="text-sm font-medium text-gray-900">
              {user.first_name} {user.last_name || ''}
            </p>
            <p className="text-xs text-gray-500 truncate">{user.email}</p>
          </div>
          
          <Link 
            href="/profile"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => setDropdownOpen(false)}
          >
            Profile
          </Link>
          
          <Link 
            href="/orders" 
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => setDropdownOpen(false)}
          >
            Orders
          </Link>
          
          <button 
            onClick={() => {
              logout();
              setDropdownOpen(false);
            }}
            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}; 