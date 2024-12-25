import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Timeline from '../components/Timeline';
import { Card } from '../types/card';
import { cards as initialCards } from '../data/cards';
import CardPreview from '../components/CardPreview';
import PageHeader from '../components/PageHeader';
import { ROUTES } from '../config/routes'; // Import ROUTES

export default function CardDeck() {
  const [cards] = useState<Card[]>(initialCards);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white p-4">
        <div className="animate-pulse">
          <div className="h-64 bg-gray-100 rounded-lg mb-4" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-[67vh] bg-white p-4 overflow-y-auto">
        <div className="max-w-2xl mx-auto">
          <PageHeader />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            My Card Deck
          </h2>
          <div className="overflow-x-auto pb-4 hide-scrollbar">
            <div className="flex gap-4 w-max px-2">
              {cards.map((card) => (
                <CardPreview
                  key={card.id}
                  card={card}
                  onClick={() =>
                    navigate(`/card/${card.id}`, {
                      state: { character: location.state?.character },
                    })
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-[33vh] bg-white border-t">
        <Timeline currentStep={1} route={ROUTES.PERSONA} />{' '}
        {/* Explicitly link to Persona route */}
      </div>
    </div>
  );
}
