import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import AstronautWidget from '@widgets/astronaut-widget/ui/AstronautWidget.tsx';

const AstronautsPage: React.FC = () => {
  return (
    <Container className="flex flex-col gap-20 py-8">
      <AstronautWidget />
    </Container>
  );
}

export default AstronautsPage;