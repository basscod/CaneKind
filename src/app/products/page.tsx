import React from "react";
import { PageLayout } from "@/components/layout/page-layout";
import { ProductsGrid } from "@/components/sections/products-grid";
import { Button } from "@/components/ui/button";

export default function ProductsPage() {
  return (
    <PageLayout>
      {/* Hero Banner */}
      <section className="relative overflow-hidden py-32">
        {/* Background design */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-sugarcane-yellow/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-sugarcane-yellow/10 blur-3xl"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-card max-w-4xl mx-auto p-10 md:p-12 text-center">
            <h1 className="mb-4">Our <span className="text-sugarcane-yellow">Premium</span> Collection</h1>
            <p className="text-lg mb-0 max-w-2xl mx-auto">
              Discover our range of carefully crafted sugarcane juices. Each bottle contains 100% natural goodness without any preservatives or artificial additives.
            </p>
          </div>
        </div>
      </section>
      
      {/* Product Filter */}
      <section className="py-12 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" className="min-w-[120px]">All Products</Button>
            <Button variant="outline" className="min-w-[120px]">Classic</Button>
            <Button variant="outline" className="min-w-[120px]">Blends</Button>
            <Button variant="outline" className="min-w-[120px]">Special Edition</Button>
          </div>
        </div>
      </section>
      
      {/* Products Grid */}
      <ProductsGrid />
      
      {/* Subscription CTA */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sugarcane-yellow/10 blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-card p-12 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="mb-4">Subscribe & <span className="text-sugarcane-yellow">Save</span></h2>
                <p className="mb-6">
                  Never run out of your favorite juice! Subscribe to our monthly delivery service and enjoy:
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-sugarcane-yellow mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>10% discount on all products</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-sugarcane-yellow mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Free delivery on orders over £30</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-sugarcane-yellow mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Exclusive access to new flavors</span>
                  </li>
                </ul>
                <Button variant="secondary" size="lg">Join Now</Button>
              </div>
              <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                <img 
                  src="/images/subscription-box.jpg" 
                  alt="CaneKind Subscription Box" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 