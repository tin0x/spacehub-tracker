import React from 'react';
import Container from '@shared/ui/container/container.tsx';
import { useToggleTitle } from '@shared/hooks/ui/useToggleTitle.ts';

const NotFoundPage: React.FC = () => {
  useToggleTitle('Not Found');

  return (
    <div>
      <Container>
        <div></div>
      </Container>
    </div>
  );
};

export default NotFoundPage;