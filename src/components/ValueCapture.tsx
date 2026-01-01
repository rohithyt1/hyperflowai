import { useState } from 'react';
import { Play, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

export function ValueCapture() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail('');
    
    toast({
      title: "You're in!",
      description: "Check your inbox for the free automation guide.",
    });
  };

  const benefits = [
    '5 automations you can set up today',
    'Real ROI calculator included',
    'No fluff, just actionable steps',
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="card-glow p-6 sm:p-10 md:p-14">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left - Video placeholder */}
              <div className="relative order-2 lg:order-1">
                <div className="aspect-video rounded-xl bg-gradient-to-br from-card to-secondary/50 border border-border/50 overflow-hidden relative group cursor-pointer">
                  {/* Video thumbnail placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                  
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/30">
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 bg-card/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-accent" />
                    <span>2 min watch</span>
                  </div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-accent text-accent-foreground px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold shadow-lg">
                  Free Guide Inside
                </div>
              </div>

              {/* Right - Content */}
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium mb-4">
                  <Sparkles className="w-4 h-4" />
                  <span>Free Resource</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                  Stop Losing Leads While You Sleep
                </h2>

                <p className="text-muted-foreground mb-6 text-base sm:text-lg">
                  Get our free automation playbook. See exactly what you're missing and how to fix it — no sales pitch, just value.
                </p>

                {/* Benefits */}
                <ul className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3 justify-center lg:justify-start">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm sm:text-base">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Form */}
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 px-4 py-3 bg-card border border-border/50 rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
                    />
                    <Button 
                      type="submit" 
                      className="btn-hero whitespace-nowrap group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Get Free Guide'}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                ) : (
                  <div className="flex items-center gap-3 justify-center lg:justify-start text-primary">
                    <CheckCircle className="w-6 h-6" />
                    <span className="font-medium">Check your inbox!</span>
                  </div>
                )}

                <p className="text-xs text-muted-foreground mt-3">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
