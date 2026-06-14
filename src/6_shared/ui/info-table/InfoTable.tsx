import React from 'react';
import type { InfoTableProps } from '@shared/ui/info-table/types.ts';

const InfoTable: React.FC<InfoTableProps> = ({ mission }) => {
  if (!mission) return null;

  const infoTableItems = [
    { label: 'Rocket Type', value: mission.rocket },
    { label: 'Launch Window', value: mission.launchWindow },
    { label: 'Mission Goal', value: mission.description },
    { label: 'Payload', value: mission.type },
  ];

  return (
    <div className="grid grid-cols-2 gap-6">
      {infoTableItems.map((item) => (
        <div className="flex flex-col gap-1 border-t border-t-white py-5 text-lg">
          <span className="text-text-secondary">{item.label}</span>
          <p className="text-text-primary">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoTable;
