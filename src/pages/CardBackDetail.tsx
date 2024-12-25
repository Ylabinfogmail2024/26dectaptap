import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { cards } from '../data/cards';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid';
import CardLayout from '../components/CardLayout';

export default function CardBackDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const card = cards.find(c => c.id === id);
  
  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <CardLayout title="Read my card">
      <div className="relative h-full flex flex-col">
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="relative w-full max-w-sm max-h-[60vh]">
            <img
              src={card.backImage}
              alt={`${card.title} back`}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
        <button
          onClick={() => navigate(`/card/${id}`, { 
            state: location.state 
          })}
          className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
        >
          <ArrowLeftIcon className="w-6 h-6 text-[#6B4E71]" />
        </button>
        <button
          onClick={() => navigate(`/card/${id}/questions/1`, { 
            state: location.state 
          })}
          className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
        >
          <ArrowRightIcon className="w-6 h-6 text-[#6B4E71]" />
        </button>
      </div>
    </CardLayout>
  );
}