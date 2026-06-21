import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import ContentFilterWidget from '@widgets/content-filter-widget/ui/ContentFilterWidget.tsx';
import { useToggleTitle } from '@shared/hooks/ui/useToggleTitle.ts';
import LaunchWidget from '@widgets/launch-widget/ui/LaunchWidget.tsx';

const LaunchesPage: React.FC = () => {
  useToggleTitle('Launches');
  return (
    <Container className="flex flex-col gap-20 py-8">
      <ContentFilterWidget pageKey="launches" />
      <LaunchWidget />
    </Container>
  );
};

export default LaunchesPage;
