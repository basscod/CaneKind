import React from "react";
import Link from "next/link";
import { Logo } from "../ui/logo";

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link 
      href={href}
      className="hover:text-sugarcane-yellow transition-colors"
    >
      {children}
    </Link>
  );
};

const SocialIcon = ({ 
  href, 
  icon 
}: { 
  href: string; 
  icon: React.ReactNode 
}) => {
  return (
    <a 
      href={href}
      className="bg-sugarcane-yellow w-10 h-10 rounded-full flex items-center justify-center text-text-primary hover:bg-secondary-yellow transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-white/10 backdrop-blur-md border-t border-white/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Logo size="md" className="mb-4" />
            <p className="text-sm text-text-secondary mb-4">
              Premium sugarcane juice made from the finest ingredients, bringing natural sweetness to your day.
            </p>
            <div className="flex space-x-3">
              <SocialIcon 
                href="https://facebook.com"
                icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                }
              />
              <SocialIcon 
                href="https://twitter.com"
                icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 5.8a8.49 8.49 0 0 1-2.36.64 4.13 4.13 0 0 0 1.81-2.27 8.21 8.21 0 0 1-2.61 1 4.1 4.1 0 0 0-7 3.74 11.64 11.64 0 0 1-8.45-4.29 4.16 4.16 0 0 0-.55 2.07 4.09 4.09 0 0 0 1.82 3.41 4.05 4.05 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.3 4 4.1 4.1 0 0 1-1.85.07 4.1 4.1 0 0 0 3.83 2.84A8.22 8.22 0 0 1 2 18.33a11.57 11.57 0 0 0 6.29 1.85A11.59 11.59 0 0 0 20 8.45V8a8.43 8.43 0 0 0 2-2.15Z" />
                  </svg>
                }
              />
              <SocialIcon 
                href="https://instagram.com"
                icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.247 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z" />
                  </svg>
                }
              />
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><FooterLink href="/">Home</FooterLink></li>
              <li><FooterLink href="/products">Products</FooterLink></li>
              <li><FooterLink href="/benefits">Benefits</FooterLink></li>
              <li><FooterLink href="/about">About Us</FooterLink></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><FooterLink href="/faq">FAQ</FooterLink></li>
              <li><FooterLink href="/shipping">Shipping & Returns</FooterLink></li>
              <li><FooterLink href="/privacy">Privacy Policy</FooterLink></li>
              <li><FooterLink href="/terms">Terms & Conditions</FooterLink></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <p className="text-sm text-text-secondary mb-2">
              123 Juice Street, London, UK
            </p>
            <p className="text-sm text-text-secondary mb-2">
              hello@canekind.co.uk
            </p>
            <p className="text-sm text-text-secondary">
              +44 20 1234 5678
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-text-secondary">
          <p>© {new Date().getFullYear()} CaneKind. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}; 