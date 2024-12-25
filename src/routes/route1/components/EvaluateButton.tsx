import { useNavigate } from 'react-router-dom';

interface EvaluateButtonProps {
  challengeId: string;
  character: any;
}

export default function EvaluateButton({ challengeId, character }: EvaluateButtonProps) {
  const navigate = useNavigate();

  const handleEvaluate = () => {
    navigate(`/challenge/${challengeId}/evaluate/1`, {
      state: { character }
    });
  };

  return (
    <button
      onClick={handleEvaluate}
      className="w-full bg-[#6B4E71] text-white py-3 px-4 rounded-lg hover:opacity-90 transition-opacity"
    >
      Evaluate the Performance
    </button>
  );
}