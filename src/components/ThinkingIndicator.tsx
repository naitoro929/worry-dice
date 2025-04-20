import React from 'react';

const ThinkingIndicator: React.FC = () => {
  return (
    <div className="flex justify-start">
      <div className="bg-white border border-gray-200 text-gray-800 rounded-2xl rounded-tl-none shadow-sm px-4 py-3 flex items-center space-x-1 animate-fadeIn">
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
    </div>
  );
};

export default ThinkingIndicator;