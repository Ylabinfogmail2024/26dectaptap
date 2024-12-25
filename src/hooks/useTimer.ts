import { useState, useEffect } from 'react';

export function useTimer() {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    // Get start time from session storage or set it
    const startTime = sessionStorage.getItem('sessionStartTime') || 
      new Date().getTime().toString();
    
    if (!sessionStorage.getItem('sessionStartTime')) {
      sessionStorage.setItem('sessionStartTime', startTime);
    }

    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const elapsed = Math.floor((currentTime - parseInt(startTime)) / 1000);
      setElapsedTime(elapsed);
    }, 1000);

    // Cleanup
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;
  
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}