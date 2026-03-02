import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Sparkles, Calendar, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { supabase } from '@/integrations/supabase/client';

type Message = { role: 'user' | 'assistant'; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/faq-chat`;

const QUICK_QUESTIONS = [
  "How does it work?",
  "What's the pricing?",
  "How fast can I go live?",
  "Book a demo",
];

function BookingForm({ onBooked }: { onBooked: () => void }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) return;
    setSubmitting(true);
    try {
      await supabase.from('appointments').insert({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
      });
      setDone(true);
      onBooked();
    } catch {
      // silent fail
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-accent/10 border border-accent/30 rounded-xl p-3 text-center space-y-1"
      >
        <CheckCircle2 className="w-6 h-6 text-accent mx-auto" />
        <p className="text-sm font-semibold text-foreground">You're booked! 🎉</p>
        <p className="text-xs text-muted-foreground">We'll reach out to you shortly.</p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="bg-secondary/80 border border-border/50 rounded-xl p-3 space-y-2"
    >
      <div className="flex items-center gap-2 mb-1">
        <Calendar className="w-4 h-4 text-primary" />
        <span className="text-xs font-semibold text-foreground">Book Your Demo</span>
      </div>
      <input
        type="text"
        placeholder="Your name"
        value={form.name}
        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
        className="w-full text-xs px-3 py-2 rounded-lg bg-background border border-border/60 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/60 transition-colors"
        required
      />
      <input
        type="email"
        placeholder="Email address"
        value={form.email}
        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
        className="w-full text-xs px-3 py-2 rounded-lg bg-background border border-border/60 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/60 transition-colors"
        required
      />
      <input
        type="tel"
        placeholder="Phone / WhatsApp"
        value={form.phone}
        onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
        className="w-full text-xs px-3 py-2 rounded-lg bg-background border border-border/60 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/60 transition-colors"
        required
      />
      <button
        type="submit"
        disabled={submitting}
        className="w-full text-xs font-semibold py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 disabled:opacity-50 transition-opacity"
      >
        {submitting ? 'Booking...' : 'Book Appointment →'}
      </button>
    </motion.form>
  );
}

function ChatMessage({ msg, onBooked }: { msg: Message; onBooked: () => void }) {
  if (msg.role === 'user') {
    return (
      <div className="flex justify-end">
        <div className="max-w-[80%] px-3 py-2 rounded-xl rounded-br-sm text-sm leading-relaxed bg-primary text-primary-foreground">
          {msg.content}
        </div>
      </div>
    );
  }

  const hasBookingForm = msg.content.includes('[SHOW_BOOKING_FORM]');
  const cleanContent = msg.content.replace(/\*?\*?\[SHOW_BOOKING_FORM\]\*?\*?/g, '').trim();

  return (
    <div className="flex justify-start">
      <div className="w-6 h-6 rounded-md bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">
        <Bot className="w-3 h-3 text-primary" />
      </div>
      <div className="max-w-[85%] space-y-2">
        <div className="bg-secondary/60 text-foreground rounded-xl rounded-tl-sm px-3 py-2 text-sm leading-relaxed">
          <ReactMarkdown
            components={{
              a: ({ href, children }) => (
                <a href={href} target="_blank" rel="noopener noreferrer" className="underline text-primary font-medium hover:opacity-80">
                  {children}
                </a>
              ),
              p: ({ children }) => <span>{children}</span>,
            }}
          >
            {cleanContent}
          </ReactMarkdown>
        </div>
        {hasBookingForm && <BookingForm onBooked={onBooked} />}
      </div>
    </div>
  );
}

export function FAQChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;
    setHasInteracted(true);
    const userMsg: Message = { role: 'user', content: text.trim() };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    let assistantSoFar = '';

    try {
      const resp = await fetch(CHAT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!resp.ok || !resp.body) throw new Error('Stream failed');

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        let idx: number;
        while ((idx = buffer.indexOf('\n')) !== -1) {
          let line = buffer.slice(0, idx);
          buffer = buffer.slice(idx + 1);
          if (line.endsWith('\r')) line = line.slice(0, -1);
          if (!line.startsWith('data: ')) continue;
          const json = line.slice(6).trim();
          if (json === '[DONE]') break;
          try {
            const parsed = JSON.parse(json);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              assistantSoFar += content;
              setMessages((prev) => {
                const last = prev[prev.length - 1];
                if (last?.role === 'assistant') {
                  return prev.map((m, i) =>
                    i === prev.length - 1 ? { ...m, content: assistantSoFar } : m
                  );
                }
                return [...prev, { role: 'assistant', content: assistantSoFar }];
              });
            }
          } catch {
            buffer = line + '\n' + buffer;
            break;
          }
        }
      }
    } catch (err) {
      console.error('Chat error:', err);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: "Sorry, I'm having trouble right now. Try again or [book a demo](https://cal.com/star-ment-yrerge/30min)!" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBooked = () => {
    setMessages((prev) => [
      ...prev,
      { role: 'assistant', content: "Awesome, you're all set! We'll be in touch soon 🚀" },
    ]);
  };

  return (
    <>
      {/* Floating button with pulse */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            {/* Pulse rings */}
            <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
            <span className="absolute -inset-1 rounded-full bg-primary/15 animate-pulse" />
            <motion.button
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => setIsOpen(true)}
              className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary via-primary to-accent shadow-xl shadow-primary/50 flex items-center justify-center text-primary-foreground"
              aria-label="Open chat"
            >
              <MessageCircle className="w-6 h-6" />
            </motion.button>
            {/* Tooltip bubble */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2, duration: 0.4 }}
              className="absolute bottom-3 right-[68px] bg-card border border-border/60 text-foreground text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap"
            >
              Chat with us! 💬
              <div className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[5px] border-l-border/60" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-[370px] max-w-[calc(100vw-2rem)] h-[540px] max-h-[calc(100vh-3rem)] flex flex-col rounded-2xl border border-border/60 bg-card shadow-2xl shadow-primary/10 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-primary/15 to-accent/10 border-b border-border/40">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Bot className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground leading-tight">HyperFlow AI</p>
                  <p className="text-[11px] text-muted-foreground flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block animate-pulse" />
                    Online now
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-full hover:bg-secondary/80 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3 scrollbar-thin">
              {messages.length === 0 && (
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-md bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Sparkles className="w-3 h-3 text-primary" />
                    </div>
                    <div className="bg-secondary/60 rounded-xl rounded-tl-sm px-3 py-2.5 text-sm text-foreground max-w-[85%]">
                      Hey! 👋 I'm HyperFlow's AI assistant. Ask me anything or book a demo right here!
                    </div>
                  </div>

                  {!hasInteracted && (
                    <div className="flex flex-wrap gap-1.5 pl-8">
                      {QUICK_QUESTIONS.map((q) => (
                        <button
                          key={q}
                          onClick={() => sendMessage(q)}
                          className="text-xs px-3 py-1.5 rounded-full border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/60 transition-all"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {messages.map((msg, i) => (
                <ChatMessage key={i} msg={msg} onBooked={handleBooked} />
              ))}

              {isLoading && messages[messages.length - 1]?.role !== 'assistant' && (
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-md bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-3 h-3 text-primary" />
                  </div>
                  <div className="bg-secondary/60 rounded-xl rounded-tl-sm px-3 py-2.5">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="px-3 py-2.5 border-t border-border/40 bg-card"
            >
              <div className="flex items-center gap-2 bg-secondary/50 rounded-xl px-3 py-1.5">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about HyperFlow..."
                  className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none py-1.5"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-8 h-8 rounded-lg bg-primary/90 hover:bg-primary flex items-center justify-center text-primary-foreground disabled:opacity-40 transition-colors flex-shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
