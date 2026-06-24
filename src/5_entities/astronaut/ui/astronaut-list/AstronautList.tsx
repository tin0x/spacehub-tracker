import React from 'react';
import type { AstronautListProps } from '@entities/astronaut/types.ts';
import AstronautItem from '@entities/astronaut/ui/astronaut-item/AstronautItem.tsx';

const AstronautList: React.FC<AstronautListProps> = ({ astronauts }) => {
  return (
    <ul className="grid grid-cols-3 gap-5">
      {astronauts?.map((astronaut) => (
        <li key={astronaut.id}>
          <AstronautItem
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

export default AstronautList;