import React from 'react';
import { cn } from '@shared/lib/utils/cn.ts';
import type { HeadingProps } from '@shared/ui/heading/types.ts';

const Heading: React.FC<HeadingProps> = ({ className, heading }) => {
  if (!heading) return <div>No data available</div>;

  return (
    <div className={cn('flex flex-col items-center gap-4', className)}>
      <h2 className="text-text-primary text-3xl font-bold">{heading.name}</h2>
      {heading.description && <p className="text-text-secondary text-lg">{heading.description}</p>}
    </div>
  );
};

export default Heading;
