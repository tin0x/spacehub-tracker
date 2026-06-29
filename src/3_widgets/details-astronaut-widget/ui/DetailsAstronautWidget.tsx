import React from 'react';
import { useGetDetailsAstronaut } from '@widgets/details-astronaut-widget/model/useGetDetailsAstronaut.ts';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import AstronautDetailsCard from '@entities/astronaut/ui/astronaut-details-card/AstronautDetailsCard.tsx';
import Heading from '@shared/ui/heading/Heading.tsx';
import DetailsAstronautSkeleton from '@shared/ui/skeletons/details-astronaut-skeleton/DetailsAstronautSkeleton.tsx';

const DetailsAstronautWidget: React.FC = () => {
  const { data, isLoading, isError, refetch } = useGetDetailsAstronaut();

  if (isLoading) return <DetailsAstronautSkeleton />;
  if (!data || isError) return <QueryPlaceholder type="error" onClick={refetch} />;

  return (
    <section>
      <Heading className="mb-10 items-start" title={data?.basicInfo?.name || 'Astronaut'} />
      <AstronautDetailsCard astronaut={data} />
    </section>
  );
};

export default DetailsAstronautWidget;
