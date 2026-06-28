import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import DetailsSpacecraftWidget from '@widgets/details-spacecraft-widget/ui/DetailsSpacecraftWidget.tsx';

const DetailsSpacecraftPage: React.FC = () => {
  return (
    <Container className="flex flex-col justify-center gap-20 py-8">
      <DetailsSpacecraftWidget />
    </Container>
  );
};

export default DetailsSpacecraftPage;
