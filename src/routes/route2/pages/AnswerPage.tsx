import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';
import Timeline from '../../../components/Timeline';
import PageHeader from '../../../components/PageHeader';
import AnswerDeck from '../components/AnswerDeck';
import NavigationArrow from '../components/NavigationArrow';
import { ROUTES } from '../../../config/routes'; // Import ROUTES

interface AnsweredQuestion {
  id: string;
  answer: string;
}

export default function AnswerPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const character = location.state?.character;
  const initialAnswers = location.state?.answeredQuestions || [];
  const [answers, setAnswers] = useState<AnsweredQuestion[]>(initialAnswers);

  useEffect(() => {
    if (!character || !initialAnswers.length) {
      navigate('/question-deck'); // Optional: Replace this with a constant if centralized
    }
  }, [character, initialAnswers, navigate]);

  const handleAnswerUpdate = (questionId: string, newAnswer: string) => {
    setAnswers((prev) =>
      prev.map((answer) =>
        answer.id === questionId ? { ...answer, answer: newAnswer } : answer
      )
    );
  };

  const handleNavigateToEvaluation = () => {
    navigate('/question-evaluation/1', { // Optional: Replace this with a constant if centralized
      state: {
        character,
        answers,
      },
    });
  };

  const areAnswersValid = answers.every(
    (answer) => answer.answer.trim().split(/\s+/).filter(Boolean).length >= 30
  );

  if (!character || !answers.length) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-[67vh] bg-white p-4">
        <div className="max-w-2xl mx-auto relative h-full flex flex-col">
          <PageHeader />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Answers</h2>
          
          <AnswerDeck
            answers={answers}
            questions={questions}
            onAnswerUpdate={handleAnswerUpdate}
          />

          <NavigationArrow 
            isEnabled={areAnswersValid}
            onClick={handleNavigateToEvaluation}
          />
        </div>
      </div>

      <div className="h-[33vh] bg-white border-t">
        <Timeline currentStep={2} route={ROUTES.ANSWER} /> {/* Fixed route name */}
      </div>
    </div>
  );
}
