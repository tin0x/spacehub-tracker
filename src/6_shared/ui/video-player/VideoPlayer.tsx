import React from 'react';
import { cn } from '@shared/lib/utils/cn.ts';
import type { VideoPlayerProps } from '@shared/ui/video-player/types.ts';

const VideoPlayer: React.FC<VideoPlayerProps> = ({ className, videoId, title }) => {
  return (
    <div className={cn('w-full aspect-video', className)}>
      <iframe
        className="w-full h-full rounded-custom-md"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allowFullScreen
      />
    </div>
  );
};

export default VideoPlayer;
