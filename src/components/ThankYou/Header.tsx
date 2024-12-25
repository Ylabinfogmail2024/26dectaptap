import { Character } from '../../types';

interface HeaderProps {
  character: Character;
}

export default function Header({ character }: HeaderProps) {
  return (
    <div className="flex items-center gap-2 mb-8">
      <img src={character.image} alt="Character" className="w-8 h-8 rounded-full" />
      <span className="text-sm">Hello, {character.name}!</span>
    </div>
  );
}