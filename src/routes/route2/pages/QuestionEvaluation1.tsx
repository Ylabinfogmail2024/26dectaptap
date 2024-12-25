import { useNavigate, useLocation } from 'react-router-dom';
import { useQuestionEvaluation } from '../contexts/QuestionEvaluationContext';
import Timeline from '../../../components/Timeline';
import PageHeader from '../../../components/PageHeader';
import EvaluationForm from '../components/EvaluationForm';
import NavigationButton from '../../../components/NavigationButton';
import { ROUTES } from '../../../config/routes'; // Import ROUTES

export default function QuestionEvaluation1() {
  const navigate = useNavigate();
  const location = useLocation();
  const { evaluations, updateEvaluation } = useQuestionEvaluation();
  const character = location.state?.character;

  if (!character) {
    navigate('/question-deck'); // Optional: Replace with a centralized route constant
    return null;
  }

  const handleNext = () => {
    navigate('/question-evaluation/2', {
      // Optional: Replace with a centralized route constant
      state: { character },
    });
  };

  const handleBack = () => {
    navigate('/answers', {
      // Optional: Replace with a centralized route constant
      state: { character },
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-[67vh] bg-white p-4 overflow-y-auto">
        <div className="max-w-md mx-auto relative">
          <PageHeader />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Evaluate Questions
          </h2>

          <EvaluationForm
            questionNumber={1}
            totalQuestions={2}
            question="Are the questions clear and purposeful? What thought did they evoke in you?"
            answer={evaluations[0]}
            onAnswerChange={(answer) => updateEvaluation(0, answer)}
            onNext={handleNext}
            isLastQuestion={false}
          />

          <NavigationButton direction="left" onClick={handleBack} />
        </div>
      </div>

      <div className="h-[33vh] bg-white border-t">
        <Timeline currentStep={4} route={ROUTES.ANSWER} />{' '}
        {/* Fixed route name */}
      </div>
    </div>
  );
}
