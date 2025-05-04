
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import CategoryPreview from '@/components/CategoryPreview';
import BrandsList from '@/components/BrandsList';
import NewArrivals from '@/components/NewArrivals';
import PromotionBanner from '@/components/PromotionBanner';
import Testimonials from '@/components/Testimonials';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div>
      <Hero />
      
      <FeaturedProducts />
      
      <div className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Experience the Thrill of Premium Superbikes</h2>
              <p className="mb-6 text-muted-foreground">
                Welcome to Indian Superbikes Emporium – your ultimate destination for premium motorcycles. 
                We offer a wide selection of performance bikes from renowned brands across the globe, 
                delivering unparalleled power, style, and engineering excellence to motorcycle enthusiasts.
              </p>
              <Button asChild>
                <Link to="/about">
                  Learn More <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1622185135505-2d795003994a?q=80&w=2070" 
                  alt="Showroom" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CategoryPreview />
      
      <NewArrivals />
      
      <PromotionBanner />
      
      <Testimonials />
    </div>
  );
};

export default HomePage;
