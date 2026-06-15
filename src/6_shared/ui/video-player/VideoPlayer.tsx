import React from 'react';
import { cn } from '@shared/lib/utils/cn.ts';
import type { VideoPlayerProps } from '@shared/ui/video-player/types.ts';
import Image from '@shared/ui/image/Image.tsx';

const VideoPlayer: React.FC<VideoPlayerProps> = ({ className, video, fallback }) => {
  if (!video || (video.domain !== 'youtube.com' && !video.url)) {
    return (
      <div className={cn('aspect-video w-full', className)}>
        <div className="relative h-full w-full">
          <Image className="h-full w-full object-cover" type="video" src={fallback?.url} alt={fallback?.name} />
          <div className="pointer-events-none absolute bottom-0 left-0 z-50 flex h-20 w-full items-center justify-center bg-black/30 text-xl backdrop-blur-sm">
            <p>The source is temporarily unavailable.</p>
          </div>
        </div>
      </div>
    );
  }

  if (video.domain !== 'youtube.com' && video.url) {
    return (
      <div className={cn('relative aspect-video w-full', className)}>
        <a href={video.url} target="_blank">
          <Image className="h-full w-full object-cover" type="video" src={video.image} alt={video.title} />
        </a>
        <div className="pointer-events-none absolute bottom-0 left-0 z-50 flex h-20 w-full items-center justify-center bg-black/30 text-xl backdrop-blur-sm">
          <p>The resource is available for viewing on another page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('aspect-video w-full', className)}>
      <iframe
        className="rounded-custom-md h-full w-full"
        src={`https://www.youtube.com/embed/${video.videoId}`}
        title={video.title}
        allowFullScreen
      />
    </div>
  );
};

export default VideoPlayer;
