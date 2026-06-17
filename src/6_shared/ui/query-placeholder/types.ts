export type QueryPlaceholderProps = {
  type: 'empty' | 'error' | 'invalidPath';
  customMessage?: string;
  onClick?: () => void;
};
