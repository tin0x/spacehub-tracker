import React from 'react';
import LaunchPreviewList from '@entities/launch/ui/launch-preview-list/LaunchPreviewList.tsx';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import { useGetLaunches } from '@widgets/launch-widget/model/useGetLaunches.ts';
import ChangePage from '@features/change-page/ui/ChangePage.tsx';
import LaunchSkeleton from '@shared/ui/skeletons/launch-skeleton/LaunchSkeleton.tsx';
import Heading from '@shared/ui/heading/Heading.tsx';

const LaunchWidget: React.FC = () => {
  const { launches, totalCount, isLoading, isEmpty, isError, refetch } = useGetLaunches();

  const renderContent = () => {
    if (isLoading) return <LaunchSkeleton count={9} />;
    if (isEmpty) return <QueryPlaceholder type="empty" />;
    if (isError) return <QueryPlaceholder type="error" onClick={refetch} />;

    return <LaunchPreviewList launches={launches} />;
  };

  return (
    <section>
      <Heading className="mb-10 items-start" title="List of Launches" />
      {renderContent()}
      <ChangePage totalCount={totalCount} />
    </section>
  );
};

export default LaunchWidget;
