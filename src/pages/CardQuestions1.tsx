import { useNavigate, useParams, useLocation } from 'react-router-dom';
import NavigationButton from '../components/NavigationButton';
import CardLayout from '../components/CardLayout';
import QuestionForm from '../components/QuestionForm';
import { useQuestions } from '../contexts/QuestionsContext';

export default function CardQuestions1() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const { answers, updateAnswer } = useQuestions();

  const handleNext = () => {
    navigate(`/card/${id}/questions/2`, { 
      state: location.state 
    });
  };

  const handleBack = () => {
    navigate(`/card/${id}/back`, { 
      state: location.state 
    });
  };

  return (
    <CardLayout title="Answer questions">
      <div className="relative h-full flex flex-col">
        <QuestionForm
          currentQuestion={0}
          answer={answers[0]}
          onAnswerChange={(answer) => updateAnswer(0, answer)}
          onNext={handleNext}
        />
        <NavigationButton direction="left" onClick={handleBack} />
      </div>
    </CardLayout>
  );
}