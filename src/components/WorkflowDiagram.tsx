import { ArrowRight, MessageSquare, Brain, Zap, CheckCircle, Users, Settings } from 'lucide-react';
import workflowImage from '@/assets/workflow-diagram.jpg';

export function WorkflowDiagram() {
  const steps = [
    {
      icon: Users,
      title: 'Client Consultation',
      description: 'We analyze your business needs and identify automation opportunities',
      color: 'text-primary'
    },
    {
      icon: Brain,
      title: 'AI Strategy Design',
      description: 'Custom AI solution architecture tailored to your industry and goals',
      color: 'text-accent'
    },
    {
      icon: Settings,
      title: 'Development & Training',
      description: 'Building and training your AI agents with your specific data and workflows',
      color: 'text-primary-glow'
    },
    {
      icon: Zap,
      title: 'Integration & Testing',
      description: 'Seamless integration with your existing systems and thorough testing',
      color: 'text-primary'
    },
    {
      icon: CheckCircle,
      title: 'Deployment & Support',
      description: 'Live deployment with ongoing monitoring, support, and optimization',
      color: 'text-accent'
    }
  ];

  const services = [
    'Email Marketing Automation',
    'Instagram DM Management',
    'Customer Support Bots',
    'Appointment Scheduling',
    'Lead Qualification',
    'Website Chat Agents',
    'Social Media Automation',
    'CRM Integration'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-card/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            <span>How We Work</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-glow">Proven Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From consultation to deployment, we follow a systematic approach to ensure 
            your AI agents deliver maximum value and seamless integration.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="card-glow p-6 text-center group hover:scale-105 transition-all duration-500">
                <div className={`w-16 h-16 ${step.color} bg-current/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-sm">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-primary/50" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">
              What We <span className="text-glow">Automate</span>
            </h3>
            <p className="text-muted-foreground mb-8">
              Our AI agents can handle a wide range of business processes, from customer 
              communication to complex workflow automation. Here's what we specialize in:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img 
              src={workflowImage} 
              alt="AI Workflow Diagram" 
              className="w-full h-auto rounded-xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-xl"></div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-xl p-3 float">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-xl p-3 float" style={{ animationDelay: '2s' }}>
              <Brain className="w-6 h-6 text-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}