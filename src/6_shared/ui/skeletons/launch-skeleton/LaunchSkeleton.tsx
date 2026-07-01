import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import type { LaunchSkeletonProps } from '@shared/ui/skeletons/launch-skeleton/types.ts';

const LaunchSkeleton: React.FC<LaunchSkeletonProps> = ({ count = 9 }) => {
  return (
    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <SkeletonTheme baseColor={'var(--skeleton-base)'} highlightColor={'var(--skeleton-highlight)'}>
        {Array.from({ length: count }).map((_, i) => (
          <li className="flex flex-col gap-2 p-4" key={i}>
            <Skeleton className="rounded-custom-md h-70" />
            <Skeleton className="py-0.5" count={1.5} />
          </li>
        ))}
      </SkeletonTheme>
    </ul>
  );
};

export default LaunchSkeleton;
