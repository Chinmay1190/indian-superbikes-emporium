
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { TrashIcon, MinusIcon, PlusIcon, ShoppingCart } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, subtotal } = useCart();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    // Set page title
    document.title = "Shopping Cart | Indian Superbikes";
  }, []);
  
  const shipping = subtotal > 0 ? 1000 : 0;
  const total = subtotal + shipping;
  
  const handleCheckout = () => {
    if (cart.length === 0) return;
    
    setIsLoading(true);
    // Simulate a loading state before redirecting to checkout
    setTimeout(() => {
      setIsLoading(false);
      navigate('/checkout');
    }, 800);
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      {cart.length === 0 ? (
        <div className="text-center py-16">
          <div className="flex justify-center mb-6">
            <ShoppingCart size={64} className="text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">
            Looks like you haven't added any motorcycles to your cart yet.
          </p>
          <Button asChild>
            <Link to="/products">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Product</TableHead>
                    <TableHead>Details</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Subtotal</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cart.map(item => (
                    <TableRow key={item.product.id}>
                      <TableCell>
                        <Link to={`/products/${item.product.id}`}>
                          <img 
                            src={item.product.images[0]} 
                            alt={item.product.name}
                            className="w-20 h-20 object-cover rounded-md"
                          />
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Link to={`/products/${item.product.id}`} className="font-medium hover:underline">
                          {item.product.name}
                        </Link>
                        <div className="text-sm text-muted-foreground">
                          Brand: {item.product.brand}, Category: {item.product.category}
                        </div>
                      </TableCell>
                      <TableCell>{formatCurrency(item.product.price)}</TableCell>
                      <TableCell>
                        <div className="flex items-center border rounded-md">
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="h-9 w-9"
                          >
                            <MinusIcon className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="h-9 w-9"
                          >
                            <PlusIcon className="h-3 w-3" />
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">
                        {formatCurrency(item.product.price * item.quantity)}
                      </TableCell>
                      <TableCell>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => removeFromCart(item.product.id)}
                        >
                          <TrashIcon className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="flex justify-between mt-4">
              <Button 
                variant="outline"
                onClick={clearCart}
              >
                Clear Cart
              </Button>
              
              <Button asChild variant="outline">
                <Link to="/products">Continue Shopping</Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="border rounded-lg p-6 bg-card">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{shipping > 0 ? formatCurrency(shipping) : 'Free'}</span>
                </div>
                <div className="border-t pt-2 mt-4 flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">{formatCurrency(total)}</span>
                </div>
              </div>
              
              <Button 
                className="w-full" 
                disabled={cart.length === 0 || isLoading}
                onClick={handleCheckout}
              >
                {isLoading ? 'Processing...' : 'Proceed to Checkout'}
              </Button>
              
              <p className="text-xs text-muted-foreground text-center mt-4">
                Taxes calculated at checkout. Shipping costs may vary.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
