import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import DetailsAstronautWidget from '@widgets/details-astronaut-widget/ui/DetailsAstronautWidget.tsx';

const DetailsAstronautPage: React.FC = () => {
  return (
    <Container className="flex flex-col justify-center gap-20 py-8">
      <DetailsAstronautWidget />
    </Container>
  );
};

export default DetailsAstronautPage;
