import React, { useEffect, useRef } from 'react';
import { Message, MessageType } from '../types';
import ChatBubble from './ChatBubble';
import ThinkingIndicator from './ThinkingIndicator';

interface ChatContainerProps {
  messages: Message[];
  isGenerating: boolean;
}

const ChatContainer: React.FC<ChatContainerProps> = ({ messages, isGenerating }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Show empty state if no messages
  if (messages.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-12">
        <div className="bg-blue-50 text-blue-700 p-3 rounded-full mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
          </svg>
        </div>
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Share Your Worries</h2>
        <p className="text-gray-600 max-w-md">
          Type any concern that's on your mind and get a piece of simple advice to help you gain perspective.
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto mb-4 space-y-4">
      {messages.map((message) => (
        <ChatBubble
          key={message.id}
          content={message.content}
          type={message.type}
        />
      ))}
      
      {isGenerating && <ThinkingIndicator />}
      
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatContainer;