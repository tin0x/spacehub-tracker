import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import SpacecraftListWidget from '@widgets/spacecraft-list-widget/ui/SpacecraftListWidget.tsx';
import ContentFilterWidget from '@widgets/content-filter-widget/ui/ContentFilterWidget.tsx';
import { useToggleTitle } from '@shared/hooks/ui/useToggleTitle.ts';

const SpacecraftsListPage: React.FC = () => {
  useToggleTitle('Spacecrafts');

  return (
    <Container className="flex flex-col gap-20 py-8">
      <ContentFilterWidget pageKey="spacecrafts" />
      <SpacecraftListWidget />
    </Container>
  );
};

export default SpacecraftsListPage;
