import React from 'react';
import type { AstronautDetailsCardProps } from '@entities/astronaut/types.ts';
import Image from '@shared/ui/image/Image.tsx';
import InfoTable from '@shared/ui/info-table/InfoTable.tsx';
import { formatDate } from '@shared/lib/utils/formatDate.ts';

const AstronautDetailsCard: React.FC<AstronautDetailsCardProps> = ({ astronaut }) => {
  const { basicInfo, careerInfo } = astronaut;

  const astronautDescription = [
    { label: 'Status', value: basicInfo.status },
    { label: 'Age', value: basicInfo?.age ? basicInfo.age.toString() : 'unknown' },
    { label: 'Date Birth', value: formatDate(basicInfo.dateBirth) },
    { label: 'Date Death', value: basicInfo?.dateDeath ? formatDate(basicInfo.dateDeath) : 'N/A' },
    { label: 'Nationality', value: basicInfo.nationality },
    { label: 'Agency', value: careerInfo.agency.name, link: `/agencies/${careerInfo.agency.id}` },
    { label: 'First flight', value: formatDate(careerInfo.firstFlight, true) },
    { label: 'Last flight', value: formatDate(careerInfo.lastFlight, true) },
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
            alt={basicInfo.image.alt}
          />
        </div>
        <div className="flex-1 text-justify text-xl">
          <p>{basicInfo.bio}</p>
        </div>
      </div>
      <InfoTable info={astronautDescription} />
    </div>
  );
};

export default AstronautDetailsCard;
