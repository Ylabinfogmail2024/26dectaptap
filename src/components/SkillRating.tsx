interface SkillRatingProps {
  name: string;
  rating: number;
}

export default function SkillRating({ name, rating }: SkillRatingProps) {
  return (
    <div className="mb-2">
      <div className="text-white text-sm">{name}</div>
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={`text-lg ${i < rating ? 'text-[#FFB800]' : 'text-gray-300'}`}>
            ★
          </span>
        ))}
      </div>
    </div>
  );
}