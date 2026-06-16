import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import type { ArticleSkeletonProps } from '@shared/ui/skeletons/article-skeleton/types.ts';

const ArticleSkeleton: React.FC<ArticleSkeletonProps> = ({ count = 5 }) => {
  return (
    <section>
      <SkeletonTheme baseColor={'var(--skeleton-base)'} highlightColor={'var(--skeleton-highlight)'}>
        <Skeleton className="max-w-1/5 py-4" />
        <ul className="flex flex-col gap-4">
          {Array.from({ length: count }).map((_, i) => (
            <li key={i} className="flex flex-col-reverse justify-between gap-5 rounded-lg py-5 sm:flex-row">
              <div className="flex-1">
                <Skeleton className="mt-2 min-w-2/5 py-2" count={2.5} />
              </div>
              <div className="h-30 w-full shrink-0 sm:h-37.5 sm:w-60 md:w-75">
                <Skeleton className="h-full w-full" />
              </div>
            </li>
          ))}
        </ul>
      </SkeletonTheme>
    </section>
  );
};

export default ArticleSkeleton;
