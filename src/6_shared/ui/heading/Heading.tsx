import React from 'react';
import { cn } from '@shared/lib/utils/cn.ts';
import type { HeadingProps } from '@shared/ui/heading/types.ts';

const Heading: React.FC<HeadingProps> = ({ className, title, description }) => {
  return (
    <div className={cn('flex flex-col items-center gap-4 text-center', className)}>
      <h2 className="text-text-primary text-2xl font-bold md:text-4xl">{title}</h2>
      {description && <p className="text-text-secondary md:text-lg">{description}</p>}
    </div>
  );
};

export default Heading;
