import { ArrowRight, Phone, PhoneOff, PhoneCall, Play, Sparkles, Zap, Bot, Calendar, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';
import { useCurrency } from '@/hooks/useCurrency';
import { motion } from 'framer-motion';

// Animated call visualization component
function AnimatedCallVisual() {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      {/* Central AI Bot */}
      <motion.div
        className="absolute z-20 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl border-2 border-primary/40 flex items-center justify-center backdrop-blur-sm"
        animate={{
          scale: [1, 1.05, 1],
          boxShadow: [
            '0 0 0 0 hsl(var(--primary) / 0.3)',
            '0 0 60px 20px hsl(var(--primary) / 0.2)',
            '0 0 0 0 hsl(var(--primary) / 0.3)',
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Bot className="w-16 h-16 md:w-20 md:h-20 text-primary" />
        
        {/* Rotating ring */}
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-dashed border-primary/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Pulsing rings */}
        {[1, 2, 3].map((ring) => (
          <motion.div
            key={ring}
            className="absolute inset-0 rounded-3xl border border-primary/20"
            animate={{
              scale: [1, 1.5 + ring * 0.3],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: ring * 0.5,
              ease: "easeOut",
            }}
          />
        ))}
      </motion.div>

      {/* Incoming call - Left */}
      <motion.div
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <motion.div
          className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl border border-green-500/40 flex items-center justify-center"
          animate={{
            y: [0, -10, 0],
            boxShadow: [
              '0 0 0 0 rgba(34, 197, 94, 0.3)',
              '0 0 30px 10px rgba(34, 197, 94, 0.1)',
              '0 0 0 0 rgba(34, 197, 94, 0.3)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Phone className="w-10 h-10 md:w-12 md:h-12 text-green-400" />
        </motion.div>
        <motion.p
          className="text-center text-xs md:text-sm text-muted-foreground mt-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Incoming Call
        </motion.p>
        
        {/* Connection line to center */}
        <motion.div
          className="absolute top-1/2 left-full w-8 md:w-16 h-0.5 bg-gradient-to-r from-green-500/50 to-transparent"
          animate={{ opacity: [0.3, 1, 0.3], scaleX: [0.8, 1, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-full ml-2 w-2 h-2 bg-green-500 rounded-full"
          animate={{ 
            x: [0, 30, 60],
            opacity: [1, 0.5, 0],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>

      {/* Output - Right: Calendar */}
      <motion.div
        className="absolute right-4 md:right-8 top-1/3 -translate-y-1/2 z-10"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <motion.div
          className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl border border-purple-500/40 flex items-center justify-center"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        >
          <Calendar className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />
        </motion.div>
        <motion.p
          className="text-center text-xs text-muted-foreground mt-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        >
          Booked
        </motion.p>
        
        {/* Connection line from center */}
        <motion.div
          className="absolute top-1/2 right-full w-8 md:w-12 h-0.5 bg-gradient-to-l from-purple-500/50 to-transparent"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
        />
      </motion.div>

      {/* Output - Right Bottom: Confirmation */}
      <motion.div
        className="absolute right-4 md:right-8 bottom-1/4 z-10"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <motion.div
          className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl border border-accent/40 flex items-center justify-center"
          animate={{
            y: [0, -6, 0],
          }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        >
          <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-accent" />
        </motion.div>
        <motion.p
          className="text-center text-xs text-muted-foreground mt-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
        >
          Confirmed
        </motion.p>
      </motion.div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/30 rounded-full"
          style={{
            left: `${20 + (i * 10)}%`,
            top: `${15 + (i % 4) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.3,
            delay: i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
        style={{
          background: 'radial-gradient(circle at center, hsl(var(--primary) / 0.1) 0%, transparent 60%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </div>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [callsAnswered, setCallsAnswered] = useState(312);
  const { formatPrice } = useCurrency();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };
    const container = containerRef.current;
    container?.addEventListener('mousemove', handleMouseMove);
    return () => container?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCallsAnswered(prev => {
        if (prev >= 480) return 312 + Math.floor(Math.random() * 50);
        return prev + Math.floor(Math.random() * 2);
      });
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const trialPriceUSD = 19;
  const revenueGainUSD = 350;
  const monthlyLossUSD = 3750;

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 pb-12">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/50" />
      
      {/* Interactive cursor glow */}
      <motion.div
        className="absolute inset-0 opacity-50 hidden md:block pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, hsl(var(--primary) / 0.15), transparent 40%)`,
        }}
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Floating orbs with motion */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-[100px]"
          style={{ top: '5%', left: '0%' }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] bg-gradient-to-br from-accent/15 to-transparent rounded-full blur-[80px]"
          style={{ bottom: '10%', right: '5%' }}
          animate={{
            x: [0, -40, 0],
            y: [0, -25, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="text-center lg:text-left">
            {/* Live badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px hsl(var(--primary) / 0.3)' }}
            >
              <motion.div
                className="w-2.5 h-2.5 bg-green-500 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  boxShadow: ['0 0 0 0 rgba(34, 197, 94, 0.4)', '0 0 0 8px rgba(34, 197, 94, 0)', '0 0 0 0 rgba(34, 197, 94, 0)'],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.span
                className="text-primary font-bold"
                key={callsAnswered}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                {callsAnswered.toLocaleString()}
              </motion.span>
              <span className="text-muted-foreground">calls answered today</span>
              <Sparkles className="w-3 h-3 text-accent" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Stop Losing Money to{' '}
              <span className="relative inline-block">
                <motion.span
                  className="text-glow"
                  animate={{
                    textShadow: [
                      '0 0 20px hsl(var(--primary) / 0.5)',
                      '0 0 40px hsl(var(--primary) / 0.8)',
                      '0 0 20px hsl(var(--primary) / 0.5)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Missed Calls
                </motion.span>
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  <motion.path
                    d="M2 6C40 2 120 2 198 6"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                </motion.svg>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-xl sm:text-2xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Your AI receptionist answers every call.
              <br />
              <span className="text-foreground font-medium">Books appointments. 24/7. Even holidays.</span>
            </motion.p>

            {/* Emoji flow with animation */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-3 text-2xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              {['📞', '🤖', '📅', '💰'].map((emoji, i) => (
                <motion.div key={emoji} className="flex items-center gap-3">
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.15, type: "spring", stiffness: 300 }}
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    className="cursor-default"
                  >
                    {emoji}
                  </motion.span>
                  {i < 3 && (
                    <motion.span
                      className="text-primary font-bold"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.15 }}
                    >
                      →
                    </motion.span>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  className="btn-hero group text-lg py-6 px-8"
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <PhoneCall className="w-5 h-5 mr-2" />
                  Start 7-Day Trial — {formatPrice(trialPriceUSD)}
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Button>
              </motion.div>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
                <Zap className="w-4 h-4 text-primary" />
                <span>Setup in 24 hours</span>
              </motion.div>
              <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
                <motion.div
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span>Cancel anytime</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right - Animated Visual (replaces static image) */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-6 md:p-8">
              <AnimatedCallVisual />
              
              {/* Floating stat card */}
              <motion.div
                className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-md border border-border/50 rounded-2xl p-5"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Calls Answered Today</div>
                    <motion.div
                      className="text-3xl font-bold text-primary"
                      key={callsAnswered}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                    >
                      {callsAnswered.toLocaleString()}
                    </motion.div>
                  </div>
                  <motion.div
                    className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center"
                    animate={{
                      rotate: [0, -10, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  >
                    <Phone className="w-7 h-7 text-primary" />
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Floating cards */}
            <motion.div
              className="absolute -top-4 -right-4 z-20 bg-card/95 backdrop-blur-md border border-green-500/30 rounded-2xl p-4 shadow-xl"
              initial={{ opacity: 0, y: -20, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center"
                    animate={{
                      boxShadow: ['0 0 0 0 rgba(34, 197, 94, 0.3)', '0 0 20px 5px rgba(34, 197, 94, 0.1)', '0 0 0 0 rgba(34, 197, 94, 0.3)'],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Phone className="w-5 h-5 text-green-400" />
                  </motion.div>
                  <div>
                    <div className="text-xs text-muted-foreground">New Booking</div>
                    <div className="text-sm font-bold text-green-400">+{formatPrice(revenueGainUSD)} revenue</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 z-20 bg-card/95 backdrop-blur-md border border-border/50 rounded-2xl p-4 shadow-xl"
              initial={{ opacity: 0, y: 20, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Play className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div>
                    <div className="text-xs text-muted-foreground">AI Speaking</div>
                    <motion.div
                      className="text-sm font-semibold"
                      animate={{ opacity: [1, 0.7, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      "How can I help?"
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Decorative glow */}
            <motion.div
              className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-3xl blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </motion.div>
        </div>

        {/* Visual comparison */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Without */}
          <motion.div
            className="relative p-6 rounded-2xl border border-destructive/30 bg-gradient-to-br from-card to-destructive/5 overflow-hidden"
            whileHover={{ scale: 1.03, borderColor: 'hsl(var(--destructive) / 0.5)' }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive/50 via-destructive to-destructive/50"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              animate={{
                x: [0, -3, 3, -3, 0],
                rotate: [0, -5, 5, 0],
              }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
              <PhoneOff className="w-12 h-12 text-destructive mx-auto mb-4" />
            </motion.div>
            <h3 className="font-bold text-xl mb-2 text-center">Without AI</h3>
            <p className="text-muted-foreground text-sm text-center mb-3">Missed calls = Lost customers</p>
            <motion.div
              className="text-destructive font-bold text-3xl text-center"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              -{formatPrice(monthlyLossUSD)}/mo
            </motion.div>
          </motion.div>

          {/* With */}
          <motion.div
            className="relative p-6 rounded-2xl border border-primary/30 bg-gradient-to-br from-card to-primary/5 overflow-hidden"
            whileHover={{ scale: 1.03, borderColor: 'hsl(var(--primary) / 0.5)' }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              animate={{
                rotate: [0, -10, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            >
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
            </motion.div>
            <h3 className="font-bold text-xl mb-2 text-center">With AI</h3>
            <p className="text-muted-foreground text-sm text-center mb-3">Every call answered & booked</p>
            <motion.div
              className="text-primary font-bold text-3xl text-center"
              animate={{
                textShadow: [
                  '0 0 10px hsl(var(--primary) / 0.5)',
                  '0 0 20px hsl(var(--primary) / 0.8)',
                  '0 0 10px hsl(var(--primary) / 0.5)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              100% captured
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
