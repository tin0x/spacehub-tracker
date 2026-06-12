import { useEffect } from 'react';

export const useToggleTitle = (title: string) => {
  useEffect(() => {
    document.title = `SpaceHub | ${title}`;
  }, [title]);
};
