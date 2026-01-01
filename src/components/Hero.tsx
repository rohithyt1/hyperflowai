import { ArrowRight, Bot, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/30" />
      
      {/* Interactive gradient that follows mouse */}
      <div 
        className="absolute inset-0 opacity-30 hidden md:block transition-all duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, hsl(var(--primary) / 0.15), transparent 40%)`,
        }}
      />

      {/* Floating 3D orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-72 h-72 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"
          style={{
            top: '20%',
            left: '10%',
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
            transition: 'transform 0.5s ease-out',
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-gradient-to-br from-accent/15 to-transparent rounded-full blur-3xl"
          style={{
            bottom: '10%',
            right: '5%',
            transform: `translate(${-mousePosition.x * 40}px, ${-mousePosition.y * 40}px)`,
            transition: 'transform 0.5s ease-out',
          }}
        />
        <div 
          className="absolute w-48 h-48 bg-gradient-to-br from-primary-glow/10 to-transparent rounded-full blur-2xl"
          style={{
            top: '60%',
            left: '60%',
            transform: `translate(${mousePosition.x * 20}px, ${-mousePosition.y * 20}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered Business Automation</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Your Business,{' '}
            <span className="text-glow">Never Offline</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            AI agents that answer calls, book appointments, and close leads 24/7 — 
            so you can focus on what you do best.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button 
              className="btn-hero group text-base"
              onClick={() => window.open('https://cal.com/star-ment-yrerge/30min?overlayCalendar=true', '_blank')}
            >
              See It In Action
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              className="btn-secondary group text-base"
              onClick={() => window.location.href = '/services'}
            >
              View Pricing
            </Button>
          </div>

          {/* Social proof */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">
                <span className="text-foreground font-semibold">500+</span> businesses automated
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-accent" />
              <span className="text-sm text-muted-foreground">
                <span className="text-foreground font-semibold">1M+</span> conversations handled
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary-glow" />
              <span className="text-sm text-muted-foreground">
                <span className="text-foreground font-semibold">99.9%</span> uptime
              </span>
            </div>
          </div>

          {/* Floating feature cards */}
          <div className="hidden lg:block">
            <div 
              className="absolute top-1/4 left-8 xl:left-16 card-glow p-4 float backdrop-blur-sm"
              style={{ animationDelay: '0s' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-sm">AI Calls</div>
                  <div className="text-xs text-muted-foreground">24/7 Coverage</div>
                </div>
              </div>
            </div>
            
            <div 
              className="absolute top-1/3 right-8 xl:right-16 card-glow p-4 float backdrop-blur-sm"
              style={{ animationDelay: '2s' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-accent" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-sm">Instant Response</div>
                  <div className="text-xs text-muted-foreground">&lt;3 seconds</div>
                </div>
              </div>
            </div>

            <div 
              className="absolute bottom-1/4 left-12 xl:left-24 card-glow p-4 float backdrop-blur-sm"
              style={{ animationDelay: '1s' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-glow/20 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary-glow" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-sm">Smart Booking</div>
                  <div className="text-xs text-muted-foreground">Auto-schedule</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
