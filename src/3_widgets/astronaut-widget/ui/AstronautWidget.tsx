import React from 'react';
import AstronautPreviewList from '@entities/astronaut/ui/astronaut-preview-list/AstronautPreviewList.tsx';
import Heading from '@shared/ui/heading/Heading.tsx';
import { useGetAstronauts } from '@widgets/astronaut-widget/model/useGetAstronauts.ts';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import ChangePage from '@features/change-page/ui/ChangePage.tsx';
import ContentFilterWidget from '@widgets/content-filter-widget/ui/ContentFilterWidget.tsx';
import AstronautSkeleton from '@shared/ui/skeletons/astronaut-skeleton/AstronautSkeleton.tsx';

const AstronautWidget: React.FC = () => {
  const { data, totalCount, isEmpty, isLoading, isError, refetch } = useGetAstronauts();

  const renderContent = () => {
    if (isLoading) return <AstronautSkeleton />;
    if (isEmpty) return <QueryPlaceholder type="empty" />;
    if (isError) return <QueryPlaceholder type="error" onClick={refetch} />;

    return <AstronautPreviewList astronauts={data} />;
  };

  return (
    <section className="flex flex-col gap-10">
      <ContentFilterWidget pageKey="astronauts" />
      <Heading className="mb-10 items-start" title="List of Astronauts" />
      {renderContent()}
      <ChangePage totalCount={totalCount} />
    </section>
  );
};

export default AstronautWidget;
