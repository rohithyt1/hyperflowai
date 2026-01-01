import { ArrowRight, Calculator, DollarSign, Users, TrendingDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';
import { Input } from '@/components/ui/input';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Calculator state
  const [ticketPrice, setTicketPrice] = useState<string>('');
  const [missedLeads, setMissedLeads] = useState<string>('');
  const [recoveryRate, setRecoveryRate] = useState<string>('');
  const [result, setResult] = useState<{ loss: number; recovered: number; annual: number } | null>(null);

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

  // Calculate results when inputs change
  useEffect(() => {
    const price = parseFloat(ticketPrice) || 0;
    const leads = parseFloat(missedLeads) || 0;
    const recovery = parseFloat(recoveryRate) || 0;

    if (price > 0 && leads > 0) {
      const weeklyLoss = price * leads;
      const currentRecovery = weeklyLoss * (recovery / 100);
      const withAI = weeklyLoss * 0.85; // 85% recovery with AI
      const annualGain = (withAI - currentRecovery) * 52;
      
      setResult({
        loss: weeklyLoss,
        recovered: withAI - currentRecovery,
        annual: annualGain,
      });
    } else {
      setResult(null);
    }
  }, [ticketPrice, missedLeads, recoveryRate]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12 lg:pt-0 lg:pb-0"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/30" />
      
      {/* Interactive gradient that follows mouse */}
      <div 
        className="absolute inset-0 opacity-40 hidden md:block transition-all duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, hsl(var(--primary) / 0.2), transparent 50%)`,
        }}
      />

      {/* Floating 3D orbs with more movement */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[500px] h-[500px] bg-gradient-to-br from-primary/30 to-accent/10 rounded-full blur-[100px]"
          style={{
            top: '5%',
            left: '-10%',
            transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)`,
            transition: 'transform 0.8s ease-out',
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] bg-gradient-to-br from-accent/20 to-primary/5 rounded-full blur-[80px]"
          style={{
            bottom: '0%',
            right: '-5%',
            transform: `translate(${-mousePosition.x * 60}px, ${-mousePosition.y * 60}px)`,
            transition: 'transform 0.8s ease-out',
          }}
        />
        {/* Smaller accent orbs */}
        <div 
          className="absolute w-32 h-32 bg-primary/40 rounded-full blur-2xl"
          style={{
            top: '30%',
            right: '20%',
            transform: `translate(${mousePosition.x * 30}px, ${-mousePosition.y * 30}px)`,
            transition: 'transform 0.5s ease-out',
          }}
        />
        <div 
          className="absolute w-24 h-24 bg-accent/30 rounded-full blur-xl"
          style={{
            bottom: '30%',
            left: '15%',
            transform: `translate(${-mousePosition.x * 25}px, ${mousePosition.y * 25}px)`,
            transition: 'transform 0.5s ease-out',
          }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Hook + Message */}
          <div className="text-center lg:text-left">
            {/* Urgency badge */}
            <div className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/30 text-destructive px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <TrendingDown className="w-4 h-4" />
              <span>You're losing money right now</span>
            </div>

            {/* Hook headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Every Missed Call Is{' '}
              <span className="relative">
                <span className="text-glow">Cash Walking Away</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C50 4 150 2 298 6" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" className="animate-draw" />
                </svg>
              </span>
            </h1>

            {/* Pain point subtitle */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <span className="text-foreground font-medium">67% of callers</span> won't leave a voicemail. 
              They'll just call your competitor. Our AI answers every call, 24/7, so you never lose another lead.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button 
                className="btn-hero group text-base"
                onClick={() => window.open('https://cal.com/star-ment-yrerge/30min?overlayCalendar=true', '_blank')}
              >
                Stop Losing Leads
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                className="btn-secondary group text-base"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See Pricing
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span><span className="text-foreground font-semibold">847</span> calls answered today</span>
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="text-foreground font-semibold">$2.4M</span> recovered for clients
              </div>
            </div>
          </div>

          {/* Right side - Calculator */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Glow effect behind card */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-50" />
              
              <div className="relative bg-card/90 backdrop-blur-xl border border-border/50 rounded-2xl p-6 sm:p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-primary/20 rounded-xl">
                    <Calculator className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Revenue Loss Calculator</h3>
                    <p className="text-sm text-muted-foreground">See what missed calls really cost</p>
                  </div>
                </div>

                <div className="space-y-5">
                  {/* Input: Ticket Price */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-2">
                      <DollarSign className="w-4 h-4 text-primary" />
                      Average Sale/Ticket Value
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                      <Input
                        type="number"
                        placeholder="250"
                        value={ticketPrice}
                        onChange={(e) => setTicketPrice(e.target.value)}
                        className="pl-8 bg-background/50 border-border/50 h-12 text-lg"
                      />
                    </div>
                  </div>

                  {/* Input: Missed Leads */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-2">
                      <Users className="w-4 h-4 text-accent" />
                      Missed Calls Per Week
                    </label>
                    <Input
                      type="number"
                      placeholder="15"
                      value={missedLeads}
                      onChange={(e) => setMissedLeads(e.target.value)}
                      className="bg-background/50 border-border/50 h-12 text-lg"
                    />
                  </div>

                  {/* Input: Current Recovery */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-2">
                      <TrendingDown className="w-4 h-4 text-destructive" />
                      Current Callback Success Rate (%)
                    </label>
                    <Input
                      type="number"
                      placeholder="10"
                      max={100}
                      value={recoveryRate}
                      onChange={(e) => setRecoveryRate(e.target.value)}
                      className="bg-background/50 border-border/50 h-12 text-lg"
                    />
                  </div>
                </div>

                {/* Results */}
                {result && result.loss > 0 && (
                  <div className="mt-6 pt-6 border-t border-border/50 space-y-4 animate-fade-in">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Weekly revenue at risk</span>
                      <span className="text-destructive font-bold text-xl">
                        -${result.loss.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Extra weekly recovery with AI</span>
                      <span className="text-primary font-bold text-xl">
                        +${Math.round(result.recovered).toLocaleString()}
                      </span>
                    </div>
                    <div className="p-4 bg-primary/10 rounded-xl border border-primary/30">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Annual Revenue Recovered</span>
                        <span className="text-primary font-bold text-2xl sm:text-3xl">
                          +${Math.round(result.annual).toLocaleString()}
                        </span>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full btn-hero mt-4"
                      onClick={() => window.open('https://cal.com/star-ment-yrerge/30min?overlayCalendar=true', '_blank')}
                    >
                      <Sparkles className="w-5 h-5 mr-2" />
                      Claim Your Revenue Back
                    </Button>
                  </div>
                )}

                {/* Empty state hint */}
                {!result && (
                  <div className="mt-6 pt-6 border-t border-border/50 text-center text-muted-foreground">
                    <p className="text-sm">Enter your numbers to see your potential recovery</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      
      {/* CSS for draw animation */}
      <style>{`
        @keyframes draw {
          from { stroke-dashoffset: 300; }
          to { stroke-dashoffset: 0; }
        }
        .animate-draw {
          stroke-dasharray: 300;
          animation: draw 1s ease-out forwards;
          animation-delay: 0.5s;
          stroke-dashoffset: 300;
        }
      `}</style>
    </section>
  );
}
