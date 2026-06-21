import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import { useToggleTitle } from '@shared/hooks/ui/useToggleTitle.ts';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  useToggleTitle('Not Found');

  const handleGoHome = () => navigate('/');

  return (
    <Container className="flex flex-1 flex-col items-center justify-center py-8">
      <QueryPlaceholder type="invalidPath" onClick={handleGoHome} />
    </Container>
  );
};

export default NotFoundPage;
