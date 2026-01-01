import { useState, useEffect } from 'react';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ZoomControls() {
  const [zoom, setZoom] = useState(100);

  useEffect(() => {
    document.documentElement.style.zoom = `${zoom}%`;
    
    return () => {
      document.documentElement.style.zoom = '100%';
    };
  }, [zoom]);

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 10, 200));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 10, 50));
  };

  const handleReset = () => {
    setZoom(100);
  };

  return (
    <div className="fixed top-20 left-6 z-40 flex flex-col gap-2 bg-card/90 backdrop-blur-sm border border-border/50 rounded-lg p-2 shadow-lg">
      <Button
        variant="ghost"
        size="sm"
        onClick={handleZoomIn}
        disabled={zoom >= 200}
        className="w-full"
      >
        <ZoomIn className="w-4 h-4" />
      </Button>
      <div className="text-xs text-center px-2 py-1 text-muted-foreground">
        {zoom}%
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={handleZoomOut}
        disabled={zoom <= 50}
        className="w-full"
      >
        <ZoomOut className="w-4 h-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={handleReset}
        className="w-full"
      >
        <RotateCcw className="w-4 h-4" />
      </Button>
    </div>
  );
}