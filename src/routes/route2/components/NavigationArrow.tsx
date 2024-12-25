import { ArrowRightIcon } from '@heroicons/react/20/solid';

interface NavigationArrowProps {
  isEnabled: boolean;
  onClick: () => void;
}

export default function NavigationArrow({ isEnabled, onClick }: NavigationArrowProps) {
  return (
    <div className="absolute -right-4 top-1/2 -translate-y-1/2">
      <button
        onClick={onClick}
        disabled={!isEnabled}
        className={`p-2 rounded-full shadow-lg transition-all duration-300 group relative
          ${isEnabled ? 'bg-[#51b5b8] hover:opacity-90 animate-bounce' : 'bg-gray-200'}`}
      >
        <ArrowRightIcon className={`w-6 h-6 ${isEnabled ? 'text-white' : 'text-gray-400'}`} />
        
        {!isEnabled && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-gray-800 text-white text-xs rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity">
            Complete 2 questions to enable this!
          </div>
        )}
      </button>
    </div>
  );
}