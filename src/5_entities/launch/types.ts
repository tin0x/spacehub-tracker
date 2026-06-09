export type LaunchPreviewArgs = {
  limit: number;
  offset: number;
  ordering: string;
  status: number;
  search?: string;
};

export type LaunchPreviewDTO = {
  id: string;
  name: string;
  status: {
    abbrev: string;
  };
  image: {
    thumbnail_url: string;
  };
};

export type LaunchPreview = {
  id: string;
  name: string;
  status: string;
  image: string;
};

export type CurrentLaunchDTO = {
  id: string;
  name: string;
  status: {
    abbrev: string;
    description: string;
  };
  image: {
    image_url: string;
  };
  window_end: string;
  window_start: string;

  launch_service_provider: {
    id: number;
    name: string;
    type: {
      name: string;
    };
    country: {
      name: string;
    }[];
    administrator: string;
    logo: {
      thumbnail_url: string;
    };
  };
  rocket: {
    id: number;
    configuration: {
      name: string;
    };
  };
  pad: {
    name: string;
  };
  webcast_live: boolean;
  vid_urls: {
    title: string;
    source: string;
    feature_image: string;
    url: string;
    type: {
      name: string;
    };
  }[];
};

export type CurrentLaunch = {
  id: string;
  name: string;
  status: {
    name: string;
    description: string;
  };
  image: string;
  startTime: string;
  endTime: string;
  provider: {
    id: number;
    name: string;
    type: string;
    country: string;
    admin: string;
    logo: string;
  };
  rocket: {
    id: number;
    name: string;
  };
  pad: string;
  isWebcast: boolean;
  video: {
    title: string;
    domain: string;
    image: string;
    url: string;
    type: string;
  } | null;
};
