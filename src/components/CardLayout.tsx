import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Timeline } from './Timeline';
import { ROUTES } from '../config/routes'; // Corrected import path

interface CardLayoutProps {
  title: string;
  children: ReactNode;
}

export default function CardLayout({ title, children }: CardLayoutProps) {
  const location = useLocation();
  const character = location.state?.character || {
    name: 'Mysterious Owl',
    image: '/images/2.png',
  };

  // Determine current step based on the path
  const path = location.pathname;
  let currentStep = 1;
  if (path.includes('/card/') && path.endsWith('/back')) {
    currentStep = 2;
  } else if (path.includes('/card/') && path.endsWith('/questions/1')) {
    currentStep = 3;
  } else if (path.includes('/card/') && path.endsWith('/questions/2')) {
    currentStep = 3;
  } else if (path.startsWith('/card/card-')) {
    currentStep = 2;
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content area - takes up 2/3 of viewport height */}
      <div className="h-[67vh] bg-white p-4 overflow-y-auto">
        <div className="max-w-md mx-auto h-full flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <img
                src={character.image}
                alt="Avatar"
                className="w-8 h-8 rounded-full"
              />
              <span>Hello, {character.name}!</span>
            </div>
            <Link
              to="/persona"
              state={{ character }}
              className="text-[#A80303] font-semibold hover:opacity-80 transition-opacity"
            >
              See my Persona card
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
          <div className="flex-1 flex flex-col">{children}</div>
        </div>
      </div>

      {/* Timeline section - fixed at bottom, takes up 1/3 of viewport height */}
      <div className="fixed bottom-0 left-0 right-0 h-[33vh] bg-white border-t shadow-lg">
        <Timeline currentStep={currentStep} route={ROUTES.PERSONA} />{' '}
        {/* Fixed route */}
      </div>
    </div>
  );
}
