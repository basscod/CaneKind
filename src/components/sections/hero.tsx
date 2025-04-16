import React from "react";
import { Button } from "../ui/button";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/sugarcane-field.png" 
          alt="Sugarcane Field" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-card max-w-2xl p-10 md:p-12">
          <h1 className="mb-4">
            Discover the <span className="text-sugarcane-yellow">Natural Sweetness</span> of Premium Sugarcane Juice
          </h1>
          <p className="text-lg mb-8">
            Refreshing, organic, and packed with nutrients. Experience the authentic taste of carefully crafted sugarcane juice, sourced from the finest farms and delivered to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="secondary" size="lg">Shop Now</Button>
            <Button variant="outline" size="lg">Craft Your Own</Button>
          </div>
        </div>
      </div>
    </section>
  );
}; 