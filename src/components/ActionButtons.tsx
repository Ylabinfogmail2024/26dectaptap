import { useNavigate, useLocation } from 'react-router-dom';

export default function ActionButtons() {
  const navigate = useNavigate();
  const location = useLocation();
  const character = location.state?.character;

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-8">
        <button 
          onClick={() => navigate('/question-deck', { state: { character } })}
          className="flex flex-col items-center cursor-pointer"
        >
          <img src="/images/5.png" alt="Answer me" className="w-16 h-16 mb-2" />
          <span className="text-sm">Answer me</span>
          <div className="flex">
            {[1, 2].map((_, i) => (
              <span key={i} className="text-[#FFB800]">⚡</span>
            ))}
            {[1, 2, 3].map((_, i) => (
              <span key={i} className="text-gray-300">⚡</span>
            ))}
          </div>
        </button>

        <button 
          onClick={() => navigate('/challenge-deck', { state: { character } })}
          className="flex flex-col items-center cursor-pointer"
        >
          <img src="/images/6.png" alt="Challenge me" className="w-16 h-16 mb-2" />
          <span className="text-sm">Challenge me</span>
          <div className="flex">
            {[1, 2, 3, 4].map((_, i) => (
              <span key={i} className="text-[#FFB800]">⚡</span>
            ))}
            <span className="text-gray-300">⚡</span>
          </div>
        </button>

        <button 
          onClick={() => navigate('/card-deck', { state: { character } })}
          className="flex flex-col items-center cursor-pointer"
        >
          <img src="/images/7.png" alt="See my Persona card" className="w-16 h-16 mb-2" />
          <span className="text-sm">See my Persona card</span>
          <div className="flex">
            {[1, 2, 3].map((_, i) => (
              <span key={i} className="text-[#FFB800]">⚡</span>
            ))}
            {[1, 2].map((_, i) => (
              <span key={i} className="text-gray-300">⚡</span>
            ))}
          </div>
        </button>
      </div>
    </div>
  );
}