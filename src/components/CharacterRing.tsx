import { Character } from '../types';

interface CharacterRingProps {
  characters: Character[];
  onSelect: (character: Character) => void;
  selectedId?: string;
}

export default function CharacterRing({ characters, onSelect, selectedId }: CharacterRingProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex justify-center gap-8 mb-4">
        {characters.map((character) => (
          <div
            key={character.id}
            onClick={() => onSelect(character)}
            className="flex flex-col items-center max-w-[200px] text-center"
          >
            <div className="relative cursor-pointer transition-all duration-300">
              <img
                src={character.image}
                alt={character.name}
                className={`w-32 h-32 rounded-full ${
                  selectedId === character.id ? 'ring-4 ring-[#FFB800] shadow-lg' : ''
                }`}
              />
              {selectedId === character.id && (
                <div className="absolute inset-0 rounded-full bg-[#FFB800] opacity-20 animate-pulse" />
              )}
            </div>
            <span className="mt-4 text-xl font-bold text-gray-700 text-center w-full">{character.name}</span>
            <p className="mt-2 text-sm text-gray-600 text-center w-full">{character.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}