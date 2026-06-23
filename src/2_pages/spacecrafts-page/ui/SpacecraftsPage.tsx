import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import SpacecraftWidget from '@widgets/spacecraft-widget/ui/SpacecraftWidget.tsx';
import ContentFilterWidget from '@widgets/content-filter-widget/ui/ContentFilterWidget.tsx';

const SpacecraftsPage: React.FC = () => {
  return (
    <Container className="flex flex-col gap-20 py-8">
      <ContentFilterWidget pageKey="spacecrafts" />
      <SpacecraftWidget />
    </Container>
  );
};

export default SpacecraftsPage;
