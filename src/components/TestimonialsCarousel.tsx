import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  metric: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    content: 'Our AI handles 80% of calls automatically. Customer satisfaction is up 40%.',
    rating: 5,
    metric: '+40% satisfaction',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Operations',
    company: 'Healthcare Plus',
    content: 'No-shows dropped by 65%. The appointment bot paid for itself in week one.',
    rating: 5,
    metric: '-65% no-shows',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Marketing',
    company: 'Fashion Forward',
    content: 'DM automation doubled our engagement. Customers think they\'re talking to a real person.',
    rating: 5,
    metric: '2x engagement',
  },
  {
    id: '4',
    name: 'David Thompson',
    role: 'Founder',
    company: 'Local Services',
    content: 'As a small business, this was a game-changer. 24/7 coverage without hiring.',
    rating: 5,
    metric: '24/7 coverage',
  },
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-card/20 to-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Real Results, <span className="text-glow">Real Businesses</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how businesses like yours are saving time and growing revenue.
          </p>
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto">
          {/* Main testimonial */}
          <div className="relative overflow-hidden mb-8">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className="card-glow p-8 md:p-12 text-center">
                    {/* Quote */}
                    <Quote className="w-10 h-10 text-primary/30 mx-auto mb-6" />
                    
                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-6">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Content */}
                    <blockquote className="text-xl md:text-2xl font-medium mb-6 max-w-2xl mx-auto">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Metric badge */}
                    <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                      {testimonial.metric}
                    </div>

                    {/* Author */}
                    <div>
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-primary-foreground font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-muted-foreground text-sm">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-border hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">500+</div>
            <p className="text-sm text-muted-foreground">Businesses</p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">1M+</div>
            <p className="text-sm text-muted-foreground">Conversations</p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary-glow mb-1">98%</div>
            <p className="text-sm text-muted-foreground">Satisfaction</p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">24/7</div>
            <p className="text-sm text-muted-foreground">Available</p>
          </div>
        </div>
      </div>
    </section>
  );
}
