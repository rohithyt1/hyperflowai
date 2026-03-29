import { Clock, PhoneOff, Brain, TrendingUp, Headphones, AlertTriangle, CheckCircle2, XCircle, Zap } from 'lucide-react';

const comparisons = [
  {
    feature: '24/7 Availability',
    ai: 'Never sleeps, never takes breaks. Every call answered instantly.',
    human: 'Limited hours. Sick days, vacations, lunch breaks — calls get missed.',
    aiIcon: <CheckCircle2 className="w-5 h-5 text-green-400" />,
    humanIcon: <XCircle className="w-5 h-5 text-red-400" />,
  },
  {
    feature: 'Handling Objections',
    ai: 'Trained on thousands of scenarios. Consistent, calm, never flustered.',
    human: 'Depends on mood, training, and experience. Inconsistent results.',
    aiIcon: <CheckCircle2 className="w-5 h-5 text-green-400" />,
    humanIcon: <AlertTriangle className="w-5 h-5 text-yellow-400" />,
  },
  {
    feature: 'Call Recordings & Data',
    ai: 'Every call recorded, transcribed, and analyzed automatically.',
    human: 'Manual logging. Notes get lost. No analytics or insights.',
    aiIcon: <CheckCircle2 className="w-5 h-5 text-green-400" />,
    humanIcon: <XCircle className="w-5 h-5 text-red-400" />,
  },
  {
    feature: 'Cost Per Month',
    ai: 'Flat $249/mo. Unlimited calls. No overtime, no benefits.',
    human: '$2,500-4,000/mo salary + benefits + training + management.',
    aiIcon: <CheckCircle2 className="w-5 h-5 text-green-400" />,
    humanIcon: <XCircle className="w-5 h-5 text-red-400" />,
  },
  {
    feature: 'Scalability',
    ai: 'Handle 1 call or 1,000 simultaneously. Instant scale.',
    human: 'One person = one call. Need more? Hire more. Takes weeks.',
    aiIcon: <CheckCircle2 className="w-5 h-5 text-green-400" />,
    humanIcon: <XCircle className="w-5 h-5 text-red-400" />,
  },
  {
    feature: 'Consistency',
    ai: 'Same perfect tone every single time. No bad days.',
    human: 'Quality varies by person, mood, and workload.',
    aiIcon: <CheckCircle2 className="w-5 h-5 text-green-400" />,
    humanIcon: <AlertTriangle className="w-5 h-5 text-yellow-400" />,
  },
];

export function AIvsHuman() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.03] to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4 text-primary" />
            <span>Why Switch?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            AI Receptionist <span className="text-glow">vs</span> Human Receptionist
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Freelancers are time-dependent. Your AI receptionist isn't.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto">
          {/* Header Row */}
          <div className="grid grid-cols-3 gap-3 mb-4 px-4">
            <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Feature</div>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full text-sm font-bold text-primary">
                <Brain className="w-4 h-4" />
                HyperFlow AI
              </span>
            </div>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 bg-muted/50 border border-border/50 px-3 py-1.5 rounded-full text-sm font-bold text-muted-foreground">
                <Headphones className="w-4 h-4" />
                Human / Freelancer
              </span>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="space-y-3">
            {comparisons.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-3 items-start card-glow p-4 sm:p-5 hover:scale-[1.01] transition-transform duration-200"
              >
                <div>
                  <h3 className="font-bold text-sm sm:text-base">{item.feature}</h3>
                </div>
                <div className="flex items-start gap-2">
                  {item.aiIcon}
                  <p className="text-xs sm:text-sm text-foreground/80">{item.ai}</p>
                </div>
                <div className="flex items-start gap-2">
                  {item.humanIcon}
                  <p className="text-xs sm:text-sm text-muted-foreground">{item.human}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-card/50 border border-primary/20 rounded-2xl px-8 py-6">
            <div className="text-left">
              <p className="font-bold text-lg">Still paying a receptionist $3,000/mo?</p>
              <p className="text-muted-foreground text-sm">Switch to AI for $249/mo. Same results, 10x cheaper.</p>
            </div>
            <a
              href="https://cal.com/star-ment-yrerge/30min?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
            >
              Make the Switch →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
