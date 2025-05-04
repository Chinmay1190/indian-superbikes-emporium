
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";

const ProductsPage = () => {
  const location = useLocation();
  
  // Get any filter params from URL
  const searchParams = new URLSearchParams(location.search);
  const categoryFilter = searchParams.get("category");
  const brandFilter = searchParams.get("brand");
  
  // Set page title
  useEffect(() => {
    document.title = "Superbikes Collection | Indian Superbikes";
  }, []);
  
  // Filter products if URL has parameters
  const filteredProducts = products.filter(product => {
    if (categoryFilter && product.category !== categoryFilter) return false;
    if (brandFilter && product.brand !== brandFilter) return false;
    return true;
  });
  
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-2">
          {categoryFilter ? `${categoryFilter} Motorcycles` : 
           brandFilter ? `${brandFilter} Motorcycles` : 
           "All Superbikes"}
        </h1>
        <p className="text-muted-foreground">
          {filteredProducts.length} models available
        </p>
      </header>

      <ProductGrid products={filteredProducts} />
    </div>
  );
};

export default ProductsPage;
