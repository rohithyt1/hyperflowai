import { useState, useEffect } from 'react';
import { Clock, Zap, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function OfferTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    // Get or set expiry time in localStorage
    const storedExpiry = localStorage.getItem('offerExpiry');
    let expiryTime: number;

    if (storedExpiry) {
      expiryTime = parseInt(storedExpiry);
    } else {
      // Set expiry to 24 hours from now
      expiryTime = Date.now() + 24 * 60 * 60 * 1000;
      localStorage.setItem('offerExpiry', expiryTime.toString());
    }

    const timer = setInterval(() => {
      const now = Date.now();
      const diff = expiryTime - now;

      if (diff <= 0) {
        // Reset the timer
        expiryTime = Date.now() + 24 * 60 * 60 * 1000;
        localStorage.setItem('offerExpiry', expiryTime.toString());
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        hours: Math.max(0, hours),
        minutes: Math.max(0, minutes),
        seconds: Math.max(0, seconds),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <section className="py-8 md:py-12 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="card-glow p-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left - Offer info */}
            <div className="flex items-center gap-4 text-center lg:text-left">
              <div className="hidden sm:flex w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl items-center justify-center flex-shrink-0">
                <Gift className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <div className="flex items-center gap-2 justify-center lg:justify-start mb-1">
                  <Zap className="w-4 h-4 text-accent" />
                  <span className="text-accent font-semibold text-sm uppercase tracking-wide">Limited Offer</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Get <span className="text-glow">30% OFF</span> First Month
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Start automating before time runs out
                </p>
              </div>
            </div>

            {/* Center - Timer */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Clock className="w-5 h-5 text-primary hidden sm:block" />
              <div className="flex gap-2 sm:gap-3">
                <div className="flex flex-col items-center">
                  <div className="bg-card border border-border/50 rounded-lg px-3 py-2 sm:px-4 sm:py-3 min-w-[50px] sm:min-w-[60px]">
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold text-primary font-mono">
                      {formatNumber(timeLeft.hours)}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground mt-1">Hours</span>
                </div>
                <span className="text-xl sm:text-2xl font-bold text-muted-foreground self-start mt-2 sm:mt-3">:</span>
                <div className="flex flex-col items-center">
                  <div className="bg-card border border-border/50 rounded-lg px-3 py-2 sm:px-4 sm:py-3 min-w-[50px] sm:min-w-[60px]">
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold text-primary font-mono">
                      {formatNumber(timeLeft.minutes)}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground mt-1">Mins</span>
                </div>
                <span className="text-xl sm:text-2xl font-bold text-muted-foreground self-start mt-2 sm:mt-3">:</span>
                <div className="flex flex-col items-center">
                  <div className="bg-card border border-border/50 rounded-lg px-3 py-2 sm:px-4 sm:py-3 min-w-[50px] sm:min-w-[60px]">
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold text-accent font-mono">
                      {formatNumber(timeLeft.seconds)}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground mt-1">Secs</span>
                </div>
              </div>
            </div>

            {/* Right - CTA */}
            <Button 
              className="btn-hero whitespace-nowrap"
              onClick={() => window.location.href = '/services'}
            >
              Claim Offer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
