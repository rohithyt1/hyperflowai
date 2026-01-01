import { ArrowRight, Check, X, Zap, Clock, Users, TrendingUp, Phone, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ProblemSolution() {
  const comparison = [
    { 
      problem: 'Missed calls go to voicemail',
      problemStat: '67% never call back',
      solution: 'AI answers every call instantly',
      solutionStat: '100% answered',
      icon: Phone
    },
    { 
      problem: 'Staff buried in repetitive questions',
      problemStat: '80% same 10 questions',
      solution: 'AI handles FAQs automatically',
      solutionStat: '85% resolved',
      icon: Users
    },
    { 
      problem: 'Slow response = lost customers',
      problemStat: '5+ minute wait times',
      solution: 'Instant response, 24/7/365',
      solutionStat: '<3 seconds',
      icon: Clock
    },
    { 
      problem: 'No-shows drain revenue',
      problemStat: '35% no-show rate',
      solution: 'Automated reminders & confirmations',
      solutionStat: '85% show rate',
      icon: TrendingUp
    },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />
      <div className="absolute left-0 top-1/2 w-72 h-72 bg-destructive/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute right-0 top-1/2 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/20 px-4 py-2 rounded-full text-sm font-medium text-destructive mb-4">
            <Zap className="w-4 h-4" />
            <span>The Silent Revenue Killers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What You're <span className="text-destructive">Losing</span> vs What You <span className="text-glow">Could Gain</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every day without AI automation, you're leaving money on the table.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop Table */}
          <div className="hidden md:block">
            <div className="grid grid-cols-[1fr,2fr,2fr] gap-0 rounded-2xl overflow-hidden border border-border/50">
              {/* Header */}
              <div className="bg-card/80 p-4 border-b border-border/50" />
              <div className="bg-destructive/10 p-4 border-b border-border/50 text-center">
                <div className="flex items-center justify-center gap-2">
                  <X className="w-5 h-5 text-destructive" />
                  <span className="font-bold text-lg">Without HyperFlow</span>
                </div>
              </div>
              <div className="bg-primary/10 p-4 border-b border-border/50 text-center">
                <div className="flex items-center justify-center gap-2">
                  <Bot className="w-5 h-5 text-primary" />
                  <span className="font-bold text-lg">With HyperFlow</span>
                </div>
              </div>

              {/* Rows */}
              {comparison.map((row, index) => {
                const Icon = row.icon;
                return (
                  <>
                    <div key={`icon-${index}`} className="bg-card/50 p-4 flex items-center justify-center border-b border-border/30">
                      <div className="p-2 bg-muted rounded-lg">
                        <Icon className="w-5 h-5 text-muted-foreground" />
                      </div>
                    </div>
                    <div key={`problem-${index}`} className="bg-destructive/5 p-4 border-b border-border/30">
                      <p className="font-medium text-foreground">{row.problem}</p>
                      <span className="text-sm text-destructive font-semibold">{row.problemStat}</span>
                    </div>
                    <div key={`solution-${index}`} className="bg-primary/5 p-4 border-b border-border/30">
                      <p className="font-medium text-foreground">{row.solution}</p>
                      <span className="text-sm text-primary font-semibold">{row.solutionStat}</span>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {comparison.map((row, index) => {
              const Icon = row.icon;
              return (
                <div key={index} className="card-glow p-4 space-y-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 bg-muted rounded-lg">
                      <Icon className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-destructive/10 rounded-lg">
                    <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">{row.problem}</p>
                      <span className="text-xs text-destructive">{row.problemStat}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-primary/10 rounded-lg">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">{row.solution}</p>
                      <span className="text-xs text-primary">{row.solutionStat}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-10 md:mt-14">
            <p className="text-muted-foreground mb-4">Ready to stop the bleeding?</p>
            <Button 
              onClick={() => window.open('https://cal.com/star-ment-yrerge/30min?overlayCalendar=true', '_blank')}
              className="btn-hero inline-flex items-center gap-2"
            >
              Get Your Free Audit
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
