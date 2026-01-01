import { useState } from 'react';
import { MessageCircle, X, Send, Bot, Mic, MicOff, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useConversation } from '@11labs/react';
import { toast } from '@/hooks/use-toast';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export function VoiceChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI assistant. How can I help you learn about our services today? You can type or speak to me!",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showApiInput, setShowApiInput] = useState(false);

  const conversation = useConversation({
    onConnect: () => {
      toast({ title: "Voice connected!" });
    },
    onDisconnect: () => {
      toast({ title: "Voice disconnected" });
    },
    onMessage: (message) => {
      if (message.message) {
        const botMessage: Message = {
          id: Date.now().toString(),
          text: message.message,
          isBot: true,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      }
    },
    onError: (error) => {
      toast({ 
        title: "Voice error", 
        description: "Please check your API key and try again.",
        variant: "destructive" 
      });
    }
  });

  const predefinedQuestions = [
    "What services do you offer?",
    "How much does it cost?",
    "How long does implementation take?",
    "Do you provide support?"
  ];

  const botResponses: { [key: string]: string } = {
    "what services": "We offer AI Chat Bots, Appointment Settlement Bots, Website Chat Agents, Email Automation, Instagram DM Automation, and Custom AI Solutions. Each service is designed to streamline your business operations and improve customer engagement.",
    "cost": "Our pricing varies based on your specific needs and the complexity of the solution. We offer flexible packages starting from basic chatbot implementations to comprehensive AI automation suites. Contact us for a personalized quote!",
    "implementation": "Implementation typically takes 1-3 weeks depending on the complexity. Simple chatbots can be deployed in a few days, while comprehensive automation systems may take 2-3 weeks including training and customization.",
    "support": "Yes! We provide 24/7 support, ongoing maintenance, performance monitoring, and regular updates. Our team is always available to help optimize your AI agents and ensure they're performing at their best.",
    "email automation": "Our email automation uses AI to personalize content, optimize send times, segment audiences, and handle responses. It can significantly increase open rates and conversions while reducing manual work.",
    "instagram": "Our Instagram DM automation helps you engage with followers, respond to common queries, qualify leads, and schedule posts. It's perfect for businesses looking to scale their social media presence.",
    "default": "That's a great question! Our AI agents can help with customer service, appointment booking, lead generation, and much more. Would you like to schedule a consultation to discuss your specific needs?"
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Generate bot response
    setTimeout(() => {
      const lowercaseInput = inputText.toLowerCase();
      let response = botResponses.default;

      for (const [key, value] of Object.entries(botResponses)) {
        if (lowercaseInput.includes(key)) {
          response = value;
          break;
        }
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputText('');
  };

  const handleQuestionClick = (question: string) => {
    setInputText(question);
    handleSendMessage();
  };

  const startVoiceConversation = async () => {
    if (!apiKey) {
      setShowApiInput(true);
      return;
    }

    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      await conversation.startSession({ 
        agentId: 'your-agent-id' // You'll need to replace this with actual agent ID
      });
      setIsListening(true);
    } catch (error) {
      toast({ 
        title: "Microphone access needed", 
        description: "Please allow microphone access to use voice features.",
        variant: "destructive" 
      });
    }
  };

  const stopVoiceConversation = async () => {
    await conversation.endSession();
    setIsListening(false);
  };

  const toggleSpeaker = () => {
    setIsSpeaking(!isSpeaking);
    conversation.setVolume({ volume: isSpeaking ? 0 : 1 });
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-primary-glow shadow-lg hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-110"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </div>

      {/* API Key Input Modal */}
      {showApiInput && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-60">
          <div className="bg-card p-6 rounded-xl max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">ElevenLabs API Key Required</h3>
            <p className="text-sm text-muted-foreground mb-4">
              To use voice features, please enter your ElevenLabs API key:
            </p>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your ElevenLabs API key"
              className="w-full p-2 border border-border rounded-lg mb-4"
            />
            <div className="flex gap-2">
              <Button onClick={() => {
                setShowApiInput(false);
                if (apiKey) startVoiceConversation();
              }}>
                Connect
              </Button>
              <Button variant="outline" onClick={() => setShowApiInput(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-card rounded-xl shadow-2xl border border-border/50 flex flex-col z-50 animate-scale-in">
          {/* Header */}
          <div className="p-4 border-b border-border/50 bg-gradient-to-r from-primary/10 to-accent/10 rounded-t-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold">AI Voice Assistant</h3>
                  <p className="text-xs text-muted-foreground">
                    {isListening ? 'Listening...' : 'Type or speak to me'}
                  </p>
                </div>
              </div>
              
              {/* Voice Controls */}
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={isListening ? stopVoiceConversation : startVoiceConversation}
                  className={isListening ? 'text-red-500' : ''}
                >
                  {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={toggleSpeaker}
                >
                  {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg chat-bubble ${
                    message.isBot
                      ? 'bg-secondary text-secondary-foreground'
                      : 'bg-primary text-primary-foreground'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}

            {/* Quick Questions */}
            {messages.length <= 1 && (
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground text-center">Quick questions:</p>
                {predefinedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuestionClick(question)}
                    className="w-full text-left p-2 text-xs bg-secondary/50 hover:bg-secondary rounded-lg transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border/50">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about our services or speak..."
                className="flex-1 p-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button
                onClick={handleSendMessage}
                size="sm"
                className="px-3"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}