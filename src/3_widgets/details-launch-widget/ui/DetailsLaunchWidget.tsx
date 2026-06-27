import React from 'react';
import Heading from '@shared/ui/heading/Heading.tsx';
import { useGetDetailsLaunch } from '@widgets/details-launch-widget/model/useGetDetailsLauch.ts';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import LaunchDetailsCard from '@entities/launch/ui/launch-details-card/LaunchDetailsCard.tsx';
import DetailsLaunchSkeleton from '@shared/ui/skeletons/details-launch-skeleton/DetailsLaunchSkeleton.tsx';

const DetailsLaunchWidget: React.FC = () => {
  const { data, isLoading, isError, refetch } = useGetDetailsLaunch();

  if (isLoading) return <DetailsLaunchSkeleton />;
  if (isError) return <QueryPlaceholder type="error" onClick={refetch} />;

  return (
    <section className="flex-1">
      <Heading className="mb-10 items-start" title={data?.launchInfo.name} />
      <LaunchDetailsCard launch={data} />
    </section>
  );
};

export default DetailsLaunchWidget;
