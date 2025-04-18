"use client";

import React, { useState } from "react";
import { PageLayout } from "@/components/layout/page-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function SubscriptionPage() {
  const [plan, setPlan] = useState<"monthly" | "quarterly" | "biannual">("monthly");
  
  const plans = [
    {
      id: "monthly",
      title: "Monthly Plan",
      price: "£29.99/month",
      features: [
        "4 bottles per month",
        "10% discount on all products",
        "Free delivery",
        "Cancel anytime"
      ]
    },
    {
      id: "quarterly",
      title: "Quarterly Plan",
      price: "£25.99/month",
      features: [
        "4 bottles per month",
        "15% discount on all products",
        "Free delivery",
        "Premium flavors included",
        "Cancel anytime"
      ]
    },
    {
      id: "biannual",
      title: "Biannual Plan",
      price: "£23.99/month",
      features: [
        "4 bottles per month",
        "20% discount on all products",
        "Free delivery",
        "Premium flavors included",
        "Free gift with first delivery",
        "Cancel anytime"
      ]
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background design */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-sugarcane-yellow/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-sugarcane-yellow/10 blur-3xl"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-card max-w-4xl mx-auto p-10 md:p-12 text-center">
            <h1 className="mb-4">Subscription <span className="text-sugarcane-yellow">Plans</span></h1>
            <p className="text-lg mb-0 max-w-2xl mx-auto">
              Never run out of your favorite juice with our subscription service. Choose a plan that works for you and enjoy exclusive benefits.
            </p>
          </div>
        </div>
      </section>
      
      {/* Subscription Plans */}
      <section className="py-16 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sugarcane-yellow/10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((planOption) => (
              <Card 
                key={planOption.id} 
                className={`${plan === planOption.id ? 'border-2 border-sugarcane-yellow' : 'border border-white/20'} transition-all duration-300 hover:transform hover:scale-105`}
              >
                <div className="p-8">
                  <h2 className="text-xl font-bold mb-2">{planOption.title}</h2>
                  <p className="text-sugarcane-yellow text-2xl font-bold mb-6">{planOption.price}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {planOption.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-sugarcane-yellow mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan === planOption.id ? "secondary" : "outline"} 
                    className="w-full"
                    onClick={() => setPlan(planOption.id as "monthly" | "quarterly" | "biannual")}
                  >
                    {plan === planOption.id ? "Selected" : "Select Plan"}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Checkout Form */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="glass-card max-w-2xl mx-auto p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-8 text-center">Complete Your <span className="text-sugarcane-yellow">Subscription</span></h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2">First Name</label>
                  <Input placeholder="Enter your first name" />
                </div>
                <div>
                  <label className="block mb-2">Last Name</label>
                  <Input placeholder="Enter your last name" />
                </div>
              </div>
              
              <div>
                <label className="block mb-2">Email Address</label>
                <Input placeholder="Enter your email address" type="email" />
              </div>
              
              <div>
                <label className="block mb-2">Delivery Address</label>
                <Input placeholder="Enter your street address" className="mb-4" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input placeholder="City" />
                  <Input placeholder="Postal Code" />
                </div>
              </div>
              
              <div>
                <label className="block mb-2">Selected Plan</label>
                <div className="glass-card p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{plans.find(p => p.id === plan)?.title}</h3>
                    <p className="text-sugarcane-yellow">{plans.find(p => p.id === plan)?.price}</p>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => window.scrollTo({ top: 500, behavior: 'smooth' })}>
                    Change
                  </Button>
                </div>
              </div>
              
              <Button variant="secondary" size="lg" className="w-full">Subscribe Now</Button>
              
              <p className="text-center text-sm text-text-secondary mt-4">
                By subscribing, you agree to our Terms & Conditions and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 