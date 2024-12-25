import { Question } from '../routes/route2/types/question';

interface QuestionCardProps {
  question: Question;
  onClick: () => void;
}

export default function QuestionCard({ question, onClick }: QuestionCardProps) {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg shadow-lg p-4 cursor-pointer transition-transform hover:scale-105"
    >
      <div className="text-sm text-[#51b5b8] mb-2">{question.category}</div>
      <h3 className="text-xl font-bold mb-2">{question.question}</h3>
      <p className="text-gray-600 mb-4">{question.elaboration}</p>
      <div className="flex flex-wrap gap-2">
        {question.traits.map((trait) => (
          <span 
            key={trait}
            className="bg-[#FFB800] text-white px-3 py-1 rounded-full text-sm"
          >
            {trait}
          </span>
        ))}
      </div>
    </div>
  );
}