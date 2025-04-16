import React from "react";
import { Button } from "../ui/button";

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
            <Button variant="secondary" size="lg">Shop Now</Button>
            <Button variant="outline" size="lg">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}; 