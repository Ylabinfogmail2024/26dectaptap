import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid';

interface NavigationButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
}

export default function NavigationButton({ direction, onClick }: NavigationButtonProps) {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
      style={{ [direction]: '-1rem' }}
    >
      {direction === 'left' ? (
        <ArrowLeftIcon className="w-6 h-6 text-[#6B4E71]" />
      ) : (
        <ArrowRightIcon className="w-6 h-6 text-[#6B4E71]" />
      )}
    </button>
  );
}