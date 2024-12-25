import { useTimer } from '../hooks/useTimer';

export default function Timer() {
  const time = useTimer();
  
  return (
    <div className="text-[#A80303] font-medium">
      <span className="text-gray-600 mr-2">Connecting time:</span>
      {time}
    </div>
  );
}