import React from "react";
import { PageLayout } from "@/components/layout/page-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CustomizePage() {
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
            <h1 className="mb-4">Craft Your <span className="text-sugarcane-yellow">Perfect</span> Juice</h1>
            <p className="text-lg mb-0 max-w-2xl mx-auto">
              Personalize your sugarcane juice experience with our custom blends and flavors. Create a drink that's uniquely yours.
            </p>
          </div>
        </div>
      </section>
      
      {/* Customization Form */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="glass-card max-w-4xl mx-auto p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-8 text-center">Design Your Perfect Blend</h2>
            
            {/* Base Selection */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-4">1. Choose Your Base</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-6 cursor-pointer hover:shadow-lg transition-all border-2 border-transparent hover:border-sugarcane-yellow">
                  <h4 className="font-medium mb-2">Classic Sugarcane</h4>
                  <p className="text-sm text-gray-600 mb-4">Pure, unaltered sugarcane juice with all its natural goodness.</p>
                  <div className="h-2 w-full bg-sugarcane-yellow/30 rounded-full"></div>
                </Card>
                <Card className="p-6 cursor-pointer hover:shadow-lg transition-all border-2 border-transparent hover:border-sugarcane-yellow">
                  <h4 className="font-medium mb-2">Light Blend</h4>
                  <p className="text-sm text-gray-600 mb-4">A diluted, milder version for those who prefer a subtle sweetness.</p>
                  <div className="h-2 w-full bg-sugarcane-yellow/20 rounded-full"></div>
                </Card>
                <Card className="p-6 cursor-pointer hover:shadow-lg transition-all border-2 border-transparent hover:border-sugarcane-yellow">
                  <h4 className="font-medium mb-2">Premium Reserve</h4>
                  <p className="text-sm text-gray-600 mb-4">Our richest blend made from specially selected sugarcane varieties.</p>
                  <div className="h-2 w-full bg-sugarcane-yellow/50 rounded-full"></div>
                </Card>
              </div>
            </div>
            
            {/* Flavor Add-ons */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-4">2. Add Natural Flavors</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card className="p-6 cursor-pointer hover:shadow-lg transition-all border-2 border-transparent hover:border-sugarcane-yellow">
                  <h4 className="font-medium mb-2">Ginger</h4>
                  <p className="text-sm text-gray-600 mb-4">A spicy kick that enhances digestive benefits.</p>
                </Card>
                <Card className="p-6 cursor-pointer hover:shadow-lg transition-all border-2 border-transparent hover:border-sugarcane-yellow">
                  <h4 className="font-medium mb-2">Lemon</h4>
                  <p className="text-sm text-gray-600 mb-4">Adds a citrusy twist and vitamin C boost.</p>
                </Card>
                <Card className="p-6 cursor-pointer hover:shadow-lg transition-all border-2 border-transparent hover:border-sugarcane-yellow">
                  <h4 className="font-medium mb-2">Mint</h4>
                  <p className="text-sm text-gray-600 mb-4">Refreshing and cooling, perfect for hot days.</p>
                </Card>
                <Card className="p-6 cursor-pointer hover:shadow-lg transition-all border-2 border-transparent hover:border-sugarcane-yellow">
                  <h4 className="font-medium mb-2">Cardamom</h4>
                  <p className="text-sm text-gray-600 mb-4">A traditional spice that adds aromatic depth.</p>
                </Card>
              </div>
            </div>
            
            {/* Nutritional Boosters */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-4">3. Select Nutritional Boosters</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-6 cursor-pointer hover:shadow-lg transition-all border-2 border-transparent hover:border-sugarcane-yellow">
                  <h4 className="font-medium mb-2">Chia Seeds</h4>
                  <p className="text-sm text-gray-600 mb-4">Rich in omega-3 fatty acids and fiber.</p>
                </Card>
                <Card className="p-6 cursor-pointer hover:shadow-lg transition-all border-2 border-transparent hover:border-sugarcane-yellow">
                  <h4 className="font-medium mb-2">Spirulina</h4>
                  <p className="text-sm text-gray-600 mb-4">Protein-rich superfood with impressive nutrient profile.</p>
                </Card>
                <Card className="p-6 cursor-pointer hover:shadow-lg transition-all border-2 border-transparent hover:border-sugarcane-yellow">
                  <h4 className="font-medium mb-2">Turmeric</h4>
                  <p className="text-sm text-gray-600 mb-4">Anti-inflammatory properties and distinctive color.</p>
                </Card>
              </div>
            </div>
            
            {/* Package Options */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-4">4. Choose Packaging</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-6 cursor-pointer hover:shadow-lg transition-all border-2 border-transparent hover:border-sugarcane-yellow">
                  <h4 className="font-medium mb-2">Glass Bottle</h4>
                  <p className="text-sm text-gray-600 mb-4">Eco-friendly option that preserves flavor. Available in 250ml and 500ml.</p>
                </Card>
                <Card className="p-6 cursor-pointer hover:shadow-lg transition-all border-2 border-transparent hover:border-sugarcane-yellow">
                  <h4 className="font-medium mb-2">Recyclable Carton</h4>
                  <p className="text-sm text-gray-600 mb-4">Convenient packaging for on-the-go. Available in 330ml.</p>
                </Card>
              </div>
            </div>
            
            {/* Order Preview & Button */}
            <div className="mt-12 text-center">
              <p className="mb-4 text-lg">Your custom blend is ready to be created!</p>
              <Button variant="secondary" size="lg">Add To Cart</Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 