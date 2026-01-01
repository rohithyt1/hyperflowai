import { ArrowRight, Bot, MessageSquare, Calendar, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-ai-robot.jpg';
import elements3d from '@/assets/3d-elements.jpg';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/30"></div>
      
      {/* 3D Floating Elements */}
      <div className="absolute inset-0">
        <img 
          src={elements3d} 
          alt="3D Elements" 
          className="absolute top-10 right-10 w-32 h-32 opacity-20 float"
        />
        <div className="absolute top-1/4 left-10 w-16 h-16 bg-primary/20 rounded-full blur-xl pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-accent/20 rounded-lg blur-xl float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Particle Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Bot className="w-4 h-4" />
                <span>AI-Powered Business Solutions</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Transform Your Business with{' '}
                <span className="text-glow">Intelligent AI Agents</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Automate customer service, streamline appointments, enhance your website with AI chat agents, 
                plus email automation and Instagram DM management. Available 24/7, scalable, and tailored to your business needs.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="btn-hero group"
                onClick={() => window.location.href = '/services'}
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="btn-outline-glow group">
                Watch Demo
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Availability</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50%</div>
                <div className="text-sm text-muted-foreground">Cost Reduction</div>
              </div>
            </div>
          </div>

          {/* Hero Image with 3D Effect */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="AI Robot Assistant" 
                className="w-full h-auto rounded-2xl shadow-2xl pulse-glow"
              />
            </div>
            
            {/* Floating Service Icons */}
            <div className="absolute -top-8 -left-8 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-4 float">
              <MessageSquare className="w-8 h-8 text-primary" />
              <div className="mt-2 text-sm font-medium">Chat Bots</div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-4 float" style={{ animationDelay: '1s' }}>
              <Calendar className="w-8 h-8 text-accent" />
              <div className="mt-2 text-sm font-medium">Appointments</div>
            </div>
            
            <div className="absolute top-1/2 -right-12 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-4 float" style={{ animationDelay: '3s' }}>
              <Zap className="w-8 h-8 text-primary-glow" />
              <div className="mt-2 text-sm font-medium">Automation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}