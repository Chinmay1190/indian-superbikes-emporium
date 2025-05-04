
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
          />
          {product.originalPrice && (
            <Badge className="absolute top-2 right-2 bg-bikeRed">Sale</Badge>
          )}
          {product.new && (
            <Badge className="absolute top-2 left-2 bg-bikeOrange">New</Badge>
          )}
        </Link>
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">{product.brand}</p>
          <div className="flex items-center">
            <span className="text-amber-500">★</span>
            <span className="text-sm font-medium ml-1">{product.rating.toFixed(1)}</span>
          </div>
        </div>
        
        <Link to={`/products/${product.id}`} className="hover:underline">
          <h3 className="font-medium text-lg mt-1 line-clamp-1">{product.name}</h3>
        </Link>
        
        <div className="mt-2 flex items-baseline gap-2">
          <span className="font-semibold text-lg">{formatCurrency(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatCurrency(product.originalPrice)}
            </span>
          )}
        </div>
        
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
          {product.description.substring(0, 100)}...
        </p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button
          variant="default"
          className="w-full"
          onClick={() => addToCart(product, 1)}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
