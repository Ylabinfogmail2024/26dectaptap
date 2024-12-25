import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WordCounter from './WordCounter';

export default function PaybackForm() {
  const navigate = useNavigate();
  const [payback, setPayback] = useState('');
  const [benefits, setBenefits] = useState('');
  const minWords = 30;

  const handleSend = () => {
    navigate('/thank-you');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-sm mb-6">
        <span className="font-semibold">Congratulation,</span><br />
        Since you win the Challenge, one thing that I'd do for you in return is:
      </h2>
      
      <textarea
        value={payback}
        onChange={(e) => setPayback(e.target.value)}
        className="w-full h-32 border rounded-lg p-3 mb-2 resize-none"
        placeholder="Type your answer here (minimum 30 words)"
      />
      <WordCounter text={payback} minWords={minWords} />

      <h3 className="text-sm mb-4">
        This will definitely benefit you because:
      </h3>

      <textarea
        value={benefits}
        onChange={(e) => setBenefits(e.target.value)}
        className="w-full h-32 border rounded-lg p-3 mb-2 resize-none"
        placeholder="Type your answer here (minimum 30 words)"
      />
      <WordCounter text={benefits} minWords={minWords} />

      <div className="flex justify-between gap-4 mt-6">
        <button 
          className="flex-1 py-2 border border-[#6B4E71] text-[#6B4E71] rounded-lg hover:bg-gray-50 transition-colors"
        >
          Save as draft
        </button>
        
        <button 
          onClick={handleSend}
          className="flex-1 py-2 bg-[#6B4E71] text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          Send
        </button>
      </div>
    </div>
  );
}