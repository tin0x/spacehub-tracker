import React from 'react';
import { useGetDetailsAgency } from '@widgets/details-agency-widget/model/useGetDetailsAgency.ts';
import Heading from '@shared/ui/heading/Heading.tsx';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import AgencyDetailsCard from '@entities/agency/ui/agency-details-card/AgencyDetailsCard.tsx';
import DetailsAgencySkeleton from '@shared/ui/skeletons/details-agency-skeleton/DetailsAgencySkeleton.tsx';

const DetailsAgencyWidget: React.FC = () => {
  const { data, isLoading, isError, refetch } = useGetDetailsAgency();

  if (isLoading) return <DetailsAgencySkeleton />;
  if (!data || isError) return <QueryPlaceholder type="error" onClick={refetch} />;

  return (
    <section>
      <Heading className="mb-10 items-start" title={data.name} />
      <AgencyDetailsCard agency={data} />
    </section>
  );
};

export default DetailsAgencyWidget;
