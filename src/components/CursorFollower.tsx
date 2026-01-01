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
      {/* Main cursor - pointy triangle */}
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-100 ease-out hidden md:block"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-4px, -4px) scale(${isHovering ? 1.2 : 1})`,
          opacity: isVisible ? 1 : 0,
        }}
      >
        {/* Pointy cursor shape */}
        <svg 
          width="24" 
          height="28" 
          viewBox="0 0 24 28" 
          fill="none"
          className="drop-shadow-[0_0_8px_hsl(217,91%,60%)]"
        >
          <path 
            d="M4 2L4 22L9 17L14 26L17 24.5L12 15.5L20 15.5L4 2Z" 
            fill={isHovering ? "hsl(217, 91%, 60%)" : "hsl(217, 91%, 70%)"}
            stroke="hsl(0, 0%, 100%)"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      
      {/* Glow trail effect */}
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-200 ease-out hidden md:block"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 0.4 : 0,
        }}
      >
        <div 
          className="w-20 h-20 rounded-full blur-xl"
          style={{
            background: `radial-gradient(circle, hsl(217 91% 60% / 0.4) 0%, transparent 70%)`,
          }}
        />
      </div>
    </>
  );
}
