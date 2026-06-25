import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import AgencyWidget from '@widgets/agency-widget/ui/AgencyWidget.tsx';
import ContentFilterWidget from '@widgets/content-filter-widget/ui/ContentFilterWidget.tsx';

const AgenciesPage: React.FC = () => {
  return (
    <Container className="flex flex-col gap-20 py-8">
      <ContentFilterWidget pageKey="agencies" />
      <AgencyWidget />
    </Container>
  );
};

export default AgenciesPage;
