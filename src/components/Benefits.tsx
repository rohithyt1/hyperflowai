import { Clock, DollarSign, Users, TrendingUp, Shield, Zap } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Your AI agents never sleep, providing round-the-clock customer service and support.',
      stat: '100%',
      statLabel: 'Uptime'
    },
    {
      icon: DollarSign,
      title: 'Cost Reduction',
      description: 'Reduce operational costs by up to 50% while maintaining high-quality customer interactions.',
      stat: '50%',
      statLabel: 'Cost Savings'
    },
    {
      icon: Users,
      title: 'Enhanced Customer Experience',
      description: 'Provide instant responses and personalized interactions that delight your customers.',
      stat: '95%',
      statLabel: 'Satisfaction'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Growth',
      description: 'Handle unlimited simultaneous conversations without hiring additional staff.',
      stat: '∞',
      statLabel: 'Scalability'
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security ensures your customer data remains protected and private.',
      stat: '99.9%',
      statLabel: 'Security'
    },
    {
      icon: Zap,
      title: 'Instant Deployment',
      description: 'Get your AI agents up and running in days, not months, with our rapid deployment process.',
      stat: '3',
      statLabel: 'Days Setup'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Choose <span className="text-glow">HyperFlow</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your business operations with AI agents that deliver measurable results 
            and exceptional customer experiences.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="relative group">
              <div className="card-glow p-8 h-full flex flex-col justify-between hover:scale-105 transition-all duration-500">
                {/* Icon and Title */}
                <div>
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground mb-6">{benefit.description}</p>
                </div>
                
                {/* Stat */}
                <div className="text-center pt-4 border-t border-border/50">
                  <div className="text-3xl font-bold text-primary mb-1">{benefit.stat}</div>
                  <div className="text-sm text-muted-foreground">{benefit.statLabel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="card-glow p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h3>
            <p className="text-xl text-muted-foreground mb-8">
              Join hundreds of businesses already using our AI agents to improve efficiency and customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero">Start Your Free Trial</button>
              <button className="btn-secondary">Schedule a Demo</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}