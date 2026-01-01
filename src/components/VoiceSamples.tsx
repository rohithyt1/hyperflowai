import { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, User, Phone, Building2, Stethoscope, Scale, Wrench, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VoiceSample {
  id: string;
  name: string;
  description: string;
  business: string;
  icon: React.ReactNode;
  scripts: string[];
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
    scripts: [
      "Good morning! Thank you for calling Bright Smile Dental. This is Emma speaking. How may I assist you today? We have appointments available this week, and I'd be happy to help you schedule a visit with Dr. Johnson.",
      "Hi! Bright Smile Dental, Emma speaking. Are you calling to schedule a cleaning or checkup? We're currently offering a special on new patient exams. Let me find a time that works for you!",
      "Thank you for calling Bright Smile Dental. This is Emma. I see you're due for your six-month cleaning! Would Tuesday at 2pm work for you? Dr. Johnson has that slot open.",
    ],
    voiceSettings: { pitch: 1.1, rate: 0.95, preferredVoice: 'female' },
  },
  {
    id: 'law',
    name: 'Michael',
    description: 'Confident & Trustworthy',
    business: 'Law Firm',
    icon: <Scale className="w-5 h-5" />,
    scripts: [
      "Good afternoon, Miller and Associates Law Firm. This is Michael. How may I direct your call? If you're calling about a consultation, I can check our attorneys' availability and get you scheduled at a time that works best for you.",
      "Miller and Associates, Michael speaking. Thank you for calling. Are you an existing client or is this regarding a new matter? I can connect you with the right attorney immediately.",
      "Hello, thank you for reaching Miller and Associates. This is Michael. I understand legal matters can be stressful. Let me get some details so I can connect you with the best attorney for your situation.",
    ],
    voiceSettings: { pitch: 0.9, rate: 0.9, preferredVoice: 'male' },
  },
  {
    id: 'realestate',
    name: 'Sarah',
    description: 'Friendly & Energetic',
    business: 'Real Estate',
    icon: <Building2 className="w-5 h-5" />,
    scripts: [
      "Hi there! Thanks for calling Premier Realty. I'm Sarah. Are you looking to buy, sell, or rent? We have some amazing new listings that just came on the market. I'd love to connect you with one of our agents who specializes in your area.",
      "Premier Realty, this is Sarah! Great timing - we just listed three beautiful homes in the downtown area. Are you currently in the market? I can set up viewings as early as this weekend!",
      "Hello! Sarah here at Premier Realty. Looking for your dream home? Tell me what neighborhood you're interested in and I'll have our top agent reach out with some exclusive listings.",
    ],
    voiceSettings: { pitch: 1.15, rate: 1.0, preferredVoice: 'female' },
  },
  {
    id: 'hvac',
    name: 'James',
    description: 'Reliable & Helpful',
    business: 'HVAC Services',
    icon: <Wrench className="w-5 h-5" />,
    scripts: [
      "Thank you for calling Comfort Pro Heating and Cooling. This is James. How can I help you today? We offer same-day service for emergencies and I can get a technician out to you as soon as this afternoon if needed.",
      "Comfort Pro HVAC, James speaking. Is your AC not cooling properly? Don't sweat it - we have technicians available right now. What's the issue you're experiencing?",
      "Hi, this is James at Comfort Pro. Are you calling about a repair or maintenance? We're running a special on annual tune-ups this month. Keeps your system running efficiently all year!",
    ],
    voiceSettings: { pitch: 0.95, rate: 0.92, preferredVoice: 'male' },
  },
  {
    id: 'restaurant',
    name: 'Lisa',
    description: 'Cheerful & Welcoming',
    business: 'Restaurant',
    icon: <Utensils className="w-5 h-5" />,
    scripts: [
      "Hello and thank you for calling The Golden Fork! This is Lisa. Would you like to make a reservation? We have tables available for tonight. Our chef's special today is pan-seared salmon with seasonal vegetables. How many will be dining?",
      "The Golden Fork, Lisa speaking! Are you calling about our weekend brunch? We still have availability for the 11am seating. Our mimosa flight is absolutely divine!",
      "Hi! Welcome to The Golden Fork. This is Lisa. Looking for a table for this evening? We have a lovely patio available. Can I put you down for 7pm? Perfect for watching the sunset!",
    ],
    voiceSettings: { pitch: 1.2, rate: 1.05, preferredVoice: 'female' },
  },
  {
    id: 'medical',
    name: 'David',
    description: 'Calm & Reassuring',
    business: 'Medical Office',
    icon: <Stethoscope className="w-5 h-5" />,
    scripts: [
      "Good morning, Wellness Medical Center. This is David speaking. How may I assist you? I can help you schedule an appointment, request prescription refills, or connect you with our nursing staff if you have medical questions.",
      "Wellness Medical Center, David here. Are you calling about lab results? Let me pull up your file. I can have one of our nurses call you back within the hour to discuss them.",
      "Thank you for calling Wellness Medical. This is David. I understand you're not feeling well. Let me check Dr. Patel's availability for today. We always keep slots open for patients who need to be seen urgently.",
    ],
    voiceSettings: { pitch: 0.85, rate: 0.88, preferredVoice: 'male' },
  },
  {
    id: 'insurance',
    name: 'Rachel',
    description: 'Clear & Informative',
    business: 'Insurance Agency',
    icon: <Building2 className="w-5 h-5" />,
    scripts: [
      "Hello, thank you for calling Secure Shield Insurance. I'm Rachel. Are you calling about an existing policy or interested in getting a quote? We offer competitive rates on auto, home, and life insurance. I'm here to help you find the best coverage.",
      "Secure Shield Insurance, Rachel speaking. Looking to bundle your policies? We can save you up to 25% when you combine auto and home. Let me run some numbers for you!",
      "Hi, this is Rachel at Secure Shield. I see you recently got a quote from us. Great news - I can lock in that rate for you today. Do you have a few minutes to review the coverage details?",
    ],
    voiceSettings: { pitch: 1.05, rate: 0.95, preferredVoice: 'female' },
  },
  {
    id: 'automotive',
    name: 'Chris',
    description: 'Direct & Professional',
    business: 'Auto Dealership',
    icon: <Wrench className="w-5 h-5" />,
    scripts: [
      "Thanks for calling Metro Auto Group. This is Chris. Are you looking for sales, service, or parts today? We just got some great new inventory in, and we're offering special financing rates this month. How can I help you find your perfect vehicle?",
      "Metro Auto, Chris speaking. Interested in our certified pre-owned selection? We have over 50 vehicles under 30,000 miles with full warranty. What style are you looking for - sedan, SUV, or truck?",
      "Hi there! Chris at Metro Auto Group. I heard you're looking to trade in your vehicle. We're offering above-market value on trade-ins this week. Want to come in for a free appraisal?",
    ],
    voiceSettings: { pitch: 0.92, rate: 0.95, preferredVoice: 'male' },
  },
];

// Waveform visualization component
function AudioWaveform({ isPlaying }: { isPlaying: boolean }) {
  const bars = 5;
  
  return (
    <div className="flex items-center justify-center gap-0.5 h-8">
      {Array.from({ length: bars }).map((_, i) => (
        <div
          key={i}
          className={`w-1 bg-primary rounded-full transition-all ${
            isPlaying ? 'animate-waveform' : 'h-1'
          }`}
          style={{
            animationDelay: isPlaying ? `${i * 0.1}s` : '0s',
            height: isPlaying ? undefined : '4px',
          }}
        />
      ))}
    </div>
  );
}

export function VoiceSamples() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [scriptIndices, setScriptIndices] = useState<Record<string, number>>({});
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

  const getCurrentScript = (sample: VoiceSample): string => {
    const index = scriptIndices[sample.id] || 0;
    return sample.scripts[index];
  };

  const rotateScript = (sampleId: string, scriptsLength: number) => {
    setScriptIndices(prev => ({
      ...prev,
      [sampleId]: ((prev[sampleId] || 0) + 1) % scriptsLength,
    }));
  };

  const handlePlay = (sample: VoiceSample) => {
    window.speechSynthesis.cancel();

    if (playingId === sample.id) {
      setPlayingId(null);
      return;
    }

    const script = getCurrentScript(sample);
    const utterance = new SpeechSynthesisUtterance(script);
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
      // Auto-rotate to next script after playback ends
      rotateScript(sample.id, sample.scripts.length);
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

      {/* Waveform animation styles */}
      <style>{`
        @keyframes waveform {
          0%, 100% { height: 4px; }
          50% { height: 24px; }
        }
        .animate-waveform {
          animation: waveform 0.5s ease-in-out infinite;
        }
      `}</style>

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
          {voiceSamples.map((sample) => {
            const isPlaying = playingId === sample.id;
            const currentScriptIndex = scriptIndices[sample.id] || 0;
            const currentScript = sample.scripts[currentScriptIndex];
            
            return (
              <div
                key={sample.id}
                className={`card-glow p-5 transition-all duration-300 cursor-pointer hover:scale-[1.02] ${
                  isPlaying ? 'border-primary/50 bg-primary/5 ring-2 ring-primary/30' : ''
                }`}
                onClick={() => isPlaying ? stopSpeech() : handlePlay(sample)}
              >
                {/* Business Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-xs text-primary">
                    {sample.icon}
                    <span className="font-medium">{sample.business}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {sample.scripts.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-1.5 h-1.5 rounded-full transition-colors ${
                          idx === currentScriptIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center ${
                    sample.voiceSettings.preferredVoice === 'female' 
                      ? 'bg-pink-500/20 text-pink-400' 
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {isPlaying ? (
                      <AudioWaveform isPlaying={true} />
                    ) : (
                      <User className="w-5 h-5" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">{sample.name}</h3>
                    <p className="text-xs text-muted-foreground">{sample.description}</p>
                  </div>
                </div>

                {/* Waveform visualization when playing */}
                {isPlaying && (
                  <div className="flex items-center justify-center gap-1 mb-3 py-2 bg-primary/10 rounded-lg">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-primary rounded-full animate-waveform"
                        style={{
                          animationDelay: `${i * 0.08}s`,
                          animationDuration: `${0.4 + Math.random() * 0.3}s`,
                        }}
                      />
                    ))}
                  </div>
                )}

                <p className="text-xs text-muted-foreground mb-4 line-clamp-2 italic min-h-[2.5rem]">
                  "{currentScript.substring(0, 80)}..."
                </p>

                <Button
                  variant="outline"
                  size="sm"
                  className={`w-full gap-2 text-xs ${
                    isPlaying 
                      ? 'bg-primary text-primary-foreground border-primary' 
                      : ''
                  }`}
                >
                  {isPlaying ? (
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
            );
          })}
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
