import { useState } from 'react';
import { Card } from '../types/card';

interface FlipCardProps {
  card: Card;
}

export default function FlipCard({ card }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="relative w-full aspect-[3/4]">
      <div 
        className={`flip-card-inner ${isFlipped ? 'is-flipped' : ''}`}
      >
        {/* Front */}
        <div className="flip-card-front">
          <img
            src={card.frontImage}
            alt={card.title}
            className="w-full h-full object-cover rounded-lg"
          />
          <button
            onClick={handleFlip}
            className="absolute bottom-4 right-4 bg-white/80 rounded px-4 py-2 text-sm hover:bg-white transition-colors"
          >
            Flip Card
          </button>
        </div>

        {/* Back */}
        <div className="flip-card-back">
          <img
            src={card.backImage}
            alt={`${card.title} back`}
            className="w-full h-full object-cover rounded-lg"
          />
          <button
            onClick={handleFlip}
            className="absolute bottom-4 right-4 bg-white/80 rounded px-4 py-2 text-sm hover:bg-white transition-colors"
          >
            Flip Card
          </button>
        </div>
      </div>
    </div>
  );
}