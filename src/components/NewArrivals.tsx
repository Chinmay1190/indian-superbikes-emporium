
import { useState, useEffect } from 'react';
import { Product } from '@/types/product';
import { products } from '@/data/products';
import ProductCard from './ProductCard';

const NewArrivals = () => {
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    // Get products marked as new or get the first few as "new"
    const newlyAdded = products.filter(product => product.new);
    
    // If no products explicitly marked as new, get the first few by ID
    if (newlyAdded.length < 4) {
      const latest = [...products]
        .sort((a, b) => b.id - a.id) // Assuming higher IDs are newer products
        .slice(0, 4);
        
      setNewProducts(latest);
    } else {
      setNewProducts(newlyAdded.slice(0, 4));
    }
  }, []);
  
  if (newProducts.length === 0) return null;
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">New Arrivals</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {newProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
