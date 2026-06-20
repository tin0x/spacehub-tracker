import React from 'react';
import SearchIcon from '@shared/assets/icons/search.svg?react';
import type { SearchInputProps } from '@shared/ui/search-input/types.ts';

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, ...rest }) => {
  return (
    <div className="relative w-full">
      <SearchIcon className="text-text-secondary pointer-events-none absolute top-1/2 left-4 h-6 w-6 -translate-y-1/2" />
      <input
        className="bg-surface text-text-primary rounded-custom-md placeholder:text-text-secondary focus:ring-primary w-full py-3 pr-4 pl-12 text-lg transition-all outline-none focus:ring-1"
        placeholder={placeholder || 'Search'}
        type="text"
        {...rest}
      />
    </div>
  );
};

export default SearchInput;
