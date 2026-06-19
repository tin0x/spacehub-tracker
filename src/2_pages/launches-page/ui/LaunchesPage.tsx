import React from 'react';
import Container from '@shared/ui/container/container.tsx';
import ContentFilterWidget from '@widgets/content-filter-widget/ui/ContentFilterWidget.tsx';

const LaunchesPage: React.FC = () => {
  return (
    <Container className="flex flex-col gap-20 py-8">
      <ContentFilterWidget pageKey="launches" />
    </Container>
  );
};

export default LaunchesPage;
