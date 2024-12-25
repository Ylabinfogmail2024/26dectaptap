import { useLocation } from 'react-router-dom';
import Timeline from '../../../components/Timeline';
import PaybackForm from '../components/PaybackForm';

export default function ChallengePaybackPage() {
  const location = useLocation();
  const character = location.state?.character;

  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-[67vh] bg-white p-4 overflow-y-auto">
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <img src={character?.image} alt="Character" className="w-8 h-8 rounded-full" />
            <span>Hello, {character?.name}!</span>
          </div>

          <PaybackForm />
        </div>
      </div>

      <div className="h-[33vh] bg-white border-t">
        <Timeline currentStep={4} route="challenge" />
      </div>
    </div>
  );
}