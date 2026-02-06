import { motion } from 'framer-motion';
import { Zap, ArrowRight, Sparkles } from 'lucide-react';

// Real brand icons as SVG components
const GoogleCalendarIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <path fill="#4285F4" d="M19.5 4.5H18V3h-1.5v1.5h-9V3H6v1.5H4.5C3.67 4.5 3 5.17 3 6v13.5c0 .83.67 1.5 1.5 1.5h15c.83 0 1.5-.67 1.5-1.5V6c0-.83-.67-1.5-1.5-1.5zM19.5 19.5h-15V9h15v10.5z"/>
    <path fill="#EA4335" d="M7 11h2v2H7z"/>
    <path fill="#FBBC05" d="M11 11h2v2h-2z"/>
    <path fill="#34A853" d="M15 11h2v2h-2z"/>
    <path fill="#4285F4" d="M7 15h2v2H7z"/>
    <path fill="#EA4335" d="M11 15h2v2h-2z"/>
  </svg>
);

const HubSpotIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <path fill="#FF7A59" d="M18.16 7.58v3.26a2.17 2.17 0 0 0-1.27-.41 2.21 2.21 0 0 0-2.21 2.21 2.21 2.21 0 0 0 2.21 2.21c.47 0 .91-.15 1.27-.41v.41h2v-7.27h-2zm-1.27 5.67a.81.81 0 1 1 0-1.62.81.81 0 0 1 0 1.62zM8.84 9.76a2.21 2.21 0 0 0-1.67.77V7.58h-2v7.27h2v-.41c.36.26.8.41 1.27.41a2.21 2.21 0 0 0 2.21-2.21 2.21 2.21 0 0 0-1.81-2.88zm-.4 3.49a.81.81 0 1 1 0-1.62.81.81 0 0 1 0 1.62zm4.56-3.49c-1.22 0-2.21.99-2.21 2.21s.99 2.21 2.21 2.21 2.21-.99 2.21-2.21-.99-2.21-2.21-2.21zm0 2.88a.67.67 0 1 1 0-1.34.67.67 0 0 1 0 1.34z"/>
  </svg>
);

const SalesforceIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <path fill="#00A1E0" d="M10.1 5.5c.7-.8 1.7-1.2 2.8-1.2 1.3 0 2.5.6 3.2 1.6.6-.3 1.3-.4 2-.4 2.7 0 4.9 2.2 4.9 4.9 0 2.7-2.2 4.9-4.9 4.9-.3 0-.6 0-.9-.1-.6 1.2-1.9 2-3.3 2-1 0-1.9-.4-2.6-1-.6.6-1.4 1-2.3 1-1.1 0-2.1-.6-2.7-1.4-.4.1-.7.1-1.1.1C2.5 15.9 1 14.4 1 12.6c0-1.4.9-2.6 2.1-3.1-.1-.3-.1-.6-.1-.9C3 6.4 4.9 4.5 7.1 4.5c1.2 0 2.3.5 3 1z"/>
  </svg>
);

const ZendeskIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <path fill="#03363D" d="M11 6v12L3 6h8zm2 0c0 2.2 1.8 4 4 4s4-1.8 4-4h-8zm0 12h8l-8-12v12zM3 14c0 2.2 1.8 4 4 4s4-1.8 4-4H3z"/>
  </svg>
);

const SlackIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <path fill="#E01E5A" d="M5.04 15.16a2.01 2.01 0 0 1-2.02 2.02 2.01 2.01 0 0 1-2.02-2.02 2.01 2.01 0 0 1 2.02-2.02h2.02v2.02zm1.01 0a2.01 2.01 0 0 1 2.02-2.02 2.01 2.01 0 0 1 2.02 2.02v5.05a2.01 2.01 0 0 1-2.02 2.02 2.01 2.01 0 0 1-2.02-2.02v-5.05z"/>
    <path fill="#36C5F0" d="M8.07 5.04a2.01 2.01 0 0 1-2.02-2.02A2.01 2.01 0 0 1 8.07 1a2.01 2.01 0 0 1 2.02 2.02v2.02H8.07zm0 1.02a2.01 2.01 0 0 1 2.02 2.02 2.01 2.01 0 0 1-2.02 2.02H3.02A2.01 2.01 0 0 1 1 8.08a2.01 2.01 0 0 1 2.02-2.02h5.05z"/>
    <path fill="#2EB67D" d="M18.96 8.08a2.01 2.01 0 0 1 2.02-2.02A2.01 2.01 0 0 1 23 8.08a2.01 2.01 0 0 1-2.02 2.02h-2.02V8.08zm-1.01 0a2.01 2.01 0 0 1-2.02 2.02 2.01 2.01 0 0 1-2.02-2.02V3.02A2.01 2.01 0 0 1 15.93 1a2.01 2.01 0 0 1 2.02 2.02v5.06z"/>
    <path fill="#ECB22E" d="M15.93 18.96a2.01 2.01 0 0 1 2.02 2.02A2.01 2.01 0 0 1 15.93 23a2.01 2.01 0 0 1-2.02-2.02v-2.02h2.02zm0-1.01a2.01 2.01 0 0 1-2.02-2.02 2.01 2.01 0 0 1 2.02-2.02h5.05A2.01 2.01 0 0 1 23 15.93a2.01 2.01 0 0 1-2.02 2.02h-5.05z"/>
  </svg>
);

const ZapierIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <path fill="#FF4A00" d="M15.5 12L12 8.5 8.5 12l3.5 3.5 3.5-3.5z"/>
    <path fill="#FF4A00" d="M12 2v6M12 16v6M22 12h-6M8 12H2M19.07 4.93l-4.24 4.24M9.17 14.83l-4.24 4.24M19.07 19.07l-4.24-4.24M9.17 9.17L4.93 4.93" stroke="#FF4A00" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const integrations = [
  { name: 'Google Calendar', description: 'Auto-sync appointments', icon: GoogleCalendarIcon },
  { name: 'HubSpot', description: 'CRM sync & lead tracking', icon: HubSpotIcon },
  { name: 'Salesforce', description: 'Enterprise CRM', icon: SalesforceIcon },
  { name: 'Zendesk', description: 'Support ticketing', icon: ZendeskIcon },
  { name: 'Slack', description: 'Instant notifications', icon: SlackIcon },
  { name: 'Zapier', description: '5000+ app connections', icon: ZapierIcon },
];

const flowSteps = [
  { emoji: '📞', label: 'Customer Calls', delay: 0 },
  { emoji: '🤖', label: 'AI Answers', delay: 0.1 },
  { emoji: '📅', label: 'Books Appointment', delay: 0.2 },
  { emoji: '✅', label: 'Syncs to CRM', delay: 0.3, isSuccess: true },
];

// Floating particle component
const FloatingParticle = ({ delay, x, y }: { delay: number; x: string; y: string }) => (
  <motion.div
    className="absolute w-2 h-2 bg-primary/30 rounded-full blur-sm"
    style={{ left: x, top: y }}
    animate={{
      y: [0, -20, 0],
      opacity: [0.3, 0.8, 0.3],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

// Animated connection line
const ConnectionLine = ({ index }: { index: number }) => (
  <motion.div
    className="hidden md:flex items-center justify-center"
    initial={{ opacity: 0, scaleX: 0 }}
    whileInView={{ opacity: 1, scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
  >
    <div className="relative w-16 h-0.5">
      {/* Base line */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50 rounded-full" />
      
      {/* Animated pulse */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full"
        animate={{ x: [-20, 40], opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.3 }}
        style={{ width: '20px' }}
      />
      
      {/* Arrow */}
      <ArrowRight className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
    </div>
  </motion.div>
);

// Mobile arrow
const MobileArrow = ({ index }: { index: number }) => (
  <motion.div
    className="md:hidden flex justify-center py-2"
    initial={{ opacity: 0, y: -10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.3 + index * 0.15 }}
  >
    <motion.div
      animate={{ y: [0, 5, 0] }}
      transition={{ duration: 1, repeat: Infinity }}
      className="text-primary text-xl"
    >
      ↓
    </motion.div>
  </motion.div>
);

export function Integrations() {
  return (
    <section id="integrations" className="py-20 md:py-28 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        {/* Floating orbs */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 70%)',
            left: '10%',
            top: '20%',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{
            background: 'radial-gradient(circle, hsl(var(--accent) / 0.08) 0%, transparent 70%)',
            right: '10%',
            bottom: '20%',
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, -20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating particles */}
      <FloatingParticle delay={0} x="15%" y="30%" />
      <FloatingParticle delay={0.5} x="85%" y="25%" />
      <FloatingParticle delay={1} x="25%" y="70%" />
      <FloatingParticle delay={1.5} x="75%" y="65%" />
      <FloatingParticle delay={2} x="50%" y="40%" />

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
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-4 h-4 text-primary" />
            </motion.div>
            <span>Seamless Integrations</span>
            <Sparkles className="w-3 h-3 text-accent" />
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Works With Your{' '}
            <span className="relative inline-block">
              <span className="text-glow">Existing Tools</span>
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
            Connect HyperFlow to the tools you already use. Zero complexity. Instant sync.
          </p>
        </motion.div>

        {/* Integration Grid with 3D hover effects */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              variants={{
                hidden: { opacity: 0, y: 30, rotateX: -15 },
                visible: { opacity: 1, y: 0, rotateX: 0 }
              }}
              whileHover={{
                y: -8,
                scale: 1.05,
                rotateY: 5,
                boxShadow: '0 20px 40px hsl(var(--primary) / 0.2)',
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-card via-card to-card/80 border border-border/50 rounded-2xl p-5 text-center overflow-hidden backdrop-blur-sm h-full">
                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background: 'linear-gradient(105deg, transparent 20%, hsl(var(--primary) / 0.1) 50%, transparent 80%)',
                  }}
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />
                
                {/* Icon container */}
                <motion.div
                  className="relative w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/5"
                  whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <integration.icon />
                  
                  {/* Floating ring */}
                  <motion.div
                    className="absolute inset-0 border-2 border-primary/30 rounded-2xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  />
                </motion.div>
                
                <h3 className="font-bold text-sm md:text-base mb-1 relative z-10">{integration.name}</h3>
                <p className="text-xs text-muted-foreground relative z-10">{integration.description}</p>
                
                {/* Connection indicator */}
                <motion.div
                  className="absolute top-3 right-3 w-2 h-2 bg-green-500 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    boxShadow: ['0 0 0 0 rgba(34, 197, 94, 0.4)', '0 0 0 6px rgba(34, 197, 94, 0)', '0 0 0 0 rgba(34, 197, 94, 0)'],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Flow Diagram with animations */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative bg-gradient-to-br from-card via-card to-card/90 border border-border/50 rounded-3xl p-8 md:p-12 overflow-hidden backdrop-blur-sm">
            {/* Animated border glow */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: 'linear-gradient(90deg, transparent, hsl(var(--primary) / 0.3), transparent)',
                backgroundSize: '200% 100%',
              }}
              animate={{
                backgroundPosition: ['200% 0', '-200% 0'],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Inner content container */}
            <div className="relative z-10">
              <motion.h3
                className="text-2xl md:text-3xl font-bold text-center mb-10 flex items-center justify-center gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <Sparkles className="w-5 h-5 text-accent" />
                How It Connects
                <Sparkles className="w-5 h-5 text-accent" />
              </motion.h3>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
                {flowSteps.map((step, index) => (
                  <div key={step.label} className="contents">
                    {/* Step */}
                    <motion.div
                      className="flex flex-col items-center text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: step.delay, duration: 0.5, type: "spring" }}
                    >
                      <motion.div
                        className={`relative w-20 h-20 rounded-2xl flex items-center justify-center mb-3 ${
                          step.isSuccess 
                            ? 'bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30' 
                            : 'bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30'
                        }`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        animate={{
                          boxShadow: step.isSuccess
                            ? ['0 0 0 0 rgba(34, 197, 94, 0.3)', '0 0 30px 10px rgba(34, 197, 94, 0)', '0 0 0 0 rgba(34, 197, 94, 0.3)']
                            : ['0 0 0 0 hsl(var(--primary) / 0.3)', '0 0 30px 10px hsl(var(--primary) / 0)', '0 0 0 0 hsl(var(--primary) / 0.3)'],
                        }}
                        transition={{ 
                          boxShadow: { duration: 2, repeat: Infinity, delay: index * 0.3 },
                          scale: { type: "spring", stiffness: 300 }
                        }}
                      >
                        <motion.span
                          className="text-4xl"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                        >
                          {step.emoji}
                        </motion.span>
                      </motion.div>
                      <span className="font-semibold text-sm md:text-base">{step.label}</span>
                    </motion.div>
                    
                    {/* Connection line (not after last item) */}
                    {index < flowSteps.length - 1 && (
                      <>
                        <ConnectionLine index={index} />
                        <MobileArrow index={index} />
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom note with animation */}
              <motion.p
                className="text-center text-sm md:text-base text-muted-foreground mt-10 flex items-center justify-center gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ⚡
                </motion.span>
                All data flows automatically. No manual entry. No missed follow-ups.
                <motion.span
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  ⚡
                </motion.span>
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
