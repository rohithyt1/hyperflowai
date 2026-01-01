import { useEffect, useState, useRef } from 'react';
import { Users, MessageSquare, Clock, TrendingUp } from 'lucide-react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

function Counter({ end, duration = 2000, suffix = '', prefix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const startTime = Date.now();
          const startCount = 0;
          
          const updateCount = () => {
            const elapsedTime = Date.now() - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Easing function for smooth animation
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(startCount + (end - startCount) * easeOutCubic);
            
            setCount(currentCount);
            
            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              setCount(end);
            }
          };
          
          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <div ref={counterRef} className="count-up">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
}

export function StatsCounter() {
  const stats = [
    {
      icon: Users,
      value: 500,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Businesses transformed with AI',
      color: 'text-primary'
    },
    {
      icon: MessageSquare,
      value: 1000000,
      suffix: '+',
      label: 'Messages Processed',
      description: 'Customer interactions automated',
      color: 'text-accent'
    },
    {
      icon: Clock,
      value: 24,
      suffix: '/7',
      label: 'Availability',
      description: 'Round-the-clock AI support',
      color: 'text-primary-glow'
    },
    {
      icon: TrendingUp,
      value: 85,
      suffix: '%',
      label: 'Efficiency Boost',
      description: 'Average productivity increase',
      color: 'text-primary'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-card/50 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Proven <span className="text-glow">Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI agents deliver measurable impact across thousands of businesses worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="card-glow p-8 text-center group hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 ${stat.color} bg-current/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              
              <div className={`text-4xl lg:text-5xl font-bold mb-2 ${stat.color}`}>
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
              <p className="text-muted-foreground text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}