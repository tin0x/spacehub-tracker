import React from 'react';

export type ImageProps = {
  className?: string;
  type: 'article' | 'video' | 'astronaut' | 'launch' | 'spacecraft' | 'agency';
  src?: string;
  alt?: string;
  isRadius?: boolean;
} & React.ImgHTMLAttributes<HTMLImageElement>;
