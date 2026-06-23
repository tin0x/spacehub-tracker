import React from 'react';
import Image from '@shared/ui/image/Image.tsx';
import { Link } from 'react-router-dom';
import type { SpacecraftItemProps } from '@entities/spacecraft/types.ts';

const SpacecraftItem: React.FC<SpacecraftItemProps> = ({ id, name, agency, imageUrl, imageAlt }) => {
  return (
    <Link
      className="group flex flex-col gap-4 rounded-lg p-4 transition-colors duration-200 ease-in-out hover:bg-white/5"
      to={`/spacecraft/${id}`}
    >
      <div className="rounded-custom-md h-70 overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          type="spacecraft"
          className="rounded-custom-md h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-text-primary text-lg font-bold">{name}</span>
        <span className="text-text-secondary">{agency}</span>
      </div>
    </Link>
  );
};

export default SpacecraftItem;
