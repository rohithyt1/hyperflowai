import { Calendar, MessageSquare, Users, Headphones, Zap, ArrowRight } from 'lucide-react';

const integrations = [
  {
    name: 'Google Calendar',
    description: 'Auto-sync appointments',
    icon: Calendar,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    name: 'HubSpot',
    description: 'CRM sync & lead tracking',
    icon: Users,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
  },
  {
    name: 'Salesforce',
    description: 'Enterprise CRM',
    icon: Zap,
    color: 'text-sky-400',
    bgColor: 'bg-sky-400/10',
  },
  {
    name: 'Zendesk',
    description: 'Support ticketing',
    icon: Headphones,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    name: 'Slack',
    description: 'Instant notifications',
    icon: MessageSquare,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    name: 'Zapier',
    description: '5000+ app connections',
    icon: Zap,
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
  },
];

export function Integrations() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4 text-primary" />
            <span>Seamless Integrations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Works With Your <span className="text-glow">Existing Tools</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Connect HyperFlow to the tools you already use. No complex setup required.
          </p>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {integrations.map((integration, index) => (
            <div
              key={integration.name}
              className="card-glow p-4 text-center group hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 ${integration.bgColor} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                <integration.icon className={`w-6 h-6 ${integration.color}`} />
              </div>
              <h3 className="font-semibold text-sm mb-1">{integration.name}</h3>
              <p className="text-xs text-muted-foreground">{integration.description}</p>
            </div>
          ))}
        </div>

        {/* Simple Flow Diagram */}
        <div className="max-w-4xl mx-auto">
          <div className="card-glow p-6 md:p-8">
            <h3 className="text-xl font-bold text-center mb-8">How It Connects</h3>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-3">
                  <span className="text-3xl">📞</span>
                </div>
                <span className="font-medium">Customer Calls</span>
              </div>

              <ArrowRight className="w-6 h-6 text-primary hidden md:block" />
              <div className="w-6 h-6 text-primary md:hidden rotate-90">↓</div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-3">
                  <span className="text-3xl">🤖</span>
                </div>
                <span className="font-medium">AI Answers</span>
              </div>

              <ArrowRight className="w-6 h-6 text-primary hidden md:block" />
              <div className="w-6 h-6 text-primary md:hidden rotate-90">↓</div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-3">
                  <span className="text-3xl">📅</span>
                </div>
                <span className="font-medium">Books Appointment</span>
              </div>

              <ArrowRight className="w-6 h-6 text-primary hidden md:block" />
              <div className="w-6 h-6 text-primary md:hidden rotate-90">↓</div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-3">
                  <span className="text-3xl">✅</span>
                </div>
                <span className="font-medium">Syncs to CRM</span>
              </div>
            </div>

            {/* Bottom note */}
            <p className="text-center text-sm text-muted-foreground mt-8">
              All data flows automatically. No manual entry. No missed follow-ups.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
