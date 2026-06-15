import type { ComponentPropsWithoutRef } from 'react';

export type ImageProps = {
  className?: string;
  type: 'article' | 'video' | 'astronaut';
  src: string | undefined;
  alt: string | undefined;
  isRadius?: boolean;
} & ComponentPropsWithoutRef<'img'>;
