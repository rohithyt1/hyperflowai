import { Bot, MessageCircle, Calendar, Globe, ArrowRight, CheckCircle, Mail, Instagram, Zap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Services() {
  const services = [
    {
      icon: MessageCircle,
      title: 'AI Chat Bots',
      description: 'Intelligent conversational agents that handle customer inquiries, provide support, and guide users through complex processes 24/7.',
      features: ['Natural language processing', 'Multi-language support', 'Learning capabilities', 'Integration ready'],
      color: 'text-primary'
    },
    {
      icon: Calendar,
      title: 'Appointment Settlement Bots',
      description: 'Automated scheduling systems that manage bookings, send reminders, and handle cancellations seamlessly across time zones.',
      features: ['Calendar integration', 'SMS & email reminders', 'Conflict resolution', 'Time zone handling'],
      color: 'text-accent'
    },
    {
      icon: Globe,
      title: 'Website Chat Agents',
      description: 'Embedded chat solutions that provide real-time assistance, qualify leads, and convert visitors into customers.',
      features: ['Real-time responses', 'Lead qualification', 'Analytics dashboard', 'Custom branding'],
      color: 'text-primary-glow'
    },
    {
      icon: Mail,
      title: 'Email Automation',
      description: 'AI-powered email marketing that personalizes content, optimizes send times, and nurtures leads automatically.',
      features: ['Smart segmentation', 'A/B testing', 'Behavioral triggers', 'Performance analytics'],
      color: 'text-primary'
    },
    {
      icon: Instagram,
      title: 'Instagram DM Automation',
      description: 'Automate Instagram direct messages to engage followers, respond to inquiries, and drive sales through social media.',
      features: ['Auto-replies', 'Lead qualification', 'Story interactions', 'Follower engagement'],
      color: 'text-accent'
    },
    {
      icon: Bot,
      title: 'Custom AI Solutions',
      description: 'Tailored AI agents designed specifically for your business needs, industry requirements, and unique workflows.',
      features: ['Custom training', 'API integrations', 'Workflow automation', 'Dedicated support'],
      color: 'text-primary-glow'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Bot className="w-4 h-4" />
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive <span className="text-glow">AI Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From customer service to appointment management, we provide end-to-end AI agent solutions 
            that transform how your business operates and engages with customers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="card-glow p-8 group hover:scale-105 hover:-translate-y-2 transition-all duration-500">
              <div className={`w-16 h-16 ${service.color} bg-current/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <service.icon className={`w-8 h-8 ${service.color}`} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="btn-outline-glow w-full group/btn">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="card-glow p-12 text-center">
          <h3 className="text-3xl font-bold mb-8">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">1</div>
              <h4 className="text-xl font-semibold">Consultation</h4>
              <p className="text-muted-foreground">We analyze your business needs and design a custom AI solution strategy.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto text-accent-foreground font-bold text-xl">2</div>
              <h4 className="text-xl font-semibold">Development</h4>
              <p className="text-muted-foreground">Our team builds and trains your AI agents with your specific requirements.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary-glow rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">3</div>
              <h4 className="text-xl font-semibold">Deployment</h4>
              <p className="text-muted-foreground">We deploy your AI agents and provide ongoing support and optimization.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}