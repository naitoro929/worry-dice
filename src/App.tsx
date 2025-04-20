import React, { useState } from 'react';
import WorryForm from './components/WorryForm';
import ChatContainer from './components/ChatContainer';
import { Message, MessageType } from './types';
import { generateRandomAdvice } from './utils/adviceUtils';

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmitWorry = (worry: string) => {
    if (!worry.trim()) return;
    
    // Add user worry to messages
    const userMessage: Message = {
      id: Date.now().toString(),
      content: worry,
      type: MessageType.USER
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsGenerating(true);
    
    // Simulate response delay for a more natural feel
    setTimeout(() => {
      const advice = generateRandomAdvice();
      const adviceMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: advice,
        type: MessageType.ADVICE
      };
      
      setMessages(prev => [...prev, adviceMessage]);
      setIsGenerating(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm py-4">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-xl font-semibold text-gray-800">Worry Relief</h1>
        </div>
      </header>
      
      <main className="flex-1 max-w-3xl w-full mx-auto px-4 sm:px-6 py-6 flex flex-col">
        <ChatContainer 
          messages={messages} 
          isGenerating={isGenerating} 
        />
        <div className="mt-auto pt-4">
          <WorryForm 
            onSubmit={handleSubmitWorry} 
            isGenerating={isGenerating} 
          />
        </div>
      </main>
      
      <footer className="bg-white py-3 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Worry Relief — Find your peace of mind.
        </div>
      </footer>
    </div>
  );
}

export default App;