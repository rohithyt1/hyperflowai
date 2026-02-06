import { motion } from 'framer-motion';
import { Phone, Bot, Calendar, Bell, CheckCircle, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    title: 'Call Comes In',
    description: 'Customer calls your business number',
    time: '0 sec',
    color: 'from-blue-500/20 to-blue-600/20',
    borderColor: 'border-blue-500/30',
  },
  {
    icon: Bot,
    title: 'AI Picks Up',
    description: 'Answers instantly, sounds human',
    time: '< 1 sec',
    color: 'from-primary/20 to-primary/10',
    borderColor: 'border-primary/30',
  },
  {
    icon: Calendar,
    title: 'Books Appointment',
    description: 'Checks calendar, schedules slot',
    time: '30 sec',
    color: 'from-purple-500/20 to-purple-600/20',
    borderColor: 'border-purple-500/30',
  },
  {
    icon: Bell,
    title: 'You Get Notified',
    description: 'SMS + email confirmation sent',
    time: '1 min',
    color: 'from-amber-500/20 to-amber-600/20',
    borderColor: 'border-amber-500/30',
  },
  {
    icon: CheckCircle,
    title: 'Customer Confirmed',
    description: 'Appointment in your calendar',
    time: 'Done!',
    color: 'from-green-500/20 to-green-600/20',
    borderColor: 'border-green-500/30',
    isSuccess: true,
  },
];

// Animated particles
const FloatingDot = ({ delay, size = 4 }: { delay: number; size?: number }) => (
  <motion.div
    className="absolute rounded-full bg-primary/40"
    style={{ width: size, height: size }}
    animate={{
      y: [0, -30, 0],
      x: [0, 10, 0],
      opacity: [0.2, 0.6, 0.2],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

export function SimpleWorkflow() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-background" />
        
        {/* Floating orbs */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-[150px]"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)',
            left: '-10%',
            top: '10%',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{
            background: 'radial-gradient(circle, hsl(var(--accent) / 0.06) 0%, transparent 70%)',
            right: '5%',
            bottom: '20%',
          }}
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

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
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px hsl(var(--primary) / 0.3)' }}
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Bot className="w-4 h-4 text-primary" />
            </motion.div>
            <span>Simple Process</span>
            <Sparkles className="w-3 h-3 text-accent" />
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            From Call to Booking in{' '}
            <span className="relative inline-block">
              <motion.span
                className="text-glow"
                animate={{ 
                  textShadow: [
                    '0 0 20px hsl(var(--primary) / 0.5)',
                    '0 0 40px hsl(var(--primary) / 0.8)',
                    '0 0 20px hsl(var(--primary) / 0.5)',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                60 Seconds
              </motion.span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            No hold music. No voicemail. Just instant, professional service.
          </p>
        </motion.div>

        {/* Workflow Steps */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop: Horizontal */}
          <div className="hidden md:block relative">
            {/* Animated Connection Line */}
            <div className="absolute top-12 left-[10%] right-[10%] h-1.5 bg-border/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
              />
              {/* Traveling pulse */}
              <motion.div
                className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                animate={{ x: ['-100%', '600%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
              />
            </div>
            
            <div className="flex items-start justify-between">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="relative flex flex-col items-center text-center w-1/5"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5, type: "spring" }}
                >
                  {/* Icon Container */}
                  <motion.div
                    className={`relative z-10 w-24 h-24 bg-gradient-to-br ${step.color} border-2 ${step.borderColor} rounded-3xl flex items-center justify-center mb-5 shadow-2xl`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      boxShadow: '0 20px 40px hsl(var(--primary) / 0.3)',
                    }}
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      y: { duration: 2, repeat: Infinity, delay: index * 0.2 },
                      scale: { type: "spring", stiffness: 300 },
                    }}
                  >
                    <step.icon className={`w-10 h-10 ${step.isSuccess ? 'text-green-400' : 'text-primary'}`} />
                    
                    {/* Animated ring */}
                    <motion.div
                      className="absolute inset-0 border-2 border-primary/40 rounded-3xl"
                      animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    />
                    
                    {/* Step number badge */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center text-sm font-bold text-primary-foreground shadow-lg"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      {index + 1}
                    </motion.div>
                    
                    {/* Floating particles around icon */}
                    <div className="absolute -top-2 -left-2">
                      <FloatingDot delay={index * 0.3} size={6} />
                    </div>
                    <div className="absolute -bottom-1 -right-3">
                      <FloatingDot delay={index * 0.3 + 0.5} size={4} />
                    </div>
                  </motion.div>
                  
                  {/* Content */}
                  <motion.h3
                    className="font-bold text-base mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.2 }}
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p
                    className="text-sm text-muted-foreground mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                  >
                    {step.description}
                  </motion.p>
                  <motion.span
                    className={`text-sm font-semibold px-4 py-1.5 rounded-full ${
                      step.isSuccess 
                        ? 'text-green-400 bg-green-500/10 border border-green-500/30' 
                        : 'text-primary bg-primary/10 border border-primary/30'
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {step.time}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical with animations */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="absolute left-7 top-20 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full"
                    initial={{ scaleY: 0, originY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  />
                )}
                
                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <motion.div
                    className={`relative flex-shrink-0 w-14 h-14 bg-gradient-to-br ${step.color} border-2 ${step.borderColor} rounded-2xl flex items-center justify-center shadow-xl`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <step.icon className={`w-6 h-6 ${step.isSuccess ? 'text-green-400' : 'text-primary'}`} />
                    <motion.div
                      className="absolute -top-1.5 -right-1.5 w-6 h-6 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center text-xs font-bold text-primary-foreground"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      {index + 1}
                    </motion.div>
                  </motion.div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-lg">{step.title}</h3>
                      <motion.span
                        className={`text-sm font-semibold px-3 py-1 rounded-full ${
                          step.isSuccess 
                            ? 'text-green-400 bg-green-500/10 border border-green-500/30' 
                            : 'text-primary bg-primary/10 border border-primary/30'
                        }`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {step.time}
                      </motion.span>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom stat with animation */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/30 px-8 py-4 rounded-2xl backdrop-blur-sm"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px hsl(var(--primary) / 0.2)',
            }}
            animate={{
              boxShadow: [
                '0 0 0 0 hsl(var(--primary) / 0.2)',
                '0 0 30px 10px hsl(var(--primary) / 0.1)',
                '0 0 0 0 hsl(var(--primary) / 0.2)',
              ],
            }}
            transition={{ 
              boxShadow: { duration: 3, repeat: Infinity },
              scale: { type: "spring", stiffness: 300 }
            }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <CheckCircle className="w-6 h-6 text-green-400" />
            </motion.div>
            <span className="font-medium text-lg">
              Average booking time:{' '}
              <motion.span
                className="text-primary font-bold"
                animate={{ 
                  textShadow: [
                    '0 0 10px hsl(var(--primary) / 0.5)',
                    '0 0 20px hsl(var(--primary) / 0.8)',
                    '0 0 10px hsl(var(--primary) / 0.5)',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                47 seconds
              </motion.span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
