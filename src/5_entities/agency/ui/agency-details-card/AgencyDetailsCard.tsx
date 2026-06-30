import React from 'react';
import type { AgencyDetailsCardProps } from '@entities/agency/types.ts';
import Image from '@shared/ui/image/Image.tsx';
import InfoTable from '@shared/ui/info-table/InfoTable.tsx';

const AgencyDetailsCard: React.FC<AgencyDetailsCardProps> = ({ agency }) => {
  const descriptionDetails = [
    { label: 'Type', value: agency.type },
    { label: 'Country', value: agency.country },
    { label: 'Founding year', value: agency.foundingYear },
    { label: 'Head', value: agency.admin },
    { label: 'Launchers', value: agency.launchers },
    { label: 'Total launch count', value: agency.totalLaunchCount.toString() },
    { label: 'Successful launches', value: agency.successfulLaunches.toString() },
    { label: 'Failed launches', value: agency.failedLaunches.toString() },
  ];

  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center justify-between gap-10">
        <div className="flex-1">
          <Image
            className="aspect-square object-contain"
            type="agency"
            isRadius
            src={agency.logo.url}
            alt={agency.logo.name}
          />
        </div>
        <div className="flex-1 text-justify text-xl">
          <p>{agency.description}</p>
        </div>
      </div>
      <InfoTable info={descriptionDetails} />
    </div>
  );
};

export default AgencyDetailsCard;
