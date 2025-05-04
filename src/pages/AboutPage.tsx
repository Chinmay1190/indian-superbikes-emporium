
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div>
      <div className="relative bg-cover bg-center py-32"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1538829200857-fe63bc3a955e?q=80&w=2073)'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Indian Superbikes</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Premier destination for motorcycle enthusiasts in India
          </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="mb-4 text-muted-foreground">
                Indian Superbikes Emporium was established in 2010 with a simple passion - to bring the world's finest motorcycles to Indian enthusiasts. What began as a small showroom in Mumbai has now grown into one of India's leading premium motorcycle retailers.
              </p>
              <p className="mb-4 text-muted-foreground">
                Our founder, Raj Mehta, a motorcycle racer and enthusiast, noticed the growing demand for high-performance bikes in India but found that options were limited. He set out to create a one-stop destination where riders could find their dream machines, backed by expert knowledge and superior service.
              </p>
              <p className="text-muted-foreground">
                Today, we represent major global motorcycle brands and serve thousands of happy customers across the country. Our commitment to quality, authenticity, and customer satisfaction remains at the core of everything we do.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1637659259990-0361ed4a6cbc?q=80&w=2070" 
                alt="Motorcycle showroom" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl border">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Experience</h3>
              <p className="text-muted-foreground">
                With over a decade in the industry, we have the expertise to guide you through your purchase journey and provide exceptional after-sales support.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl border">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Authenticity</h3>
              <p className="text-muted-foreground">
                We partner directly with manufacturers to ensure all motorcycles and parts are 100% genuine with full international warranty coverage.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl border">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Customer Service</h3>
              <p className="text-muted-foreground">
                Our team of motorcycle enthusiasts provides personalized assistance, from helping you select the perfect bike to ongoing maintenance support.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the passionate motorcycle enthusiasts who make Indian Superbikes Emporium special
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative mb-4 aspect-square overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974" 
                  alt="Raj Mehta - Founder & CEO"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold mb-1">Raj Mehta</h3>
              <p className="text-muted-foreground">Founder & CEO</p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-4 aspect-square overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976" 
                  alt="Priya Sharma - Head of Operations"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold mb-1">Priya Sharma</h3>
              <p className="text-muted-foreground">Head of Operations</p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-4 aspect-square overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974" 
                  alt="Vikram Singh - Technical Expert"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold mb-1">Vikram Singh</h3>
              <p className="text-muted-foreground">Technical Expert</p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-4 aspect-square overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961" 
                  alt="Meera Patel - Customer Relations"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold mb-1">Meera Patel</h3>
              <p className="text-muted-foreground">Customer Relations</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Ride?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Visit our showroom or browse our exclusive collection online to find your perfect motorcycle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/products">Browse Motorcycles</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
