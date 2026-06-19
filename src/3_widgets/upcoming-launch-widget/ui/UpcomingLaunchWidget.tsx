import React from 'react';
import { useGetInfoUpcomingLaunch } from '@widgets/upcoming-launch-widget/model/useGetInfoUpcomingLaunch.ts';
import VideoPlayer from '@shared/ui/video-player/VideoPlayer.tsx';
import Heading from '@shared/ui/heading/Heading.tsx';
import InfoTable from '@shared/ui/info-table/InfoTable.tsx';
import LaunchTimer from '@features/launch-timer/ui/LaunchTimer.tsx';
import UpcomingLaunchSkeleton from '@shared/ui/skeletons/upcoming-launch-skeleton/UpcomingLaunchSkeleton.tsx';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';

const UpcomingLaunchWidget: React.FC = () => {
  const { isEmpty, video, fallback, heading, timer, mission, isLoading, isError, handleGoHome } =
    useGetInfoUpcomingLaunch();

  if (isLoading) return <UpcomingLaunchSkeleton />;
  if (isEmpty) return <QueryPlaceholder type="empty" />;
  if (isError) return <QueryPlaceholder type="error" onClick={handleGoHome} />;

  return (
    <section className="flex flex-col gap-11">
      <Heading className="items-start" customTitle="Upcoming Launch" />
      <VideoPlayer video={video} fallback={fallback} />
      <Heading heading={heading} />
      <LaunchTimer timer={timer || 0} />
      <InfoTable mission={mission} />
    </section>
  );
};

export default UpcomingLaunchWidget;
