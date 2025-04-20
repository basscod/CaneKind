"use client";

import React from "react";
import { useRouter } from "next/navigation";

export const UserProfileIcon = () => {
  const router = useRouter();
  
  // For this example, we'll assume the user is not logged in initially
  const isLoggedIn = false;
  
  const handleProfileClick = () => {
    if (isLoggedIn) {
      router.push("/profile");
    } else {
      router.push("/auth");
    }
  };

  return (
    <button
      className="flex items-center text-text-primary hover:text-sugarcane-yellow transition-colors duration-300"
      onClick={handleProfileClick}
      aria-label={isLoggedIn ? "View profile" : "Sign in"}
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
  );
}; 