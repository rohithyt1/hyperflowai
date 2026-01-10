import { ArrowRight, Zap } from 'lucide-react';

// Real brand icons as SVG components
const GoogleCalendarIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path fill="#4285F4" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10z" opacity="0"/>
    <path fill="#4285F4" d="M19.5 4.5H18V3h-1.5v1.5h-9V3H6v1.5H4.5C3.67 4.5 3 5.17 3 6v13.5c0 .83.67 1.5 1.5 1.5h15c.83 0 1.5-.67 1.5-1.5V6c0-.83-.67-1.5-1.5-1.5zM19.5 19.5h-15V9h15v10.5z"/>
    <path fill="#EA4335" d="M7 11h2v2H7z"/>
    <path fill="#FBBC05" d="M11 11h2v2h-2z"/>
    <path fill="#34A853" d="M15 11h2v2h-2z"/>
    <path fill="#4285F4" d="M7 15h2v2H7z"/>
    <path fill="#EA4335" d="M11 15h2v2h-2z"/>
  </svg>
);

const HubSpotIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path fill="#FF7A59" d="M18.16 7.58v3.26a2.17 2.17 0 0 0-1.27-.41 2.21 2.21 0 0 0-2.21 2.21 2.21 2.21 0 0 0 2.21 2.21c.47 0 .91-.15 1.27-.41v.41h2v-7.27h-2zm-1.27 5.67a.81.81 0 1 1 0-1.62.81.81 0 0 1 0 1.62zM8.84 9.76a2.21 2.21 0 0 0-1.67.77V7.58h-2v7.27h2v-.41c.36.26.8.41 1.27.41a2.21 2.21 0 0 0 2.21-2.21 2.21 2.21 0 0 0-1.81-2.88zm-.4 3.49a.81.81 0 1 1 0-1.62.81.81 0 0 1 0 1.62zm4.56-3.49c-1.22 0-2.21.99-2.21 2.21s.99 2.21 2.21 2.21 2.21-.99 2.21-2.21-.99-2.21-2.21-2.21zm0 2.88a.67.67 0 1 1 0-1.34.67.67 0 0 1 0 1.34z"/>
  </svg>
);

const SalesforceIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path fill="#00A1E0" d="M10.1 5.5c.7-.8 1.7-1.2 2.8-1.2 1.3 0 2.5.6 3.2 1.6.6-.3 1.3-.4 2-.4 2.7 0 4.9 2.2 4.9 4.9 0 2.7-2.2 4.9-4.9 4.9-.3 0-.6 0-.9-.1-.6 1.2-1.9 2-3.3 2-1 0-1.9-.4-2.6-1-.6.6-1.4 1-2.3 1-1.1 0-2.1-.6-2.7-1.4-.4.1-.7.1-1.1.1C2.5 15.9 1 14.4 1 12.6c0-1.4.9-2.6 2.1-3.1-.1-.3-.1-.6-.1-.9C3 6.4 4.9 4.5 7.1 4.5c1.2 0 2.3.5 3 1z"/>
  </svg>
);

const ZendeskIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path fill="#03363D" d="M11 6v12L3 6h8zm2 0c0 2.2 1.8 4 4 4s4-1.8 4-4h-8zm0 12h8l-8-12v12zM3 14c0 2.2 1.8 4 4 4s4-1.8 4-4H3z"/>
  </svg>
);

const SlackIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path fill="#E01E5A" d="M5.04 15.16a2.01 2.01 0 0 1-2.02 2.02 2.01 2.01 0 0 1-2.02-2.02 2.01 2.01 0 0 1 2.02-2.02h2.02v2.02zm1.01 0a2.01 2.01 0 0 1 2.02-2.02 2.01 2.01 0 0 1 2.02 2.02v5.05a2.01 2.01 0 0 1-2.02 2.02 2.01 2.01 0 0 1-2.02-2.02v-5.05z"/>
    <path fill="#36C5F0" d="M8.07 5.04a2.01 2.01 0 0 1-2.02-2.02A2.01 2.01 0 0 1 8.07 1a2.01 2.01 0 0 1 2.02 2.02v2.02H8.07zm0 1.02a2.01 2.01 0 0 1 2.02 2.02 2.01 2.01 0 0 1-2.02 2.02H3.02A2.01 2.01 0 0 1 1 8.08a2.01 2.01 0 0 1 2.02-2.02h5.05z"/>
    <path fill="#2EB67D" d="M18.96 8.08a2.01 2.01 0 0 1 2.02-2.02A2.01 2.01 0 0 1 23 8.08a2.01 2.01 0 0 1-2.02 2.02h-2.02V8.08zm-1.01 0a2.01 2.01 0 0 1-2.02 2.02 2.01 2.01 0 0 1-2.02-2.02V3.02A2.01 2.01 0 0 1 15.93 1a2.01 2.01 0 0 1 2.02 2.02v5.06z"/>
    <path fill="#ECB22E" d="M15.93 18.96a2.01 2.01 0 0 1 2.02 2.02A2.01 2.01 0 0 1 15.93 23a2.01 2.01 0 0 1-2.02-2.02v-2.02h2.02zm0-1.01a2.01 2.01 0 0 1-2.02-2.02 2.01 2.01 0 0 1 2.02-2.02h5.05A2.01 2.01 0 0 1 23 15.93a2.01 2.01 0 0 1-2.02 2.02h-5.05z"/>
  </svg>
);

const ZapierIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path fill="#FF4A00" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    <path fill="#FF4A00" d="M15.5 12L12 8.5 8.5 12l3.5 3.5 3.5-3.5z"/>
  </svg>
);

const integrations = [
  {
    name: 'Google Calendar',
    description: 'Auto-sync appointments',
    icon: GoogleCalendarIcon,
    bgColor: 'bg-white/10',
  },
  {
    name: 'HubSpot',
    description: 'CRM sync & lead tracking',
    icon: HubSpotIcon,
    bgColor: 'bg-white/10',
  },
  {
    name: 'Salesforce',
    description: 'Enterprise CRM',
    icon: SalesforceIcon,
    bgColor: 'bg-white/10',
  },
  {
    name: 'Zendesk',
    description: 'Support ticketing',
    icon: ZendeskIcon,
    bgColor: 'bg-white/10',
  },
  {
    name: 'Slack',
    description: 'Instant notifications',
    icon: SlackIcon,
    bgColor: 'bg-white/10',
  },
  {
    name: 'Zapier',
    description: '5000+ app connections',
    icon: ZapierIcon,
    bgColor: 'bg-white/10',
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
                <integration.icon />
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
