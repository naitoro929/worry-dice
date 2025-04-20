import React from 'react';
import { MessageType } from '../types';

interface ChatBubbleProps {
  content: string;
  type: MessageType;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ content, type }) => {
  const isUser = type === MessageType.USER;
  
  return (
    <div
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-fadeIn`}
    >
      <div
        className={`px-4 py-3 rounded-2xl max-w-[80%] ${
          isUser
            ? 'bg-blue-500 text-white rounded-tr-none'
            : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm'
        }`}
      >
        {content}
      </div>
    </div>
  );
};

export default ChatBubble;