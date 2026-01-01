import { useState } from 'react';
import { Search, MessageCircle, Zap, Shield, Clock, DollarSign, Settings, Headphones } from 'lucide-react';

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  icon: React.ElementType;
}

const faqs: FAQItem[] = [
  {
    id: '1',
    category: 'Getting Started',
    question: 'How fast can I go live?',
    answer: 'Most businesses go live within 48-72 hours. We handle setup, training, and integration so you can focus on what matters.',
    icon: Zap,
  },
  {
    id: '2',
    category: 'Getting Started',
    question: 'What do I need to get started?',
    answer: 'Just your business info and goals. We handle the tech - no coding or complex setup required on your end.',
    icon: Settings,
  },
  {
    id: '3',
    category: 'Features',
    question: 'Which platforms do you support?',
    answer: 'Website chat, WhatsApp, Instagram DMs, Facebook Messenger, email, SMS, and phone calls. All from one dashboard.',
    icon: MessageCircle,
  },
  {
    id: '4',
    category: 'Features',
    question: 'Can the AI handle complex questions?',
    answer: 'Yes. It learns your business deeply. For edge cases, it seamlessly hands off to your team with full context.',
    icon: Headphones,
  },
  {
    id: '5',
    category: 'Security',
    question: 'How secure is my data?',
    answer: 'Enterprise-grade encryption, GDPR compliant, regular audits. Your data never leaves secure servers.',
    icon: Shield,
  },
  {
    id: '6',
    category: 'Pricing',
    question: 'What does it cost?',
    answer: 'Plans start at $249/month. No hidden fees. Cancel anytime. ROI typically within the first month.',
    icon: DollarSign,
  },
  {
    id: '7',
    category: 'Support',
    question: 'What support do you provide?',
    answer: '24/7 support, dedicated success manager, training sessions, and ongoing optimization included.',
    icon: Clock,
  },
];

const categories = ['All', 'Getting Started', 'Features', 'Security', 'Pricing', 'Support'];

export function FAQDashboard() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Quick <span className="text-glow">Answers</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know, organized for speed.
          </p>
        </div>

        {/* Search & Categories */}
        <div className="max-w-4xl mx-auto mb-8 md:mb-12">
          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-card border border-border/50 rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                    : 'bg-card border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredFaqs.map((faq) => {
            const Icon = faq.icon;
            const isExpanded = expandedId === faq.id;

            return (
              <div
                key={faq.id}
                onClick={() => setExpandedId(isExpanded ? null : faq.id)}
                className={`cursor-pointer p-5 rounded-xl border transition-all duration-300 ${
                  isExpanded
                    ? 'bg-card border-primary/50 shadow-lg shadow-primary/10'
                    : 'bg-card/50 border-border/30 hover:border-border hover:bg-card'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2.5 rounded-lg flex-shrink-0 transition-colors ${
                    isExpanded ? 'bg-primary/20' : 'bg-secondary/50'
                  }`}>
                    <Icon className={`w-5 h-5 ${isExpanded ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs text-primary/70 font-medium uppercase tracking-wide">
                      {faq.category}
                    </span>
                    <h3 className="font-semibold mt-1 text-foreground">{faq.question}</h3>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isExpanded ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No results */}
        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No questions found. Try a different search.</p>
          </div>
        )}

        {/* Still have questions */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Can't find what you're looking for?</p>
          <button
            onClick={() => window.open('https://cal.com/star-ment-yrerge/30min?overlayCalendar=true', '_blank')}
            className="btn-outline-glow"
          >
            Talk to a Human
          </button>
        </div>
      </div>
    </section>
  );
}
