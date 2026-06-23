import React from 'react';
import type { SpacecraftListProps } from '@entities/spacecraft/types.ts';
import SpacecraftItem from '@entities/spacecraft/ui/spacecraft-item/SpacecraftItem.tsx';

const SpacecraftList: React.FC<SpacecraftListProps> = ({ spacecrafts }) => {
  return (
    <ul className="grid grid-cols-3 gap-5">
      {spacecrafts?.map((spacecraft) => (
        <li key={spacecraft.id}>
          <SpacecraftItem
            id={spacecraft.id}
            name={spacecraft.name}
            agency={spacecraft.agency}
            imageUrl={spacecraft.image.url}
            imageAlt={spacecraft.image.name}
          />
        </li>
      ))}
    </ul>
  );
};

export default SpacecraftList;
