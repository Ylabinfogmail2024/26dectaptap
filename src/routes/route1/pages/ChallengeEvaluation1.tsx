import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useEvaluation } from '../contexts/EvaluationContext';
import EvaluationForm from '../components/EvaluationForm';
import NavigationButton from '../../../components/NavigationButton';
import Timeline from '../../../components/Timeline';

export default function ChallengeEvaluation1() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const character = location.state?.character;
  const { evaluations, updateEvaluation } = useEvaluation();

  const handleNext = () => {
    navigate(`/challenge/${id}/evaluate/2`, { state: location.state });
  };

  const handleBack = () => {
    navigate(`/challenge/${id}/submissions`, { state: location.state });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-[67vh] bg-white p-4 overflow-y-auto">
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <img
              src={character?.image}
              alt="Character"
              className="w-8 h-8 rounded-full"
            />
            <span>Hello, {character?.name}!</span>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Evaluate Performance
          </h2>

          <div className="relative">
            <EvaluationForm
              questionNumber={1}
              totalQuestions={2}
              question="Give me 1 plus point + 4 minus points on my performance"
              answer={evaluations[0]}
              onAnswerChange={(answer) => updateEvaluation(0, answer)}
              onSaveDraft={() => {}}
              onNext={handleNext}
              isLastQuestion={false}
            />
            <NavigationButton direction="left" onClick={handleBack} />
          </div>
        </div>
      </div>

      <div className="h-[33vh] bg-white border-t">
        <Timeline currentStep={3} route="challenge" />
      </div>
    </div>
  );
}
