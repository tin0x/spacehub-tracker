import React from 'react';
import type { AgencyListProps } from '@entities/agency/types.ts';
import AgencyItem from '@entities/agency/ui/agency-item/AgencyItem.tsx';

const AgencyList: React.FC<AgencyListProps> = ({ agencies }) => {
  return (
    <ul className="grid grid-cols-3 gap-5">
      {agencies?.map((agency) => (
        <li key={agency.id}>
          <AgencyItem
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

export default AgencyList;
