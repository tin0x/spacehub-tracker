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
  id: number;
  name: string;
  status: string;
  image: {
    alt: string;
    url: string;
  };
  agency: {
    id: number;
    name: string;
    type: string;
  };
  age: number;
  dateBirth: string;
  dateDeath?: string;
  nationality: string[];
  bio: string;
  lastFlight: string;
  firstFlight: string;
  socialLinks: {
    name: string;
    url: string;
  }[];
  flights: {
    name: string;
    description: string;
  }[];
};

// UI

export type AstronautItemProps = {
  id: number;
  imageUrl: string;
  imageAlt: string;
  name: string;
  agency: string;
};

export type AstronautListProps = {
  astronauts: AstronautPreview[];
};
