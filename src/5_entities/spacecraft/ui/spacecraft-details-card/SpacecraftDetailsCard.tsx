import React from 'react';
import type { SpacecraftDetailsCardProps } from '@entities/spacecraft/types.ts';
import Image from '@shared/ui/image/Image.tsx';
import InfoTable from '@shared/ui/info-table/InfoTable.tsx';
import { formatDate } from '@shared/lib/utils/formatDate.ts';

const SpacecraftDetailsCard: React.FC<SpacecraftDetailsCardProps> = ({ spacecraft }) => {
  const { basicInfo, config } = spacecraft;

  console.log(spacecraft);

  const configDescription = [
    { label: 'Status', value: basicInfo.status },
    { label: 'In use', value: basicInfo.inUse },
    { label: 'Flights count', value: basicInfo.flightsCount.toString() },
    { label: 'Number of mission completions', value: basicInfo.missionEndsCount.toString() },
    { label: 'Type', value: config.type },
    { label: 'Agency', value: config.agency },
    { label: 'Capability', value: config.capability },
    { label: 'Crew capacity', value: config.crewCapacity.toString() },
    { label: 'Maiden flight', value: formatDate(config.maidenFlight) },
    { label: 'Total launch count', value: config.totalLaunchCount.toString() },
    { label: 'Successful launch count', value: config.successfulLaunchCount.toString() },
    { label: 'Failed launch count', value: config.failedLaunchCount.toString() },
  ];

  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center justify-between gap-10">
        <div className="flex-1">
          <Image
            className="aspect-square"
            type="spacecraft"
            isRadius
            src={basicInfo.image.url}
            alt={basicInfo.image.name}
          />
        </div>
        <div className="flex-1 text-justify text-xl">
          <p>{basicInfo.description}</p>
        </div>
      </div>
      <InfoTable info={configDescription} />
    </div>
  );
};

export default SpacecraftDetailsCard;
