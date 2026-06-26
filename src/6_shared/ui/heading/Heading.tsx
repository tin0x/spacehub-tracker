import React from 'react';
import { cn } from '@shared/lib/utils/cn.ts';
import type { HeadingProps } from '@shared/ui/heading/types.ts';

const Heading: React.FC<HeadingProps> = ({ className, title, description }) => {
  return (
    <div className={cn('flex flex-col items-center gap-4', className)}>
      <h2 className="text-text-primary text-4xl font-bold">{title}</h2>
      {description && <p className="text-text-secondary text-lg">{description}</p>}
    </div>
  );
};

export default Heading;
