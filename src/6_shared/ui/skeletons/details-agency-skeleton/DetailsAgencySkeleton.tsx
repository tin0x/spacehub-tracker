import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import type { DetailsAgencySkeletonProps } from '@shared/ui/skeletons/details-agency-skeleton/types.ts';

const DetailsAgencySkeleton: React.FC<DetailsAgencySkeletonProps> = ({ count = 8 }) => {
  return (
    <SkeletonTheme baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)">
      <Skeleton className="py-2" count={0.4} />
      <div className="flex flex-col gap-10">
        <div className="flex items-center justify-between gap-10">
          <div className="flex-1">
            <Skeleton className="aspect-square" />
          </div>
          <div className="flex-1">
            <Skeleton className="mb-2 py-2 last:mb-0" count={4.5} />
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-6">
          {Array.from({ length: count })?.map((_, i) => (
            <li key={i} className="flex flex-col gap-1 border-t border-t-white py-5">
              <Skeleton className="py-1" count={0.2} />
              <Skeleton className="py-1" count={0.4} />
            </li>
          ))}
        </ul>
      </div>
    </SkeletonTheme>
  );
};

export default DetailsAgencySkeleton;
