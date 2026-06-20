import React from 'react';
import SearchInput from '@shared/ui/search-input/SearchInput.tsx';
import { useSearchDataByValue } from '@features/search-by-name/model/useSearchDataByValue.ts';

const SearchByName: React.FC = () => {
  const { value, handleChangeValue } = useSearchDataByValue();
  return <SearchInput placeholder="Search" value={value} onChange={handleChangeValue} />;
};

export default SearchByName;
