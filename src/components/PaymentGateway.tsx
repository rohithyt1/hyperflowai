import { useState } from 'react';
import { Check, Phone, MessageSquare, Globe, Star, Sparkles, Shield, Gift, ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface ServicePlan {
  name: string;
  icon: React.ElementType;
  price: string;
  priceNum: number;
  badge?: string;
  freeWith?: string;
  features: string[];
  highlight?: boolean;
}

const services: ServicePlan[] = [
  {
    name: 'AI Receptionist',
    icon: Phone,
    price: '₹46,499',
    priceNum: 46499,
    badge: 'Most Popular',
    features: [
      'Unlimited inbound call handling',
      'Custom AI voice for your brand',
      'Calendar & CRM integration',
      'Call analytics dashboard',
      'Smart call transfers',
      'Email & SMS notifications',
    ],
    highlight: true,
  },
  {
    name: 'WhatsApp Automation',
    icon: MessageSquare,
    price: '₹5,999',
    priceNum: 5999,
    features: [
      'Full WhatsApp business automation',
      'Booking & scheduling via chat',
      'Lead qualification flows',
      'Auto-replies & follow-ups',
      'Multi-language support',
      'Broadcast messaging',
    ],
  },
  {
    name: 'Website Chat Widget',
    icon: Globe,
    price: '₹3,499',
    priceNum: 3499,
    features: [
      'Embedded AI chat on your site',
      'Real-time visitor assistance',
      'Lead capture & qualification',
      'Custom branding & styling',
      'Knowledge base integration',
      'Visitor analytics',
    ],
  },
  {
    name: 'AI Review System',
    icon: Star,
    price: '₹3,100',
    priceNum: 3100,
    features: [
      'Automated review requests',
      'Multi-platform support',
      'Sentiment analysis',
      'Response suggestions',
      'Review monitoring dashboard',
      'Reputation score tracking',
    ],
  },
];

const BUNDLE_PRICE = '₹42,999';
const BUNDLE_ORIGINAL = '₹59,097';

export function PaymentGateway() {
  const [isProcessing, setIsProcessing] = useState<string | null>(null);

  const handleClick = async (label: string) => {
    setIsProcessing(label);
    try {
      await new Promise(r => setTimeout(r, 400));
      toast({
        title: "Redirecting to consultation...",
        description: "Let's discuss the best setup for your business.",
      });
      window.open('https://cal.com/star-ment-yrerge/30min?overlayCalendar=true', '_blank');
    } finally {
      setIsProcessing(null);
    }
  };

  return (
    <section id="pricing" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            One-Time Setup. <span className="text-glow">No Subscriptions.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pay once for setup, then only for what you use. No hidden fees, no lock-ins.
          </p>
        </div>

        {/* Usage cost note */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Zap className="w-4 h-4" />
            <span>Monthly cost depends on usage — e.g. ~₹5,000/mo for 600 calls</span>
          </div>
        </div>

        {/* Bundle Deals Banner */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className="card-glow border-primary/30 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Gift className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Bundle & Save</h3>
                  <p className="text-sm text-muted-foreground">
                    <span className="text-primary font-semibold">AI Receptionist</span> → Free AI Review System &nbsp;•&nbsp;
                    <span className="text-primary font-semibold">WhatsApp Automation</span> → Free Website Widget
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Scroll down for the ultimate combo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-10">
          {services.map((service) => (
            <div
              key={service.name}
              className={`relative card-glow p-5 flex flex-col ${
                service.highlight
                  ? 'border-primary/50 bg-gradient-to-b from-primary/10 to-transparent lg:scale-[1.03] z-10'
                  : ''
              }`}
            >
              {service.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                    {service.badge}
                  </span>
                </div>
              )}

              <div className="text-center mb-5 pt-3">
                <div className={`w-11 h-11 mx-auto mb-3 rounded-xl flex items-center justify-center ${
                  service.highlight ? 'bg-primary/20' : 'bg-card border border-border/50'
                }`}>
                  <service.icon className={`w-5 h-5 ${service.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
                <h3 className="text-lg font-bold">{service.name}</h3>
              </div>

              <div className="text-center mb-5">
                <span className="text-3xl font-bold">{service.price}</span>
                <p className="text-xs text-muted-foreground mt-1">One-time setup + API costs/mo</p>
              </div>

              <ul className="space-y-2.5 mb-6 flex-1">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${service.highlight ? 'btn-hero' : ''}`}
                variant={service.highlight ? 'default' : 'outline'}
                onClick={() => handleClick(service.name)}
                disabled={isProcessing === service.name}
              >
                {isProcessing === service.name ? 'Processing...' : 'Get Started'}
              </Button>
            </div>
          ))}
        </div>

        {/* Ultimate Bundle Card */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="card-glow border-primary/40 bg-gradient-to-br from-primary/10 via-card/50 to-primary/5 p-6 sm:p-8 relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold mb-3">
                    <Sparkles className="w-3 h-3" />
                    BEST VALUE — SAVE ₹16,098
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">Complete AI Suite</h3>
                  <p className="text-muted-foreground mb-4">
                    All 4 services — AI Receptionist, WhatsApp Automation, Website Widget & AI Review System — in one powerful package.
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start mb-4">
                    {services.map(s => (
                      <div key={s.name} className="flex items-center gap-1.5 bg-card/80 border border-border/40 px-3 py-1.5 rounded-full text-xs font-medium">
                        <s.icon className="w-3.5 h-3.5 text-primary" />
                        {s.name}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center lg:text-right shrink-0">
                  <p className="text-sm text-muted-foreground line-through mb-1">{BUNDLE_ORIGINAL}</p>
                  <div className="text-4xl sm:text-5xl font-bold text-primary mb-1">{BUNDLE_PRICE}</div>
                  <p className="text-xs text-muted-foreground mb-4">One-time setup for all 4 services<br/>+ monthly API & maintenance per service</p>
                  <Button
                    className="btn-hero px-8"
                    onClick={() => handleClick('Complete Suite')}
                    disabled={isProcessing === 'Complete Suite'}
                  >
                    {isProcessing === 'Complete Suite' ? 'Processing...' : (
                      <>Get Complete Suite <ArrowRight className="w-4 h-4 ml-1" /></>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secure badge */}
        <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
          <Shield className="w-4 h-4 text-primary" />
          <span><span className="text-foreground font-medium">Secure payment</span> • No subscriptions • Pay only for usage</span>
        </div>
      </div>
    </section>
  );
}
