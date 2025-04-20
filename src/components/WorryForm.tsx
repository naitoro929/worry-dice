import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface WorryFormProps {
  onSubmit: (worry: string) => void;
  isGenerating: boolean;
}

const WorryForm: React.FC<WorryFormProps> = ({ onSubmit, isGenerating }) => {
  const [worry, setWorry] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!worry.trim() || isGenerating) return;
    
    onSubmit(worry);
    setWorry('');
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex items-center gap-2 bg-white rounded-lg border border-gray-300 shadow-sm transition-all focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100"
    >
      <input
        type="text"
        value={worry}
        onChange={(e) => setWorry(e.target.value)}
        placeholder="Type your worry..."
        className="flex-1 px-4 py-3 bg-transparent outline-none text-gray-800"
        disabled={isGenerating}
      />
      <button
        type="submit"
        disabled={!worry.trim() || isGenerating}
        className={`p-3 rounded-r-lg flex items-center justify-center transition-colors ${
          !worry.trim() || isGenerating
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-blue-500 hover:text-blue-600 active:text-blue-700'
        }`}
        aria-label="Give me advice"
      >
        <Send size={20} />
      </button>
    </form>
  );
};

export default WorryForm;