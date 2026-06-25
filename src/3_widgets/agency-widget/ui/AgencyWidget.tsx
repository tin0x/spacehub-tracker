import React from 'react';
import Heading from '@shared/ui/heading/Heading.tsx';
import { useGetAgencies } from '@widgets/agency-widget/model/useGetAgencies.ts';
import ChangePage from '@features/change-page/ui/ChangePage.tsx';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import AgencyList from '@entities/agency/ui/agency-list/AgencyList.tsx';
import AgencySkeleton from '@shared/ui/skeletons/agency-skeleton/AgencySkeleton.tsx';

const AgencyWidget: React.FC = () => {
  const { data, totalCount, isEmpty, isLoading, isError, refetch } = useGetAgencies();

  const renderContent = () => {
    if (isLoading) return <AgencySkeleton />;
    if (isEmpty) return <QueryPlaceholder type="empty" />;
    if (isError) return <QueryPlaceholder type="error" onClick={refetch} />;

    return <AgencyList agencies={data} />;
  };

  return (
    <section>
      <Heading className="mb-10 items-start" customTitle="List of Agencies" />
      {renderContent()}
      <ChangePage totalCount={totalCount} />
    </section>
  );
};

export default AgencyWidget;
