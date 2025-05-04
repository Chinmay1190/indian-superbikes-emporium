
import { useState, useEffect } from 'react';
import { Product } from '@/types/product';
import ProductCard from './ProductCard';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    // Get products marked as featured or filter the best ones
    const featured = products.filter(product => product.featured);
    
    // If no products explicitly marked as featured, get the highest rated ones
    if (featured.length < 4) {
      const topRated = [...products]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 8);
        
      setFeaturedProducts(topRated);
    } else {
      setFeaturedProducts(featured.slice(0, 8));
    }
  }, []);
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Superbikes</h2>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link to="/products">
              View All <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
