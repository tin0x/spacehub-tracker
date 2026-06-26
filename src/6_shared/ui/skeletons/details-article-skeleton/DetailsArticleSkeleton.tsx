import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const DetailsArticleSkeleton: React.FC = () => {
  return (
    <SkeletonTheme baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)">
      <Skeleton className="py-2" count={0.2} />
      <div className="flex flex-col gap-10">
        <Skeleton className="py-2" count={0.4} />
        <Skeleton className="aspect-video w-full" />
        <Skeleton className="mt-2 py-2" count={2.5} />
        <Skeleton className="py-2" count={0.2} />
      </div>
    </SkeletonTheme>
  );
};

export default DetailsArticleSkeleton;
