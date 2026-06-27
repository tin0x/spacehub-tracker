import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import DetailsLaunchWidget from '@widgets/details-launch-widget/ui/DetailsLaunchWidget.tsx';

const DetailsLaunchPage: React.FC = () => {
  return (
    <Container className="flex flex-col gap-20 py-8">
      <DetailsLaunchWidget />
    </Container>
  );
};

export default DetailsLaunchPage;
