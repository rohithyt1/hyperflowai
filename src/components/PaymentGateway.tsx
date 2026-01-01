import { useState } from 'react';
import { CreditCard, Shield, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { toast } from '@/hooks/use-toast';
interface PaymentPlan {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
}
export function PaymentGateway() {
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const plans: PaymentPlan[] = [{
    id: 'alpha',
    name: 'Alpha',
    price: 249,
    description: 'Essential call management for growing businesses',
    features: ['Call will be picked up and answered', 'Unlimited calls', 'Google Sheets updated automatically', 'Basic call analytics', 'Email support']
  }, {
    id: 'beta',
    name: 'Beta',
    price: 349,
    description: 'Complete AI solution with advanced features',
    features: ['All Alpha features included', 'Call transcript summary', 'Follow-ups for calls', 'Chatbot for your website', 'Custom data trained bot', 'Custom integrations', 'Priority support']
  }, {
    id: 'sigma',
    name: 'Sigma',
    price: 0,
    // Custom pricing
    description: 'Enterprise-grade solution built specifically for your needs',
    features: ['All Beta features included', 'Custom AI model development', 'Dedicated account manager', 'Multi-language support', 'Advanced analytics dashboard', '24/7 dedicated support', 'White-label solutions', 'API access', 'Custom development & integrations']
  }];
  const getDisplayPrice = (price: number) => {
    if (price === 0) return 0; // Custom pricing
    if (billingCycle === 'yearly') {
      return Math.round(price * 12 * 0.8); // 20% discount on annual price (full year amount)
    }
    return price; // Monthly price
  };
  const getOriginalPrice = (planId: string) => {
    if (planId === 'alpha') return 479;
    if (planId === 'beta') return 899;
    return 0;
  };
  const getSavings = (price: number) => {
    return Math.round(price * 12 * 0.2); // 20% savings on annual
  };
  const handlePayment = async (planId: string) => {
    setIsProcessing(true);
    setSelectedPlan(planId);
    try {
      if (planId === 'sigma') {
        // Open scheduling calendar for custom plan
        window.open('https://cal.com/star-ment-yrerge/30min?overlayCalendar=true', '_blank');
        return;
      }

      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Here you would integrate with actual payment gateway
      // Example: Stripe, PayPal, etc.
      const checkoutUrl = `https://hyperflow.space/checkout?plan=${planId}`;
      window.open(checkoutUrl, '_blank');
      toast({
        title: "Redirecting to payment",
        description: "You'll be redirected to our secure payment portal."
      });
    } catch (error) {
      toast({
        title: "Payment error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
      setSelectedPlan('');
    }
  };
  return <div className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Choose Your <span className="text-glow">AI Solution</span>
          </h2>
          
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mt-8 mb-8">
            <span className={`mr-3 ${billingCycle === 'monthly' ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <ToggleGroup type="single" value={billingCycle} onValueChange={value => value && setBillingCycle(value as 'monthly' | 'yearly')} className="bg-muted rounded-lg p-1">
              <ToggleGroupItem value="monthly" className="px-4">
                Monthly
              </ToggleGroupItem>
              <ToggleGroupItem value="yearly" className="px-4">
                Yearly
              </ToggleGroupItem>
            </ToggleGroup>
            <span className={`ml-3 ${billingCycle === 'yearly' ? 'text-foreground' : 'text-muted-foreground'}`}>
              Yearly
            </span>
            {billingCycle === 'yearly' && <span className="ml-2 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold">
                Save 20%
              </span>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map(plan => <Card key={plan.id} className="p-8 hover:shadow-[var(--shadow-glow)] transition-all duration-300 relative overflow-hidden">
              {plan.id === 'beta' && <div className="absolute -top-1 -right-1 bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold transform rotate-12">
                  POPULAR
                </div>}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                {plan.id === 'sigma' ? <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-primary mb-2">Custom Pricing</div>
                    <p className="text-muted-foreground">Let's build something amazing together</p>
                  </div> : <>
                    {billingCycle === 'monthly' && <div className="text-sm text-muted-foreground line-through mb-1">
                        ${getOriginalPrice(plan.id)}/month
                      </div>}
                    <div className="text-4xl font-bold text-primary mb-2">
                      ${getDisplayPrice(plan.price)}
                      <span className="text-lg text-muted-foreground">/{billingCycle === 'yearly' ? 'year' : 'month'}</span>
                    </div>
                    {billingCycle === 'monthly' && <div className="text-sm text-green-600 font-semibold">
                        20% OFF - Limited Time!
                      </div>}
                    {billingCycle === 'yearly' && <>
                        <div className="text-sm text-muted-foreground line-through">
                          ${plan.price * 12}/year
                        </div>
                        <div className="text-sm text-green-600 font-semibold">
                          Save ${getSavings(plan.price)}/year
                        </div>
                      </>}
                  </>}
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>)}
              </ul>

              <Button className={`w-full ${plan.id === 'beta' ? 'btn-hero' : 'btn-secondary'}`} onClick={() => handlePayment(plan.id)} disabled={isProcessing && selectedPlan === plan.id}>
                {isProcessing && selectedPlan === plan.id ? "Processing..." : plan.id === 'sigma' ? "Contact Us" : <>
                    <CreditCard className="w-4 h-4 mr-2" />
                    Get Started
                  </>}
              </Button>
            </Card>)}
        </div>

        <div className="mt-16 text-center">
        </div>
      </div>
    </div>;
}