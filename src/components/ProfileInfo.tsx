import { FC } from 'react';

interface ProfileInfoProps {
  sourceCode: string;
  talents: number;
  definition: string;
  welcomeMessage: string;
  avatarUrl: string;
}

const ProfileInfo: FC<ProfileInfoProps> = ({ 
  sourceCode, 
  talents, 
  definition, 
  avatarUrl,
  welcomeMessage 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg mb-6">
      <div className="flex mb-4">
        <img src={avatarUrl} alt="Profile" className="w-32 h-32 rounded-lg" />
        <div className="ml-4 flex-1">
          <div className="mb-2">
            <span className="font-semibold">Source code: </span>
            <span>{sourceCode}</span>
          </div>
          <div className="mb-2">
            <span className="font-semibold">Talents: </span>
            <span className="text-green-600">{talents} ↗</span>
          </div>
          <p>{definition}</p>
        </div>
      </div>
      <p className="text-gray-600 italic text-center">{welcomeMessage}</p>
    </div>
  );
}

export default ProfileInfo;