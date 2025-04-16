import React from "react";
import { Card } from "../ui/card";
import { benefits } from "@/lib/data/benefits";

export const Benefits = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background design element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-sugarcane-yellow/20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-sugarcane-yellow/20 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-4">Why Choose <span className="text-sugarcane-yellow">CaneKind</span>?</h2>
          <p className="max-w-2xl mx-auto">
            Sugarcane juice is not just a delicious treat - it's packed with health benefits that make it a smart choice for your wellbeing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <Card key={benefit.id} className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-sugarcane-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}; 