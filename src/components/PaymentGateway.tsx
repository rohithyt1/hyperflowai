import { useState } from 'react';
import { CreditCard, CheckCircle, Sparkles, ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface Plan {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

export function PaymentGateway() {
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans: Plan[] = [
    {
      id: 'alpha',
      name: 'Starter',
      price: 249,
      description: 'Perfect for small businesses getting started with AI automation',
      features: [
        'AI Phone Agent (unlimited calls)',
        'Google Sheets integration',
        'Basic analytics dashboard',
        'Email support',
        'Setup assistance included',
      ],
      cta: 'Start Free Trial',
    },
    {
      id: 'beta',
      name: 'Growth',
      price: 349,
      description: 'Complete solution for growing businesses ready to scale',
      features: [
        'Everything in Starter, plus:',
        'Website chatbot included',
        'Call transcripts & summaries',
        'Automated follow-ups',
        'Custom AI training',
        'Priority support',
      ],
      popular: true,
      cta: 'Start Free Trial',
    },
    {
      id: 'sigma',
      name: 'Enterprise',
      price: 0,
      description: 'Custom-built solution for large teams with complex needs',
      features: [
        'Everything in Growth, plus:',
        'Dedicated account manager',
        'Custom integrations',
        'Multi-language support',
        'White-label options',
        'SLA guarantee',
        'API access',
      ],
      cta: 'Talk to Sales',
    },
  ];

  const getDisplayPrice = (price: number) => {
    if (price === 0) return 'Custom';
    if (billingCycle === 'yearly') {
      return Math.round(price * 0.8);
    }
    return price;
  };

  const getYearlySavings = (price: number) => {
    return Math.round(price * 12 * 0.2);
  };

  const handlePayment = async (planId: string) => {
    setIsProcessing(true);
    setSelectedPlan(planId);

    try {
      if (planId === 'sigma') {
        window.open('https://cal.com/star-ment-yrerge/30min?overlayCalendar=true', '_blank');
        return;
      }

      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Redirecting to checkout",
        description: "You'll be redirected to our secure payment portal.",
      });

      // Replace with actual Stripe integration
      const checkoutUrl = `https://hyperflow.space/checkout?plan=${planId}&cycle=${billingCycle}`;
      window.open(checkoutUrl, '_blank');
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
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Simple, <span className="text-glow">Transparent</span> Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            No hidden fees. No surprises. Cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 bg-card border border-border/50 rounded-full p-1.5">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                billingCycle === 'yearly'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Yearly
              <span className="bg-accent text-accent-foreground text-xs px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative card-glow p-6 md:p-8 flex flex-col ${
                plan.popular ? 'border-primary/50 ring-1 ring-primary/20' : ''
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  {plan.price === 0 ? (
                    <span className="text-3xl font-bold text-primary">Custom</span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold text-primary">
                        ${getDisplayPrice(plan.price)}
                      </span>
                      <span className="text-muted-foreground">/month</span>
                    </>
                  )}
                </div>
                {plan.price > 0 && billingCycle === 'yearly' && (
                  <p className="text-sm text-accent font-medium">
                    Save ${getYearlySavings(plan.price)}/year
                  </p>
                )}
                <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                className={`w-full ${plan.popular ? 'btn-hero' : 'btn-secondary'}`}
                onClick={() => handlePayment(plan.id)}
                disabled={isProcessing && selectedPlan === plan.id}
              >
                {isProcessing && selectedPlan === plan.id ? (
                  'Processing...'
                ) : plan.id === 'sigma' ? (
                  <>
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                ) : (
                  <>
                    <CreditCard className="w-4 h-4 mr-2" />
                    {plan.cta}
                  </>
                )}
              </Button>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-muted-foreground text-sm">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary" />
            <span>Setup in 48 hours</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-primary" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
