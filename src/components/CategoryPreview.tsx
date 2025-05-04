import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Category } from '@/types/product';
import { products } from '@/data/products';
import { Card, CardContent } from '@/components/ui/card';

const categories: { [key in Category]?: string } = {
  'Sport': 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070',
  'Naked': 'https://images.unsplash.com/photo-1577172249844-2cbe340d6682?q=80&w=1974',
  'Adventure': 'https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=2025',
  'Cruiser': 'https://images.unsplash.com/photo-1625046438797-fa5e384f4ffa?q=80&w=1932',
  'Classic': 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?q=80&w=2070',
  'Touring': 'https://images.unsplash.com/photo-1582282373954-1cab55d683ea?q=80&w=1974',
  'Cafe Racer': 'https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2070',
};

const CategoryPreview = () => {
  const [categoryCounts, setCategoryCounts] = useState<Record<string, number>>({});
  
  useEffect(() => {
    // Count products per category
    const counts: Record<string, number> = {};
    products.forEach(product => {
      counts[product.category] = (counts[product.category] || 0) + 1;
    });
    
    setCategoryCounts(counts);
  }, []);
  
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Shop by Category</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {Object.entries(categories).map(([category, imageUrl]) => (
            <Link 
              key={category} 
              to={`/products?category=${category}`}
              className="group"
            >
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={imageUrl} 
                    alt={category} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <div className="text-white">
                      <h3 className="font-semibold text-lg">{category}</h3>
                      <p className="text-sm opacity-90">
                        {categoryCounts[category] || 0} models
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryPreview;
