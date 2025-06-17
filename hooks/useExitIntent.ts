import { useEffect, useState } from 'react';

const useExitIntent = (onExitIntent: () => void, enable = true) => {
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if (!enable || triggered) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Check if mouse is near the top of the viewport (typical exit intent)
      // Or if mouse has left the document entirely
      if (e.clientY <= 0 || e.relatedTarget == null || (e.relatedTarget as Node).nodeName === 'HTML') {
        const sessionTriggered = sessionStorage.getItem('exitIntentTriggered');
        if (!sessionTriggered) {
          onExitIntent();
          sessionStorage.setItem('exitIntentTriggered', 'true');
          setTriggered(true); // Prevent re-triggering in the same component instance lifecycle
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [onExitIntent, enable, triggered]);
};

export default useExitIntent;