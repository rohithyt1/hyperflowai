import { useState } from 'react';
import { CheckCircle, ArrowRight, Zap, Phone, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

export function PaymentGateway() {
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async (planId: string) => {
    setIsProcessing(true);
    setSelectedPlan(planId);

    try {
      if (planId === 'enterprise') {
        window.open('https://cal.com/star-ment-yrerge/30min?overlayCalendar=true', '_blank');
        return;
      }

      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Redirecting to checkout",
        description: "You'll be redirected to our secure payment portal.",
      });

      // Will be replaced with Stripe
      window.open('https://cal.com/star-ment-yrerge/30min?overlayCalendar=true', '_blank');
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
      setSelectedPlan('');
    }
  };

  return (
    <section id="pricing" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Simple <span className="text-glow">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            One service. One price. No hidden fees.
          </p>
        </div>

        {/* Single focused plan */}
        <div className="max-w-lg mx-auto">
          <div className="relative card-glow p-6 sm:p-8 border-primary/50 ring-1 ring-primary/20">
            {/* Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                <Star className="w-4 h-4 fill-current" />
                Most Popular
              </div>
            </div>

            {/* Header */}
            <div className="text-center pt-4 mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">AI Receptionist</h3>
              <p className="text-muted-foreground">Everything you need to never miss a call</p>
            </div>

            {/* Price */}
            <div className="text-center py-6 border-y border-border/50">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl sm:text-6xl font-bold text-primary">$297</span>
                <span className="text-muted-foreground text-lg">/month</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Billed monthly • Cancel anytime</p>
            </div>

            {/* Features */}
            <ul className="space-y-4 py-6">
              {[
                'Unlimited incoming calls',
                'AI answers in your brand voice',
                'Books appointments automatically',
                'Syncs with your calendar',
                'SMS follow-ups included',
                'Call recordings & transcripts',
                'Works 24/7/365',
                'Setup done for you',
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button
              className="w-full btn-hero text-lg py-6 group"
              onClick={() => handlePayment('pro')}
              disabled={isProcessing && selectedPlan === 'pro'}
            >
              {isProcessing && selectedPlan === 'pro' ? (
                'Processing...'
              ) : (
                <>
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-4">
              14-day free trial • No credit card required
            </p>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-12 text-muted-foreground text-sm">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary" />
            <span>Setup in 24 hours</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>No contracts</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            <span>Keep your number</span>
          </div>
        </div>
      </div>
    </section>
  );
}
