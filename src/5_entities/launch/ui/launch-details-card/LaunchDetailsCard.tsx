import React from 'react';
import type { LaunchDetailsCardProps } from '@entities/launch/types.ts';
import VideoPlayer from '@shared/ui/video-player/VideoPlayer.tsx';
import Image from '@shared/ui/image/Image.tsx';
import RocketIcon from '@shared/assets/icons/rocket.svg?react';
import StationIcon from '@shared/assets/icons/space-station.svg?react';
import { cn } from '@shared/lib/utils/cn.ts';

const LaunchDetailsCard: React.FC<LaunchDetailsCardProps> = ({ launch }) => {
  if (!launch) return;

  const { video, launchInfo, provider } = launch;

  const currentStatus = launch.launchInfo.status.name;

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5">
      <div className="aspect-video w-full shrink-0 overflow-hidden">
        <VideoPlayer video={video} />
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-between p-5">
        <div className="relative">
          <div className="pointer-events-none absolute top-0 right-0 flex items-center gap-1 rounded-md bg-black/70 px-2.5 py-1 text-xs font-semibold backdrop-blur-sm">
            <span
              className={cn('mr-1.5 inline-block h-4 w-4 animate-pulse rounded-full', {
                'bg-blue-500': currentStatus === 'Go',
                'bg-yellow-500': currentStatus === 'TBD',
                'bg-green-500': currentStatus === 'Success',
                'bg-red-500': currentStatus === 'Failure',
              })}
            />
            <span className="text-base">{launchInfo.status.name}</span>
          </div>
          <h3 className="text-text-primary mb-2 truncate text-2xl font-bold">{launchInfo.name}</h3>

          <div className="text-text-secondary space-y-1.5">
            <p className="flex items-center gap-2">
              <RocketIcon className="h-7 w-7" />
              Rocket: <strong className="text-text-primary">{launchInfo.rocket}</strong>
            </p>
            <p className="flex items-center gap-2 truncate">
              <StationIcon className="h-7 w-7" />
              Pad: <strong className="text-text-primary">{launchInfo.pad}</strong>
            </p>
            <p className="text-text-secondary mt-2 line-clamp-2 italic">{launchInfo.status.description}</p>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
          <div className="flex min-w-0 items-center gap-4">
            {provider.logo ? (
              <div className="h-10 w-10">
                <Image className="object-contain" type="agency" src={provider.logo} alt={provider.name} />
              </div>
            ) : (
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/10 text-xs font-bold">
                {provider.name.substring(0, 2)}
              </div>
            )}
            <div className="min-w-0">
              <p className="text-text-primary truncate font-semibold">{provider.name}</p>
              <p className="text-text-secondary">
                {provider.type} • {provider.country}
              </p>
            </div>
          </div>

          <span className="text-text-secondary rounded bg-white/10 px-2 py-0.5 font-medium">{provider.admin}</span>
        </div>
      </div>
    </div>
  );
};

export default LaunchDetailsCard;
