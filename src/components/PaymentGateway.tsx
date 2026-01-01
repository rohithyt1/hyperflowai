import { useState } from 'react';
import { Check, Zap, Crown, Rocket, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const plans = [
  {
    name: 'Monthly',
    subtitle: 'Flexible',
    price: '$249',
    period: '/month',
    description: 'Pay as you go',
    icon: Zap,
    features: [
      'Unlimited calls handled',
      'Custom AI voice for your brand',
      'Calendar integration',
      'Email notifications',
      'Standard support',
      'Call analytics',
    ],
    cta: 'Get Started',
    popular: false,
    savings: null,
  },
  {
    name: '6 Months',
    subtitle: 'Best Value',
    price: '$1,329',
    period: '/6 months',
    description: '$221.50/mo • Save $165',
    icon: Crown,
    features: [
      'Unlimited calls handled',
      'Custom AI voice for your brand',
      'Calendar integration',
      'CRM integration',
      'SMS notifications',
      'Priority support',
      'Call analytics dashboard',
    ],
    cta: 'Save $165',
    popular: true,
    savings: 165,
  },
  {
    name: 'Enterprise',
    subtitle: 'Custom',
    price: 'Custom',
    period: '',
    description: 'For large organizations',
    icon: Rocket,
    features: [
      'Everything in 6-Month plan',
      'Multiple locations',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantee',
      'White-label options',
      'API access',
    ],
    cta: 'Contact Us',
    popular: false,
    savings: null,
  },
];

export function PaymentGateway() {
  const [isProcessing, setIsProcessing] = useState<string | null>(null);

  const handlePlanClick = async (planName: string) => {
    setIsProcessing(planName);

    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      toast({
        title: "Redirecting...",
        description: planName === 'Sigma' 
          ? "Opening booking calendar for consultation." 
          : "You'll be redirected to complete your order.",
      });

      // Placeholder - will be replaced with Stripe
      window.open('https://cal.com/star-ment-yrerge/30min?overlayCalendar=true', '_blank');
    } finally {
      setIsProcessing(null);
    }
  };

  return (
    <section id="pricing" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Simple, <span className="text-glow">Transparent</span> Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Choose the plan that fits your business. No hidden fees.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative card-glow p-6 flex flex-col ${
                plan.popular 
                  ? 'border-primary/50 bg-gradient-to-b from-primary/10 to-transparent md:scale-105 z-10' 
                  : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-6 pt-2">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                  plan.popular ? 'bg-primary/20' : 'bg-card border border-border/50'
                }`}>
                  <plan.icon className={`w-6 h-6 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${plan.popular ? 'btn-hero' : ''}`}
                variant={plan.popular ? 'default' : 'outline'}
                onClick={() => handlePlanClick(plan.name)}
                disabled={isProcessing === plan.name}
              >
                {isProcessing === plan.name ? 'Processing...' : plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Money back guarantee */}
        <div className="flex items-center justify-center gap-2 mt-12 text-muted-foreground text-sm">
          <Shield className="w-4 h-4 text-primary" />
          <span><span className="text-foreground font-medium">30-day money-back guarantee</span> • No questions asked</span>
        </div>
      </div>
    </section>
  );
}
