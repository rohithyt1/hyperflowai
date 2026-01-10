import { Phone, Bot, Calendar, Bell, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    title: 'Call Comes In',
    description: 'Customer calls your business number',
    time: '0 sec',
  },
  {
    icon: Bot,
    title: 'AI Picks Up',
    description: 'Answers instantly, sounds human',
    time: '< 1 sec',
  },
  {
    icon: Calendar,
    title: 'Books Appointment',
    description: 'Checks calendar, schedules slot',
    time: '30 sec',
  },
  {
    icon: Bell,
    title: 'You Get Notified',
    description: 'SMS + email confirmation sent',
    time: '1 min',
  },
  {
    icon: CheckCircle,
    title: 'Customer Confirmed',
    description: 'Appointment in your calendar',
    time: 'Done!',
  },
];

export function SimpleWorkflow() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-background" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Bot className="w-4 h-4 text-primary" />
            <span>Simple Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            From Call to Booking in <span className="text-glow">60 Seconds</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            No hold music. No voicemail. Just instant, professional service.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop: Horizontal */}
          <div className="hidden md:flex items-start justify-between relative">
            {/* Connection Line */}
            <div className="absolute top-10 left-[10%] right-[10%] h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-full" />
            
            {steps.map((step, index) => (
              <div key={step.title} className="relative flex flex-col items-center text-center w-1/5">
                {/* Icon */}
                <div className="relative z-10 w-20 h-20 bg-card border-2 border-primary/50 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
                  <step.icon className="w-8 h-8 text-primary" />
                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="font-bold text-sm mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground mb-2">{step.description}</p>
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                  {step.time}
                </span>
              </div>
            ))}
          </div>

          {/* Mobile: Vertical */}
          <div className="md:hidden space-y-4">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/30" />
                )}
                
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="relative flex-shrink-0 w-12 h-12 bg-card border-2 border-primary/50 rounded-xl flex items-center justify-center shadow-lg">
                    <step.icon className="w-5 h-5 text-primary" />
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-4">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold">{step.title}</h3>
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {step.time}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom stat */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/30 px-6 py-3 rounded-full">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span className="font-medium">
              Average booking time: <span className="text-primary font-bold">47 seconds</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
