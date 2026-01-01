import { Building2 } from 'lucide-react';

export function CompanyBanner() {
  const companies = [
    'TechStart Inc.',
    'Healthcare Plus',
    'Fashion Forward',
    'Local Services Co.',
    'Online Retail Hub',
    'Digital Marketing Pro',
    'E-commerce Solutions',
    'Business Automation Ltd.',
    'Customer Support Co.',
    'Growth Partners',
    'Smart Business Hub',
    'Innovation Labs'
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-primary/5 to-accent/5 overflow-hidden border-y border-border/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Building2 className="w-4 h-4" />
            <span>Trusted Partners</span>
          </div>
          <h2 className="text-2xl font-bold mb-2">
            Companies That <span className="text-glow">Trust Us</span>
          </h2>
          <p className="text-muted-foreground">
            Join hundreds of businesses already using our AI solutions
          </p>
        </div>

        {/* Sliding Banner */}
        <div className="relative">
          <div className="flex space-x-12 slide-infinite">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center space-x-3 bg-card/50 backdrop-blur-sm border border-border/30 rounded-lg px-6 py-4 hover:bg-card/80 transition-all duration-300"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-medium text-foreground whitespace-nowrap">
                  {company}
                </span>
              </div>
            ))}
          </div>
          
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">500+</div>
            <p className="text-sm text-muted-foreground">Active Clients</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent mb-1">50+</div>
            <p className="text-sm text-muted-foreground">Industries</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-glow mb-1">99.9%</div>
            <p className="text-sm text-muted-foreground">Uptime</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">24/7</div>
            <p className="text-sm text-muted-foreground">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}