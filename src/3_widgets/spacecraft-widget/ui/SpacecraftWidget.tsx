import React from 'react';
import SpacecraftList from '@entities/spacecraft/ui/spacecraft-list/SpacecraftList.tsx';
import ChangePage from '@features/change-page/ui/ChangePage.tsx';
import { useGetSpacecrafts } from '@widgets/spacecraft-widget/model/useGetSpacecrafts.ts';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import Heading from '@shared/ui/heading/Heading.tsx';
import SpacecraftsSkeleton from '@shared/ui/skeletons/spacecraft-skeleton/SpacecraftsSkeleton.tsx';

const SpacecraftWidget: React.FC = () => {
  const { data, totalCount, isLoading, isEmpty, isError, refetch } = useGetSpacecrafts();

  const renderContent = () => {
    if (isLoading) return <SpacecraftsSkeleton />;
    if (isEmpty) return <QueryPlaceholder type="empty" />;
    if (isError) return <QueryPlaceholder type="error" onClick={refetch} />;

    return <SpacecraftList spacecrafts={data} />;
  };

  return (
    <section>
      <Heading className="mb-10 items-start" customTitle="List of Spacecrafts" />
      {renderContent()}
      <ChangePage totalCount={totalCount} />
    </section>
  );
};

export default SpacecraftWidget;
