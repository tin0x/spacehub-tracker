import React, { useState } from 'react';
import type { ImageProps } from '@shared/ui/image/types.ts';
import { stubs } from '@shared/ui/image/constants.ts';
import { cn } from '@shared/lib/utils/cn.ts';

const Image: React.FC<ImageProps> = ({ className, type, src, alt, isRadius, ...rest }) => {
  const [hasError, setHasError] = useState(false);
  const currentImage = hasError || !src ? stubs[type] : src;

  return (
    <img
      key={src}
      className={cn('h-full w-full object-cover', { 'rounded-custom-md': isRadius }, className)}
      alt={alt}
      src={currentImage}
      onError={() => {
        if (currentImage !== stubs[type]) {
          setHasError(true);
        }
      }}
      {...rest}
    />
  );
};

export default Image;
