import React from "react";
import { PageLayout } from "@/components/layout/page-layout";

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="container mx-auto py-24 px-6 mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">About CaneKind</h1>
          
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-lg mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-sugarcane-yellow">Our Story</h2>
            <p className="mb-6">
              CaneKind was born from a passion for natural, healthy beverages and a desire to bring the refreshing taste of sugarcane juice to the UK market. Our journey began when our founder, who grew up enjoying fresh sugarcane juice in tropical regions, noticed a gap in the UK market for this delicious, natural beverage.
            </p>
            <p>
              After years of research and development, we perfected our extraction and bottling processes to ensure that every drop of CaneKind maintains the authentic flavor and nutritional benefits of freshly pressed sugarcane juice.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-lg mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-sugarcane-yellow">Our Mission</h2>
            <p className="mb-6">
              At CaneKind, our mission is to provide a healthier alternative to artificial and heavily processed beverages. We believe in the power of natural ingredients and minimal processing to deliver products that are both delicious and beneficial for your wellbeing.
            </p>
            <p>
              We are committed to sustainability at every step of our production process, from responsible sourcing of sugarcane to eco-friendly packaging solutions that minimize our environmental footprint.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-sugarcane-yellow">Our Values</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><span className="font-medium">Quality:</span> We never compromise on the quality of our products, ensuring each bottle meets our high standards.</li>
              <li><span className="font-medium">Transparency:</span> We believe in being honest about our ingredients and processes.</li>
              <li><span className="font-medium">Sustainability:</span> We strive to minimize our environmental impact through responsible sourcing and packaging.</li>
              <li><span className="font-medium">Innovation:</span> We continuously explore new flavors and improvements to our products.</li>
              <li><span className="font-medium">Community:</span> We value our customers and the communities we serve, actively seeking ways to give back.</li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 