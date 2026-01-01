import { useEffect, useState } from 'react';

export function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Detect hover on interactive elements
    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-hover')
      ) {
        setIsHovering(true);
      }
    };

    const handleHoverEnd = () => setIsHovering(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleHoverStart);
    document.addEventListener('mouseout', handleHoverEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleHoverStart);
      document.removeEventListener('mouseout', handleHoverEnd);
    };
  }, []);

  // Hide on mobile/touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      {/* Main cursor glow */}
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-150 ease-out hidden md:block"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div 
          className={`rounded-full transition-all duration-300 ${
            isHovering 
              ? 'w-12 h-12 bg-primary/20 border-2 border-primary' 
              : 'w-6 h-6 bg-primary/30'
          }`}
          style={{
            boxShadow: isHovering 
              ? '0 0 30px hsl(var(--primary) / 0.5)' 
              : '0 0 20px hsl(var(--primary) / 0.3)',
          }}
        />
      </div>
      
      {/* Trail effect */}
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-300 ease-out hidden md:block"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 0.3 : 0,
        }}
      >
        <div className="w-32 h-32 rounded-full bg-gradient-radial from-primary/20 to-transparent blur-xl" />
      </div>
    </>
  );
}
