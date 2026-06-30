import React from 'react';
import type { AgencyPreviewItemProps } from '@entities/agency/types.ts';
import { Link } from 'react-router-dom';
import Image from '@shared/ui/image/Image.tsx';

const AgencyPreviewItem: React.FC<AgencyPreviewItemProps> = ({ id, name, country, imageUrl, imageAlt }) => {
  return (
    <Link
      className="group flex flex-col gap-4 rounded-lg p-4 transition-colors duration-200 ease-in-out hover:bg-white/5"
      to={`/agencies/${id}`}
    >
      <div className="rounded-custom-md h-70 overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          type="agency"
          className="rounded-custom-md h-full w-full object-contain object-top transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-text-primary text-lg font-bold">{name}</span>
        <span className="text-text-secondary">{country}</span>
      </div>
    </Link>
  );
};

export default AgencyPreviewItem;
