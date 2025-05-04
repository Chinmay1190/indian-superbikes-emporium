
import { Link } from 'react-router-dom';
import { products } from '@/data/products';

const BrandsList = () => {
  // Extract unique brands and count products per brand
  const brandCounts: Record<string, number> = {};
  products.forEach(product => {
    brandCounts[product.brand] = (brandCounts[product.brand] || 0) + 1;
  });
  
  // Sort brands by count (most products first)
  const brands = Object.keys(brandCounts).sort((a, b) => brandCounts[b] - brandCounts[a]);
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Top Brands</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {brands.map(brand => (
            <Link 
              key={brand} 
              to={`/products?brand=${brand}`}
              className="flex flex-col items-center p-4 border rounded-lg hover:shadow-md transition-shadow"
            >
              <span className="font-semibold text-lg">{brand}</span>
              <span className="text-sm text-muted-foreground mt-1">
                {brandCounts[brand]} {brandCounts[brand] === 1 ? 'model' : 'models'}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsList;
