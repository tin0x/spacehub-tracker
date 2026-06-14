import React from 'react';
import { useGetInfoUpcomingLaunch } from '@widgets/upcoming-launch-widget/model/useGetInfoUpcomingLaunch.ts';
import VideoPlayer from '@shared/ui/video-player/VideoPlayer.tsx';
import Heading from '@shared/ui/heading/Heading.tsx';
import InfoTable from '@shared/ui/info-table/InfoTable.tsx';
import LaunchTimer from '@features/launch-timer/ui/LaunchTimer.tsx';

const UpcomingLaunchWidget: React.FC = () => {
  const { isEmpty, video, fallback, heading, timer, mission } = useGetInfoUpcomingLaunch();

  if (isEmpty) return; // Skeleton

  return (
    <div className="flex flex-col gap-11">
      <Heading className="items-start" heading={{ name: 'Upcoming Launch' }} />
      <VideoPlayer video={video} fallback={fallback} />
      <Heading heading={heading} />
      <LaunchTimer timer={timer || 0} />
      <InfoTable mission={mission} />
    </div>
  );
};

export default UpcomingLaunchWidget;
