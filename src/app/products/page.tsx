"use client";

import React, { useState } from "react";
import { PageLayout } from "@/components/layout/page-layout";
import { ProductsGrid } from "@/components/sections/products-grid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Products");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <PageLayout>
      {/* Hero Banner */}
      <section className="relative overflow-hidden py-32">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/products_banner.jpg" 
            alt="Products Background" 
            className="w-full h-full object-cover opacity-75"
          />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-6 relative z-20">
          <div className="glass-card max-w-4xl mx-auto p-10 md:p-12 text-center">
            <h1 className="mb-4">Our <span className="text-white">Premium</span> Collection</h1>
            <p className="text-lg mb-0 max-w-2xl mx-auto">
              Discover our range of carefully crafted sugarcane juices. Each bottle contains 100% natural goodness without any preservatives or artificial additives.
            </p>
          </div>
        </div>
      </section>
      
      {/* Product Filter and Search */}
      <section className="py-8 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant={selectedCategory === "All Products" ? "primary" : "outline"}
                className="min-w-[120px]"
                onClick={() => handleCategoryChange("All Products")}
              >
                All Products
              </Button>
              <Button 
                variant={selectedCategory === "Classic" ? "primary" : "outline"}
                className="min-w-[120px]"
                onClick={() => handleCategoryChange("Classic")}
              >
                Classic
              </Button>
              <Button 
                variant={selectedCategory === "Blends" ? "primary" : "outline"}
                className="min-w-[120px]"
                onClick={() => handleCategoryChange("Blends")}
              >
                Blends
              </Button>
              <Button 
                variant={selectedCategory === "Special Edition" ? "primary" : "outline"}
                className="min-w-[120px]"
                onClick={() => handleCategoryChange("Special Edition")}
              >
                Special Edition
              </Button>
            </div>
            
            {/* Search Bar */}
            <div className="w-full md:w-auto min-w-[280px]">
              <div className="relative flex items-center">
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                  className="pr-12"
                />
                <Button 
                  variant="secondary" 
                  size="sm"
                  className="absolute right-1 w-12 h-12 flex items-center justify-center rounded-full p-0"
                >
                  <svg className="w-7 h-7 text-sugarcane-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Grid */}
      <ProductsGrid 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchTerm={searchTerm}
      />
      
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
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/subscription">Join Now</Link>
                </Button>
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