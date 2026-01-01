import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How quickly can AI agents be deployed for my business?",
      answer: "Most AI agents can be deployed within 3-7 business days. Simple chat bots can be ready in 24-48 hours, while custom solutions may take 1-2 weeks depending on complexity and integration requirements."
    },
    {
      question: "What platforms do your AI agents integrate with?",
      answer: "Our AI agents integrate with popular platforms including websites, social media (Facebook, WhatsApp, Instagram), CRM systems (Salesforce, HubSpot), calendar apps (Google Calendar, Outlook), and custom APIs. We can also create custom integrations as needed."
    },
    {
      question: "How do you ensure data security and privacy?",
      answer: "We implement enterprise-grade security measures including end-to-end encryption, secure data storage, GDPR compliance, and regular security audits. All data is processed in compliance with industry standards and regulations."
    },
    {
      question: "Can AI agents handle complex customer inquiries?",
      answer: "Yes, our AI agents are trained on advanced language models and can handle complex inquiries. For highly specialized questions, they can seamlessly escalate to human agents while providing all conversation context."
    },
    {
      question: "What's the cost structure for AI agent services?",
      answer: "We offer flexible pricing models including monthly subscriptions, per-conversation pricing, and custom enterprise packages. Pricing depends on features, volume, and customization level. Contact us for a personalized quote."
    },
    {
      question: "Do you provide training and support?",
      answer: "Absolutely! We provide comprehensive training for your team, detailed documentation, 24/7 technical support, and ongoing optimization services to ensure your AI agents perform at their best."
    },
    {
      question: "Can AI agents learn from interactions?",
      answer: "Yes, our AI agents continuously improve through machine learning. They analyze successful interactions, learn from customer feedback, and adapt to provide better responses over time."
    },
    {
      question: "What happens if the AI agent can't answer a question?",
      answer: "When an AI agent encounters a question it cannot handle, it gracefully escalates to a human agent with full conversation context. It can also collect contact information for follow-up or direct users to relevant resources."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Got <span className="text-glow">Questions?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our AI agent solutions and services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card-glow overflow-hidden">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-card/50 transition-colors duration-200"
                  onClick={() => toggleItem(index)}
                >
                  <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-6">
                    <div className="pt-2 border-t border-border/30">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Still Have Questions CTA */}
        <div className="text-center mt-16">
          <div className="card-glow p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help you understand how AI agents can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="btn-hero"
                onClick={() => window.location.href = 'mailto:support@hyperflow.space'}
              >
                Contact Support
              </button>
              <button 
                className="btn-secondary"
                onClick={() => window.open('https://cal.com/star-ment-yrerge/30min?overlayCalendar=true', '_blank')}
              >
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}