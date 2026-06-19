import React from 'react';
import LaunchList from '@entities/launch/ui/launch-list/LaunchList.tsx';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import { useGetLaunches } from '@widgets/launch-widget/model/useGetLaunches.ts';

const LaunchWidget: React.FC = () => {
  const { launches, isLoading, isEmpty, isError, refetch } = useGetLaunches();

  if (isLoading) return; // Skeleton
  if (isEmpty) return <QueryPlaceholder type="empty" />;
  if (isError) return <QueryPlaceholder type="error" onClick={refetch} />;

  return (
    <section>
      <LaunchList launches={launches} />
    </section>
  );
};

export default LaunchWidget;
