import React from 'react';
import type { AgencySkeletonProps } from '@shared/ui/skeletons/agency-skeleton/types.ts';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const AgencySkeleton: React.FC<AgencySkeletonProps> = ({ count = 9 }) => {
  return (
    <ul className="grid grid-cols-3 gap-5">
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

export default AgencySkeleton;
