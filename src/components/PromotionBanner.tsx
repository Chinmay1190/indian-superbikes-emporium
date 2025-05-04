
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const PromotionBanner = () => {
  return (
    <section
      className="py-24 relative bg-cover bg-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1547549082-6bc09f2049ae?q=80&w=2071)',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Summer Discount Sale</h2>
          <p className="text-lg mb-8">
            Up to 15% off on select superbikes. Limited time offer.
            Don't miss out on your dream ride!
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/products">Shop Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PromotionBanner;
