"use client";

import React, { useState } from "react";
import { PageLayout } from "@/components/layout/page-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log("Password reset requested for:", email);
    setIsSubmitted(true);
  };

  return (
    <PageLayout>
      <section className="relative min-h-screen flex items-center justify-center py-16">
        {/* Background Element */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/auth_bg.jpg" 
            alt="Sugarcane field with soft sunlight" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/40 backdrop-filter backdrop-blur-sm"></div>
        </div>
        
        {/* Reset Password Form */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-card max-w-md mx-auto p-8 md:p-10">
            {!isSubmitted ? (
              <>
                <h2 className="text-center mb-2">Reset Your Password</h2>
                <p className="text-center text-text-secondary mb-6">
                  Enter your email address and we'll send you a link to reset your password.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-text-primary mb-2">Email</label>
                    <Input 
                      id="email"
                      type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="secondary" 
                    className="w-full"
                  >
                    Reset Password
                  </Button>
                </form>
              </>
            ) : (
              <div className="text-center py-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sugarcane-yellow/20 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sugarcane-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mb-2">Check Your Email</h3>
                <p className="text-text-secondary mb-6">
                  We've sent a password reset link to <span className="font-semibold">{email}</span>. Please check your inbox and follow the instructions.
                </p>
              </div>
            )}
            
            <div className="mt-6 text-center">
              <Link 
                href="/auth" 
                className="text-sugarcane-yellow hover:underline"
              >
                Back to Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 