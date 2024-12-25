import { Link, useLocation } from 'react-router-dom';

export default function PageHeader() {
  const location = useLocation();
  const character = location.state?.character;

  if (!character) {
    return null;
  }

  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center gap-2">
        <img src={character.image} alt={character.name} className="w-8 h-8 rounded-full" />
        <span className="text-gray-800">Hello, {character.name}!</span>
      </div>
      <Link 
        to="/persona"
        state={{ character }}
        className="text-[#A80303] font-semibold hover:opacity-80 transition-opacity"
      >
        See my Persona card
      </Link>
    </div>
  );
}