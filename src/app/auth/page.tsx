"use client";

import React, { useState, useEffect } from "react";
import { PageLayout } from "@/components/layout/page-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useAuth } from "@/lib/context/auth-context";
import { useRouter } from "next/navigation";

// Remove external API base URL and use relative path for proxy
// const API_BASE_URL = "https://cane-crew-server-devops65.replit.app";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  const { login, user } = useAuth();
  const router = useRouter();

  // Redirect if user is already logged in
  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);

  // Check local storage for auth mode on mount
  useEffect(() => {
    const authMode = localStorage.getItem('authMode');
    if (authMode === 'signup') {
      setIsLogin(false);
      // Clear the storage value after using it
      localStorage.removeItem('authMode');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Reset status messages
    setError("");
    setSuccess("");
    setIsLoading(true);
    
    try {
      if (isLogin) {
        // Login using auth context
        const loginSuccess = await login(email, password);
        
        if (loginSuccess) {
          setSuccess("Login successful! Redirecting...");
          // Router will handle redirection based on useEffect above
        } else {
          setError("Invalid email or password");
        }
      } else {
        // Sign up functionality - using the local API proxy
        const response = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            email,
            password,
          }),
        });

        let data;
        try {
          // Try to parse the response as JSON
          data = await response.json();
        } catch (e) {
          // If it fails, get the response as text
          data = await response.text();
        }
        
        console.log('Response status:', response.status);
        console.log('Response data:', data);
        
        if (response.ok) {
          setSuccess(`Account created successfully for ${email}`);
          // Clear form fields after successful signup
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
          // Switch to login view after successful signup
          setTimeout(() => {
            setIsLogin(true);
          }, 2000);
        } else {
          // Handle different error types
          switch (response.status) {
            case 400:
              setError("Missing fields or invalid information");
              break;
            case 409:
              setError("An account with this email already exists");
              break;
            case 500:
              setError("Server error. Please try again later");
              break;
            default:
              setError(`Error: ${typeof data === 'string' ? data : JSON.stringify(data)}`);
          }
        }
      }
    } catch (err) {
      console.error("Auth error:", err);
      
      // Provide more detailed error information
      if (err instanceof TypeError && err.message.includes('fetch')) {
        setError("Network error: Cannot connect to the server. Please try again later.");
      } else {
        setError("Network error. Please check your connection and try again.");
      }
    } finally {
      setIsLoading(false);
    }
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
        
        {/* Auth Form */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-card max-w-md mx-auto p-8 md:p-10">
            <h2 className="text-center mb-6">{isLogin ? "Welcome Back" : "Join CaneKind"}</h2>
            
            {/* Success message */}
            {success && (
              <div className="mb-4 p-2 bg-green-100 border border-green-400 text-green-700 rounded">
                {success}
              </div>
            )}

            {/* Error message */}
            {error && (
              <div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-text-primary mb-2">First Name</label>
                    <Input 
                      id="firstName"
                      type="text" 
                      value={firstName} 
                      onChange={(e) => setFirstName(e.target.value)} 
                      placeholder="First name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-text-primary mb-2">Last Name</label>
                    <Input 
                      id="lastName"
                      type="text" 
                      value={lastName} 
                      onChange={(e) => setLastName(e.target.value)} 
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>
              )}
              
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
              
              <div>
                <label htmlFor="password" className="block text-text-primary mb-2">Password</label>
                <Input 
                  id="password"
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password" 
                  required
                />
              </div>
              
              {isLogin && (
                <div className="text-right">
                  <Link href="/auth/reset-password" className="text-sugarcane-yellow hover:underline text-sm">
                    Forgot password?
                  </Link>
                </div>
              )}
              
              <Button 
                type="submit" 
                variant="secondary" 
                className="w-full"
                disabled={isLoading}
              >
                {isLoading 
                  ? 'Processing...' 
                  : isLogin 
                    ? "Sign In" 
                    : "Create Account"
                }
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-text-secondary">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button 
                  type="button"
                  onClick={() => setIsLogin(!isLogin)} 
                  className="text-sugarcane-yellow hover:underline ml-2"
                  disabled={isLoading}
                >
                  {isLogin ? "Sign Up" : "Sign In"}
                </button>
              </p>
            </div>
            
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/30"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white/10 backdrop-blur-md text-text-secondary">
                    Or continue with
                  </span>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                <Button variant="outline" className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                  </svg>
                  Facebook
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 