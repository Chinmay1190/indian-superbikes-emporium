
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const OrderSuccessPage = () => {
  useEffect(() => {
    // Set page title
    document.title = "Order Confirmed | Indian Superbikes";
  }, []);
  
  // Generate random order number
  const orderNumber = `ISE${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-lg mx-auto text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-24 w-24 text-green-500" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
        
        <p className="mb-2 text-lg">
          Thank you for your order. We've received your purchase and will process it immediately.
        </p>
        
        <div className="my-8 p-6 border rounded-lg bg-card">
          <p className="text-muted-foreground mb-2">Order Number:</p>
          <p className="text-xl font-semibold">{orderNumber}</p>
          
          <div className="mt-4">
            <p className="text-muted-foreground mb-1">A confirmation email has been sent to:</p>
            <p>customer@example.com</p>
          </div>
        </div>
        
        <p className="mb-8 text-muted-foreground">
          We'll notify you when your order has been shipped. For any queries regarding your order, please contact our customer service team.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link to="/products">Continue Shopping</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
