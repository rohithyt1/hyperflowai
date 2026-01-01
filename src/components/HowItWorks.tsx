import { Phone, Bot, Calendar, Sparkles } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Phone,
      title: 'Customer Calls',
      description: 'Someone calls your business',
      visual: '📞',
    },
    {
      icon: Bot,
      title: 'AI Answers',
      description: 'Our AI picks up instantly',
      visual: '🤖',
    },
    {
      icon: Calendar,
      title: 'Books Appointment',
      description: 'Schedules them on your calendar',
      visual: '📅',
    },
    {
      icon: Sparkles,
      title: 'You Get Paid',
      description: 'Customer shows up, you make money',
      visual: '💰',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How It <span className="text-glow">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            It's really this simple. No complicated setup.
          </p>
        </div>

        {/* Steps - Visual flow */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0" />
                )}
                
                <div className="card-glow p-6 text-center relative z-10 hover:scale-105 transition-transform duration-300">
                  {/* Step number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  {/* Big emoji visual */}
                  <div className="text-5xl sm:text-6xl mb-4 animate-bounce-slow" style={{ animationDelay: `${index * 0.2}s` }}>
                    {step.visual}
                  </div>
                  
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Simple message */}
          <div className="text-center mt-12">
            <p className="text-xl text-muted-foreground">
              That's it. <span className="text-foreground font-semibold">No more missed calls.</span>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
