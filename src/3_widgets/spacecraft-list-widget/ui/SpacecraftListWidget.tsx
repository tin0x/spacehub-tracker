import React from 'react';
import SpacecraftPreviewList from '@entities/spacecraft/ui/spacecraft-preview-list/SpacecraftPreviewList.tsx';
import ChangePage from '@features/change-page/ui/ChangePage.tsx';
import { useGetSpacecraftsPreview } from '@widgets/spacecraft-list-widget/model/useGetSpacecraftsPreview.ts';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import Heading from '@shared/ui/heading/Heading.tsx';
import SpacecraftsSkeleton from '@shared/ui/skeletons/spacecraft-skeleton/SpacecraftsSkeleton.tsx';

const SpacecraftListWidget: React.FC = () => {
  const { data, totalCount, isLoading, isEmpty, isError, refetch } = useGetSpacecraftsPreview();

  const renderContent = () => {
    if (isLoading) return <SpacecraftsSkeleton />;
    if (isEmpty) return <QueryPlaceholder type="empty" />;
    if (isError) return <QueryPlaceholder type="error" onClick={refetch} />;

    return <SpacecraftPreviewList spacecrafts={data} />;
  };

  return (
    <section>
      <Heading className="mb-10 items-start" title="List of Spacecrafts" />
      {renderContent()}
      <ChangePage totalCount={totalCount} />
    </section>
  );
};

export default SpacecraftListWidget;
