import { Layout } from '@/components/Layout';
import { Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PaymentGateway } from '@/components/PaymentGateway';

export default function PricingPage() {
  return (
    <Layout>
      <div className="pt-12">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-background to-card/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Bot className="w-4 h-4" />
                <span>Pricing Plans</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Simple, <span className="text-glow">Transparent Pricing</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Choose the perfect AI solution for your business. Start with any plan and upgrade as you grow.
              </p>
            </div>
          </div>
        </section>

        {/* Payment Gateway */}
        <PaymentGateway />

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="card-glow p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss your specific needs and create an AI solution that transforms your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="btn-hero"
                  onClick={() => window.open('https://cal.com/star-ment-yrerge/30min?overlayCalendar=true', '_blank')}
                >
                  Schedule Consultation
                </Button>
                <Button 
                  className="btn-secondary"
                  onClick={() => window.open('https://hyperflow.space/case-studies', '_blank')}
                >
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}