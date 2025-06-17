import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage as ChatMessageType } from '../../types.ts';
import ChatMessage from './ChatMessage.tsx';
import ChatInput from './ChatInput.tsx';
import { ChatBubbleOvalLeftEllipsisIcon, XMarkIcon, CodeBracketSquareIcon } from '../../constants.tsx';
import Button from '../ui/Button.tsx';
import { googleAI } from '../../index.tsx'; // Path to the initialized googleAI instance
import { GoogleGenAI, Chat, GenerateContentResponse } from '@google/genai';

const CHATBOT_SYSTEM_INSTRUCTION = `You are TechflexBot, a friendly and helpful AI assistant for Techflex Zambia.
Techflex (tagline: "Progress Through Innovation") is a Zambian tech company founded by Kanyanta Pythias, an IT student at Mulungushi University.
They specialize in custom software for SMEs, Agri-Tech, Health-Tech, and Edu-Tech.
Their core values are Innovation, Collaboration, Integrity, and Community Empowerment.
Their development process includes Discovery, Design, Development, and Deployment.
Keep your responses concise, informative, and positive.
If you don't know an answer or if the query is too complex, politely state that you can't help with that specific request and suggest they contact Techflex directly via the contact page or email (contact@techflex.co.zm).
Do not provide financial advice, medical diagnoses, or engage in controversial topics.
Do not ask for personal information beyond what's needed to understand their query about Techflex.
Focus on providing information found on the Techflex website.
Example intro: "Hello! I'm TechflexBot. How can I help you learn about Techflex today?"
For greetings like "Hi", respond with a greeting and offer help. E.g., "Hi there! How can I assist you with information about Techflex?"
If asked "Who are you?", introduce yourself as TechflexBot.
`;

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);
  
  useEffect(() => {
    if (!googleAI) {
        console.warn("Google AI SDK not initialized. Chatbot disabled.");
        return;
    }
    if (isOpen && !chat) {
        const newChat = googleAI.chats.create({
            model: 'gemini-2.5-flash-preview-04-17',
            config: {
                systemInstruction: CHATBOT_SYSTEM_INSTRUCTION,
                 // Disable thinking for lower latency chatbot
                thinkingConfig: { thinkingBudget: 0 }
            },
        });
        setChat(newChat);
        // Add initial greeting from bot
        setMessages([{
            id: crypto.randomUUID(),
            text: "Hello! I'm TechflexBot. How can I help you learn about Techflex today?",
            sender: 'bot',
            timestamp: new Date()
        }]);
    } else if (!isOpen) {
        setChat(null); // Clear chat session when closed
        setMessages([]); // Clear messages when closed
    }
  }, [isOpen, chat]);


  const handleSendMessage = async (text: string) => {
    if (!chat || !googleAI) {
        setMessages(prev => [...prev, {
            id: crypto.randomUUID(),
            text: "Sorry, the chatbot is currently unavailable. Please try again later or contact us directly.",
            sender: 'bot',
            timestamp: new Date()
        }]);
        return;
    }

    const userMessage: ChatMessageType = {
      id: crypto.randomUUID(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    const loadingBotMessageId = crypto.randomUUID();
     setMessages(prev => [...prev, {
        id: loadingBotMessageId,
        text: "...",
        sender: 'bot',
        timestamp: new Date(),
        isLoading: true,
    }]);

    try {
      const response: GenerateContentResponse = await chat.sendMessage({ message: text });
      const botResponseText = response.text;
      
      setMessages(prev => prev.map(msg => 
        msg.id === loadingBotMessageId 
        ? { ...msg, text: botResponseText, isLoading: false, timestamp: new Date() } 
        : msg
      ));

    } catch (error) {
      console.error('Error sending message to Gemini:', error);
      const errorMessage = "I'm having a little trouble connecting right now. Please try again in a moment or reach out to us via the contact page.";
      setMessages(prev => prev.map(msg => 
        msg.id === loadingBotMessageId 
        ? { ...msg, text: errorMessage, isLoading: false, timestamp: new Date() } 
        : msg
      ));
    } finally {
      setIsLoading(false);
    }
  };
  
  if (!googleAI) { // Don't render toggle if AI is not initialized
      return null;
  }

  return (
    <>
      <div className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-40">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="secondary"
          size="icon"
          className="rounded-full shadow-xl p-3 sm:p-4 hover:scale-110"
          ariaLabel={isOpen ? "Close chat" : "Open chat"}
        >
          {isOpen ? <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" /> : <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />}
        </Button>
      </div>

      {isOpen && (
        <div className="fixed bottom-0 right-0 sm:bottom-4 sm:right-4 z-50 w-full sm:w-96 h-[70vh] sm:h-[500px] bg-white dark:bg-brand-gray-800 rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col transform transition-all duration-300 ease-out origin-bottom-right scale-95 opacity-0 animate-chat-appear">
          <style>
            {`
              @keyframes chat-appear {
                to {
                  opacity: 1;
                  transform: scale(1);
                }
              }
              .animate-chat-appear {
                animation: chat-appear 0.3s forwards;
              }
            `}
          </style>
          <header className="p-3 sm:p-4 bg-techflex-blue dark:bg-techflex-blue-700 text-white flex items-center justify-between rounded-t-2xl sm:rounded-t-lg">
            <div className="flex items-center space-x-2">
                <CodeBracketSquareIcon className="w-5 h-5 text-techflex-orange"/>
                <h3 className="text-base sm:text-lg font-semibold font-display">TechflexBot</h3>
            </div>
            <button 
                onClick={() => setIsOpen(false)} 
                className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Close chat window"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </header>

          <div className="flex-grow overflow-y-auto p-3 sm:p-4 space-y-2">
            {messages.map(msg => (
              <ChatMessage key={msg.id} message={msg} />
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
        </div>
      )}
    </>
  );
};

export default Chatbot;