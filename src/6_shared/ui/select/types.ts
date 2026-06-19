import type { FilterOption } from '@widgets/content-filter-widget/types.ts';

export type SelectProps = {
  currentSelectLabel?: string;
  selectParam: string;
  selectOptions: FilterOption[];
  onClick: (paramName: string, value: string) => void;
};
