import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import AstronautWidget from '@widgets/astronaut-widget/ui/AstronautWidget.tsx';
import { useToggleTitle } from '@shared/hooks/ui/useToggleTitle.ts';

const AstronautsPage: React.FC = () => {
  useToggleTitle('Astronauts');

  return (
    <Container className="flex flex-col gap-20 py-8">
      <AstronautWidget />
    </Container>
  );
}

export default AstronautsPage;