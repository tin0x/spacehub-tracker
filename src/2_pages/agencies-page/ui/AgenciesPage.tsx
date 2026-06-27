import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import AgencyWidget from '@widgets/agency-widget/ui/AgencyWidget.tsx';
import ContentFilterWidget from '@widgets/content-filter-widget/ui/ContentFilterWidget.tsx';
import { useToggleTitle } from '@shared/hooks/ui/useToggleTitle.ts';

const AgenciesPage: React.FC = () => {
  useToggleTitle('Agencies');

  return (
    <Container className="flex flex-col gap-20 py-8">
      <ContentFilterWidget pageKey="agencies" />
      <AgencyWidget />
    </Container>
  );
};

export default AgenciesPage;
