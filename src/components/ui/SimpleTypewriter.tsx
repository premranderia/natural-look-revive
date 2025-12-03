import { useEffect, useState, useRef } from "react";

interface SimpleTypewriterProps {
  text: string;
  className?: string;
  typingSpeed?: number;
  startDelay?: number;
}

const SimpleTypewriter = ({
  text,
  className = "",
  typingSpeed = 80,
  startDelay = 0,
}: SimpleTypewriterProps) => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef<HTMLSpanElement>(null);

  // Intersection Observer to detect when component comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            setTimeout(() => {
              setShowCursor(true);
            }, startDelay);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasStarted, startDelay]);

  useEffect(() => {
    if (!showCursor) return;

    let timeout: NodeJS.Timeout;

    if (displayText.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, typingSpeed);
    } else {
      // Animation complete, hide cursor
      timeout = setTimeout(() => {
        setShowCursor(false);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [displayText, text, typingSpeed, showCursor]);

  return (
    <span
      ref={sectionRef}
      className={className}
      style={{
        background: displayText ? 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.8) 100%)' : 'transparent',
        WebkitBackgroundClip: displayText ? 'text' : 'unset',
        WebkitTextFillColor: displayText ? 'transparent' : 'transparent',
        backgroundClip: displayText ? 'text' : 'unset',
        display: 'inline-block',
        paddingBottom: '0.15em'
      }}
    >
      {displayText}
      {showCursor && <span className="typewriter-cursor" style={{ WebkitTextFillColor: 'hsl(var(--primary))' }}>|</span>}
    </span>
  );
};

export default SimpleTypewriter;
