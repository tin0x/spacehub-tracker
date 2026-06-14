import React from 'react';
import Timer from '@shared/ui/timer/Timer.tsx';
import { useTimer } from '@shared/hooks/ui/useTimer.ts';
import type { LaunchTimerProps } from '@features/launch-timer/types.ts';

const LaunchTimer: React.FC<LaunchTimerProps> = ({ timer }) => {
  const { msLeft } = useTimer(timer);

  return <Timer msLeft={msLeft} />;
};

export default LaunchTimer;
