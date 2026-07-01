import React from 'react';
import type { LaunchPreviewListProps } from '@entities/launch/types.ts';
import LaunchPreviewItem from '@entities/launch/ui/launch-preview-item/LaunchPreviewItem.tsx';

const LaunchPreviewList: React.FC<LaunchPreviewListProps> = ({ launches }) => {
  return (
    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {launches.map((launch) => (
        <li key={launch.id}>
          <LaunchPreviewItem launchId={launch.id} image={launch.image} name={launch.name} status={launch.status} />
        </li>
      ))}
    </ul>
  );
};

export default LaunchPreviewList;
