import { useState, useRef } from 'react';
import { Play, Pause, Volume2, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VoiceSample {
  id: string;
  name: string;
  description: string;
  accent: string;
  gender: 'Male' | 'Female';
  audioUrl: string;
}

// Using ElevenLabs public preview URLs
const voiceSamples: VoiceSample[] = [
  {
    id: 'sarah',
    name: 'Sarah',
    description: 'Professional & Warm',
    accent: 'American',
    gender: 'Female',
    audioUrl: 'https://cdn.openai.com/API/docs/audio/alloy.wav',
  },
  {
    id: 'roger',
    name: 'Roger',
    description: 'Confident & Clear',
    accent: 'American',
    gender: 'Male',
    audioUrl: 'https://cdn.openai.com/API/docs/audio/echo.wav',
  },
  {
    id: 'alice',
    name: 'Alice',
    description: 'Friendly & Approachable',
    accent: 'British',
    gender: 'Female',
    audioUrl: 'https://cdn.openai.com/API/docs/audio/shimmer.wav',
  },
  {
    id: 'brian',
    name: 'Brian',
    description: 'Deep & Trustworthy',
    accent: 'American',
    gender: 'Male',
    audioUrl: 'https://cdn.openai.com/API/docs/audio/onyx.wav',
  },
];

export function VoiceSamples() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = async (sample: VoiceSample) => {
    // Stop current audio if playing
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    // If clicking the same sample, just stop
    if (playingId === sample.id) {
      setPlayingId(null);
      return;
    }

    setLoadingId(sample.id);

    try {
      const audio = new Audio(sample.audioUrl);
      audioRef.current = audio;
      
      audio.oncanplaythrough = () => {
        setLoadingId(null);
        setPlayingId(sample.id);
        audio.play();
      };

      audio.onended = () => {
        setPlayingId(null);
      };

      audio.onerror = () => {
        setLoadingId(null);
        setPlayingId(null);
        console.error('Failed to load audio');
      };

      audio.load();
    } catch (error) {
      setLoadingId(null);
      console.error('Audio playback error:', error);
    }
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Volume2 className="w-4 h-4 text-primary" />
            <span>Hear It For Yourself</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Sample <span className="text-glow">AI Voices</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Listen to our premium voices. We'll customize one to match your brand perfectly.
          </p>
        </div>

        {/* Voice Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {voiceSamples.map((sample) => (
            <div
              key={sample.id}
              className={`card-glow p-5 transition-all duration-300 cursor-pointer hover:scale-105 ${
                playingId === sample.id ? 'border-primary/50 bg-primary/5' : ''
              }`}
              onClick={() => handlePlay(sample)}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  sample.gender === 'Female' 
                    ? 'bg-pink-500/20 text-pink-400' 
                    : 'bg-blue-500/20 text-blue-400'
                }`}>
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">{sample.name}</h3>
                  <p className="text-xs text-muted-foreground">{sample.accent}</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4">{sample.description}</p>

              <Button
                variant="outline"
                size="sm"
                className={`w-full gap-2 ${
                  playingId === sample.id 
                    ? 'bg-primary text-primary-foreground border-primary' 
                    : ''
                }`}
                disabled={loadingId === sample.id}
              >
                {loadingId === sample.id ? (
                  <>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Loading...
                  </>
                ) : playingId === sample.id ? (
                  <>
                    <Pause className="w-4 h-4" />
                    Playing...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    Listen
                  </>
                )}
              </Button>
            </div>
          ))}
        </div>

        {/* Custom voice note */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground text-sm">
            🎙️ <span className="text-foreground font-medium">Don't see what you need?</span> We create custom voices tailored to your brand.
          </p>
        </div>
      </div>
    </section>
  );
}
