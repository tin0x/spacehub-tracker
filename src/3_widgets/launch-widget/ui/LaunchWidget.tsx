import React from 'react';
import LaunchList from '@entities/launch/ui/launch-list/LaunchList.tsx';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import { useGetLaunches } from '@widgets/launch-widget/model/useGetLaunches.ts';
import ChangePage from '@features/change-page/ui/ChangePage.tsx';

const LaunchWidget: React.FC = () => {
  const { launches, totalCount, isLoading, isEmpty, isError, refetch } = useGetLaunches();

  const renderContent = () => {
    if (isLoading) return <span>Loading...</span>; // Skeleton
    if (isEmpty) return <QueryPlaceholder type="empty" />;
    if (isError) return <QueryPlaceholder type="error" onClick={refetch} />;

    return <LaunchList launches={launches} />;
  };

  return (
    <section>
      {renderContent()}
      <ChangePage totalCount={totalCount} />
    </section>
  );
};

export default LaunchWidget;
