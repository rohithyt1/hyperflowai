import { Phone, Bot, Calendar, DollarSign, ArrowRight, CheckCircle } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Phone,
      title: 'Customer Calls',
      subtitle: 'Your phone rings',
      description: "A potential customer calls your business number. Maybe during lunch, after hours, or when you're with another client.",
      visual: '📞',
      color: 'from-blue-500/20 to-blue-600/10',
      borderColor: 'border-blue-500/30',
      iconBg: 'bg-blue-500/20',
      iconColor: 'text-blue-400',
      details: ['Any time of day', 'Your existing number', 'Forwarded seamlessly'],
    },
    {
      icon: Bot,
      title: 'AI Answers Instantly',
      subtitle: 'Zero wait time',
      description: "Our AI receptionist picks up within 1 ring. Sounds natural, knows your business, and greets them by name if they've called before.",
      visual: '🤖',
      color: 'from-primary/20 to-primary/10',
      borderColor: 'border-primary/30',
      iconBg: 'bg-primary/20',
      iconColor: 'text-primary',
      details: ['Answers in 1 ring', 'Natural conversation', 'Remembers callers'],
    },
    {
      icon: Calendar,
      title: 'Books The Appointment',
      subtitle: 'Directly on your calendar',
      description: 'The AI checks your real-time availability, offers open slots, and books the appointment. Sends confirmation texts automatically.',
      visual: '📅',
      color: 'from-green-500/20 to-green-600/10',
      borderColor: 'border-green-500/30',
      iconBg: 'bg-green-500/20',
      iconColor: 'text-green-400',
      details: ['Syncs with your calendar', 'Sends reminders', 'Handles rescheduling'],
    },
    {
      icon: DollarSign,
      title: 'You Get Paid',
      subtitle: 'Customer shows up',
      description: 'The customer arrives for their appointment. You provide your service. Money in your pocket. No call was missed.',
      visual: '💰',
      color: 'from-yellow-500/20 to-orange-500/10',
      borderColor: 'border-yellow-500/30',
      iconBg: 'bg-yellow-500/20',
      iconColor: 'text-yellow-400',
      details: ['Higher show-up rate', 'More revenue', 'Less stress'],
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="text-2xl">⚡</span>
            <span>Simple 4-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How It <span className="text-glow">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From missed call to booked appointment in seconds. Here's exactly what happens when a customer calls your business.
          </p>
        </div>

        {/* Steps - Detailed cards */}
        <div className="max-w-6xl mx-auto space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`relative group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`card-glow p-6 md:p-8 h-full bg-gradient-to-br ${step.color} ${step.borderColor} border transition-all duration-500 hover:scale-[1.02] hover:shadow-xl`}>
                {/* Step number badge */}
                <div className="absolute -top-4 -left-2 md:-left-4">
                  <div className="relative">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold text-lg md:text-xl shadow-lg">
                      {index + 1}
                    </div>
                    {/* Pulse effect */}
                    <div className="absolute inset-0 bg-primary rounded-xl animate-ping opacity-20" />
                  </div>
                </div>

                {/* Arrow connector (desktop only) */}
                {index < steps.length - 1 && index % 2 === 0 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 lg:-right-6 z-20 -translate-y-1/2">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-card border border-border/50 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="flex flex-col h-full pt-4">
                  {/* Top row: emoji + title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-5xl md:text-6xl shrink-0">
                      {step.visual}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1">
                        Step {index + 1}
                      </p>
                      <h3 className="font-bold text-xl md:text-2xl mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Feature bullets */}
                  <div className="mt-auto pt-4 border-t border-border/30">
                    <div className="flex flex-wrap gap-2">
                      {step.details.map((detail, i) => (
                        <div 
                          key={i} 
                          className="flex items-center gap-1.5 text-xs bg-background/50 px-3 py-1.5 rounded-full"
                        >
                          <CheckCircle className={`w-3 h-3 ${step.iconColor}`} />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA / Summary */}
        <div className="text-center mt-16 md:mt-20">
          <div className="inline-flex items-center gap-4 bg-card border border-border/50 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-2 text-3xl md:text-4xl">
              <span>📞</span>
              <ArrowRight className="w-5 h-5 text-muted-foreground" />
              <span>🤖</span>
              <ArrowRight className="w-5 h-5 text-muted-foreground" />
              <span>📅</span>
              <ArrowRight className="w-5 h-5 text-muted-foreground" />
              <span>💰</span>
            </div>
          </div>
          <p className="text-xl text-muted-foreground mt-6">
            That's it. <span className="text-foreground font-semibold">Every call becomes revenue.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
