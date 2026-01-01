import { useState, useEffect } from 'react';
import { Phone, User, Bot, Calendar, Check } from 'lucide-react';

export function SimpleDemo() {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const conversation = [
    { speaker: 'caller', text: "Hi, I'd like to book an appointment" },
    { speaker: 'ai', text: "Of course! I can help you with that. What day works best for you?" },
    { speaker: 'caller', text: "How about Thursday at 2pm?" },
    { speaker: 'ai', text: "Thursday at 2pm is available. I've booked you in! You'll get a confirmation text." },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      setStep(prev => {
        if (prev >= conversation.length) {
          setTimeout(() => setStep(0), 2000);
          return prev;
        }
        return prev + 1;
      });
    }, 2500);

    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Watch It <span className="text-glow">In Action</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            This is what happens when someone calls your business.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          {/* Phone mockup */}
          <div className="card-glow p-4 sm:p-6 rounded-3xl">
            {/* Phone header */}
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Incoming Call</p>
                  <p className="text-xs text-muted-foreground">AI Receptionist Active</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-green-500 font-medium">LIVE</span>
              </div>
            </div>

            {/* Conversation */}
            <div className="space-y-4 min-h-[280px]">
              {conversation.slice(0, step).map((msg, i) => (
                <div 
                  key={i} 
                  className={`flex items-start gap-3 animate-fade-in ${
                    msg.speaker === 'ai' ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    msg.speaker === 'ai' 
                      ? 'bg-primary/20' 
                      : 'bg-muted'
                  }`}>
                    {msg.speaker === 'ai' 
                      ? <Bot className="w-4 h-4 text-primary" />
                      : <User className="w-4 h-4 text-muted-foreground" />
                    }
                  </div>
                  <div className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.speaker === 'ai'
                      ? 'bg-primary text-primary-foreground rounded-tr-sm'
                      : 'bg-muted rounded-tl-sm'
                  }`}>
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}

              {/* Final state */}
              {step > conversation.length - 1 && (
                <div className="flex flex-col items-center justify-center py-6 animate-fade-in">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <Check className="w-5 h-5" />
                    Appointment Booked!
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Thursday at 2:00 PM</p>
                </div>
              )}
            </div>

            {/* Typing indicator */}
            {step > 0 && step <= conversation.length && step % 2 === 0 && (
              <div className="flex items-center gap-2 text-muted-foreground text-sm mt-4">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
                <span>AI is responding...</span>
              </div>
            )}
          </div>

          {/* Restart button */}
          <div className="text-center mt-6">
            <button 
              onClick={() => { setStep(0); setIsPlaying(true); }}
              className="text-sm text-primary hover:underline"
            >
              Watch again
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
