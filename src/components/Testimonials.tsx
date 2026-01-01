import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Solutions",
      company: "TechStart Solutions",
      content: "HyperFlow's AI agents transformed our customer service. We now handle 300% more inquiries with the same team size, and customer satisfaction has increased by 40%.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c31c?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      position: "Operations Manager, HealthCare Plus",
      company: "HealthCare Plus",
      content: "The appointment scheduling bot eliminated double bookings completely and reduced no-shows by 60%. It's like having a dedicated receptionist that never takes a break.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Director, E-commerce Hub",
      company: "E-commerce Hub",
      content: "Our website chat agent increased conversions by 35% and captured 10x more leads. The ROI was evident within the first month of implementation.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Park",
      position: "CTO, Financial Services Corp",
      company: "Financial Services Corp",
      content: "The security and reliability of HyperFlow's AI agents impressed us. They handle sensitive customer data with enterprise-grade protection while delivering exceptional service.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lisa Thompson",
      position: "Customer Success Lead, SaaS Innovate",
      company: "SaaS Innovate",
      content: "Implementation was seamless, and the support team was incredible. Our AI agent feels like a natural extension of our customer service team.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Robert Kim",
      position: "Owner, Local Business Network",
      company: "Local Business Network",
      content: "As a small business, we couldn't afford 24/7 customer service. Now we have it, and it's helped us compete with much larger companies in our industry.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            <span>Client Success Stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="text-glow">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how businesses across industries have transformed their operations 
            and improved customer satisfaction with our AI solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-glow p-8 relative hover:scale-105 transition-all duration-500">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-primary/20" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  <div className="text-sm text-primary">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="card-glow p-12 text-center">
            <h3 className="text-3xl font-bold mb-8">Trusted by Industry Leaders</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">1M+</div>
                <div className="text-muted-foreground">Conversations Handled</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground">Uptime</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}