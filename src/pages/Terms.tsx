import { Layout } from '@/components/Layout';
import { motion } from 'framer-motion';
import { FileText, Shield, AlertCircle, Scale, Globe, Mail } from 'lucide-react';

const sections = [
  {
    icon: FileText,
    title: '1. Acceptance of Terms',
    content: `By accessing or using HyperFlow's AI receptionist services ("Services"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our Services.

These terms apply to all users, including businesses and individuals who access or use the Services. We reserve the right to update these terms at any time, and your continued use of the Services constitutes acceptance of any modifications.`
  },
  {
    icon: Shield,
    title: '2. Service Description',
    content: `HyperFlow provides AI-powered virtual receptionist services that:
• Answer incoming calls on behalf of your business
• Schedule appointments and manage bookings
• Provide information to callers based on your business details
• Send notifications and confirmations via SMS and email
• Integrate with third-party calendar and CRM systems

Our AI technology is designed to handle calls professionally, but we do not guarantee 100% accuracy in all interactions. Complex queries may require human follow-up.`
  },
  {
    icon: Scale,
    title: '3. Subscription & Billing',
    content: `• All subscriptions are billed in advance on a monthly or annual basis
• Prices are subject to change with 30 days notice
• Unused minutes or features do not roll over to the next billing period
• You may cancel your subscription at any time; cancellation takes effect at the end of the current billing period
• Refunds are provided at our discretion on a case-by-case basis
• Trial periods, if offered, automatically convert to paid subscriptions unless cancelled`
  },
  {
    icon: AlertCircle,
    title: '4. Acceptable Use',
    content: `You agree NOT to use our Services for:
• Any illegal, fraudulent, or harmful activities
• Harassment, spam, or unsolicited communications
• Misrepresentation of your identity or business
• Violating any applicable laws or regulations
• Interfering with or disrupting the Services
• Attempting to reverse-engineer our AI technology
• Reselling or redistributing our Services without authorization

We reserve the right to suspend or terminate accounts that violate these terms.`
  },
  {
    icon: Globe,
    title: '5. Data Privacy & Security',
    content: `• We collect and process call data, recordings, and transcripts to provide our Services
• All data is encrypted in transit and at rest
• We do not sell your data to third parties
• Call recordings are retained for 90 days unless otherwise specified
• You are responsible for obtaining consent from callers as required by applicable laws
• We comply with GDPR, CCPA, and other applicable privacy regulations

For more details, please review our Privacy Policy.`
  },
  {
    icon: Shield,
    title: '6. Limitation of Liability',
    content: `TO THE MAXIMUM EXTENT PERMITTED BY LAW:

• HyperFlow is provided "as is" without warranties of any kind
• We are not liable for any indirect, incidental, or consequential damages
• Our total liability shall not exceed the fees paid by you in the 12 months preceding the claim
• We are not responsible for missed calls due to technical issues beyond our control
• We do not guarantee specific business outcomes or revenue increases

You agree to indemnify HyperFlow against any claims arising from your use of the Services.`
  },
  {
    icon: Scale,
    title: '7. Intellectual Property',
    content: `• All HyperFlow technology, branding, and content are our exclusive property
• You retain ownership of your business data and content
• You grant us a license to use your data to provide and improve our Services
• Our AI voice models and conversation flows are proprietary and confidential
• You may not copy, modify, or distribute any part of our Services`
  },
  {
    icon: FileText,
    title: '8. Termination',
    content: `• Either party may terminate this agreement with 30 days written notice
• We may terminate immediately for violation of these terms
• Upon termination, your data will be retained for 30 days before deletion
• You may request export of your data within the retention period
• Termination does not affect any rights or obligations accrued prior to termination`
  },
  {
    icon: Globe,
    title: '9. Governing Law',
    content: `These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes shall be resolved through binding arbitration in Bangalore, Karnataka.

For users in other jurisdictions, local consumer protection laws may apply to the extent they cannot be waived.`
  },
];

export default function Terms() {
  return (
    <Layout>
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-5 py-2.5 rounded-full text-sm font-medium mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <FileText className="w-4 h-4 text-primary" />
              <span>Legal</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Terms & <span className="text-glow">Conditions</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Please read these terms carefully before using HyperFlow's services.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: February 2026
            </p>
          </motion.div>

          {/* Content */}
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                className="bg-card/50 border border-border/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ borderColor: 'hsl(var(--primary) / 0.3)' }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-4">{section.title}</h2>
                    <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                      {section.content}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Contact Section */}
            <motion.div
              className="bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Questions?</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <a
                href="mailto:rohan@hyperflow.space"
                className="text-primary hover:underline font-medium"
              >
                rohan@hyperflow.space
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
