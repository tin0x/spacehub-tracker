export type FilterOption = {
  label: string;
  value: string;
};

export type PagesValues = {
  sortParam: string;
  selectors: FilterOption[];
  radios?: {
    radioParam: string;
    options: FilterOption[];
  };
};

export type PagesKeys = 'launches' | 'news' | 'spacecrafts' | 'astronauts' | 'agencies';

export type ContentFilterWidgetProps = {
  pageKey: PagesKeys;
};
