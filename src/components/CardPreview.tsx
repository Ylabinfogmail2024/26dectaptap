import { Card } from '../types/card';
import { format } from 'date-fns';

interface CardPreviewProps {
  card: Card;
  onClick: () => void;
}

export default function CardPreview({ card, onClick }: CardPreviewProps) {
  const formattedDate = format(new Date(card.releaseDate), 'dd MMM yyyy');

  return (
    <div 
      onClick={onClick}
      className="relative cursor-pointer transform transition hover:scale-105"
    >
      <div className="w-[180px] bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="h-[240px] overflow-hidden">
          <img
            src={card.frontImage}
            alt={card.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-bold text-sm mb-2">{card.eventName}</h3>
          <p className="text-sm text-gray-600 mb-2">{card.description}</p>
          <p className="text-sm text-gray-500">{formattedDate}</p>
        </div>
      </div>
    </div>
  );
}