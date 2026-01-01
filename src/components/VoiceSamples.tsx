import { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, User, Phone, Building2, Stethoscope, Scale, Wrench, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VoiceSample {
  id: string;
  name: string;
  description: string;
  business: string;
  icon: React.ReactNode;
  script: string;
  voiceSettings: {
    pitch: number;
    rate: number;
    preferredVoice?: string;
  };
}

const voiceSamples: VoiceSample[] = [
  {
    id: 'dental',
    name: 'Emma',
    description: 'Warm & Professional',
    business: 'Dental Clinic',
    icon: <Stethoscope className="w-5 h-5" />,
    script: "Good morning! Thank you for calling Bright Smile Dental. This is Emma speaking. How may I assist you today? We have appointments available this week, and I'd be happy to help you schedule a visit with Dr. Johnson.",
    voiceSettings: { pitch: 1.1, rate: 0.95, preferredVoice: 'female' },
  },
  {
    id: 'law',
    name: 'Michael',
    description: 'Confident & Trustworthy',
    business: 'Law Firm',
    icon: <Scale className="w-5 h-5" />,
    script: "Good afternoon, Miller and Associates Law Firm. This is Michael. How may I direct your call? If you're calling about a consultation, I can check our attorneys' availability and get you scheduled at a time that works best for you.",
    voiceSettings: { pitch: 0.9, rate: 0.9, preferredVoice: 'male' },
  },
  {
    id: 'realestate',
    name: 'Sarah',
    description: 'Friendly & Energetic',
    business: 'Real Estate',
    icon: <Building2 className="w-5 h-5" />,
    script: "Hi there! Thanks for calling Premier Realty. I'm Sarah. Are you looking to buy, sell, or rent? We have some amazing new listings that just came on the market. I'd love to connect you with one of our agents who specializes in your area.",
    voiceSettings: { pitch: 1.15, rate: 1.0, preferredVoice: 'female' },
  },
  {
    id: 'hvac',
    name: 'James',
    description: 'Reliable & Helpful',
    business: 'HVAC Services',
    icon: <Wrench className="w-5 h-5" />,
    script: "Thank you for calling Comfort Pro Heating and Cooling. This is James. How can I help you today? We offer same-day service for emergencies and I can get a technician out to you as soon as this afternoon if needed.",
    voiceSettings: { pitch: 0.95, rate: 0.92, preferredVoice: 'male' },
  },
  {
    id: 'restaurant',
    name: 'Lisa',
    description: 'Cheerful & Welcoming',
    business: 'Restaurant',
    icon: <Utensils className="w-5 h-5" />,
    script: "Hello and thank you for calling The Golden Fork! This is Lisa. Would you like to make a reservation? We have tables available for tonight. Our chef's special today is pan-seared salmon with seasonal vegetables. How many will be dining?",
    voiceSettings: { pitch: 1.2, rate: 1.05, preferredVoice: 'female' },
  },
  {
    id: 'medical',
    name: 'David',
    description: 'Calm & Reassuring',
    business: 'Medical Office',
    icon: <Stethoscope className="w-5 h-5" />,
    script: "Good morning, Wellness Medical Center. This is David speaking. How may I assist you? I can help you schedule an appointment, request prescription refills, or connect you with our nursing staff if you have medical questions.",
    voiceSettings: { pitch: 0.85, rate: 0.88, preferredVoice: 'male' },
  },
  {
    id: 'insurance',
    name: 'Rachel',
    description: 'Clear & Informative',
    business: 'Insurance Agency',
    icon: <Building2 className="w-5 h-5" />,
    script: "Hello, thank you for calling Secure Shield Insurance. I'm Rachel. Are you calling about an existing policy or interested in getting a quote? We offer competitive rates on auto, home, and life insurance. I'm here to help you find the best coverage.",
    voiceSettings: { pitch: 1.05, rate: 0.95, preferredVoice: 'female' },
  },
  {
    id: 'automotive',
    name: 'Chris',
    description: 'Direct & Professional',
    business: 'Auto Dealership',
    icon: <Wrench className="w-5 h-5" />,
    script: "Thanks for calling Metro Auto Group. This is Chris. Are you looking for sales, service, or parts today? We just got some great new inventory in, and we're offering special financing rates this month. How can I help you find your perfect vehicle?",
    voiceSettings: { pitch: 0.92, rate: 0.95, preferredVoice: 'male' },
  },
];

export function VoiceSamples() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      setAvailableVoices(voices);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const getVoice = (preferredGender?: string): SpeechSynthesisVoice | null => {
    if (availableVoices.length === 0) return null;

    // Prefer English voices
    const englishVoices = availableVoices.filter(v => v.lang.startsWith('en'));
    
    if (preferredGender === 'female') {
      const femaleVoice = englishVoices.find(v => 
        v.name.toLowerCase().includes('female') || 
        v.name.toLowerCase().includes('samantha') ||
        v.name.toLowerCase().includes('victoria') ||
        v.name.toLowerCase().includes('karen') ||
        v.name.toLowerCase().includes('fiona') ||
        v.name.toLowerCase().includes('zira') ||
        v.name.toLowerCase().includes('hazel')
      );
      if (femaleVoice) return femaleVoice;
    }
    
    if (preferredGender === 'male') {
      const maleVoice = englishVoices.find(v => 
        v.name.toLowerCase().includes('male') || 
        v.name.toLowerCase().includes('daniel') ||
        v.name.toLowerCase().includes('david') ||
        v.name.toLowerCase().includes('james') ||
        v.name.toLowerCase().includes('alex') ||
        v.name.toLowerCase().includes('mark')
      );
      if (maleVoice) return maleVoice;
    }

    return englishVoices[0] || availableVoices[0];
  };

  const handlePlay = (sample: VoiceSample) => {
    // Stop current speech if playing
    window.speechSynthesis.cancel();

    // If clicking the same sample, just stop
    if (playingId === sample.id) {
      setPlayingId(null);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(sample.script);
    speechRef.current = utterance;

    const voice = getVoice(sample.voiceSettings.preferredVoice);
    if (voice) {
      utterance.voice = voice;
    }

    utterance.pitch = sample.voiceSettings.pitch;
    utterance.rate = sample.voiceSettings.rate;
    utterance.volume = 1;

    utterance.onstart = () => {
      setPlayingId(sample.id);
    };

    utterance.onend = () => {
      setPlayingId(null);
    };

    utterance.onerror = () => {
      setPlayingId(null);
    };

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeech = () => {
    window.speechSynthesis.cancel();
    setPlayingId(null);
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Phone className="w-4 h-4 text-primary" />
            <span>Real Business Conversations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Hear Your <span className="text-glow">AI Receptionist</span> In Action
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Listen to how our AI handles calls for different industries. Each voice is customized for the perfect business tone.
          </p>
        </div>

        {/* Voice Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {voiceSamples.map((sample) => (
            <div
              key={sample.id}
              className={`card-glow p-5 transition-all duration-300 cursor-pointer hover:scale-[1.02] ${
                playingId === sample.id ? 'border-primary/50 bg-primary/5 ring-2 ring-primary/30' : ''
              }`}
              onClick={() => playingId === sample.id ? stopSpeech() : handlePlay(sample)}
            >
              {/* Business Badge */}
              <div className="flex items-center gap-2 text-xs text-primary mb-3">
                {sample.icon}
                <span className="font-medium">{sample.business}</span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className={`w-11 h-11 rounded-full flex items-center justify-center ${
                  sample.voiceSettings.preferredVoice === 'female' 
                    ? 'bg-pink-500/20 text-pink-400' 
                    : 'bg-blue-500/20 text-blue-400'
                }`}>
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">{sample.name}</h3>
                  <p className="text-xs text-muted-foreground">{sample.description}</p>
                </div>
              </div>

              <p className="text-xs text-muted-foreground mb-4 line-clamp-2 italic">
                "{sample.script.substring(0, 80)}..."
              </p>

              <Button
                variant="outline"
                size="sm"
                className={`w-full gap-2 text-xs ${
                  playingId === sample.id 
                    ? 'bg-primary text-primary-foreground border-primary' 
                    : ''
                }`}
              >
                {playingId === sample.id ? (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    Stop
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    Listen
                  </>
                )}
              </Button>
            </div>
          ))}
        </div>

        {/* Custom voice note */}
        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-3 bg-card/50 border border-border/50 rounded-full px-6 py-3">
            <Volume2 className="w-5 h-5 text-primary" />
            <p className="text-muted-foreground text-sm">
              <span className="text-foreground font-medium">Custom voices available!</span> We'll create a unique AI voice tailored to your brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}