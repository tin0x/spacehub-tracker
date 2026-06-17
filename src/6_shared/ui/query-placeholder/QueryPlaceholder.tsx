import React from 'react';
import type { QueryPlaceholderProps } from '@shared/ui/query-placeholder/types.ts';
import { queryPlaceholderTypes } from '@shared/ui/query-placeholder/constants.ts';
import Button from '@shared/ui/button/Button.tsx';

const QueryPlaceholder: React.FC<QueryPlaceholderProps> = ({ type, customMessage, onClick }) => {
  const title = queryPlaceholderTypes[type].title;
  const message = queryPlaceholderTypes[type].message;
  const buttonText = (type === 'error' || type === 'invalidPath') && queryPlaceholderTypes[type].buttonText;
  const IconStub = queryPlaceholderTypes[type].IconStub;

  return (
    <div className="flex flex-col items-center gap-5">
      <IconStub className="text-surface h-50 w-50 object-cover" />
      <h3 className="text-text-primary text-center text-2xl font-bold">{title}</h3>
      <p className="text-text-secondary text-center text-lg">{customMessage || message}</p>
      {buttonText && (
        <Button onClick={onClick} variant="text" typeColor="primary">
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export default QueryPlaceholder;
