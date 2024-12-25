import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

export default function WelcomeScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  const character = location.state?.character;

  if (!character) {
    // Redirect back to character select if no character was chosen
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="flex justify-end mb-8">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSduTuI1MPVlYgCWeAf1NCPt0EEbJBQ5XdCMrRpV3tTwy3odPg/viewform?usp=send_form"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFB800] font-semibold hover:text-[#e6a600] transition-colors"
          >
            Sign Up
          </a>
        </div>

        <div className="bg-[#FFB800] rounded-lg p-6 text-center mb-8">
          <img
            src={character.image}
            alt={character.name}
            className="w-64 h-64 mx-auto mb-6"
          />
          <h1 className="text-4xl font-bold text-black mb-2">Hello,</h1>
          <h2 className="text-2xl font-bold text-black mb-2">
            {character.name},
          </h2>
          <p className="text-xl text-black">
            How {character.description} you are?!!
          </p>
        </div>

        <button
          onClick={() => navigate('/persona', { state: { character } })}
          className="w-full bg-[#FFB800] text-black py-3 px-4 rounded-lg hover:bg-[#e6a600] transition-colors flex items-center justify-center gap-2"
        >
          Let's get started
          <ArrowRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
