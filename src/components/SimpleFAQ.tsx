import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

const faqs = [
  {
    q: "How does it work?",
    a: "When someone calls your business number, our AI answers and talks to them naturally. It can answer questions, book appointments, and take messages. You get notified instantly."
  },
  {
    q: "Does it sound like a robot?",
    a: "No! Our AI sounds like a real person. Most callers don't realize they're talking to AI. We customize the voice to match your brand."
  },
  {
    q: "Can I keep my phone number?",
    a: "Yes! We set up call forwarding from your existing number. Nothing changes for your customers."
  },
  {
    q: "What if the caller needs a real person?",
    a: "The AI knows when to transfer to you or your team. Urgent calls go straight through. You're always in control."
  },
  {
    q: "How long to set up?",
    a: "We do everything for you. Most businesses are live within 24 hours."
  },
  {
    q: "Can I try it first?",
    a: "Yes! We offer a 14-day free trial. No credit card needed to start."
  },
];

export function SimpleFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Questions? <span className="text-glow">Answers.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            The stuff you're probably wondering
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="card-glow overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-5 flex items-center justify-between text-left"
              >
                <span className="font-semibold pr-4">{faq.q}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-40 pb-5 px-5' : 'max-h-0'
                }`}
              >
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-muted-foreground mb-3">Still have questions?</p>
          <a 
            href="https://cal.com/star-ment-yrerge/30min?overlayCalendar=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            <MessageCircle className="w-4 h-4" />
            Let's chat
          </a>
        </div>
      </div>
    </section>
  );
}
