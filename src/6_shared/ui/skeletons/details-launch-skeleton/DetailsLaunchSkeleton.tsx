import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const DetailsLaunchSkeleton: React.FC = () => {
  return (
    <SkeletonTheme baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)">
      <Skeleton className="py-2" count={0.5} />
      <div className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5">
        <Skeleton className="aspect-video w-full shrink-0 overflow-hidden" />
        <div className="flex min-w-0 flex-1 flex-col justify-between p-5">
          <div className="relative">
            <Skeleton className="py-1" count={0.7} />
            <div className="absolute top-0 right-0">
              <Skeleton className="rounded-md px-10 py-1" />
            </div>
            <div className="mt-2 flex flex-col gap-2">
              <Skeleton className="py-1" count={0.3} />
              <Skeleton className="py-1" count={0.3} />
              <Skeleton className="mt-2 py-1" count={0.5} />
            </div>
          </div>
          <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
            <div className="flex flex-1 items-center gap-4">
              <Skeleton className="px-8 py-6" circle />
              <div className="flex basis-1/4 flex-col gap-1">
                <Skeleton className="py-1" />
                <Skeleton className="py-1" />
              </div>
            </div>
            <Skeleton className="px-8 py-2" />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default DetailsLaunchSkeleton;
