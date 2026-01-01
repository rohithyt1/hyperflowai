import { ArrowRight, Phone, PhoneOff, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [callsAnswered, setCallsAnswered] = useState(847);

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

  // Simulate live counter
  useEffect(() => {
    const interval = setInterval(() => {
      setCallsAnswered(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 pb-12"
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

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[400px] h-[400px] bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-[80px]"
          style={{
            top: '10%',
            left: '5%',
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
            transition: 'transform 0.8s ease-out',
          }}
        />
        <div 
          className="absolute w-[300px] h-[300px] bg-gradient-to-br from-accent/15 to-transparent rounded-full blur-[60px]"
          style={{
            bottom: '20%',
            right: '10%',
            transform: `translate(${-mousePosition.x * 40}px, ${-mousePosition.y * 40}px)`,
            transition: 'transform 0.8s ease-out',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Live badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-primary font-semibold">{callsAnswered.toLocaleString()}</span>
            <span className="text-muted-foreground">calls answered today</span>
          </div>

          {/* Simple headline - 4th grade readable */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Never Miss A{' '}
            <span className="text-glow relative inline-block">
              Phone Call
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M2 6C40 2 120 2 198 6" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" className="animate-draw" />
              </svg>
            </span>
            {' '}Again
          </h1>

          {/* Super simple explanation */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Your AI receptionist answers every call.
          </p>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.25s' }}>
            24 hours a day. 7 days a week. Even holidays.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button 
              className="btn-hero group text-lg py-6 px-8"
              onClick={() => window.open('https://cal.com/star-ment-yrerge/30min?overlayCalendar=true', '_blank')}
            >
              <PhoneCall className="w-5 h-5 mr-2" />
              Try It Free
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              className="btn-secondary group text-lg py-6 px-8"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See How It Works
            </Button>
          </div>

          {/* Visual comparison - animated */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {/* Without */}
            <div className="card-glow p-6 border-destructive/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-destructive/50" />
              <PhoneOff className="w-10 h-10 text-destructive mx-auto mb-3 animate-shake" />
              <h3 className="font-bold text-lg mb-2">Without AI</h3>
              <p className="text-muted-foreground text-sm">Missed calls = Lost customers</p>
              <div className="mt-3 text-destructive font-bold text-2xl">-$3,750/mo</div>
            </div>

            {/* With */}
            <div className="card-glow p-6 border-primary/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary/50" />
              <Phone className="w-10 h-10 text-primary mx-auto mb-3 animate-ring" />
              <h3 className="font-bold text-lg mb-2">With AI</h3>
              <p className="text-muted-foreground text-sm">Every call answered & booked</p>
              <div className="mt-3 text-primary font-bold text-2xl">100% captured</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />

      <style>{`
        @keyframes draw {
          from { stroke-dashoffset: 200; }
          to { stroke-dashoffset: 0; }
        }
        .animate-draw {
          stroke-dasharray: 200;
          animation: draw 0.8s ease-out forwards;
          animation-delay: 0.5s;
          stroke-dashoffset: 200;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0) rotate(0); }
          25% { transform: translateX(-2px) rotate(-5deg); }
          75% { transform: translateX(2px) rotate(5deg); }
        }
        .animate-shake {
          animation: shake 2s ease-in-out infinite;
        }
        @keyframes ring {
          0%, 100% { transform: rotate(0); }
          10%, 30% { transform: rotate(-10deg); }
          20%, 40% { transform: rotate(10deg); }
          50% { transform: rotate(0); }
        }
        .animate-ring {
          animation: ring 2s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
