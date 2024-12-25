import { useLocation } from 'react-router-dom';
import Header from '../components/ThankYou/Header';
import ActionButton from '../components/ThankYou/ActionButton';
import InfoPopup from '../components/InfoPopup/InfoPopup';
import { useInfoPopup } from '../hooks/useInfoPopup';

export default function ThankYou() {
  const location = useLocation();
  const { isInfoPopupOpen, openInfoPopup, closeInfoPopup } = useInfoPopup();
  
  const character = location.state?.character || {
    name: 'Mysterious Owl',
    image: '/images/2.png'
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <Header character={character} />

      <div className="max-w-sm mx-auto space-y-8">
        {/* Thank you script font */}
        <div className="text-center">
          <img 
            src="/images/thank-you-script.jpg" 
            alt="Thank you" 
            className="w-64 mx-auto mb-6"
          />
        </div>

        {/* Main content */}
        <div className="text-center space-y-4">
          <p className="text-lg leading-tight">
            Your perspective mean a lot to me<br />
            in the journey of
          </p>
          <p className="text-2xl font-bold text-[#A80303]">
            Discovering Myself
          </p>
          <p className="text-lg leading-tight mt-8">
            The system has been analyzing your<br />
            responses and preparing a Persona<br />
            Card for you,
          </p>
        </div>

        {/* Sign up message */}
        <div className="text-center mt-8">
          <p className="text-lg leading-tight mb-2">
            Sign up (free) to view your cards,<br />
            gain Talents, save your progress<br />
            & Discover more!
          </p>
        </div>

        {/* Action buttons */}
        <div className="space-y-3 mt-6">
          <ActionButton 
            icon="/images/user-icon.jpg"
            className="h-12"
          >
            Sign up
          </ActionButton>

          <ActionButton 
            icon="/images/log-in-icon.jpg" 
            border
            className="h-12"
          >
            <div className="text-left text-sm">
              <span>Already had an account at TeamFD?</span><br />
              <span className="font-bold">Log in now</span>
            </div>
          </ActionButton>

          <ActionButton 
            icon="/images/info-icon.jpg" 
            border
            className="h-12"
            onClick={openInfoPopup}
          >
            <span className="text-sm">Read more about us</span>
          </ActionButton>
        </div>
      </div>

      <InfoPopup isOpen={isInfoPopupOpen} onClose={closeInfoPopup} />
    </div>
  );
}