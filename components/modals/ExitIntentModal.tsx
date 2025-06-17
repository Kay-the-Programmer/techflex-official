import React, { useState } from 'react';
import useExitIntent from '../../hooks/useExitIntent.ts';
import Button from '../ui/Button.tsx';
import { XMarkIcon, MailIcon } from '../../constants.tsx';

const ExitIntentModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const showModal = () => {
    // Check if already shown in this session (via sessionStorage in hook)
    // Or if user is on contact page, maybe don't show
    if (window.location.hash.includes('/contact')) return;
    setIsOpen(true);
  };

  useExitIntent(showModal, !isOpen && !submitted); // Enable hook if modal not open and not submitted

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      console.log('Exit Intent Email Submitted:', email); // Placeholder
      alert(`Thanks for subscribing, ${email}! (This is a demo)`);
      setSubmitted(true);
      setIsOpen(false);
      sessionStorage.setItem('exitIntentTriggered', 'true'); // Ensure it doesn't pop again
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    sessionStorage.setItem('exitIntentTriggered', 'true'); // Mark as dismissed for this session
  }

  if (!isOpen || submitted) {
    return null;
  }

  return (
    <div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        aria-modal="true"
        role="dialog"
        aria-labelledby="exit-intent-title"
    >
      <div className="bg-white/10 backdrop-blur-10 ring-1 ring-white/15 shadow-xl p-6 sm:p-8 rounded-xl max-w-md w-full relative transform transition-all duration-300 ease-out scale-95 opacity-0 animate-modal-appear">
        <style>
          {`
            @keyframes modal-appear {
              to {
                opacity: 1;
                transform: scale(1);
              }
            }
            .animate-modal-appear {
              animation: modal-appear 0.3s forwards;
            }
          `}
        </style>
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 p-1.5 rounded-full text-brand-gray-500 hover:bg-brand-gray-100 dark:text-brand-gray-400 dark:hover:bg-brand-gray-700 transition-colors"
          aria-label="Close modal"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>

        <div className="text-center">
            <MailIcon className="w-10 h-10 sm:w-12 sm:h-12 text-techflex-orange mx-auto mb-3 sm:mb-4" />
            <h2 id="exit-intent-title" className="text-xl sm:text-2xl font-semibold text-techflex-blue dark:text-white mb-2 font-display">
            Leaving So Soon?
            </h2>
            <p className="text-sm sm:text-base text-brand-gray-600 dark:text-brand-gray-300 mb-4 sm:mb-6 leading-relaxed">
            Get our exclusive "10-Point Tech Checklist for Zambian SMEs" and insights straight to your inbox!
            </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <div>
            <label htmlFor="exit-intent-email" className="sr-only">Email address</label>
            <input
              type="email"
              id="exit-intent-email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              required
              className="w-full px-4 py-2.5 rounded-lg text-brand-gray-800 dark:text-brand-gray-200 bg-brand-gray-100 dark:bg-brand-gray-700 border border-brand-gray-300 dark:border-brand-gray-600 focus:outline-none focus:ring-2 focus:ring-techflex-orange focus:border-techflex-orange text-sm sm:text-base"
            />
          </div>
          <Button type="submit" variant="primary" size="lg" className="w-full !text-sm sm:!text-base">
            Get My Free Checklist!
          </Button>
        </form>
        <button 
            onClick={closeModal}
            className="mt-3 text-xs text-brand-gray-500 dark:text-brand-gray-400 hover:underline text-center w-full"
        >
            No, thanks
        </button>
      </div>
    </div>
  );
};

export default ExitIntentModal;
