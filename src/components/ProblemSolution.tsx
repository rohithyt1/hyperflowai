import { X, Check, PhoneOff, PhoneCall, Clock, DollarSign, MessageSquare, Globe, Star } from 'lucide-react';

export function ProblemSolution() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            The <span className="text-destructive">Problem</span> Every Business Faces
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            You're losing customers right now — and you probably don't even know it.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Without AI */}
            <div className="card-glow p-6 md:p-8 border-destructive/30 relative">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-destructive to-destructive/50" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-destructive/20 rounded-xl">
                  <PhoneOff className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-bold">Without HyperFlow</h3>
              </div>

              <div className="space-y-4">
                {[
                  'Missed calls when you\'re busy with customers',
                  'WhatsApp messages pile up unanswered',
                  'Website visitors leave without booking',
                  'Bad reviews sit unanswered for weeks',
                  'Weekends & holidays = zero coverage',
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-destructive/5 rounded-lg">
                    <X className="w-5 h-5 text-destructive flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-destructive/10 rounded-xl border border-destructive/30 text-center">
                <Clock className="w-8 h-8 text-destructive mx-auto mb-2" />
                <p className="text-sm text-muted-foreground mb-1">Result?</p>
                <p className="text-2xl font-bold text-destructive">Lost Customers Daily</p>
              </div>
            </div>

            {/* With AI */}
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
                  'AI answers every call — even at 3am',
                  'WhatsApp replies in seconds, books automatically',
                  'Website widget captures leads 24/7',
                  'AI asks for reviews & boosts your rating',
                  'Every channel covered, every single day',
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-primary/10 rounded-xl border border-primary/30 text-center">
                <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground mb-1">Result?</p>
                <p className="text-2xl font-bold text-primary">100% Captured</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
