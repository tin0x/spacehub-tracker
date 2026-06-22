import React from 'react';
import { cn } from '@shared/lib/utils/cn.ts';
import type { HeadingProps } from '@shared/ui/heading/types.ts';

const Heading: React.FC<HeadingProps> = ({ className, heading, customTitle }) => {
  return (
    <div className={cn('flex flex-col items-center gap-4', className)}>
      <h2 className="text-text-primary text-4xl font-bold">{heading?.name || customTitle}</h2>
      {heading?.description && <p className="text-text-secondary text-lg">{heading?.description}</p>}
    </div>
  );
};

export default Heading;
