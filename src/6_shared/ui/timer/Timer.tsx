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
    <ul className="grid grid-cols-1 place-items-stretch gap-2 sm:grid-cols-2 lg:grid-cols-4 lg:place-items-center">
      {timerItems.map((item) => (
        <li key={item.label}>
          <div className="text-text-primary flex flex-col justify-center gap-4 text-center">
            <div className="accentWrapper px-25 py-4">
              <span className="text-lg font-bold tabular-nums md:text-xl">{item.value}</span>
            </div>
            <span className="md:text-lg">{item.label}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Timer;
