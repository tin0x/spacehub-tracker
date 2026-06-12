import React from 'react';
import Container from '@shared/ui/container/container.tsx';
import { useToggleTitle } from '@shared/hooks/ui/useToggleTitle.ts';

const HomePage: React.FC = () => {
  useToggleTitle('Home');

  return (
    <section>
      <Container>
        <div></div>
      </Container>
    </section>
  );
};

export default HomePage;
