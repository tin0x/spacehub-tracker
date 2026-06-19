import React from 'react';
import type { LaunchListProps } from '@entities/launch/types.ts';
import LaunchItem from '@entities/launch/ui/launch-item/LaunchItem.tsx';

const LaunchList: React.FC<LaunchListProps> = ({ launches }) => {
  return (
    <ul className="grid grid-cols-3 gap-5">
      {launches.map((launch) => (
        <li key={launch.id}>
          <LaunchItem launchId={launch.id} image={launch.image} name={launch.name} status={launch.status} />
        </li>
      ))}
    </ul>
  );
};

export default LaunchList;
