import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';
import Timeline from '../../../components/Timeline';
import PageHeader from '../../../components/PageHeader';
import ExpandableQuestionCard from '../components/ExpandableQuestionCard';
import NavigationArrow from '../components/NavigationArrow';
import { ROUTES } from '../../../config/routes'; // Import ROUTES

interface AnsweredQuestion {
  id: string;
  answer: string;
}

export default function QuestionDeck() {
  const location = useLocation();
  const navigate = useNavigate();
  const character = location.state?.character;
  const [answeredQuestions, setAnsweredQuestions] = useState<
    AnsweredQuestion[]
  >([]);

  const handleAnswerSubmit = (questionId: string, answer: string) => {
    setAnsweredQuestions((prev) => [...prev, { id: questionId, answer }]);
  };

  const handleNavigateToAnswers = () => {
    if (answeredQuestions.length >= 2) {
      navigate('/answers', {
        state: {
          character,
          answeredQuestions,
        },
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-[67vh] bg-white p-4">
        <div className="max-w-2xl mx-auto relative h-full flex flex-col">
          <PageHeader />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Question Deck
          </h2>

          {/* Added a wrapper div with flex-grow and overflow-auto */}
          <div className="flex-grow overflow-auto">
            <div className="overflow-x-auto pb-4 hide-scrollbar">
              <div className="flex gap-4 w-max px-2">
                {questions.map((question) => (
                  <ExpandableQuestionCard
                    key={question.id}
                    question={question}
                    onAnswerSubmit={handleAnswerSubmit}
                  />
                ))}
              </div>
            </div>
          </div>

          <NavigationArrow
            isEnabled={answeredQuestions.length >= 2}
            onClick={handleNavigateToAnswers}
          />
        </div>
      </div>

      <div className="h-[33vh] bg-white border-t">
        <Timeline currentStep={1} route={ROUTES.ANSWER} />{' '}
        {/* Fixed route name */}
      </div>
    </div>
  );
}
