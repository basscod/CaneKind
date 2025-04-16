import React from "react";
import { PageLayout } from "@/components/layout/page-layout";
import { Card } from "@/components/ui/card";
import { benefits } from "@/lib/data/benefits";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BenefitsPage() {
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
            <h1 className="mb-4">The <span className="text-sugarcane-yellow">Benefits</span> of Sugarcane Juice</h1>
            <p className="text-lg mb-0 max-w-2xl mx-auto">
              Discover why sugarcane juice is not just delicious but also incredibly good for your health and wellbeing.
            </p>
          </div>
        </div>
      </section>
      
      {/* Benefits List */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {benefits.map((benefit, index) => (
              <Card key={benefit.id} className={`p-8 md:p-10 ${index % 2 === 0 ? 'md:mt-10' : ''}`}>
                <div className="flex items-start">
                  <div className="mr-6 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-sugarcane-yellow/20 flex items-center justify-center">
                      <svg 
                        className="w-8 h-8 text-sugarcane-yellow" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-3">{benefit.title}</h2>
                    <p className="text-text-secondary mb-6">{benefit.description}</p>
                    <div className="space-y-2">
                      {benefitsDetails[index] && benefitsDetails[index].map((detail, idx) => (
                        <div key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-sugarcane-yellow mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Nutritional Information */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="mb-4">Nutritional <span className="text-sugarcane-yellow">Information</span></h2>
            <p className="max-w-2xl mx-auto">
              Sugarcane juice is packed with essential nutrients that support your health. Here's what you'll find in a serving of our pure sugarcane juice:
            </p>
          </div>
          
          <div className="glass-card max-w-4xl mx-auto p-6 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-sugarcane-yellow/20 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-sugarcane-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-1">Energy</h3>
                <p className="text-text-secondary">70 calories</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-sugarcane-yellow/20 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-sugarcane-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-1">Protein</h3>
                <p className="text-text-secondary">0.2g</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-sugarcane-yellow/20 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-sugarcane-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-1">Iron</h3>
                <p className="text-text-secondary">0.7mg</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-sugarcane-yellow/20 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-sugarcane-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-1">Calcium</h3>
                <p className="text-text-secondary">12mg</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-sugarcane-yellow/20 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-sugarcane-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-1">Potassium</h3>
                <p className="text-text-secondary">180mg</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-sugarcane-yellow/20 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-sugarcane-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-1">Magnesium</h3>
                <p className="text-text-secondary">9mg</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-sugarcane-yellow/20 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-sugarcane-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-1">Vitamin C</h3>
                <p className="text-text-secondary">6mg</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-sugarcane-yellow/20 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-sugarcane-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-1">Antioxidants</h3>
                <p className="text-text-secondary">High</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Health Studies CTA */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sugarcane-yellow/10 blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-card p-12 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="mb-4">Health <span className="text-sugarcane-yellow">Studies</span></h2>
              <p className="max-w-2xl mx-auto">
                Recent research has highlighted the incredible health benefits of sugarcane juice. Our commitment to health and wellness is backed by science.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/research">Read Research</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/products">Explore Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

// Example detailed benefits for each main benefit
const benefitsDetails = [
  [
    "No preservatives or artificial additives",
    "100% natural extraction process",
    "Fresh from farm to bottle"
  ],
  [
    "Rich in vitamins A, B-complex, C, and E",
    "Contains iron, magnesium, calcium, and potassium",
    "Natural source of antioxidants"
  ],
  [
    "We partner with local farmers who practice sustainable farming",
    "Eco-friendly harvesting techniques",
    "Supporting local communities"
  ],
  [
    "Bottles made from plant-based materials",
    "All packaging is recyclable or biodegradable",
    "Minimal environmental footprint"
  ]
]; 