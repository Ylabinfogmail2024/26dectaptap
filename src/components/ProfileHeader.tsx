interface ProfileHeaderProps {
  thought: string;
}

export default function ProfileHeader({ thought }: ProfileHeaderProps) {
  const [beforeExplore, afterExplore] = thought.split('explore');
  
  return (
    <div className="bg-[#FFB800] p-6 rounded-t-lg">
      <h2 className="text-xl font-semibold mb-2">Thought for the day</h2>
      <p className="text-2xl">
        <span className="text-black">{beforeExplore}</span>
        <span className="text-red-600">explore</span>
        <span className="text-black">{afterExplore}</span>
      </p>
    </div>
  );
}