"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "../ui/logo";
import { CartDropdown } from "../cart/cart-dropdown";
import { UserProfileIcon } from "../user/user-profile-icon";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Benefits", href: "/benefits" },
  { name: "Craft Your Own", href: "/customize" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card bg-white/10 backdrop-blur-md border-white/20 border-b px-6 py-3">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-text-primary hover:text-sugarcane-yellow transition-colors duration-300 ${
                  pathname === link.href ? "active font-medium" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* User and Cart */}
          <div className="flex items-center space-x-4">
            <Link
              href="/auth"
              className="hidden sm:block text-text-primary hover:text-sugarcane-yellow transition-colors duration-300 px-4 py-1.5 border border-sugarcane-yellow/50 rounded-full text-sm"
            >
              Sign In
            </Link>
            <CartDropdown />
            <UserProfileIcon />
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-2">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link py-2 text-text-primary hover:text-sugarcane-yellow transition-colors duration-300 ${
                    pathname === link.href ? "active font-medium" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}; 