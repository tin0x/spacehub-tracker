import React from 'react';
import type { AgencyPreviewListProps } from '@entities/agency/types.ts';
import AgencyPreviewItem from '@entities/agency/ui/agency-preview-item/AgencyPreviewItem.tsx';

const AgencyPreviewList: React.FC<AgencyPreviewListProps> = ({ agencies }) => {
  return (
    <ul className="grid grid-cols-3 gap-5">
      {agencies?.map((agency) => (
        <li key={agency.id}>
          <AgencyPreviewItem
            id={agency.id}
            country={agency.country}
            name={agency.name}
            imageUrl={agency.logo.url}
            imageAlt={agency.logo.name}
          />
        </li>
      ))}
    </ul>
  );
};

export default AgencyPreviewList;
