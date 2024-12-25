import Timer from './Timer';

const QUESTIONS = [
  "What do you think is my strength?",
  "How could I help you with my strength?"
];

const MIN_WORDS = 30;

interface QuestionFormProps {
  currentQuestion: number;
  answer: string;
  onAnswerChange: (answer: string) => void;
  onNext: () => void;
}

export default function QuestionForm({
  currentQuestion,
  answer,
  onAnswerChange,
  onNext
}: QuestionFormProps) {
  const wordCount = answer.trim().split(/\s+/).filter(Boolean).length;
  const isValidAnswer = wordCount >= MIN_WORDS;

  return (
    <div className="bg-white rounded-lg p-4 flex-grow">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-semibold">
          Question {currentQuestion + 1}/2
        </div>
        <Timer />
      </div>
      
      <h3 className="text-lg font-medium mb-4">{QUESTIONS[currentQuestion]}</h3>
      
      <textarea
        value={answer}
        onChange={(e) => onAnswerChange(e.target.value)}
        className="w-full h-48 p-3 border rounded-lg resize-none mb-2"
        placeholder="Type your answer here (minimum 30 words)"
      />
      
      <div className="text-sm text-gray-500 mb-4">
        Words: {wordCount} {!isValidAnswer && `(${MIN_WORDS - wordCount} more words needed)`}
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => {/* Save draft logic */}}
          className="flex-1 py-2 border border-[#A80303] text-[#A80303] rounded-lg"
        >
          Save as draft
        </button>
        <button
          onClick={onNext}
          disabled={!isValidAnswer}
          className={`flex-1 py-2 rounded-lg ${
            isValidAnswer 
              ? 'bg-[#A80303] text-white cursor-pointer' 
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
        >
          {currentQuestion === 1 ? 'Send' : 'Next'}
        </button>
      </div>
    </div>
  );
}