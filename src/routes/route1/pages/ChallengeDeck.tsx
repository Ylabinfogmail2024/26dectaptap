import { useLocation, useNavigate } from 'react-router-dom';
import { challenges } from '../data/challenges';
import Timeline from '../../../components/Timeline';

export default function ChallengeDeck() {
  const location = useLocation();
  const navigate = useNavigate();
  const character = location.state?.character;

  const handleChallengeClick = (challengeId: string) => {
    navigate(`/challenge/${challengeId}/submissions`, {
      state: { character }
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-[67vh] bg-white p-4 overflow-y-auto">
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <img src={character?.image} alt="Character" className="w-8 h-8 rounded-full" />
            <span>Hello, {character?.name}!</span>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">Challenge Deck</h2>
          
          <div className="space-y-4">
            {challenges.map((challenge) => (
              <div 
                key={challenge.id}
                onClick={() => handleChallengeClick(challenge.id)}
                className="bg-white rounded-lg shadow-lg p-4 cursor-pointer transition-transform hover:scale-105"
              >
                <img 
                  src={challenge.image} 
                  alt={challenge.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{challenge.title}</h3>
                <div className="text-sm text-[#6B4E71] mb-2">{challenge.category}</div>
                <p className="text-gray-600 mb-4">{challenge.description}</p>
                <div className="flex flex-wrap gap-2">
                  {challenge.traits.map((trait) => (
                    <span 
                      key={trait}
                      className="bg-[#FFB800] text-white px-3 py-1 rounded-full text-sm"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-[33vh] bg-white border-t">
        <Timeline currentStep={1} route="challenge" />
      </div>
    </div>
  );
}