import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import type { SpaceCraftSkeletonProps } from '@shared/ui/skeletons/spacecraft-skeleton/types.ts';

const SpacecraftsSkeleton: React.FC<SpaceCraftSkeletonProps> = ({ count = 9 }) => {
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

export default SpacecraftsSkeleton;
