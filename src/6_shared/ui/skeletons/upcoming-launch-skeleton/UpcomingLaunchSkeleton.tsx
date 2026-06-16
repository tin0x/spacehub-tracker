import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const UpcomingLaunchSkeleton: React.FC = () => {
  return (
    <section className="flex flex-col gap-11">
      <SkeletonTheme baseColor={'var(--skeleton-base)'} highlightColor={'var(--skeleton-highlight)'}>
        <Skeleton className="max-w-1/5 py-4" />
        <Skeleton className="aspect-video w-full" />
        <Skeleton className="mt-2 max-w-2/5 py-2" count={2} />
        <ul className="flex justify-between gap-4">
          <li className="flex flex-col justify-center gap-2">
            <Skeleton className="rounded-custom-md px-25 py-4" />
            <Skeleton />
          </li>
          <li className="flex flex-col justify-center gap-2">
            <Skeleton className="rounded-custom-md px-25 py-4" />
            <Skeleton />
          </li>
          <li className="flex flex-col justify-center gap-2">
            <Skeleton className="rounded-custom-md px-25 py-4" />
            <Skeleton />
          </li>
          <li className="flex flex-col justify-center gap-2">
            <Skeleton className="rounded-custom-md px-25 py-4" />
            <Skeleton />
          </li>
        </ul>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col">
            <Skeleton className="mt-2 py-3" count={2} />
          </div>
          <div className="flex flex-col gap-1">
            <Skeleton className="mt-2 py-3" count={2} />
          </div>
        </div>
      </SkeletonTheme>
    </section>
  );
};

export default UpcomingLaunchSkeleton;
