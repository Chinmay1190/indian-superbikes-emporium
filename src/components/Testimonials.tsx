
const testimonials = [
  {
    id: 1,
    name: "Rahul Singh",
    position: "Professional Racer",
    text: "I've ridden many bikes in my career, but the performance and handling of the motorcycles from Indian Superbikes Emporium are truly exceptional. Their after-sales service is equally impressive.",
    avatar: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1470",
  },
  {
    id: 2,
    name: "Priya Sharma",
    position: "Motorcycle Enthusiast",
    text: "Buying my first superbike was a dream come true, and Indian Superbikes Emporium made the entire process so smooth. They provided expert guidance and helped me find the perfect bike for my needs.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887",
  },
  {
    id: 3,
    name: "Vikram Patel",
    position: "Weekend Rider",
    text: "The selection at Indian Superbikes Emporium is unbeatable. From sports bikes to cruisers, they have it all. The staff is knowledgeable and passionate about motorcycles, which makes shopping here a pleasure.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">What Our Customers Say</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Hear from motorcycle enthusiasts who've experienced our exceptional service and products</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 rounded-xl bg-card border flex flex-col"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-medium">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
              
              <blockquote className="flex-1">
                <p className="italic">"{testimonial.text}"</p>
              </blockquote>
              
              <div className="mt-4 flex text-amber-500">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
