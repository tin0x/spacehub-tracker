import React from 'react';
import type { InfoTableProps } from '@shared/ui/info-table/types.ts';

const InfoTable: React.FC<InfoTableProps> = ({ info }) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_2fr]">
      {info.map((item, index) => (
        <div key={index} className="flex flex-col gap-1 border-t-white p-5 text-sm">
          <span className="text-text-secondary">{item.title}</span>
          <p className="text-text-primary">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoTable;
