import React from 'react';
import type { MissionInformationTableProps } from '@entities/news/types.ts';
import InfoTable from '@shared/ui/info-table/InfoTable.tsx';

const MissionInformationTable: React.FC<MissionInformationTableProps> = ({ mission }) => {
  if (!mission) return;

  const infoTableItems = [
    { label: 'Rocket Type', value: mission.rocket },
    { label: 'Launch Window', value: mission.launchWindow },
    { label: 'Mission Goal', value: mission.description },
    { label: 'Payload', value: mission.type },
  ];

  return <InfoTable info={infoTableItems} />;
};

export default MissionInformationTable;
