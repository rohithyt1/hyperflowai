import { AlertTriangle, ArrowRight, CheckCircle2, X } from 'lucide-react';

export function ProblemSolution() {
  const problems = [
    { text: 'Missing calls and leads after hours', highlight: '67% of calls' },
    { text: 'Staff overwhelmed with repetitive questions', highlight: '80% same questions' },
    { text: 'Slow response times losing customers', highlight: '5+ min wait' },
    { text: 'Manual scheduling causing no-shows', highlight: '35% no-show rate' },
  ];

  const solutions = [
    { text: '24/7 AI that never sleeps', stat: '100% availability' },
    { text: 'Instant answers, human handoff when needed', stat: '<3 sec response' },
    { text: 'Automated booking with reminders', stat: '85% show rate' },
    { text: 'Every lead captured and qualified', stat: '0 missed leads' },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            The Gap You're <span className="text-glow">Not Seeing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            While you focus on running your business, these silent killers drain revenue.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Problems */}
            <div className="card-glow p-6 sm:p-8 border-destructive/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-destructive/20 rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">What's Costing You</h3>
              </div>
              
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 bg-destructive/5 rounded-lg border border-destructive/20"
                  >
                    <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-foreground">{problem.text}</p>
                      <span className="text-sm text-destructive font-medium">{problem.highlight}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div className="card-glow p-6 sm:p-8 border-primary/30 relative">
              {/* Arrow between cards - hidden on mobile */}
              <div className="hidden lg:flex absolute -left-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-background items-center justify-center z-10">
                <ArrowRight className="w-8 h-8 text-primary" />
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">How We Fix It</h3>
              </div>
              
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg border border-primary/20"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-foreground">{solution.text}</p>
                      <span className="text-sm text-primary font-medium">{solution.stat}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-10 md:mt-14">
            <p className="text-muted-foreground mb-4">See the difference in action</p>
            <button 
              onClick={() => window.open('https://cal.com/star-ment-yrerge/30min?overlayCalendar=true', '_blank')}
              className="btn-hero inline-flex items-center gap-2"
            >
              Get Your Free Audit
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
