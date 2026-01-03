import { ArrowRight, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCurrency } from '@/hooks/useCurrency';

export function FinalCTA() {
  const { formatPrice } = useCurrency();
  const trialPriceUSD = 19;

  const benefits = [
    'Setup in 24 hours', 
    `7-day trial for ${formatPrice(trialPriceUSD)}`, 
    'No contracts'
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-8 rotate-3 hover:rotate-0 transition-transform duration-500">
            <Phone className="w-10 h-10 text-primary" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Stop Missing Calls.<br />
            <span className="text-glow">Start Making Money.</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
            Every missed call is a customer calling your competitor. Let's fix that today.
          </p>

          {/* Quick benefits */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-10">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Button 
            className="btn-hero text-lg py-6 px-10 group"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start 7-Day Trial — {formatPrice(trialPriceUSD)}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="text-sm text-muted-foreground mt-4">
            30-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
}
