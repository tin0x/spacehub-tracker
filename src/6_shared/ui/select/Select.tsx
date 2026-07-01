import React, { useRef, useState } from 'react';
import ArrowDown from '@shared/assets/icons/arrow-down.svg?react';
import { cn } from '@shared/lib/utils/cn.ts';
import type { SelectProps } from '@shared/ui/select/types.ts';
import { useClickOutside } from '@shared/hooks/ui/useClickOutside.ts';

const Select: React.FC<SelectProps> = ({ selectOptions, selectParam, currentSelectLabel, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const refSelect = useRef<HTMLDivElement | null>(null);
  useClickOutside(refSelect, () => setIsOpen(false));

  const displayedLabel = currentSelectLabel || selectOptions?.[0]?.label;

  return (
    <div ref={refSelect} className="text-text-primary relative w-full min-w-50 text-sm lg:w-max">
      <button
        className="bg-surface rounded-custom-md flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-1.5 text-lg"
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {displayedLabel}
        <ArrowDown className={cn('h-4 w-4 transition-transform duration-300 ease-in-out', { 'rotate-180': isOpen })} />
      </button>
      {isOpen && (
        <ul className="bg-surface rounded-custom-md absolute left-0 z-50 mt-2 w-full">
          {selectOptions.map((option) => (
            <button
              key={option.value}
              className="block w-full cursor-pointer px-4 py-1.5 text-lg transition-colors hover:bg-white/5 focus:bg-white/5 focus:outline-none"
              type="button"
              onClick={() => {
                setIsOpen(false);
                onClick(selectParam, option.value);
              }}
            >
              {option.label}
            </button>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
