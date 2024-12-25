import { Question } from '../types/question';

interface QuestionCardProps {
  question: Question;
  onClick: () => void;
}

export default function QuestionCard({ question, onClick }: QuestionCardProps) {
  return (
    <div 
      onClick={onClick}
      className="w-[180px] flex-shrink-0 bg-white rounded-lg shadow-lg cursor-pointer transform transition hover:scale-105"
    >
      <div className="h-[240px] bg-[#51b5b8] rounded-t-lg p-4 flex flex-col">
        <div className="text-sm text-white mb-2">{question.category}</div>
        <h3 className="text-lg font-bold text-white mb-2">{question.question}</h3>
        <p className="text-sm text-white/80 flex-grow">{question.elaboration}</p>
      </div>
      <div className="p-4">
        <div className="flex flex-wrap gap-2">
          {question.traits.map((trait) => (
            <span 
              key={trait}
              className="bg-[#FFB800] text-white px-2 py-1 rounded-full text-xs"
            >
              {trait}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}