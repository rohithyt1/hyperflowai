import { ArrowRight, Phone, PhoneOff, PhoneCall, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';
import heroImage from '@/assets/ai-receptionist-hero.jpg';

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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="text-center lg:text-left">
            {/* Live badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-primary font-semibold">{callsAnswered.toLocaleString()}</span>
              <span className="text-muted-foreground">calls answered today</span>
            </div>

            {/* Simple headline - 4th grade readable */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Stop Losing Money to{' '}
              <span className="text-glow relative inline-block">
                Missed Calls
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6C40 2 120 2 198 6" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" className="animate-draw" />
                </svg>
              </span>
            </h1>

            {/* Super simple explanation */}
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Your AI receptionist answers every call.
              <br />
              <span className="text-foreground font-medium">Books appointments. 24/7. Even holidays.</span>
            </p>

            {/* Emoji flow */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-2xl mb-8 animate-fade-in" style={{ animationDelay: '0.25s' }}>
              <span>📞</span>
              <span className="text-muted-foreground">→</span>
              <span>🤖</span>
              <span className="text-muted-foreground">→</span>
              <span>📅</span>
              <span className="text-muted-foreground">→</span>
              <span>💰</span>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button 
                className="btn-hero group text-lg py-6 px-8"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <PhoneCall className="w-5 h-5 mr-2" />
                Start 7-Day Trial — $19
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Quick stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.35s' }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Setup in 24 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Right - Image with overlapping elements */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {/* Main image */}
            <div className="relative z-10 rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/10">
              <img 
                src={heroImage} 
                alt="AI Receptionist answering calls" 
                className="w-full h-auto"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Floating stat card */}
              <div className="absolute bottom-4 left-4 right-4 bg-card/90 backdrop-blur-sm border border-border/50 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground">Calls Answered Today</div>
                    <div className="text-2xl font-bold text-primary">{callsAnswered.toLocaleString()}</div>
                  </div>
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary animate-ring" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards - overlapping */}
            <div className="absolute -top-4 -right-4 z-20 bg-card border border-green-500/30 rounded-xl p-3 shadow-lg animate-float">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-green-500" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">New Booking</div>
                  <div className="text-sm font-semibold">+$350 revenue</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 z-20 bg-card border border-border/50 rounded-xl p-3 shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">AI Speaking</div>
                  <div className="text-sm font-semibold">"How can I help?"</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual comparison - animated */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mt-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          {/* Without */}
          <div className="card-glow p-6 border-destructive/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-destructive/50" />
            <PhoneOff className="w-10 h-10 text-destructive mx-auto mb-3 animate-shake" />
            <h3 className="font-bold text-lg mb-2 text-center">Without AI</h3>
            <p className="text-muted-foreground text-sm text-center">Missed calls = Lost customers</p>
            <div className="mt-3 text-destructive font-bold text-2xl text-center">-$3,750/mo</div>
          </div>

          {/* With */}
          <div className="card-glow p-6 border-primary/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary/50" />
            <Phone className="w-10 h-10 text-primary mx-auto mb-3 animate-ring" />
            <h3 className="font-bold text-lg mb-2 text-center">With AI</h3>
            <p className="text-muted-foreground text-sm text-center">Every call answered & booked</p>
            <div className="mt-3 text-primary font-bold text-2xl text-center">100% captured</div>
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
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
