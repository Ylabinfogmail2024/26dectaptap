import { useNavigate, useParams, useLocation } from 'react-router-dom';
import NavigationButton from '../components/NavigationButton';
import CardLayout from '../components/CardLayout';
import QuestionForm from '../components/QuestionForm';
import { useQuestions } from '../contexts/QuestionsContext';

export default function CardQuestions2() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const { answers, updateAnswer } = useQuestions();

  const handleNext = () => {
    navigate('/thank-you', { 
      state: location.state 
    });
  };

  const handleBack = () => {
    navigate(`/card/${id}/questions/1`, { 
      state: location.state 
    });
  };

  return (
    <CardLayout title="Answer questions">
      <div className="relative h-full flex flex-col">
        <QuestionForm
          currentQuestion={1}
          answer={answers[1]}
          onAnswerChange={(answer) => updateAnswer(1, answer)}
          onNext={handleNext}
        />
        <NavigationButton direction="left" onClick={handleBack} />
      </div>
    </CardLayout>
  );
}