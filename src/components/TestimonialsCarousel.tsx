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
  avatar: string;
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
    avatar: 'SJ',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Operations',
    company: 'Healthcare Plus',
    content: 'No-shows dropped by 65%. The appointment bot paid for itself in week one.',
    rating: 5,
    metric: '-65% no-shows',
    avatar: 'MC',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Marketing',
    company: 'Fashion Forward',
    content: 'DM automation doubled our engagement. Customers think they\'re talking to a real person.',
    rating: 5,
    metric: '2x engagement',
    avatar: 'ER',
  },
  {
    id: '4',
    name: 'David Thompson',
    role: 'Founder',
    company: 'Local Services',
    content: 'As a small business, this was a game-changer. 24/7 coverage without hiring.',
    rating: 5,
    metric: '24/7 coverage',
    avatar: 'DT',
  },
];

export function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setIsFlipping(false);
      }, 300);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full text-sm font-medium text-primary mb-4">
            <Star className="w-4 h-4 fill-current" />
            <span>Trusted by 500+ businesses</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Real Results, <span className="text-glow">Real Businesses</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how businesses like yours stopped losing leads and started growing.
          </p>
        </div>

        {/* Flip Cards Container */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="relative h-[280px] sm:h-[300px] perspective-1000"
              >
                <div 
                  className={`absolute inset-0 transition-all duration-500 transform-style-3d ${
                    index === activeIndex && isFlipping ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* Card */}
                  <div className={`h-full card-glow p-5 sm:p-6 flex flex-col transition-all duration-300 ${
                    index === activeIndex ? 'ring-2 ring-primary/50 scale-[1.02]' : 'opacity-70 hover:opacity-100'
                  }`}>
                    {/* Quote icon */}
                    <Quote className="w-8 h-8 text-primary/20 mb-3" />
                    
                    {/* Stars */}
                    <div className="flex gap-0.5 mb-3">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Content */}
                    <blockquote className="text-sm sm:text-base flex-1 mb-4">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Metric badge */}
                    <div className="inline-flex self-start items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-4">
                      {testimonial.metric}
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-foreground font-bold text-sm">
                          {testimonial.avatar}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-sm truncate">{testimonial.name}</h4>
                        <p className="text-muted-foreground text-xs truncate">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-primary w-8'
                    : 'bg-border hover:bg-muted-foreground w-2'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 md:mt-16 max-w-3xl mx-auto">
          {[
            { value: '500+', label: 'Businesses', color: 'text-primary' },
            { value: '1M+', label: 'Conversations', color: 'text-accent' },
            { value: '98%', label: 'Satisfaction', color: 'text-primary-glow' },
            { value: '24/7', label: 'Available', color: 'text-primary' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 card-glow">
              <div className={`text-2xl sm:text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
              <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(10deg) scale(1.05);
        }
      `}</style>
    </section>
  );
}
