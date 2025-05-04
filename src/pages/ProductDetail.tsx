
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { formatCurrency, calculateDiscount } from "@/lib/utils";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState(products.find(p => p.id === parseInt(id || "0")));
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);
  
  useEffect(() => {
    if (!product) {
      navigate("/products");
      return;
    }
    
    // Set main image
    setMainImage(product.images[0]);
    
    // Find related products (same category or brand)
    const related = products
      .filter(p => 
        p.id !== product.id && (p.category === product.category || p.brand === product.brand)
      )
      .slice(0, 4);
    
    setRelatedProducts(related);
    
    // Set page title
    document.title = `${product.name} | Indian Superbikes`;
  }, [product, navigate]);
  
  // Update product when id changes
  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id || "0"));
    setProduct(foundProduct);
  }, [id]);
  
  if (!product) return null;
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value));
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  const discount = product.originalPrice 
    ? calculateDiscount(product.originalPrice, product.price)
    : 0;
    
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <img 
              src={mainImage} 
              alt={product.name} 
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setMainImage(image)}
                className={`w-20 h-20 bg-muted rounded overflow-hidden ${
                  mainImage === image ? 'ring-2 ring-primary' : ''
                }`}
              >
                <img 
                  src={image} 
                  alt={`${product.name} view ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        
        {/* Product Details */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline">{product.category}</Badge>
            <Badge variant="secondary">{product.brand}</Badge>
            {product.new && <Badge className="bg-bikeOrange">New</Badge>}
          </div>
          
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center text-amber-500">
              <span>★</span>
              <span className="ml-1 text-foreground font-medium">
                {product.rating.toFixed(1)}
              </span>
            </div>
            <span className="text-muted-foreground">|</span>
            <span className={product.inStock ? 'text-green-600' : 'text-red-600'}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
          
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl font-semibold">
              {formatCurrency(product.price)}
            </span>
            {product.originalPrice && (
              <>
                <span className="text-muted-foreground line-through">
                  {formatCurrency(product.originalPrice)}
                </span>
                <Badge variant="destructive" className="ml-2">
                  {discount}% OFF
                </Badge>
              </>
            )}
          </div>
          
          <p className="text-muted-foreground mb-6">
            {product.description}
          </p>
          
          <div className="flex items-center gap-4 mb-8">
            <select
              value={quantity}
              onChange={handleQuantityChange}
              className="w-20 px-3 py-2 border rounded-md bg-background"
              disabled={!product.inStock}
            >
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
            
            <Button 
              onClick={handleAddToCart} 
              className="flex-1"
              disabled={!product.inStock}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </Button>
          </div>
          
          {/* Specifications */}
          <Card className="p-4 mb-6">
            <h3 className="font-medium mb-2">Key Specifications</h3>
            <div className="grid grid-cols-2 gap-2">
              {product.specs.engine && (
                <div>
                  <span className="text-sm text-muted-foreground">Engine</span>
                  <p>{product.specs.engine}</p>
                </div>
              )}
              {product.specs.power && (
                <div>
                  <span className="text-sm text-muted-foreground">Power</span>
                  <p>{product.specs.power}</p>
                </div>
              )}
              {product.specs.torque && (
                <div>
                  <span className="text-sm text-muted-foreground">Torque</span>
                  <p>{product.specs.torque}</p>
                </div>
              )}
              {product.specs.transmission && (
                <div>
                  <span className="text-sm text-muted-foreground">Transmission</span>
                  <p>{product.specs.transmission}</p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
      
      {/* Additional Information Tabs */}
      <div className="mt-12">
        <Tabs defaultValue="specs">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="specs">Specifications</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          
          <TabsContent value="specs" className="py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="py-2 border-b">
                  <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                  <p className="text-muted-foreground">{value}</p>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="features" className="py-4">
            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>High-performance engine with exceptional power delivery</li>
              <li>Advanced suspension system for superior handling</li>
              <li>Ergonomic design for rider comfort during long journeys</li>
              <li>State-of-the-art braking system for maximum safety</li>
              <li>Lightweight chassis for improved maneuverability</li>
              <li>Premium components and materials throughout</li>
              <li>Modern electronics package with multiple riding modes</li>
              <li>Stunning aesthetics with attention to detail</li>
            </ul>
          </TabsContent>
          
          <TabsContent value="reviews" className="py-4">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-amber-500">
                  {product.rating.toFixed(1)}
                </div>
                <div className="flex flex-col">
                  <div className="flex text-amber-500">
                    {"★".repeat(Math.round(product.rating))}
                    {"☆".repeat(5 - Math.round(product.rating))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Based on customer reviews
                  </p>
                </div>
              </div>
              
              <p className="italic text-muted-foreground">
                Customer reviews for this product will be displayed here.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
