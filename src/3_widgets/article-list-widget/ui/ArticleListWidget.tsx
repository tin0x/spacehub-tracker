import React from 'react';
import Heading from '@shared/ui/heading/Heading.tsx';
import ArticlePreviewList from '@entities/news/ui/article-preview-list/ArticlePreviewList.tsx';
import { useGetListArticles } from '@widgets/article-list-widget/model/useGetListArticles.ts';
import ArticleSkeleton from '@shared/ui/skeletons/article-skeleton/ArticleSkeleton.tsx';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import ChangePage from '@features/change-page/ui/ChangePage.tsx';
import { customTitles } from '@widgets/article-list-widget/constants.ts';
import type { ArticleListWidgetProps } from '@widgets/article-list-widget/types.ts';

const ArticleListWidget: React.FC<ArticleListWidgetProps> = ({ pageKey }) => {
  const { data: articles, totalCount, isEmpty, isLoading, isError, handleGoHome } = useGetListArticles(pageKey);

  const renderContent = () => {
    if (isLoading) return <ArticleSkeleton count={10} />;
    if (isEmpty) return <QueryPlaceholder type="empty" />;
    if (isError) return <QueryPlaceholder type={'error'} onClick={handleGoHome} />;

    return <ArticlePreviewList articles={articles} />;
  };

  return (
    <section>
      <Heading className="mb-10 items-start" title={customTitles[pageKey]} />
      {renderContent()}
      {pageKey === 'news' && <ChangePage totalCount={totalCount} />}
    </section>
  );
};

export default ArticleListWidget;
