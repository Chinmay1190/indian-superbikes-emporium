
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1519083994092-4b1d44254922?q=80&w=2070",
    title: "Performance at its Peak",
    subtitle: "Explore our latest collection of high-performance superbikes"
  },
  {
    url: "https://images.unsplash.com/photo-1558979159-2b18a4070a87?q=80&w=2071",
    title: "Pure Adrenaline",
    subtitle: "Feel the rush with cutting-edge engineering and design"
  },
  {
    url: "https://images.unsplash.com/photo-1636669017054-f8029a2a2563?q=80&w=2070",
    title: "Ride Like a Champion",
    subtitle: "Premium bikes built for speed, handling and comfort"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {/* Slides */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl mb-4 transition-all duration-500 transform"
        >
          {heroImages[currentSlide].title}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          {heroImages[currentSlide].subtitle}
        </p>
        <div className="flex gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/products">
              Explore Bikes <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/20">
            <Link to="/contact">
              Contact Us
            </Link>
          </Button>
        </div>
      </div>

      {/* Dots navigation */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white scale-110' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
