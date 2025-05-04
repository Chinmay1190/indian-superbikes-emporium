
import { useState } from 'react';
import ProductCard from './ProductCard';
import { Product, Category, Brand } from '@/types/product';

interface ProductGridProps {
  products: Product[];
  title?: string;
}

const ProductGrid = ({ products, title }: ProductGridProps) => {
  const [filters, setFilters] = useState({
    category: '' as Category | '',
    brand: '' as Brand | '',
    sort: 'featured',
    minPrice: '',
    maxPrice: '',
  });
  
  // Extract unique categories and brands
  const categories = [...new Set(products.map(product => product.category))];
  const brands = [...new Set(products.map(product => product.brand))];
  
  // Filter and sort products
  const filteredProducts = products.filter(product => {
    if (filters.category && product.category !== filters.category) return false;
    if (filters.brand && product.brand !== filters.brand) return false;
    if (filters.minPrice && product.price < parseInt(filters.minPrice)) return false;
    if (filters.maxPrice && product.price > parseInt(filters.maxPrice)) return false;
    return true;
  });
  
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (filters.sort === 'price_low') return a.price - b.price;
    if (filters.sort === 'price_high') return b.price - a.price;
    if (filters.sort === 'rating') return b.rating - a.rating;
    // Default to featured or alphabetical if featured not available
    return a.featured ? -1 : b.featured ? 1 : a.name.localeCompare(b.name);
  });
  
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };
  
  return (
    <div className="w-full">
      {title && <h2 className="text-2xl font-bold mb-6">{title}</h2>}
      
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="flex flex-wrap gap-2 md:gap-4">
          <div className="w-full sm:w-auto">
            <select
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
              className="w-full px-3 py-2 border rounded-md bg-background"
              aria-label="Filter by category"
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          
          <div className="w-full sm:w-auto">
            <select
              name="brand"
              value={filters.brand}
              onChange={handleFilterChange}
              className="w-full px-3 py-2 border rounded-md bg-background"
              aria-label="Filter by brand"
            >
              <option value="">All Brands</option>
              {brands.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </div>
          
          <div className="flex gap-2 items-center">
            <input
              type="number"
              name="minPrice"
              placeholder="Min ₹"
              value={filters.minPrice}
              onChange={(e) => setFilters(prev => ({ ...prev, minPrice: e.target.value }))}
              className="w-24 px-3 py-2 border rounded-md bg-background"
              aria-label="Minimum price"
            />
            <span>-</span>
            <input
              type="number"
              name="maxPrice"
              placeholder="Max ₹"
              value={filters.maxPrice}
              onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: e.target.value }))}
              className="w-24 px-3 py-2 border rounded-md bg-background"
              aria-label="Maximum price"
            />
          </div>
        </div>
        
        <div className="ml-auto">
          <select
            name="sort"
            value={filters.sort}
            onChange={handleFilterChange}
            className="px-3 py-2 border rounded-md bg-background"
            aria-label="Sort products"
          >
            <option value="featured">Featured</option>
            <option value="price_low">Price: Low to High</option>
            <option value="price_high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {sortedProducts.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium">No products found</h3>
          <p className="text-muted-foreground mt-2">Try changing your filters</p>
        </div>
      )}
      
      <div className="mt-6 text-sm text-muted-foreground">
        Showing {sortedProducts.length} of {products.length} products
      </div>
    </div>
  );
};

export default ProductGrid;
