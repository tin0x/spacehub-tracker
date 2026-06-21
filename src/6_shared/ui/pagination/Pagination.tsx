import React from 'react';
import Button from '@shared/ui/button/Button.tsx';
import type { PaginationProps } from '@shared/ui/pagination/types.ts';
import ArrowLeft from '@shared/assets/icons/arrow-left.svg?react';
import ArrowRight from '@shared/assets/icons/arrow-right.svg?react';
import { cn } from '@shared/lib/utils/cn.ts';

const Pagination: React.FC<PaginationProps> = ({
  slicedPages,
  currentPage,
  totalPages,
  isLastPage,
  isFirstPage,
  onPreviousPage,
  onNextPage,
  onTargetPage,
}) => {
  return (
    <div className="mx-auto mt-5 flex w-max items-center gap-1">
      <Button
        className="hover:bg-surface h-10 w-10 rounded-full bg-transparent p-0"
        typeColor="primary"
        variant="icon"
        onClick={onPreviousPage}
        Icon={ArrowLeft}
        disabled={isFirstPage}
      />
      {slicedPages[0] >= 3 && (
        <div className="flex items-center gap-1">
          <Button
            className="hover:bg-surface p-0' h-10 w-10 rounded-full bg-transparent"
            typeColor="primary"
            variant="text"
            onClick={onTargetPage}
            disabled={isFirstPage}
            value={1}
          >
            1
          </Button>
          <span className="text-lg">...</span>
        </div>
      )}
      <ul className="flex gap-1">
        {slicedPages.map((page) => (
          <li key={page}>
            <Button
              className={cn('hover:bg-surface h-10 w-10 rounded-full bg-transparent p-0', {
                'bg-surface font-bold': page === currentPage,
              })}
              typeColor="primary"
              variant="text"
              onClick={onTargetPage}
              value={page}
            >
              {page}
            </Button>
          </li>
        ))}
      </ul>
      {slicedPages[slicedPages.length - 1] < totalPages - 1 && (
        <div className="flex items-center gap-1">
          <span className="text-lg">...</span>
          <Button
            className="hover:bg-surface h-10 w-10 rounded-full bg-transparent p-0"
            typeColor="primary"
            variant="text"
            onClick={onTargetPage}
            value={totalPages}
          >
            {totalPages}
          </Button>
        </div>
      )}
      <Button
        className="hover:bg-surface h-10 w-10 rounded-full bg-transparent p-0"
        typeColor="primary"
        variant="icon"
        onClick={onNextPage}
        Icon={ArrowRight}
        disabled={isLastPage}
      />
    </div>
  );
};

export default Pagination;
