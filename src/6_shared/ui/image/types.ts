import React from 'react';

export type ImageProps = {
  className?: string;
  type: 'article' | 'video' | 'astronaut' | 'launch' | 'spacecraft';
  src?: string;
  alt?: string;
  isRadius?: boolean;
} & React.ImgHTMLAttributes<HTMLImageElement>;
