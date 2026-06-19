import type { FilterOption } from '@widgets/content-filter-widget/types.ts';

export type RadioSwitchProps = {
  radioParam?: string;
  radioOptions?: FilterOption[];
  searchRadioValue?: string;
  onChange: (paramName: string, value: string) => void;
};
