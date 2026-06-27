export type LaunchPreviewArgs = {
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

export type LaunchesPreviewDTO = {
  count: number;
  results: [];
};

export type LaunchPreview = {
  id: string;
  name: string;
  status: string;
  image: string;
};

export type LaunchesPreview = {
  count: number;
  launches: LaunchPreview[];
};

export type CurrentLaunchDTO = {
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
    configuration: {
      name: string;
    };
  };
  pad: {
    name: string;
  };
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
  launchInfo: {
    name: string;
    rocket: string;
    pad: string;
    image: string;
    status: {
      name: string;
      description: string;
    };
  };
  provider: {
    id: number;
    name: string;
    type: string;
    country: string;
    admin: string;
    logo: string;
  };
  video: {
    title: string;
    domain: string;
    image: string;
    url: string;
    videoId: string | null;
    type: string;
  } | null;
};

export type UpcomingLaunchDTO = {
  name: string;
  window_start: string;
  window_end: string;
  image: {
    name: string;
    image_url: string;
  };
  rocket: {
    configuration: {
      name: string;
    };
  };
  mission: {
    type: string;
    description: string;
  };
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

export type UpcomingLaunch = {
  video: {
    title: string;
    domain: string;
    image: string;
    url: string;
    videoId: string | null;
    type: string;
  } | null;
  fallback: {
    name: string;
    url: string;
  };
  heading: {
    name: string;
    description: string;
  };
  timer: number;
  mission: {
    description: string;
    type: string;
    rocket: string;
    launchWindow: string;
  };
};

// UI

export type LaunchPreviewItemProps = {
  launchId: string;
  image: string;
  name: string;
  status: string;
};

export type LaunchPreviewListProps = {
  launches: LaunchPreview[];
};

export type LaunchDetailsCardProps = {
  launch?: CurrentLaunch;
};
