import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero_bg.jpg" 
          alt="A refreshing glass of sugarcane juice with ice cubes and a striped straw, surrounded by sugarcane stalks, a halved lemon, tropical leaves, and abstract floating bubbles on a warm yellow background." 
          className="w-full h-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-white/20"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-card max-w-2xl p-10 md:p-12">
          <h1 className="mb-4">
            Discover the <span className="text-white">Natural Sweetness</span> of Premium Sugarcane Juice
          </h1>
          <p className="text-lg mb-8">
            Refreshing, organic, and packed with nutrients. Experience the authentic taste of carefully crafted sugarcane juice, sourced from the finest farms and delivered to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/products">Shop Now</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/customize">Craft Your Own</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}; 