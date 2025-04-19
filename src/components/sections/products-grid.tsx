import React, { useState, useEffect } from "react";
import { ProductCard } from "../ui/card";
import { products } from "@/lib/data/products";

type ProductsGridProps = {
  selectedCategory?: string;
  setSelectedCategory?: (category: string) => void;
  searchTerm?: string;
};

export const ProductsGrid = ({ selectedCategory, setSelectedCategory, searchTerm = "" }: ProductsGridProps) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategory && selectedCategory !== "All Products") {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      result = result.filter(product => 
        product.title.toLowerCase().includes(searchLower) || 
        product.description.toLowerCase().includes(searchLower)
      );
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, searchTerm]);

  return (
    <section className="pt-8 pb-16">
      <div className="container mx-auto px-6">
        {/* Results Count */}
        <div className="mb-6 text-center">
          <p className="text-text-secondary">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard 
                key={product.id}
                title={product.title}
                price={product.price}
                imageSrc={product.imageSrc}
                description={product.description}
                category={product.category}
                ctaHref={`/products/${product.id}`}
                ctaLabel="Add to Cart"
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl mb-2">No products found</h3>
              <p className="text-text-secondary">Try changing your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}; 