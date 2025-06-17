import React, { useState, useEffect } from 'react';
import Button from './ui/Button.tsx';
import { MailIcon } from '../constants.tsx'; // Or any other suitable icon

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) { // Show button after scrolling 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
      <Button
        to="/contact"
        variant="primary"
        size="icon" 
        className="rounded-full bg-white/10 backdrop-blur-10 ring-1 ring-white/15 shadow-xl p-3 sm:p-4 hover:scale-110"
        ariaLabel="Contact Us"
      >
        <MailIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
      </Button>
    </div>
  );
};

export default StickyCTA;
