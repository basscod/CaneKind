"use client";

import React, { useState, useEffect } from "react";
import { PageLayout } from "@/components/layout/page-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useCart } from "@/lib/context/cart-context";

// Define the customization options
const baseOptions = [
  { id: "classic", name: "Classic Sugarcane", description: "Pure, unaltered sugarcane juice with all its natural goodness.", color: "bg-sugarcane-yellow/30" },
  { id: "light", name: "Light Blend", description: "A diluted, milder version for those who prefer a subtle sweetness.", color: "bg-sugarcane-yellow/20" },
  { id: "premium", name: "Premium Reserve", description: "Our richest blend made from specially selected sugarcane varieties.", color: "bg-sugarcane-yellow/50" }
];

const flavorOptions = [
  { 
    id: "ginger", 
    name: "Ginger", 
    description: "A spicy kick that enhances digestive benefits.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6.5C12 6.5 16 10 16 13C16 16 13 16.5 12 16.5C11 16.5 8 16 8 13C8 10 12 6.5 12 6.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 3.5V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.5 4L10.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.5 4L13.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 16.5V19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { 
    id: "lemon", 
    name: "Lemon", 
    description: "Adds a citrusy twist and vitamin C boost.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5 8C17.5 8 19 9.5 19 12C19 14.5 17.5 16 14.5 16C11.5 16 8 12 8 8.5C8 5 10 4.5 12 4.5C14 4.5 17.5 8 17.5 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.5 10.5L13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.5 10.5L10.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { 
    id: "mint", 
    name: "Mint", 
    description: "Refreshing and cooling, perfect for hot days.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4C12 4 13 8 13 10.5C13 13 11.5 13.5 9.5 13.5C7.5 13.5 6 12 6 9.5C6 7 8 4 12 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 4C12 4 11 8 11 10.5C11 13 12.5 13.5 14.5 13.5C16.5 13.5 18 12 18 9.5C18 7 16 4 12 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 13.5V19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { 
    id: "cardamom", 
    name: "Cardamom", 
    description: "A traditional spice that adds aromatic depth.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5.5C12 5.5 14 7.5 14 9C14 10.5 13 11 11.5 11C10 11 9 10.5 9 9C9 7.5 12 5.5 12 5.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 11V16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 16.5L10 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 16.5L14 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

const boosterOptions = [
  { 
    id: "chia", 
    name: "Chia Seeds", 
    description: "Rich in omega-3 fatty acids and fiber.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 10C15 10 12.5 12.5 12.5 14.5C12.5 16.5 14 16.5 15 16.5C16 16.5 17.5 16.5 17.5 14.5C17.5 12.5 15 10 15 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 7.5C9 7.5 6.5 10 6.5 12C6.5 14 8 14 9 14C10 14 11.5 14 11.5 12C11.5 10 9 7.5 9 7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { 
    id: "spirulina", 
    name: "Spirulina", 
    description: "Protein-rich superfood with impressive nutrient profile.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 7C18 7 16 13 12 13C8 13 6 7 6 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 17C18 17 16 11 12 11C8 11 6 17 6 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { 
    id: "turmeric", 
    name: "Turmeric", 
    description: "Anti-inflammatory properties and distinctive color.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 10L17 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 14L17 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

const packagingOptions = [
  { 
    id: "glass", 
    name: "Glass Bottle", 
    description: "Eco-friendly option that preserves flavor.", 
    sizes: ["250ml", "500ml"],
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 7C9 5.89543 9.89543 5 11 5H13C14.1046 5 15 5.89543 15 7V8L16 10V19C16 20.1046 15.1046 21 14 21H10C8.89543 21 8 20.1046 8 19V10L9 8V7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 3V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { 
    id: "carton", 
    name: "Recyclable Carton", 
    description: "Convenient packaging for on-the-go.", 
    sizes: ["330ml"],
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="4" width="14" height="16" rx="1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 4V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 4V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

export default function CustomizePage() {
  // State for user selections
  const [selectedBase, setSelectedBase] = useState("");
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);
  const [selectedBoosters, setSelectedBoosters] = useState<string[]>([]);
  const [selectedPackaging, setSelectedPackaging] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Access cart context for adding to cart
  const { addToCart } = useCart();
  
  // Visual representation of the drink
  const [drinkColor, setDrinkColor] = useState("bg-sugarcane-yellow/30");

  // Clear localStorage cache completely on mount
  useEffect(() => {
    // Try to directly clear any problematic cart items
    try {
      console.log("Looking for problematic cart items...");
      // Get cart from localStorage
      const cartJSON = localStorage.getItem("cart");
      if (cartJSON) {
        const cart = JSON.parse(cartJSON);
        // Directly fix any problematic paths 
        const fixedCart = cart.map((item: any) => {
          if (item.product && item.product.title && item.product.title.includes("Custom")) {
            console.log("Found custom item, fixing path:", item.product.title);
            // Fix path directly in localStorage
            item.product.imageSrc = "/images/subscription-box.jpg";
          }
          return item;
        });
        // Save fixed cart
        localStorage.setItem("cart", JSON.stringify(fixedCart));
      }
    } catch (err) {
      console.error("Error fixing cart:", err);
    }
  }, []);

  // Update drink visualization based on selections
  useEffect(() => {
    updateDrinkColor();
  }, [selectedBase, selectedBoosters, selectedFlavors]);

  // Separate function to calculate the drink color
  const updateDrinkColor = () => {
    // Start with base color
    let newColor = "bg-sugarcane-yellow/30";
    
    // Set base color
    if (selectedBase) {
      const base = baseOptions.find(b => b.id === selectedBase);
      if (base) {
        newColor = base.color;
      }
    }
    
    // Create a priority system for color changes
    let hasTurmeric = selectedBoosters.includes("turmeric");
    let hasSpirulina = selectedBoosters.includes("spirulina");
    let hasMint = selectedFlavors.includes("mint");
    let hasLemon = selectedFlavors.includes("lemon");
    let hasGinger = selectedFlavors.includes("ginger");
    
    // Apply colors in order of visual prominence
    
    // Booster + Flavor combinations (highest priority)
    if (hasTurmeric && hasLemon) {
      newColor = "bg-yellow-500/60"; // bright yellow-orange
    } else if (hasSpirulina && hasMint) {
      newColor = "bg-emerald-600/50"; // deep green
    } else if (hasTurmeric && hasMint) {
      newColor = "bg-yellow-600/40"; // yellow-green
    } else if (hasSpirulina && hasLemon) {
      newColor = "bg-green-400/50"; // lighter green with yellow tint
    } else if (hasSpirulina && hasGinger) {
      newColor = "bg-teal-700/40"; // deep teal
    } else if (hasTurmeric && hasGinger) {
      newColor = "bg-orange-500/60"; // deep orange
    }
    // Single boosters (medium priority)
    else if (hasTurmeric) {
      newColor = "bg-yellow-600/60"; // yellow-orange
    } else if (hasSpirulina) {
      newColor = "bg-green-600/40"; // green
    }
    // Flavor combinations (medium priority)
    else if (hasMint && hasLemon) {
      newColor = "bg-green-300/40"; // light green
    } 
    // Single flavors (lowest priority)
    else if (hasMint) {
      newColor = "bg-emerald-400/40"; // emerald
    } else if (hasLemon) {
      newColor = "bg-yellow-300/50"; // light yellow
    } else if (hasGinger) {
      newColor = "bg-orange-300/40"; // light orange
    }
    
    setDrinkColor(newColor);
  };

  // Handle flavor selection
  const toggleFlavor = (id: string) => {
    setSelectedFlavors(prev => 
      prev.includes(id) 
        ? prev.filter(f => f !== id) 
        : [...prev, id]
    );
  };

  // Handle booster selection
  const toggleBooster = (id: string) => {
    setSelectedBoosters(prev => 
      prev.includes(id) 
        ? prev.filter(b => b !== id) 
        : [...prev, id]
    );
  };

  // Calculate price
  const calculatePrice = () => {
    let price = 0;
    // Base price
    if (selectedBase === "classic") price += 5.99;
    if (selectedBase === "light") price += 4.99;
    if (selectedBase === "premium") price += 7.99;
    
    // Add-ons
    price += selectedFlavors.length * 0.5;
    price += selectedBoosters.length * 1.0;
    
    // Size multiplier
    if (selectedSize === "500ml") price *= 1.8;
    if (selectedSize === "330ml") price *= 1.3;
    
    return (price * quantity).toFixed(2);
  };
  
  // Function to create a new custom product
  const createCustomProduct = () => {
    return {
      id: Math.floor(Date.now() / 1000), // Convert to a number (timestamp in seconds)
      title: name || "Custom Sugarcane Juice",
      description: `${baseOptions.find(b => b.id === selectedBase)?.name} with ${
        selectedFlavors.length > 0 
          ? selectedFlavors.map(id => flavorOptions.find(f => f.id === id)?.name).join(", ") 
          : "no flavors"
      } and ${
        selectedBoosters.length > 0 
          ? selectedBoosters.map(id => boosterOptions.find(b => b.id === id)?.name).join(", ") 
          : "no boosters"
      }. ${packagingOptions.find(p => p.id === selectedPackaging)?.name} (${selectedSize})`,
      price: `$${calculatePrice()}`,
      imageSrc: "/images/subscription-box.jpg",
      category: "Special Edition" as "Classic" | "Blends" | "Special Edition"
    };
  }
  
  // Handle add to cart
  const handleAddToCart = () => {
    // Validate that all required selections are made
    if (!selectedBase || !selectedPackaging || !selectedSize) {
      return;
    }
    
    // Set loading state
    setIsAddingToCart(true);
    
    // Create the custom product with reliable path
    const customProduct = createCustomProduct();
    
    // Short delay to show the loading state
    setTimeout(() => {
      // Log the product for debugging
      console.log("Adding custom product to cart:", customProduct);
      
      // Add to cart using the cart context
      addToCart(customProduct, quantity);
      
      // Reset loading state
      setIsAddingToCart(false);
      
      // Show success message
      setShowSuccess(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);
    }, 800);
  };

  // SVG Icons for step numbering
  const StepNumber = ({ number }: { number: number }) => (
    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-sugarcane-yellow/10 text-sugarcane-yellow border border-sugarcane-yellow/30">
      <span className="text-xs leading-none flex items-center justify-center w-full h-full">{number}</span>
    </div>
  );

  return (
    <PageLayout>
      {/* Background animation */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute w-full h-full bg-gradient-to-b from-white to-gray-50">
          {/* Animated sugar particles */}
          <div className="sugar-particles absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <div 
                key={`particle-${i}`} 
                className="absolute rounded-full bg-sugarcane-yellow/30"
                style={{
                  width: `${2 + Math.random() * 5}px`,
                  height: `${2 + Math.random() * 5}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: 0.1 + Math.random() * 0.3,
                  animationDuration: `${30 + Math.random() * 40}s`,
                  animationDelay: `${Math.random() * 10}s`
                }}
              />
            ))}
          </div>
          
          {/* Subtle glow effects */}
          <div className="absolute top-[10%] right-[10%] w-[40vw] h-[40vh] rounded-full bg-sugarcane-yellow/10 blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-[20%] left-[20%] w-[30vw] h-[30vh] rounded-full bg-sugarcane-yellow/10 blur-[100px] animate-pulse" style={{ animationDuration: '15s', animationDelay: '5s' }}></div>
        </div>
      </div>

      {/* Hero Banner with Subtle Animation */}
      <section className="relative overflow-hidden py-32">
        {/* Animated background design */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-sugarcane-yellow/10 blur-3xl opacity-70 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-sugarcane-yellow/10 blur-3xl opacity-70 animate-pulse" style={{ animationDelay: "1.5s" }}></div>
          <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-sugarcane-yellow/5 blur-2xl opacity-50 animate-pulse" style={{ animationDelay: "0.7s" }}></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-card max-w-4xl mx-auto p-10 md:p-12 text-center shadow-xl transition-all duration-500 hover:shadow-2xl">
            <h1 className="mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sugarcane-yellow via-yellow-100 to-sugarcane-yellow">
              Craft Your <span className="font-bold">Perfect</span> Juice
            </h1>
            <p className="text-lg mb-0 max-w-2xl mx-auto">
              Personalize your sugarcane juice experience with our custom blends and flavors. Create a drink that's uniquely yours.
            </p>
          </div>
        </div>
      </section>
      
      {/* Customization Form */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Customization Options */}
            <div className="lg:col-span-3">
              <div className="glass-card p-8 md:p-12 shadow-lg">
                <h2 className="text-2xl font-bold mb-8 flex items-center border-b border-sugarcane-yellow/20 pb-4">
                  Design Your Perfect Blend
                </h2>
                
                {/* Base Selection */}
                <div className="mb-10 transform transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <StepNumber number={1} />
                    <span className="ml-2">Choose Your Base</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {baseOptions.map((base) => (
                      <Card 
                        key={base.id}
                        className={`p-6 cursor-pointer hover:shadow-lg hover:bg-sugarcane-yellow/5 transition-all ${
                          selectedBase === base.id 
                            ? "border-2 border-sugarcane-yellow shadow-lg transform scale-[1.02] bg-sugarcane-yellow/10" 
                            : "border-2 border-transparent hover:border-sugarcane-yellow/50"
                        }`}
                        onClick={() => setSelectedBase(base.id)}
                      >
                        <h4 className="font-medium mb-2">{base.name}</h4>
                        <p className="text-sm text-gray-600 mb-4">{base.description}</p>
                        <div className={`h-2 w-full ${base.color} rounded-full`}></div>
                      </Card>
                    ))}
                  </div>
                </div>
                
                {/* Flavor Add-ons */}
                <div className="mb-10 transform transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <StepNumber number={2} />
                    <span className="ml-2">Add Natural Flavors</span>
                    <span className="text-sm ml-2 text-gray-500">(Select up to 2)</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {flavorOptions.map((flavor) => (
                      <Card 
                        key={flavor.id}
                        className={`p-6 cursor-pointer hover:shadow-lg hover:bg-sugarcane-yellow/5 transition-all ${
                          selectedFlavors.includes(flavor.id) 
                            ? "border-2 border-sugarcane-yellow shadow-lg transform scale-[1.02] bg-sugarcane-yellow/10" 
                            : "border-2 border-transparent hover:border-sugarcane-yellow/50"
                        } ${selectedFlavors.length >= 2 && !selectedFlavors.includes(flavor.id) ? "opacity-50" : ""}`}
                        onClick={() => {
                          if (selectedFlavors.includes(flavor.id) || selectedFlavors.length < 2) {
                            toggleFlavor(flavor.id);
                          }
                        }}
                      >
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 mr-2 flex items-center justify-center text-sugarcane-yellow">
                            {flavor.icon}
                          </div>
                          <h4 className="font-medium">{flavor.name}</h4>
                        </div>
                        <p className="text-sm text-gray-600">{flavor.description}</p>
                      </Card>
                    ))}
                  </div>
                </div>
                
                {/* Nutritional Boosters */}
                <div className="mb-10 transform transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <StepNumber number={3} />
                    <span className="ml-2">Select Nutritional Boosters</span>
                    <span className="text-sm ml-2 text-gray-500">(Optional)</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {boosterOptions.map((booster) => (
                      <Card 
                        key={booster.id}
                        className={`p-6 cursor-pointer hover:shadow-lg hover:bg-sugarcane-yellow/5 transition-all ${
                          selectedBoosters.includes(booster.id) 
                            ? "border-2 border-sugarcane-yellow shadow-lg transform scale-[1.02] bg-sugarcane-yellow/10" 
                            : "border-2 border-transparent hover:border-sugarcane-yellow/50"
                        }`}
                        onClick={() => toggleBooster(booster.id)}
                      >
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 mr-2 flex items-center justify-center text-sugarcane-yellow">
                            {booster.icon}
                          </div>
                          <h4 className="font-medium">{booster.name}</h4>
                        </div>
                        <p className="text-sm text-gray-600">{booster.description}</p>
                      </Card>
                    ))}
                  </div>
                </div>
                
                {/* Packaging Options */}
                <div className="transform transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <StepNumber number={4} />
                    <span className="ml-2">Choose Packaging</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {packagingOptions.map((packaging) => (
                      <Card 
                        key={packaging.id}
                        className={`p-6 cursor-pointer hover:shadow-lg hover:bg-sugarcane-yellow/5 transition-all ${
                          selectedPackaging === packaging.id 
                            ? "border-2 border-sugarcane-yellow shadow-lg transform scale-[1.02] bg-sugarcane-yellow/10" 
                            : "border-2 border-transparent hover:border-sugarcane-yellow/50"
                        }`}
                        onClick={() => {
                          setSelectedPackaging(packaging.id);
                          setSelectedSize("");
                        }}
                      >
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 mr-2 flex items-center justify-center text-sugarcane-yellow">
                            {packaging.icon}
                          </div>
                          <h4 className="font-medium">{packaging.name}</h4>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">{packaging.description}</p>
                        {selectedPackaging === packaging.id && (
                          <div className="mt-4">
                            <p className="text-sm font-medium mb-2">Select Size:</p>
                            <div className="flex space-x-2">
                              {packaging.sizes.map(size => (
                                <button
                                  key={size}
                                  className={`px-3 py-1 rounded-full text-sm transition-all ${
                                    selectedSize === size
                                      ? "bg-sugarcane-yellow text-white"
                                      : "bg-gray-100 hover:bg-gray-200"
                                  }`}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedSize(size);
                                  }}
                                >
                                  {size}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </Card>
                    ))}
                  </div>

                  {/* Name your creation */}
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Give Your Creation a Name</h3>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Tropical Sunshine, Minty Refresher..."
                      className="w-full max-w-md"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Live Preview & Order Summary */}
            <div className="lg:col-span-2 sticky top-24 self-start">
              <div className="glass-card p-8 md:p-12 shadow-lg">
                <h2 className="text-2xl font-bold mb-6 border-b border-sugarcane-yellow/20 pb-4">Your Creation</h2>
                
                {/* Visual representation */}
                <div className="mb-8 relative">
                  <div className="w-full aspect-[1/1.5] rounded-xl overflow-hidden border border-white/20 shadow-lg bg-white/5 backdrop-blur-sm">
                    {/* The juice visualization */}
                    <div className="relative h-full">
                      {/* Background pattern - replacing with glass effect */}
                      <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-30"></div>
                        <div className="absolute top-0 right-0 w-[40%] h-full bg-white/5"></div>
                        <div className="absolute bottom-0 left-0 w-[30%] h-[50%] bg-black/5 rounded-full blur-md"></div>
                      </div>
                      
                      {/* The liquid */}
                      <div className={`absolute bottom-0 left-0 right-0 ${drinkColor} transition-all duration-700 ease-in-out liquid-wave`} 
                        style={{ height: '75%' }}>
                        {/* Wave overlay */}
                        <div className="absolute top-0 left-0 w-full transform -translate-y-1/2 opacity-30">
                          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-white"></path>
                            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-white"></path>
                            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-white"></path>
                          </svg>
                        </div>
                      </div>
                      
                      {/* Flavor & Booster Indicators (subtle visual elements) */}
                      {selectedFlavors.includes('mint') && (
                        <div className="absolute top-[30%] right-[25%] w-8 h-8 opacity-40">
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6,12c0-3.3,2.7-6,6-6s6,2.7,6,6s-2.7,6-6,6S6,15.3,6,12z" fill="white"/>
                          </svg>
                        </div>
                      )}
                      
                      {selectedFlavors.includes('lemon') && (
                        <div className="absolute top-[40%] left-[20%] w-10 h-10 opacity-30">
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="5" fill="white"/>
                          </svg>
                        </div>
                      )}
                      
                      {selectedBoosters.includes('spirulina') && (
                        <div className="absolute top-[55%] left-[30%] w-12 h-12 opacity-30">
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18,7C18,7,16,13,12,13C8,13,6,7,6,7" stroke="white" strokeWidth="1.5" fill="white" fillOpacity="0.2"/>
                          </svg>
                        </div>
                      )}
                      
                      {selectedBoosters.includes('turmeric') && (
                        <div className="absolute top-[35%] right-[35%] w-10 h-10 opacity-30">
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="8" fill="white" fillOpacity="0.2"/>
                            <path d="M12,4V20" stroke="white" strokeWidth="1.5"/>
                            <path d="M4,12H20" stroke="white" strokeWidth="1.5"/>
                          </svg>
                        </div>
                      )}
                      
                      {/* Chia Seeds visualization */}
                      {selectedBoosters.includes('chia') && (
                        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ height: '75%', bottom: 0, top: 'auto' }}>
                          {/* Fewer, larger chia seeds with gloss effect */}
                          {[...Array(8)].map((_, i) => (
                            <div 
                              key={`chia-${i}`} 
                              className="absolute rounded-full bg-black/40 chia-seed"
                              style={{
                                width: `${7 + Math.random() * 5}px`,
                                height: `${7 + Math.random() * 5}px`,
                                bottom: `${10 + Math.random() * 60}%`,
                                left: `${10 + Math.random() * 80}%`,
                                animationDelay: `${Math.random() * 4}s`,
                                animationDuration: `${4 + Math.random() * 3}s`
                              }}
                            >
                              {/* White gloss mark */}
                              <div className="absolute w-[30%] h-[30%] rounded-full bg-white/70 top-[15%] right-[15%]"></div>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {/* Glass reflections */}
                      <div className="absolute top-0 left-0 w-[10%] h-full bg-white/10"></div>
                      <div className="absolute top-0 right-[5%] w-[1px] h-full bg-white/20"></div>
                      <div className="absolute top-0 right-[15%] w-[1px] h-full bg-white/15"></div>
                      
                      {/* Container rim */}
                      <div className="absolute top-0 left-0 right-0 h-8 bg-white/5 backdrop-blur-md border-b border-white/10"></div>
                    </div>
                  </div>
                  
                  {/* Custom name display */}
                  {name && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-center min-w-[120px] border border-white/20">
                      <p className="text-sm font-medium">{name}</p>
                    </div>
                  )}
                </div>
                
                {/* Order summary */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                  <div className="space-y-3">
                    {selectedBase && (
                      <div className="flex justify-between">
                        <span>Base:</span>
                        <span className="font-medium">{baseOptions.find(b => b.id === selectedBase)?.name}</span>
                      </div>
                    )}
                    
                    {selectedFlavors.length > 0 && (
                      <div className="flex justify-between">
                        <span>Flavors:</span>
                        <span className="font-medium">
                          {selectedFlavors.map(id => flavorOptions.find(f => f.id === id)?.name).join(", ")}
                        </span>
                      </div>
                    )}
                    
                    {selectedBoosters.length > 0 && (
                      <div className="flex justify-between">
                        <span>Boosters:</span>
                        <span className="font-medium">
                          {selectedBoosters.map(id => boosterOptions.find(b => b.id === id)?.name).join(", ")}
                        </span>
                      </div>
                    )}
                    
                    {selectedPackaging && selectedSize && (
                      <div className="flex justify-between">
                        <span>Packaging:</span>
                        <span className="font-medium">
                          {packagingOptions.find(p => p.id === selectedPackaging)?.name} ({selectedSize})
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Quantity selector */}
                  <div className="mt-6">
                    <label className="block text-sm font-medium mb-2">Quantity:</label>
                    <div className="flex items-center">
                      <button 
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                        onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <span className="px-4 font-medium">{quantity}</span>
                      <button 
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                        onClick={() => setQuantity(prev => prev + 1)}
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  {/* Price calculation */}
                  {selectedBase && selectedPackaging && selectedSize && (
                    <div className="mt-6 border-t border-gray-200 pt-4">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total:</span>
                        <span>${calculatePrice()}</span>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Call to action */}
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className={`w-full relative overflow-hidden transition-all ${
                    isAddingToCart ? 'opacity-80' : showSuccess ? 'bg-green-600 hover:bg-green-700' : ''
                  }`}
                  disabled={!selectedBase || !selectedPackaging || !selectedSize || isAddingToCart}
                  onClick={handleAddToCart}
                >
                  {isAddingToCart ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Adding...
                    </span>
                  ) : showSuccess ? (
                    <span className="flex items-center">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12L10 17L20 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Added to Cart
                    </span>
                  ) : (
                    "Add To Cart"
                  )}
                  
                  {/* Success ripple effect */}
                  {showSuccess && (
                    <span className="absolute inset-0 rounded-full animate-ripple bg-white/20"></span>
                  )}
                </Button>
                
                {(!selectedBase || !selectedPackaging || !selectedSize) && (
                  <p className="text-sm text-yellow-600 mt-2 text-center">
                    Please complete your selection to continue
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section with Elegant Design */}
      <section className="py-16 bg-gradient-to-b from-transparent to-sugarcane-yellow/5">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-12 text-center">Crafted by Our Customers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah J.",
                blend: "Minty Morning",
                quote: "I love starting my day with my custom blend. The mint and ginger combination is so refreshing!"
              },
              {
                name: "Michael T.",
                blend: "Tropical Boost",
                quote: "Adding spirulina to my sugarcane juice gives me the perfect energy boost for my workouts. Game changer!"
              },
              {
                name: "Priya R.",
                blend: "Spiced Classic",
                quote: "The premium base with cardamom reminds me of home. It's become my weekend treat!"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all transform hover:-translate-y-1 border border-white/20">
                <div className="flex flex-col h-full">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-sugarcane-yellow" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="italic mb-4 flex-grow">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">Creator of "{testimonial.blend}"</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Add CSS for animations */}
      <style jsx global>{`
        @keyframes wave {
          0% { transform: translateY(0) scaleY(1); }
          50% { transform: translateY(-5px) scaleY(1.02); }
          100% { transform: translateY(0) scaleY(1); }
        }
        
        .liquid-wave {
          animation: wave 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-10px) translateX(3px); }
          50% { transform: translateY(-15px) translateX(-3px); }
          75% { transform: translateY(-8px) translateX(2px); }
          100% { transform: translateY(0) translateX(0); }
        }
        
        .chia-seed {
          animation: float 5s ease-in-out infinite;
          transition: transform 100ms linear;
        }
        
        @keyframes floatUp {
          0% { transform: translateY(100vh) rotate(0deg); }
          100% { transform: translateY(-100px) rotate(360deg); }
        }
        
        .sugar-particles > div {
          animation: floatUp linear infinite;
        }
        
        @keyframes ripple {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(4); opacity: 0; }
        }
        
        .animate-ripple {
          animation: ripple 1s ease-out;
        }
      `}</style>
    </PageLayout>
  );
} 