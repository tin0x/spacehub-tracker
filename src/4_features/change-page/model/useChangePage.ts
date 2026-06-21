import { useSearchParams } from 'react-router-dom';
import React, { useEffect } from 'react';

export const useChangePage = (totalCount: number, itemsPerPage: number) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const totalPages = Math.ceil(totalCount / itemsPerPage);

  const siblingCount = 2;
  const startPage = Math.max(1, currentPage - siblingCount);
  const lastPage = Math.min(totalPages, currentPage + siblingCount);

  const slicedPages = [];

  for (let i = startPage; i <= lastPage; i++) {
    slicedPages.push(i);
  }

  const isLastPage = currentPage >= totalPages;
  const isFirstPage = currentPage === 1;

  const onTargetPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetPage = e.currentTarget.value.toString();

    setSearchParams((prev) => {
      prev.set('page', targetPage);
      return prev;
    });
  };

  const onNextPage = () => {
    if (isLastPage) return;

    setSearchParams((prev) => {
      prev.set('page', (currentPage + 1).toString());
      return prev;
    });
  };

  const onPreviousPage = () => {
    if (isFirstPage) return;

    setSearchParams((prev) => {
      prev.set('page', (currentPage - 1).toString());
      return prev;
    });
  };

  return { slicedPages, currentPage, isLastPage, isFirstPage, totalPages, onNextPage, onPreviousPage, onTargetPage };
};
