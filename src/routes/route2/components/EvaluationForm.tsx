import Timer from '../../../components/Timer';
import WordCounter from './WordCounter';

interface EvaluationFormProps {
  questionNumber: number;
  totalQuestions: number;
  question: string;
  answer: string;
  onAnswerChange: (value: string) => void;
  onNext: () => void;
  isLastQuestion: boolean;
}

export default function EvaluationForm({
  questionNumber,
  totalQuestions,
  question,
  answer,
  onAnswerChange,
  onNext,
  isLastQuestion
}: EvaluationFormProps) {
  const minWords = 30;
  const wordCount = answer.trim().split(/\s+/).filter(Boolean).length;
  const isValidAnswer = wordCount >= minWords;

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-bold">
          Question {questionNumber}/{totalQuestions}
        </div>
        <Timer />
      </div>

      <h3 className="text-lg mb-4">{question}</h3>

      <textarea
        value={answer}
        onChange={(e) => onAnswerChange(e.target.value)}
        className="w-full h-48 p-3 border rounded-lg resize-none mb-2"
        placeholder="Type your answer here (minimum 30 words)"
      />

      <WordCounter text={answer} minWords={minWords} />

      <div className="flex gap-4">
        <button
          className="flex-1 py-2 border border-[#51b5b8] text-[#51b5b8] rounded-lg hover:bg-gray-50 transition-colors"
        >
          Save as draft
        </button>
        <button
          onClick={onNext}
          disabled={!isValidAnswer}
          className={`flex-1 py-2 rounded-lg ${
            isValidAnswer 
              ? 'bg-[#51b5b8] text-white cursor-pointer hover:opacity-90' 
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
        >
          {isLastQuestion ? 'Send' : 'Next'}
        </button>
      </div>
    </div>
  );
}