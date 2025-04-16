import React from "react";
import { ProductCard } from "../ui/card";
import { products } from "@/lib/data/products";

export const ProductsGrid = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              title={product.title}
              price={product.price}
              imageSrc={product.imageSrc}
              description={product.description}
              ctaHref={`/products/${product.id}`}
              ctaLabel="Add to Cart"
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 