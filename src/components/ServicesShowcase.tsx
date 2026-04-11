import { motion } from 'framer-motion';
import { Phone, MessageSquare, Globe, Star, ArrowRight, CheckCircle, Bot, Sparkles, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Phone,
    title: 'AI Receptionist',
    tagline: 'Never miss a call again',
    description: 'Your AI answers every phone call instantly — books appointments, answers questions, and handles objections. Sounds like a real person.',
    workflow: [
      { step: '1', text: 'Customer calls your number' },
      { step: '2', text: 'AI picks up in under 1 second' },
      { step: '3', text: 'Handles the conversation naturally' },
      { step: '4', text: 'Books appointment on your calendar' },
    ],
    freeBonus: 'AI Review System',
    color: 'from-blue-500/20 to-blue-600/10',
    borderColor: 'border-blue-500/30',
    iconColor: 'text-blue-400',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Automation',
    tagline: 'Sell & book via WhatsApp 24/7',
    description: 'Automate your entire WhatsApp — from replying to messages, booking appointments, sending follow-ups, to closing sales. All hands-free.',
    workflow: [
      { step: '1', text: 'Customer messages you on WhatsApp' },
      { step: '2', text: 'AI replies instantly with answers' },
      { step: '3', text: 'Qualifies the lead automatically' },
      { step: '4', text: 'Books or sells — sends confirmation' },
    ],
    freeBonus: 'Website Chat Widget',
    color: 'from-green-500/20 to-green-600/10',
    borderColor: 'border-green-500/30',
    iconColor: 'text-green-400',
  },
  {
    icon: Globe,
    title: 'Website Chat Widget',
    tagline: 'Turn visitors into customers',
    description: 'A smart chatbot on your website that greets visitors, answers their questions, captures leads, and books appointments — all automatically.',
    workflow: [
      { step: '1', text: 'Visitor lands on your website' },
      { step: '2', text: 'Chat widget greets them' },
      { step: '3', text: 'Answers questions from your knowledge base' },
      { step: '4', text: 'Captures contact info & books meeting' },
    ],
    freeBonus: null,
    color: 'from-purple-500/20 to-purple-600/10',
    borderColor: 'border-purple-500/30',
    iconColor: 'text-purple-400',
  },
  {
    icon: Star,
    title: 'AI Review System',
    tagline: 'Get 5-star reviews on autopilot',
    description: 'After every appointment, your AI automatically asks happy customers to leave reviews on Google, Facebook, or wherever you need them.',
    workflow: [
      { step: '1', text: 'Customer completes their visit' },
      { step: '2', text: 'AI sends a friendly review request' },
      { step: '3', text: 'Happy customers leave 5-star reviews' },
      { step: '4', text: 'Your online reputation grows' },
    ],
    freeBonus: null,
    color: 'from-yellow-500/20 to-yellow-600/10',
    borderColor: 'border-yellow-500/30',
    iconColor: 'text-yellow-400',
  },
];

export function ServicesShowcase() {
  return (
    <section id="services" className="py-16 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-5 py-2.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Bot className="w-4 h-4 text-primary" />
            <span>4 AI Services, 1 Platform</span>
            <Sparkles className="w-3 h-3 text-accent" />
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Everything Your Business{' '}
            <span className="text-glow">Needs to Grow</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Stop hiring staff for tasks AI can do better. Each service works on its own, but together they turn your business into a 24/7 money-making machine.
          </p>
        </motion.div>

        {/* Bundle deals banner */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-sm">
              <Gift className="w-4 h-4 text-blue-400" />
              <span>Buy <strong>AI Receptionist</strong> → get <strong className="text-blue-400">Review System FREE</strong></span>
            </div>
            <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full text-sm">
              <Gift className="w-4 h-4 text-green-400" />
              <span>Buy <strong>WhatsApp</strong> → get <strong className="text-green-400">Chat Widget FREE</strong></span>
            </div>
          </div>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`card-glow p-6 md:p-8 bg-gradient-to-br ${service.color} ${service.borderColor} border relative overflow-hidden group hover:scale-[1.02] transition-all duration-500`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Free bonus badge */}
              {service.freeBonus && (
                <div className="absolute top-4 right-4">
                  <span className="bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full border border-primary/30">
                    🎁 Free {service.freeBonus}
                  </span>
                </div>
              )}

              {/* Icon & Title */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.color} border ${service.borderColor} shrink-0`}>
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.tagline}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Workflow Steps */}
              <div className="space-y-3 mb-6">
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">How it works:</p>
                {service.workflow.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${service.iconColor} bg-current/10 border ${service.borderColor}`}>
                      <span className="text-foreground">{item.step}</span>
                    </div>
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button
                variant="outline"
                className="w-full group/btn"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get {service.title}
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
