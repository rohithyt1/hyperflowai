import { X, Check, PhoneOff, PhoneCall, Clock, DollarSign } from 'lucide-react';

export function ProblemSolution() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            The <span className="text-destructive">Problem</span> Is Simple
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            You can't answer every call. But your customers expect you to.
          </p>
        </div>

        {/* Big visual comparison */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Without AI - The Problem */}
            <div className="card-glow p-6 md:p-8 border-destructive/30 relative">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-destructive to-destructive/50" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-destructive/20 rounded-xl">
                  <PhoneOff className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-bold">Right Now</h3>
              </div>

              <div className="space-y-4">
                {[
                  { icon: X, text: 'Miss calls when busy with customers' },
                  { icon: X, text: 'Miss calls after hours' },
                  { icon: X, text: 'Miss calls during lunch' },
                  { icon: X, text: 'Miss calls on weekends' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-destructive/5 rounded-lg">
                    <item.icon className="w-5 h-5 text-destructive flex-shrink-0" />
                    <span className="text-muted-foreground">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Result */}
              <div className="mt-6 p-4 bg-destructive/10 rounded-xl border border-destructive/30 text-center">
                <Clock className="w-8 h-8 text-destructive mx-auto mb-2" />
                <p className="text-sm text-muted-foreground mb-1">Average business misses</p>
                <p className="text-3xl font-bold text-destructive">62%</p>
                <p className="text-sm text-muted-foreground">of incoming calls</p>
              </div>
            </div>

            {/* With AI - The Solution */}
            <div className="card-glow p-6 md:p-8 border-primary/30 relative">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-accent" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/20 rounded-xl">
                  <PhoneCall className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">With HyperFlow</h3>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Check, text: 'AI answers while you work' },
                  { icon: Check, text: 'AI answers at 2am' },
                  { icon: Check, text: 'AI answers during meetings' },
                  { icon: Check, text: 'AI answers on holidays' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                    <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Result */}
              <div className="mt-6 p-4 bg-primary/10 rounded-xl border border-primary/30 text-center">
                <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground mb-1">Businesses recover</p>
                <p className="text-3xl font-bold text-primary">+$4,500</p>
                <p className="text-sm text-muted-foreground">per month on average</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
