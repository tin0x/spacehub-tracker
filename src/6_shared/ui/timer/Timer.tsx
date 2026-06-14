import React from 'react';
import type { TimerProps } from '@shared/ui/timer/types.ts';
import { convertTime } from '@shared/lib/utils/convertTime.ts';

const Timer: React.FC<TimerProps> = ({ msLeft }) => {
  const time = convertTime(msLeft);

  const timerItems = [
    { label: 'Days', value: time.days.toString().padStart(2, '0') },
    { label: 'Hours', value: time.hours.toString().padStart(2, '0') },
    { label: 'Minutes', value: time.minutes.toString().padStart(2, '0') },
    { label: 'Seconds', value: time.seconds.toString().padStart(2, '0') },
  ];

  return (
    <ul className="flex justify-between gap-4">
      {timerItems.map((item) => (
        <li key={item.label}>
          <div className="text-text-primary flex flex-col justify-center gap-4 text-center">
            <div className="accentWrapper px-25 py-4">
              <span className="text-xl font-bold tabular-nums">{item.value}</span>
            </div>
            <span className="text-lg">{item.label}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Timer;
