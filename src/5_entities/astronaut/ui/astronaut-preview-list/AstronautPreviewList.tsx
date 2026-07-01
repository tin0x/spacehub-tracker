import React from 'react';
import type { AstronautPreviewListProps } from '@entities/astronaut/types.ts';
import AstronautPreviewItem from '@entities/astronaut/ui/astronaut-preview-item/AstronautPreviewItem.tsx';

const AstronautPreviewList: React.FC<AstronautPreviewListProps> = ({ astronauts }) => {
  return (
    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {astronauts?.map((astronaut) => (
        <li key={astronaut.id}>
          <AstronautPreviewItem
            id={astronaut.id}
            name={astronaut.name}
            agency={astronaut.agency.shortName}
            imageUrl={astronaut.image.url}
            imageAlt={astronaut.image.alt}
          />
        </li>
      ))}
    </ul>
  );
};

export default AstronautPreviewList;
