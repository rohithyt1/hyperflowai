import { ArrowRight, Bot, MessageSquare, Calendar, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-ai-robot.jpg';
import elements3d from '@/assets/3d-elements.jpg';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/30"></div>
      
      {/* 3D Floating Elements - Hidden on mobile */}
      <div className="absolute inset-0 hidden md:block">
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

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Bot className="w-4 h-4" />
                <span>Your Tagline Here</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                Your Main Headline{' '}
                <span className="text-glow">Goes Here</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
                Describe your value proposition here. Explain what you offer and why customers should choose you. 
                Keep it concise and compelling.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="btn-hero group"
                onClick={() => window.location.href = '/contact'}
              >
                Primary Action
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="btn-outline-glow group">
                Secondary Action
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 lg:pt-8">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary">Stat 1</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Label</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary">Stat 2</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Label</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary">Stat 3</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Label</div>
              </div>
            </div>
          </div>

          {/* Hero Image with 3D Effect */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Hero Image" 
                className="w-full h-auto rounded-2xl shadow-2xl pulse-glow"
              />
            </div>
            
            {/* Floating Service Icons - Hidden on small screens, repositioned for medium */}
            <div className="hidden md:block absolute -top-4 lg:-top-8 left-0 lg:-left-8 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-3 lg:p-4 float">
              <MessageSquare className="w-6 h-6 lg:w-8 lg:h-8 text-primary" />
              <div className="mt-1 lg:mt-2 text-xs lg:text-sm font-medium">Feature 1</div>
            </div>
            
            <div className="hidden md:block absolute -bottom-4 lg:-bottom-8 right-0 lg:-right-8 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-3 lg:p-4 float" style={{ animationDelay: '1s' }}>
              <Calendar className="w-6 h-6 lg:w-8 lg:h-8 text-accent" />
              <div className="mt-1 lg:mt-2 text-xs lg:text-sm font-medium">Feature 2</div>
            </div>
            
            <div className="hidden lg:block absolute top-1/2 -right-12 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-4 float" style={{ animationDelay: '3s' }}>
              <Zap className="w-8 h-8 text-primary-glow" />
              <div className="mt-2 text-sm font-medium">Feature 3</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}