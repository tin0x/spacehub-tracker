import React from 'react';
import Container from '@shared/ui/container/container.tsx';
import { useToggleTitle } from '@shared/hooks/ui/useToggleTitle.ts';
import UpcomingLaunchWidget from '@widgets/upcoming-launch-widget/ui/UpcomingLaunchWidget.tsx';

const HomePage: React.FC = () => {
  useToggleTitle('Home');

  return (
    <Container className="py-8">
      <UpcomingLaunchWidget />
    </Container>
  );
};

export default HomePage;
