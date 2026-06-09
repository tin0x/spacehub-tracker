import type { CurrentLaunch, CurrentLaunchDTO, LaunchPreview, LaunchPreviewDTO } from '@entities/launch/types.ts';

export const mapLaunchPreview = (dto: LaunchPreviewDTO): LaunchPreview => ({
  id: dto.id,
  name: dto.name,
  status: dto.status.abbrev,
  image: dto.image.thumbnail_url,
});

export const mapCurrentLaunch = (dto: CurrentLaunchDTO): CurrentLaunch => {
  const mapVideo = (dto: CurrentLaunchDTO) => {
    const video =
      dto.vid_urls.find((v) => v.source === 'youtube.com' && v.type.name === 'Official Webcast') ??
      dto.vid_urls.find((v) => v.source === 'youtube.com');

    if (!video) return null;

    return {
      title: video.title,
      domain: video.source,
      image: video.feature_image,
      url: video.url,
      type: video.type.name,
    };
  };

  return {
    id: dto.id,
    name: dto.name,
    status: {
      name: dto.status.abbrev,
      description: dto.status.description,
    },
    image: dto.image.image_url,
    startTime: dto.window_start,
    endTime: dto.window_end,
    provider: {
      id: dto.launch_service_provider.id,
      name: dto.launch_service_provider.name,
      type: dto.launch_service_provider.type.name,
      country: dto.launch_service_provider?.country?.[0]?.name ?? 'unknown',
      admin: dto.launch_service_provider.administrator,
      logo: dto.launch_service_provider.logo.thumbnail_url,
    },
    rocket: {
      id: dto.rocket.id,
      name: dto.rocket.configuration.name,
    },
    pad: dto.pad.name,
    isWebcast: dto.webcast_live,
    video: mapVideo(dto),
  };
};
