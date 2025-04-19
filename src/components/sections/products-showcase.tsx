import React from "react";
import { ProductCard } from "../ui/card";
import { products } from "@/lib/data/products";

export const ProductsShowcase = () => {
  // Display only 4 products on the homepage
  const featuredProducts = products.slice(0, 4);
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="mb-4">Our Premium <span className="text-sugarcane-yellow">Juice Collection</span></h2>
          <p className="max-w-2xl mx-auto">
            Handcrafted with care, our sugarcane juices bring nature's sweetness in every bottle. Explore our range of flavors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard 
              key={product.id}
              title={product.title}
              price={product.price}
              imageSrc={product.imageSrc}
              description={product.description}
              category={product.category}
              ctaHref={`/products/${product.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 