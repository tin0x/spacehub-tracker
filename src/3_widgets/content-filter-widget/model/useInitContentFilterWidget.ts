import { useSearchParams } from 'react-router-dom';
import { dataToFilter } from '@widgets/content-filter-widget/model/constants.ts';
import type { PagesKeys } from '@widgets/content-filter-widget/types.ts';

export const useInitContentFilterWidget = (pageKey: PagesKeys) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectOptions = dataToFilter[pageKey].selectors;
  const radioOptions = dataToFilter[pageKey]?.radios?.options;

  const searchSelectValue = searchParams.get(dataToFilter[pageKey].sortParam);
  const searchRadioValue = searchParams.get(dataToFilter[pageKey]?.radios?.radioParam || '') ?? undefined;

  const selectParam = dataToFilter[pageKey].sortParam;
  const radioParam = dataToFilter[pageKey]?.radios?.radioParam;

  const currentSelectLabel = dataToFilter[pageKey].selectors.find((el) => el.value === searchSelectValue)?.label;

  const handleChangeValue = (paramName: string, value: string) => {
    setSearchParams((prev) => {
      prev.set(paramName, value);
      return prev;
    });
  };

  return {
    selectOptions,
    radioOptions,
    searchRadioValue,
    selectParam,
    radioParam,
    currentSelectLabel,
    handleChangeValue,
  };
};
