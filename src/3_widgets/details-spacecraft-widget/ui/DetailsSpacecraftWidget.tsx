import React from 'react';
import Heading from '@shared/ui/heading/Heading.tsx';
import { useGetDetailsSpacecraft } from '@widgets/details-spacecraft-widget/model/useGetDetailsSpacecraft.ts';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import SpacecraftDetailsCard from '@entities/spacecraft/ui/spacecraft-details-card/SpacecraftDetailsCard.tsx';
import DetailsSpacecraftSkeleton from '@shared/ui/skeletons/details-spacecraft-skeleton/DetailsSpacecraftSkeleton.tsx';

const DetailsSpacecraftWidget: React.FC = () => {
  const { data, isLoading, isError, refetch } = useGetDetailsSpacecraft();

  if (isLoading) return <DetailsSpacecraftSkeleton />;
  if (!data || isError) return <QueryPlaceholder type="error" onClick={refetch} />;

  return (
    <section>
      <Heading className="mb-10 items-start" title={data.basicInfo.name || data.config.name} />
      <SpacecraftDetailsCard spacecraft={data} />
    </section>
  );
};

export default DetailsSpacecraftWidget;
