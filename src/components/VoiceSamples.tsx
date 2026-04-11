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
    voiceNames: string[]; // prioritized list of natural-sounding voices
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
      "Good morning! Thank you for calling Bright Smile Dental. This is Emma. How may I help you today? We have some openings this week for cleanings and checkups.",
      "Hi there! Bright Smile Dental, this is Emma. Are you calling about a new appointment? We have a great opening on Thursday afternoon if that works for you.",
      "Thank you for calling Bright Smile Dental. This is Emma. I see you're due for your regular cleaning! How about we get you scheduled this week?",
    ],
    voiceSettings: {
      pitch: 1.12,
      rate: 0.92,
      preferredVoice: 'female',
      voiceNames: ['Google UK English Female', 'Samantha', 'Karen', 'Moira', 'Tessa', 'Victoria', 'Fiona'],
    },
  },
  {
    id: 'law',
    name: 'Michael',
    description: 'Confident & Trustworthy',
    business: 'Law Firm',
    icon: <Scale className="w-5 h-5" />,
    scripts: [
      "Good afternoon, Miller and Associates. This is Michael. How may I direct your call? I can check our attorneys' availability and schedule a consultation for you.",
      "Miller and Associates, Michael speaking. Are you an existing client, or is this about a new matter? I'll connect you with the right person.",
      "Hello, thank you for reaching out to Miller and Associates. This is Michael. Let me get a few details so we can match you with the best attorney for your needs.",
    ],
    voiceSettings: {
      pitch: 0.88,
      rate: 0.88,
      preferredVoice: 'male',
      voiceNames: ['Google UK English Male', 'Daniel', 'James', 'Thomas', 'Alex', 'Oliver'],
    },
  },
  {
    id: 'realestate',
    name: 'Sarah',
    description: 'Friendly & Energetic',
    business: 'Real Estate',
    icon: <Building2 className="w-5 h-5" />,
    scripts: [
      "Hi! Thanks for calling Premier Realty, this is Sarah! Are you looking to buy, sell, or rent? We've got some amazing new listings I'd love to tell you about.",
      "Premier Realty, Sarah speaking! Perfect timing — we just listed three gorgeous homes in downtown. Want me to set up a viewing this weekend?",
      "Hello! Sarah here at Premier Realty. Looking for your dream home? Tell me the area you love and I'll have our top agent call you with exclusive listings.",
    ],
    voiceSettings: {
      pitch: 1.08,
      rate: 0.93,
      preferredVoice: 'female',
      voiceNames: ['Google US English', 'Samantha', 'Allison', 'Ava', 'Susan', 'Zira'],
    },
  },
  {
    id: 'hvac',
    name: 'James',
    description: 'Reliable & Helpful',
    business: 'HVAC Services',
    icon: <Wrench className="w-5 h-5" />,
    scripts: [
      "Thank you for calling Comfort Pro Heating and Cooling. This is James. How can I help? We have technicians available for same-day emergency service.",
      "Comfort Pro, James here. Is your AC acting up? Don't worry — we can have someone out there as early as this afternoon. What's happening with it?",
      "Hi, James at Comfort Pro. Calling about a repair or tune-up? We're running a special this month on annual maintenance. Keeps everything running smooth!",
    ],
    voiceSettings: {
      pitch: 0.92,
      rate: 0.90,
      preferredVoice: 'male',
      voiceNames: ['Google UK English Male', 'Daniel', 'David', 'Fred', 'Ralph'],
    },
  },
  {
    id: 'restaurant',
    name: 'Lisa',
    description: 'Cheerful & Welcoming',
    business: 'Restaurant',
    icon: <Utensils className="w-5 h-5" />,
    scripts: [
      "Hello, thank you for calling The Golden Fork! This is Lisa. Would you like to make a reservation? We have lovely tables available tonight. Our chef's special is pan-seared salmon!",
      "The Golden Fork, Lisa speaking! Calling about our weekend brunch? We still have the 11am slot open. Our mimosa flights are incredible!",
      "Hi! Welcome to The Golden Fork, this is Lisa. Looking for a table tonight? We have a beautiful patio with sunset views. Can I book you for 7pm?",
    ],
    voiceSettings: {
      pitch: 1.10,
      rate: 0.91,
      preferredVoice: 'female',
      voiceNames: ['Google US English', 'Samantha', 'Karen', 'Victoria', 'Allison'],
    },
  },
  {
    id: 'medical',
    name: 'David',
    description: 'Calm & Reassuring',
    business: 'Medical Office',
    icon: <Stethoscope className="w-5 h-5" />,
    scripts: [
      "Good morning, Wellness Medical Center. This is David. How may I help you? I can schedule appointments, handle prescription refill requests, or connect you with our nursing team.",
      "Wellness Medical Center, David here. Calling about lab results? Let me pull up your file. I'll have a nurse call you back within the hour.",
      "Thank you for calling Wellness Medical. This is David. Not feeling well? Let me check Dr. Patel's schedule — we always keep urgent slots open.",
    ],
    voiceSettings: {
      pitch: 0.85,
      rate: 0.87,
      preferredVoice: 'male',
      voiceNames: ['Google UK English Male', 'Daniel', 'Thomas', 'Oliver', 'Arthur'],
    },
  },
];

function AudioWaveform({ isPlaying }: { isPlaying: boolean }) {
  return (
    <div className="flex items-center justify-center gap-0.5 h-8">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className={`w-1 bg-primary rounded-full transition-all ${isPlaying ? 'animate-waveform' : 'h-1'}`}
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
    const loadVoices = () => setAvailableVoices(window.speechSynthesis.getVoices());
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    return () => { window.speechSynthesis.cancel(); };
  }, []);

  const getVoice = (sample: VoiceSample): SpeechSynthesisVoice | null => {
    if (availableVoices.length === 0) return null;

    // Try preferred voice names first (natural-sounding ones)
    for (const name of sample.voiceSettings.voiceNames) {
      const match = availableVoices.find(v => v.name.includes(name));
      if (match) return match;
    }

    // Fallback to any English voice
    const englishVoices = availableVoices.filter(v => v.lang.startsWith('en'));
    return englishVoices[0] || availableVoices[0];
  };

  const handlePlay = (sample: VoiceSample) => {
    window.speechSynthesis.cancel();
    if (playingId === sample.id) { setPlayingId(null); return; }

    const index = scriptIndices[sample.id] || 0;
    const utterance = new SpeechSynthesisUtterance(sample.scripts[index]);
    speechRef.current = utterance;

    const voice = getVoice(sample);
    if (voice) utterance.voice = voice;

    utterance.pitch = sample.voiceSettings.pitch;
    utterance.rate = sample.voiceSettings.rate;
    utterance.volume = 1;

    utterance.onstart = () => setPlayingId(sample.id);
    utterance.onend = () => {
      setPlayingId(null);
      setScriptIndices(prev => ({ ...prev, [sample.id]: ((prev[sample.id] || 0) + 1) % sample.scripts.length }));
    };
    utterance.onerror = () => setPlayingId(null);

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeech = () => { window.speechSynthesis.cancel(); setPlayingId(null); };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background" />

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
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Phone className="w-4 h-4 text-primary" />
            <span>Hear It Yourself</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Your <span className="text-glow">AI Receptionist</span> In Action
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Click play to hear how naturally our AI handles calls for different businesses. Each voice is tuned for the perfect professional tone.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
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
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-xs text-primary">
                    {sample.icon}
                    <span className="font-medium">{sample.business}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {sample.scripts.map((_, idx) => (
                      <div key={idx} className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentScriptIndex ? 'bg-primary' : 'bg-muted-foreground/30'}`} />
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center ${
                    sample.voiceSettings.preferredVoice === 'female' ? 'bg-pink-500/20 text-pink-400' : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {isPlaying ? <AudioWaveform isPlaying={true} /> : <User className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">{sample.name}</h3>
                    <p className="text-xs text-muted-foreground">{sample.description}</p>
                  </div>
                </div>

                {isPlaying && (
                  <div className="flex items-center justify-center gap-1 mb-3 py-2 bg-primary/10 rounded-lg">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div key={i} className="w-1 bg-primary rounded-full animate-waveform" style={{ animationDelay: `${i * 0.08}s`, animationDuration: `${0.4 + Math.random() * 0.3}s` }} />
                    ))}
                  </div>
                )}

                <p className="text-xs text-muted-foreground mb-4 line-clamp-2 italic min-h-[2.5rem]">
                  "{currentScript.substring(0, 80)}..."
                </p>

                <Button
                  variant="outline"
                  size="sm"
                  className={`w-full gap-2 text-xs ${isPlaying ? 'bg-primary text-primary-foreground border-primary' : ''}`}
                >
                  {isPlaying ? (<><Pause className="w-3.5 h-3.5" />Stop</>) : (<><Play className="w-3.5 h-3.5" />Listen</>)}
                </Button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-3 bg-card/50 border border-border/50 rounded-full px-6 py-3">
            <Volume2 className="w-5 h-5 text-primary" />
            <p className="text-muted-foreground text-sm">
              <span className="text-foreground font-medium">These are browser previews.</span> Real AI voices sound even more natural & human-like.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
