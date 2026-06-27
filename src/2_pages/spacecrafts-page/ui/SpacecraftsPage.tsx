import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import SpacecraftWidget from '@widgets/spacecraft-widget/ui/SpacecraftWidget.tsx';
import ContentFilterWidget from '@widgets/content-filter-widget/ui/ContentFilterWidget.tsx';
import { useToggleTitle } from '@shared/hooks/ui/useToggleTitle.ts';

const SpacecraftsPage: React.FC = () => {
  useToggleTitle('Spacecrafts');

  return (
    <Container className="flex flex-col gap-20 py-8">
      <ContentFilterWidget pageKey="spacecrafts" />
      <SpacecraftWidget />
    </Container>
  );
};

export default SpacecraftsPage;
