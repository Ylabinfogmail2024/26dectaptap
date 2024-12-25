import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Profile } from '../types/profile';
import ProfileHeader from '../components/ProfileHeader';
import ProfileInfo from '../components/ProfileInfo';
import ActionButtons from '../components/ActionButtons';

const mockProfile: Profile = {
  id: '1',
  source_code: 'LIN91',
  talents: 452,
  self_definition: "I'm an explorer. I love spontaneity",
  welcome_message: '"Thank you for connecting with me. Let`s have some activity to Know you, Know me :). Ready?! Choose one of the 3 actions below to start "',
  thought_of_day: "Don't enjoy life, explore it.",
  avatar_url: 'https://i.ibb.co/MBy8CMw/Lin91.png'
};

export default function PersonaPage() {
  const [profile] = useState<Profile>(mockProfile);
  const location = useLocation();
  const character = location.state?.character || {
    name: 'Mysterious Owl',
    image: '/images/2.png'
  };

  if (!profile) return null;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-md mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <img src={character.image} alt="Avatar" className="w-8 h-8 rounded-full" />
            <span>Hello, {character.name}!</span>
          </div>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSduTuI1MPVlYgCWeAf1NCPt0EEbJBQ5XdCMrRpV3tTwy3odPg/viewform?usp=send_form"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black font-semibold"
          >
            Sign Up
          </a>
        </div>

        <ProfileHeader thought={profile.thought_of_day} />
        
        <ProfileInfo 
          sourceCode={profile.source_code}
          talents={profile.talents}
          definition={profile.self_definition}
          welcomeMessage={profile.welcome_message}
          avatarUrl={profile.avatar_url}
        />

        <ActionButtons />
      </div>
    </div>
  );
}