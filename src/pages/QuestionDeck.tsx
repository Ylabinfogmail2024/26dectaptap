import { useLocation, useNavigate } from 'react-router-dom';
import { questions } from '../routes/route2/data/questions';
import Timeline from '../components/Timeline';
import QuestionCard from '../components/QuestionCard';
import PageHeader from '../components/PageHeader';

export default function QuestionDeck() {
  const location = useLocation();
  const navigate = useNavigate();
  const character = location.state?.character;

  const handleQuestionClick = (questionId: string) => {
    navigate(`/question/${questionId}/answer/1`, {
      state: { character }
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-[67vh] bg-white p-4 overflow-y-auto">
        <div className="max-w-md mx-auto">
          <PageHeader />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Question Deck</h2>
          
          <div className="space-y-4">
            {questions.map((question) => (
              <QuestionCard
                key={question.id}
                question={question}
                onClick={() => handleQuestionClick(question.id)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="h-[33vh] bg-white border-t">
        <Timeline currentStep={1} route="Answer" />
      </div>
    </div>
  );
}