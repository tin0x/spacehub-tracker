import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import DetailsAgencyWidget from '@widgets/details-agency-widget/ui/DetailsAgencyWidget.tsx';

const DetailsAgencyPage: React.FC = () => {
  return (
    <Container className="flex flex-col justify-center gap-20 py-8">
      <DetailsAgencyWidget />
    </Container>
  );
};

export default DetailsAgencyPage;
