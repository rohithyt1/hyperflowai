import { useState, useEffect } from 'react';
import { Clock, Zap, Gift, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function OfferTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const storedExpiry = localStorage.getItem('offerExpiry');
    let expiryTime: number;

    if (storedExpiry) {
      expiryTime = parseInt(storedExpiry);
    } else {
      expiryTime = Date.now() + 24 * 60 * 60 * 1000;
      localStorage.setItem('offerExpiry', expiryTime.toString());
    }

    const timer = setInterval(() => {
      const now = Date.now();
      const diff = expiryTime - now;

      if (diff <= 0) {
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

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 z-50 md:max-w-sm animate-fade-in">
      <div className="relative bg-card/95 backdrop-blur-md border border-primary/30 rounded-2xl p-4 shadow-2xl shadow-primary/10">
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 w-6 h-6 bg-card border border-border rounded-full flex items-center justify-center hover:bg-destructive/20 transition-colors"
        >
          <X className="w-3 h-3" />
        </button>

        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
            <Gift className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-3 h-3 text-accent" />
              <span className="text-accent font-semibold text-xs uppercase tracking-wide">Limited Offer</span>
            </div>
            <h3 className="font-bold text-sm">
              7-Day Trial — <span className="text-glow">Only $19</span>
            </h3>
          </div>
        </div>

        {/* Timer */}
        <div className="flex items-center justify-center gap-2 mb-3 bg-background/50 rounded-lg p-2">
          <Clock className="w-4 h-4 text-primary" />
          <div className="flex items-center gap-1 font-mono">
            <span className="bg-primary/20 text-primary px-2 py-1 rounded text-sm font-bold">
              {formatNumber(timeLeft.hours)}
            </span>
            <span className="text-muted-foreground">:</span>
            <span className="bg-primary/20 text-primary px-2 py-1 rounded text-sm font-bold">
              {formatNumber(timeLeft.minutes)}
            </span>
            <span className="text-muted-foreground">:</span>
            <span className="bg-accent/20 text-accent px-2 py-1 rounded text-sm font-bold">
              {formatNumber(timeLeft.seconds)}
            </span>
          </div>
        </div>

        <Button 
          className="w-full btn-hero text-sm py-2"
          onClick={scrollToPricing}
        >
          Claim Offer Now
        </Button>
      </div>
    </div>
  );
}
