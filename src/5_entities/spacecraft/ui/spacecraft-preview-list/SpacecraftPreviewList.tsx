import React from 'react';
import SpacecraftPreviewItem from '@entities/spacecraft/ui/spacecraft-preview-item/SpacecraftPreviewItem.tsx';
import type { SpacecraftPreviewListProps } from '@entities/spacecraft/types.ts';

const SpacecraftPreviewList: React.FC<SpacecraftPreviewListProps> = ({ spacecrafts }) => {
  return (
    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {spacecrafts?.map((spacecraft) => (
        <li key={spacecraft.id}>
          <SpacecraftPreviewItem
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

export default SpacecraftPreviewList;
