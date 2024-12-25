import { useParams, useLocation } from 'react-router-dom';
import { challenges } from '../data/challenges';
import Timeline from '../../../components/Timeline';

export default function ChallengeEvaluationPage() {
  const { id } = useParams();
  const location = useLocation();
  const character = location.state?.character;
  const challenge = challenges.find(c => c.id === id);

  if (!challenge) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-[67vh] bg-white p-4 overflow-y-auto">
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <img src={character?.image} alt="Character" className="w-8 h-8 rounded-full" />
            <span>Hello, {character?.name}!</span>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Evaluate {challenge.title}
          </h2>

          {/* Evaluation form will be implemented here */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-gray-600">
              Evaluation form coming soon...
            </p>
          </div>
        </div>
      </div>

      <div className="h-[33vh] bg-white border-t">
        <Timeline currentStep={3} route="challenge" />
      </div>
    </div>
  );
}