export type VideoPlayerProps = {
  className?: string;
  video?: {
    title: string;
    domain: string;
    image: string;
    url: string;
    videoId: string | null;
    type: string;
  } | null;
  fallback?: {
    name: string;
    url: string;
  };
};
