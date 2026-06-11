import React from 'react';
import { cn } from '@shared/lib/utils/cn.ts';
import type { HeadingProps } from '@shared/ui/heading/types.ts';

const Heading: React.FC<HeadingProps> = ({ className, title, description }) => {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <h1 className="text-text-primary text-3xl">{title}</h1>
      {description && <p className="text-text-secondary text-sm">{description}</p>}
    </div>
  );
};

export default Heading;
