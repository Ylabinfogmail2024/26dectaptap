import { Card } from '../types/card';
import { useNavigate } from 'react-router-dom';
import CardPlaceholder from './CardPlaceholder';

interface CardSliderProps {
  cards: Card[];
  isLoading: boolean;
}

export default function CardSlider({ cards, isLoading }: CardSliderProps) {
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="overflow-x-auto pb-4 hide-scrollbar">
        <div className="flex gap-2 w-max">
          {[1, 2, 3].map((i) => (
            <CardPlaceholder key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (!cards.length) {
    return (
      <div className="bg-white/80 rounded-lg p-6 text-center">
        <p className="text-gray-600">No cards available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto pb-4 hide-scrollbar">
      <div className="flex gap-2 w-max">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => navigate(`/card/${card.id}`)}
            className="w-[120px] flex-shrink-0 bg-white rounded-lg shadow-lg cursor-pointer transform transition hover:scale-105"
          >
            <img
              src={card.frontImage}
              alt={card.title}
              className="w-full h-[160px] object-cover rounded-t-lg"
            />
            <div className="p-2 space-y-1">
              <h3 className="font-bold text-[10px] leading-tight">{card.title}</h3>
              <p className="text-[8px] leading-tight text-gray-600">{card.eventName}</p>
              <p className="text-[8px] leading-tight text-gray-500">
                {new Date(card.releaseDate).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}