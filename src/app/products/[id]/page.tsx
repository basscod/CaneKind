"use client";

import React, { useState } from "react";
import { PageLayout } from "@/components/layout/page-layout";
import { Button } from "@/components/ui/button";
import { Card, ProductCard } from "@/components/ui/card";
import { products } from "@/lib/data/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/lib/context/cart-context";
import { QuantityModal } from "@/components/ui/quantity-modal";

interface PageParams {
  id: string;
}

export default function ProductDetailPage({ params }: { params: PageParams | Promise<PageParams> }) {
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart } = useCart();
  
  // Unwrap params using React.use() if it's a promise
  const unwrappedParams = params instanceof Promise ? React.use(params) : params;
  const productId = parseInt(unwrappedParams.id);
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    notFound();
  }

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCartClick = () => {
    setIsModalOpen(true);
  };

  // Find related products (excluding current product)
  const relatedProducts = products
    .filter(p => p.id !== productId)
    .slice(0, 3);
  
  return (
    <PageLayout>
      {/* Product Detail Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-sugarcane-yellow/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-sugarcane-yellow/10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-card p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-10">
              {/* Product Image */}
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden h-[400px] relative">
                  <img 
                    src={product.imageSrc} 
                    alt={product.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-sugarcane-yellow/90 px-3 py-1 rounded-full text-text-primary text-sm font-medium">
                      {product.category}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="md:w-1/2">
                <Link 
                  href="/products" 
                  className="inline-flex items-center text-text-primary hover:text-sugarcane-yellow mb-6"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Products
                </Link>
                
                <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
                <div className="mb-4">
                  <span className="inline-block bg-sugarcane-yellow px-3 py-1 rounded-full text-text-primary font-bold">
                    {product.price}
                  </span>
                </div>
                
                <p className="text-text-secondary mb-8">{product.description}</p>
                
                {/* Quantity Selector */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-2">Quantity</h3>
                  <div className="flex items-center glass-card inline-flex p-1 rounded-full">
                    <button 
                      className="w-8 h-8 flex items-center justify-center hover:text-sugarcane-yellow"
                      onClick={handleDecrement}
                    >
                      -
                    </button>
                    <span className="w-12 text-center">{quantity}</span>
                    <button 
                      className="w-8 h-8 flex items-center justify-center hover:text-sugarcane-yellow"
                      onClick={handleIncrement}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                {/* Add to Cart */}
                <div className="space-y-4">
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="w-full"
                    onClick={handleAddToCartClick}
                  >
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="lg" className="w-full">Add to Favorites</Button>
                </div>
                
                {/* Benefits */}
                <div className="mt-10">
                  <h3 className="text-lg font-semibold mb-4">Benefits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-sugarcane-yellow mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>100% Natural ingredients</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-sugarcane-yellow mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Rich in vitamins and minerals</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-sugarcane-yellow mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>No preservatives or artificial additives</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Products */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">
            You May Also <span className="text-sugarcane-yellow">Like</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="transform scale-90 origin-top">
                <ProductCard 
                  title={relatedProduct.title}
                  price={relatedProduct.price}
                  imageSrc={relatedProduct.imageSrc}
                  description={relatedProduct.description}
                  category={relatedProduct.category}
                  ctaHref={`/products/${relatedProduct.id}`}
                  ctaLabel="View Product"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantity Modal */}
      <QuantityModal 
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </PageLayout>
  );
} 