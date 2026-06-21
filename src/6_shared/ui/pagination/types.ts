import React from 'react';

export type PaginationProps = {
  slicedPages: number[];
  currentPage: number;
  totalPages: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  onPreviousPage: () => void;
  onNextPage: () => void;
  onTargetPage: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
