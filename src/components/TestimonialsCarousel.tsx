import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: '1',
    name: 'Dr. Sarah M.',
    business: 'Dental Practice',
    content: "We were missing 40% of calls. Now we book 12 more patients a week.",
    metric: '+$8,400/mo',
  },
  {
    id: '2',
    name: 'Mike T.',
    business: 'HVAC Company',
    content: "The AI sounds so real, customers don't know the difference. Game changer.",
    metric: '+23 jobs/mo',
  },
  {
    id: '3',
    name: 'Jennifer L.',
    business: 'Law Firm',
    content: "Finally, no more missed consultations. Worth every penny.",
    metric: '-65% no-shows',
  },
  {
    id: '4',
    name: 'Carlos R.',
    business: 'Auto Shop',
    content: "I can focus on repairs now. The AI handles all the scheduling.",
    metric: '24/7 coverage',
  },
];

export function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 via-background to-card/20" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Real <span className="text-glow">Results</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Businesses just like yours
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`card-glow p-5 transition-all duration-500 cursor-pointer ${
                  index === activeIndex 
                    ? 'ring-2 ring-primary/50 scale-[1.02] bg-card' 
                    : 'opacity-60 hover:opacity-100'
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm mb-4 line-clamp-3">"{testimonial.content}"</p>

                {/* Metric */}
                <div className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-bold inline-block mb-4">
                  {testimonial.metric}
                </div>

                {/* Author */}
                <div className="pt-3 border-t border-border/50">
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.business}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-primary w-6' : 'bg-border w-2 hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
