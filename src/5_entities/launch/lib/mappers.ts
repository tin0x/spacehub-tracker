import type {
  CurrentLaunch,
  CurrentLaunchDTO,
  LaunchPreview,
  LaunchPreviewDTO,
  UpcomingLaunch,
  UpcomingLaunchDTO,
} from '@entities/launch/types.ts';
import { convertTime } from '@shared/lib/utils/convertTime.ts';

const mapVideo = (dto: CurrentLaunchDTO | UpcomingLaunchDTO) => {
  const video =
    dto.vid_urls.find((v) => v.source === 'youtube.com' && v.type.name === 'Official Webcast') ??
    dto.vid_urls.find((v) => v.source === 'youtube.com') ??
    dto.vid_urls.find((v) => v.url);

  if (!video) return null;

  return {
    title: video.title,
    domain: video.source,
    image: video.feature_image,
    url: video.url,
    videoId: new URL(video.url).searchParams.get('v') ?? null,
    type: video.type.name,
  };
};

export const mapLaunchPreview = (dto: LaunchPreviewDTO): LaunchPreview => ({
  id: dto.id,
  name: dto.name,
  status: dto.status.abbrev,
  image: dto.image?.thumbnail_url,
});

export const mapCurrentLaunch = (dto: CurrentLaunchDTO): CurrentLaunch => ({
  launchInfo: {
    name: dto.name,
    image: dto.image?.image_url,
    rocket: dto.rocket.configuration.name,
    pad: dto.pad.name,
    status: {
      name: dto.status.abbrev,
      description: dto.status.description,
    },
  },
  provider: {
    id: dto.launch_service_provider.id,
    name: dto.launch_service_provider.name,
    type: dto.launch_service_provider.type.name,
    country: dto.launch_service_provider?.country?.[0]?.name ?? 'unknown',
    admin: dto.launch_service_provider.administrator ?? 'unknown',
    logo: dto.launch_service_provider?.logo?.thumbnail_url,
  },
  video: mapVideo(dto),
});

export const mapUpcomingLaunch = (dto: UpcomingLaunchDTO): UpcomingLaunch => {
  const start = dto.window_start ? new Date(dto.window_start).getTime() : 0;
  const end = dto.window_end ? new Date(dto.window_end).getTime() : 0;
  const windowDiffLaunch = end - start;

  return {
    video: mapVideo(dto),
    fallback: {
      name: dto.image.name,
      url: dto.image.image_url,
    },
    heading: {
      name: dto.name,
      description: `Launch Date: ${new Date(dto.window_start).toISOString().replace('T', ' ').slice(0, 19)} UTC`,
    },
    timer: start,
    mission: {
      description: dto.mission.description,
      type: dto.mission.type,
      rocket: dto.rocket.configuration.name,
      launchWindow: `${convertTime(windowDiffLaunch).hours.toString()} hours`,
    },
  };
};
