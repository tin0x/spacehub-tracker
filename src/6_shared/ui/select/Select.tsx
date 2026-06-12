import React, { useState } from 'react';
import ArrowDown from '@shared/assets/icons/arrow-down.svg?react';
import { cn } from '@shared/lib/utils/cn.ts';
import type { SelectProps } from '@shared/ui/select/types.ts';

const Select: React.FC<SelectProps> = ({ options }) => {
  const [selectedValue, setSelectedValue] = useState(options?.[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-text-primary relative w-max text-sm">
      <button
        className="bg-surface rounded-custom-md flex gap-2 px-4 py-1.5"
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectedValue}
        <ArrowDown className={cn('h-5 w-5', { isOpen: 'rotate-90 transition-transform duration-300 ease-out' })} />
      </button>
      {isOpen && (
        <ul className="bg-surface rounded-custom-md absolute left-0 z-50 mt-2 w-full">
          {options.map((option) => (
            <button
              key={option}
              className="block w-full px-4 py-1.5 transition-colors hover:bg-white/5 focus:bg-white/5 focus:outline-none"
              type="button"
              onClick={() => {
                setSelectedValue(option);
                setIsOpen(false);
              }}
            >
              {option}
            </button>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
