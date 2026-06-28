import React from 'react';
import type { InfoTableProps } from '@shared/ui/info-table/types.ts';

const InfoTable: React.FC<InfoTableProps> = ({ info }) => {
  return (
    <ul className="grid grid-cols-2 gap-6">
      {info?.map((item) => (
        <li key={item.label} className="flex flex-col gap-1 border-t border-t-white py-5 text-lg">
          <span className="text-text-secondary">{item.label}</span>
          <p className="text-text-primary">{item.value}</p>
        </li>
      ))}
    </ul>
  );
};

export default InfoTable;
