import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    content: 'HyperFlow transformed our customer service completely. Our AI chatbot handles 80% of inquiries automatically, and customer satisfaction has increased by 40%. The ROI was evident within just 2 months.',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Operations Manager',
    company: 'Healthcare Plus',
    content: 'The appointment scheduling bot has been a game-changer. We reduced no-shows by 65% and our staff can focus on patient care instead of admin work. The system integrates seamlessly with our existing tools.',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'Fashion Forward',
    content: 'Our Instagram DM automation and email marketing AI have doubled our engagement rates. The personalization is incredible - customers feel like they\'re talking to a real person who knows their preferences.',
    rating: 5
  },
  {
    id: '4',
    name: 'David Thompson',
    role: 'Founder',
    company: 'Local Services Co.',
    content: 'As a small business, we needed affordable automation. HyperFlow delivered exactly what we needed - professional AI agents that work 24/7 and have helped us scale without hiring more staff.',
    rating: 5
  },
  {
    id: '5',
    name: 'Lisa Park',
    role: 'E-commerce Manager',
    company: 'Online Retail Hub',
    content: 'The website chat agent has increased our conversion rate by 30%. It qualifies leads, answers product questions, and even handles basic support issues. Our sales team loves the quality of leads it generates.',
    rating: 5
  }
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-card/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Quote className="w-4 h-4" />
            <span>Client Success Stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="text-glow">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real feedback from businesses that have transformed their operations with our AI solutions.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="card-glow p-8 md:p-12 text-center">
                    {/* Quote Icon */}
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Quote className="w-8 h-8 text-primary" />
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center space-x-1 mb-6">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Testimonial Content */}
                    <blockquote className="text-lg md:text-xl text-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mb-4">
                        <span className="text-primary-foreground font-bold text-xl">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-12">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border-border/50 hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-4 md:-right-12">
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border-border/50 hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary scale-125'
                    : 'bg-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <p className="text-muted-foreground">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">24/7</div>
            <p className="text-muted-foreground">Support Available</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-glow mb-2">2-3 Weeks</div>
            <p className="text-muted-foreground">Average Setup Time</p>
          </div>
        </div>
      </div>
    </section>
  );
}