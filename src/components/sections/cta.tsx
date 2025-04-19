import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background blob */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sugarcane-yellow/10 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-card p-12 text-center max-w-3xl mx-auto">
          <h2 className="mb-4">Ready to <span className="text-sugarcane-yellow">Experience</span> Natural Sweetness?</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">
            Join thousands of happy customers who've made CaneKind a part of their healthy lifestyle. Order now and get free delivery on your first purchase.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/products">Shop Now</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/customize">Craft Your Own</Link>
            </Button>
          </div>
          <div className="mt-6">
            <Button variant="outline" className="text-sugarcane-yellow hover:text-sugarcane-yellow/80 underline-offset-4 border-none shadow-none" asChild>
              <Link href="/subscription">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  Subscribe and save 10%
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}; 