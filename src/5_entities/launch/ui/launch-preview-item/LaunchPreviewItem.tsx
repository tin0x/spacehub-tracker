import React from 'react';
import { Link } from 'react-router-dom';
import Image from '@shared/ui/image/Image.tsx';
import type { LaunchPreviewItemProps } from '@entities/launch/types.ts';

const LaunchPreviewItem: React.FC<LaunchPreviewItemProps> = ({ launchId, image, name, status }) => {
  return (
    <Link
      className="group flex flex-col gap-4 rounded-lg p-4 transition-colors duration-200 ease-in-out hover:bg-white/5"
      to={`/launches/${launchId}`}
    >
      <div className="rounded-custom-md h-70 overflow-hidden">
        <Image
          className="rounded-custom-md transition-transform duration-300 group-hover:scale-105"
          type="launch"
          src={image}
          alt={name}
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-text-primary text-lg font-bold">{name}</span>
        <span className="text-text-secondary">{`Status: ${status}`}</span>
      </div>
    </Link>
  );
};

export default LaunchPreviewItem;
