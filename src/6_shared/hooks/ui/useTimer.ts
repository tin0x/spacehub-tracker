import { useEffect, useState } from 'react';

export const useTimer = (launchTimestamp: number) => {
  const [msLeft, setMsLeft] = useState(() => Math.max(0, launchTimestamp - Date.now()));

  useEffect(() => {
    const update = () => {
      setMsLeft(Math.max(0, launchTimestamp - Date.now()));
    };

    const id = setInterval(update, 1000);

    return () => clearInterval(id);
  }, [launchTimestamp]);

  return { msLeft };
};
