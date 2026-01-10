import { ArrowRight, PhoneCall, CheckCircle, Clock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';
import { useCurrency } from '@/hooks/useCurrency';
import heroImage from '@/assets/workflow-hero.jpg';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const { formatPrice } = useCurrency();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };

    const container = containerRef.current;
    container?.addEventListener('mousemove', handleMouseMove);
    return () => container?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Trial price in USD
  const trialPriceUSD = 19;

  const stats = [
    { value: '0%', label: 'Missed Calls', icon: PhoneCall },
    { value: '<1s', label: 'Response Time', icon: Clock },
    { value: '24/7', label: 'Availability', icon: Zap },
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[85vh] flex items-center overflow-hidden pt-20 pb-12"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/50" />
      
      {/* Interactive cursor glow */}
      <div 
        className="absolute inset-0 opacity-50 hidden md:block transition-all duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, hsl(var(--primary) / 0.15), transparent 40%)`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-muted-foreground">AI Receptionist for SMBs</span>
            </div>

            {/* Simple headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Never Miss a{' '}
              <span className="text-glow">Customer Call</span>{' '}
              Again
            </h1>

            {/* Clear value prop */}
            <p className="text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              AI answers your phone, books appointments, and captures leads —{' '}
              <span className="text-foreground font-medium">24/7, even on holidays.</span>
            </p>

            {/* Simple flow */}
            <div className="flex items-center justify-center lg:justify-start gap-3 text-lg mb-8 animate-fade-in" style={{ animationDelay: '0.25s' }}>
              <span className="flex items-center gap-1">📞 Call</span>
              <span className="text-primary">→</span>
              <span className="flex items-center gap-1">🤖 AI Answers</span>
              <span className="text-primary">→</span>
              <span className="flex items-center gap-1">📅 Booked</span>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button 
                className="btn-hero group text-lg py-6 px-8"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <PhoneCall className="w-5 h-5 mr-2" />
                Start 7-Day Trial — {formatPrice(trialPriceUSD)}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.35s' }}>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Setup in 24 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>30-day guarantee</span>
              </div>
            </div>
          </div>

          {/* Right - Stats & Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="card-glow p-4 text-center"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Main image */}
            <div className="relative z-10 rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/10">
              <img 
                src={heroImage} 
                alt="AI Workflow - Calls to Revenue" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
