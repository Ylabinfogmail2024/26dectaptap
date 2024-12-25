import { Question } from '../types/question';
import AnswerCard from './AnswerCard';

interface AnsweredQuestion {
  id: string;
  answer: string;
}

interface AnswerDeckProps {
  answers: AnsweredQuestion[];
  questions: Question[];
  onAnswerUpdate: (questionId: string, newAnswer: string) => void;
}

export default function AnswerDeck({ answers, questions, onAnswerUpdate }: AnswerDeckProps) {
  const answeredQuestions = questions.filter(question => 
    answers.some(answer => answer.id === question.id)
  );

  return (
    <div className="flex-grow overflow-y-auto">
      <div className="flex flex-wrap gap-4 p-2">
        {answeredQuestions.map((question) => {
          const answer = answers.find(a => a.id === question.id)?.answer || '';
          return (
            <AnswerCard
              key={question.id}
              question={question}
              answer={answer}
              onAnswerUpdate={onAnswerUpdate}
            />
          );
        })}
      </div>
    </div>
  );
}