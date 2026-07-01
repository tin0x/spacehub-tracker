import React from 'react';
import type { RadioSwitchProps } from '@shared/ui/radio-switch/types.ts';

const RadioSwitch: React.FC<RadioSwitchProps> = ({ radioParam, searchRadioValue, radioOptions, onChange }) => {
  if (!radioOptions || radioOptions.length === 0) return;

  return (
    <ul className="flex w-full flex-col gap-4 md:w-auto md:flex-row">
      {radioOptions.map((option) => {
        return (
          <li key={option.value}>
            <input
              className="peer hidden"
              type="radio"
              name={radioParam}
              value={option.value}
              id={option.label}
              checked={searchRadioValue === option.value}
              onChange={() => onChange(radioParam || '', option.value)}
            />
            <label
              className="rounded-custom-md border-text-secondary text-text-secondary hover:bg-surface hover:border-text-primary hover:text-text-primary peer-checked:bg-surface peer-checked:text-text-primary peer-checked:border-text-primary block cursor-pointer border px-4 py-2 text-lg font-medium text-nowrap transition-all duration-200 select-none"
              htmlFor={option.label}
            >
              {option.label}
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default RadioSwitch;
