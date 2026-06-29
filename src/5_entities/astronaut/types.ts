export type AstronautPreviewDTO = {
  id: number;
  name: string;
  image: {
    name: string;
    thumbnail_url: string;
  };
  agency: {
    abbrev: string;
  };
};

export type AstronautPreviewsDTO = {
  count: number;
  results: AstronautPreviewDTO[];
};

type TypesOrdering = '-time_in_space' | 'time_in_space' | '-flights_count' | 'flights_count';

export type AstronautPreviewArgs = {
  limit: number;
  offset: number;
  ordering: TypesOrdering;
  statusIds: number;
  search?: string;
};

export type AstronautPreview = {
  id: number;
  name: string;
  image: {
    alt: string;
    url: string;
  };
  agency: {
    shortName: string;
  };
};

export type AstronautPreviews = {
  count: number;
  results: AstronautPreview[];
};

export type AstronautArgs = {
  astronautId: number;
};

export type AstronautDTO = {
  id: number;
  name: string;
  status: {
    name: string;
  };
  agency: {
    id: number;
    name: string;
    type: {
      name: string;
    };
  };
  image: {
    name: string;
    image_url: string;
  };
  age: number;
  date_of_birth: string;
  date_of_death?: string;
  nationality: { nationality_name: string }[];
  bio: string;
  last_flight: string;
  first_flight: string;
  social_media_links: {
    social_media: { name: string };
    url: string;
  }[];
  flights: {
    mission: {
      name: string;
      description: string;
    };
  }[];
};

export type Astronaut = {
  basicInfo: {
    name: string;
    status: string;
    age?: number;
    bio: string;
    nationality: string;
    dateBirth: string;
    dateDeath?: string;
    image: {
      alt: string;
      url: string;
    };
  };
  careerInfo: {
    lastFlight: string;
    firstFlight: string;
    agency: {
      id: number;
      name: string;
      type: string;
    };
  };
};

// UI

export type AstronautPreviewItemProps = {
  id: number;
  imageUrl: string;
  imageAlt: string;
  name: string;
  agency: string;
};

export type AstronautPreviewListProps = {
  astronauts: AstronautPreview[];
};

export type AstronautDetailsCardProps = {
  astronaut: Astronaut;
};
