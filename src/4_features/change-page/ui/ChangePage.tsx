import React from 'react';
import Pagination from '@shared/ui/pagination/Pagination.tsx';
import type { ChangePageProps } from '@features/change-page/types.ts';
import { useChangePage } from '@features/change-page/model/useChangePage.ts';

const ChangePage: React.FC<ChangePageProps> = ({ totalCount, itemsPerPage = 10 }) => {
  const { slicedPages, currentPage, isLastPage, isFirstPage, totalPages, onNextPage, onPreviousPage, onTargetPage } =
    useChangePage(totalCount, itemsPerPage);

  return (
    <Pagination
      slicedPages={slicedPages}
      currentPage={currentPage}
      totalPages={totalPages}
      isLastPage={isLastPage}
      isFirstPage={isFirstPage}
      onPreviousPage={onPreviousPage}
      onNextPage={onNextPage}
      onTargetPage={onTargetPage}
    />
  );
};

export default ChangePage;
