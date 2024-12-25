import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Character } from '../types';
import CharacterRing from '../components/CharacterRing';
import { characters } from '../data/characters';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

export default function CharacterSelect() {
  const navigate = useNavigate();
  const [selectedCharacter, setSelectedCharacter] = useState<Character>(characters[0]);
  const [error, setError] = useState<string | null>(null);

  const handleCharacterSelect = (character: Character) => {
    setSelectedCharacter(character);
    setError(null);
  };

  const handleContinue = () => {
    // For now, just navigate without creating an interaction
    navigate('/welcome', { 
      state: { 
        character: selectedCharacter 
      } 
    });
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-md mx-auto">
        <div className="flex justify-end mb-4">
          <a 
            href="https://forms.gle/P5NYFCkbJPrybEmd6?_imcp=1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 text-[#FFB800] font-semibold hover:text-[#e6a600] transition-colors"
          >
            Sign Up
          </a>
        </div>

        <CharacterRing
          characters={characters}
          onSelect={handleCharacterSelect}
          selectedId={selectedCharacter.id}
        />

        {error && (
          <div className="text-red-600 text-center mt-2">{error}</div>
        )}

        <div className="bg-[#FFB800] rounded-lg p-6 mt-8 text-white">
          <h2 className="text-2xl font-bold text-center">Tap, tap...</h2>
          <p className="text-center mt-2">Choose a character from above</p>
        </div>

        <button
          onClick={handleContinue}
          className="w-full mt-6 bg-[#FFB800] text-white py-3 rounded-lg hover:bg-[#e6a600] transition-colors flex items-center justify-center gap-2"
        >
          Continue as {selectedCharacter.name}
          <ArrowRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}