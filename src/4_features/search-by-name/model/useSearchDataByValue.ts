import { useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDebounce } from '@shared/hooks/api/useDebounce.ts';

export const useSearchDataByValue = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get('search') || '');

  const debouncedValue = useDebounce(value, 700);

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
      .trimStart()
      .replace(/[^a-z0-9\s]/gi, '')
      .replace(/\s+/g, ' ');

    setValue(value);
  };

  useEffect(() => {
    setSearchParams((prev) => {
      const currentSearchInUrl = prev.get('search') || '';

      if (debouncedValue === currentSearchInUrl) {
        return prev;
      }

      if (!debouncedValue.trim()) {
        prev.delete('search');
      } else {
        prev.set('search', debouncedValue);
      }

      if (prev.has('page') && prev.get('page') !== '1') {
        prev.set('page', '1');
      }

      return prev;
    });
  }, [debouncedValue, setSearchParams]);

  return { value, handleChangeValue };
};
