import { useState } from 'react';
import { Question } from '../types/question';
import WordCounter from './WordCounter';

interface ExpandableQuestionCardProps {
  question: Question;
  onAnswerSubmit: (questionId: string, answer: string) => void;
}

export default function ExpandableQuestionCard({ question, onAnswerSubmit }: ExpandableQuestionCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [answer, setAnswer] = useState('');
  const minWords = 30;
  const wordCount = answer.trim().split(/\s+/).filter(Boolean).length;

  const handleSubmit = () => {
    if (wordCount >= minWords) {
      onAnswerSubmit(question.id, answer);
      setIsExpanded(false);
    }
  };

  return (
    <div 
      className={`w-[180px] flex-shrink-0 bg-white rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 
        ${isExpanded ? 'w-[360px]' : 'hover:scale-105'}`}
    >
      <div 
        onClick={() => !isExpanded && setIsExpanded(true)}
        className={`bg-[#51b5b8] rounded-t-lg p-4 flex flex-col ${!isExpanded ? 'h-[240px]' : ''}`}
      >
        <div className="text-sm text-white mb-2">{question.category}</div>
        <h3 className="text-sm font-bold text-white mb-2">{question.question}</h3>
        <p className="text-sm text-white/80">{question.elaboration}</p>
      </div>
      
      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-4">
          {question.traits.map((trait) => (
            <span key={trait} className="bg-[#51b5b8] text-white px-2 py-1 rounded-full text-xs">
              {trait}
            </span>
          ))}
        </div>

        {isExpanded && (
          <div className="mt-4">
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Write your answer here (minimum 30 words)"
              className="w-full h-32 p-2 border rounded-lg resize-none mb-2"
            />
            <WordCounter text={answer} minWords={minWords} />
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setIsExpanded(false)}
                className="px-4 py-2 text-[#51b5b8] hover:bg-gray-50 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={wordCount < minWords}
                className={`px-4 py-2 rounded-lg ${
                  wordCount >= minWords
                    ? 'bg-[#51b5b8] text-white hover:opacity-90'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}