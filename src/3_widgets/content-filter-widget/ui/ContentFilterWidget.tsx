import React from 'react';
import Select from '@shared/ui/select/Select.tsx';
import type { ContentFilterWidgetProps } from '@widgets/content-filter-widget/types.ts';
import RadioSwitch from '@shared/ui/radio-switch/RadioSwitch.tsx';
import { useInitContentFilterWidget } from '@widgets/content-filter-widget/model/useInitContentFilterWidget.ts';
import Heading from '@shared/ui/heading/Heading.tsx';
import SearchByName from '@features/search-by-name/ui/SearchByName.tsx';

const ContentFilterWidget: React.FC<ContentFilterWidgetProps> = ({ pageKey }) => {
  const {
    selectOptions,
    radioOptions,
    searchRadioValue,
    selectParam,
    radioParam,
    currentSelectLabel,
    handleSubmit,
    handleChangeValue,
  } = useInitContentFilterWidget(pageKey);

  return (
    <section className="flex flex-col gap-10">
      <Heading
        className="items-start"
        title={`Sorting and Filtering ${pageKey.charAt(0).toUpperCase() + pageKey.slice(1)}`}
      />
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <SearchByName />
        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
          <Select
            selectOptions={selectOptions}
            selectParam={selectParam}
            currentSelectLabel={currentSelectLabel}
            onClick={handleChangeValue}
          />
          <RadioSwitch
            radioParam={radioParam}
            radioOptions={radioOptions}
            searchRadioValue={searchRadioValue}
            onChange={handleChangeValue}
          />
        </div>
      </form>
    </section>
  );
};

export default ContentFilterWidget;
