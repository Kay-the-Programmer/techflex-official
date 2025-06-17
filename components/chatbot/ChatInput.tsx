import React, { useState } from 'react';
import Button from '../ui/Button.tsx'; // Ensure this path is correct
import { PaperAirplaneIcon } from '../../constants.tsx'; // Ensure this path is correct

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !isLoading) {
      onSendMessage(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 sm:p-4 border-t border-brand-gray-200 dark:border-brand-gray-700">
      <div className="flex items-center space-x-2 sm:space-x-3">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask something..."
          disabled={isLoading}
          className="flex-grow px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-sm sm:text-base bg-brand-gray-50 dark:bg-brand-gray-600 border border-brand-gray-300 dark:border-brand-gray-500 focus:outline-none focus:ring-2 focus:ring-techflex-orange focus:border-techflex-orange placeholder-brand-gray-400 dark:placeholder-brand-gray-400 text-brand-gray-800 dark:text-brand-gray-100 disabled:opacity-70"
          aria-label="Your message to the chatbot"
        />
        <Button 
            type="submit" 
            variant="primary" 
            size="icon" 
            className="p-2.5 sm:p-3 disabled:opacity-70"
            disabled={isLoading || !inputValue.trim()}
            ariaLabel="Send message"
        >
          <PaperAirplaneIcon className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
      </div>
    </form>
  );
};

export default ChatInput;