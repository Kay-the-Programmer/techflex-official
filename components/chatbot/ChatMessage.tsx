import React from 'react';
import { ChatMessage as ChatMessageType } from '../../types.ts'; // Ensure this path is correct
import { COMPANY_NAME, CodeBracketSquareIcon } from '../../constants.tsx'; // For bot avatar

const ChatMessage: React.FC<{ message: ChatMessageType }> = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`flex mb-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex items-end max-w-[80%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        {!isUser && (
           <div className="flex-shrink-0 mr-2 self-start mt-1">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-techflex-orange text-white flex items-center justify-center">
                <CodeBracketSquareIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4"/>
            </div>
           </div>
        )}
        <div
          className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-sm sm:text-base leading-relaxed break-words ${
            isUser
              ? 'bg-techflex-orange text-white rounded-br-none'
              : 'bg-brand-gray-100 dark:bg-brand-gray-700 text-brand-gray-800 dark:text-brand-gray-200 rounded-bl-none'
          }`}
        >
          {message.isLoading ? (
             <div className="flex items-center space-x-1.5">
                <div className="h-1.5 w-1.5 bg-current rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="h-1.5 w-1.5 bg-current rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="h-1.5 w-1.5 bg-current rounded-full animate-bounce"></div>
            </div>
          ) : (
            message.text
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;