import React from 'react';
import Heading from '@shared/ui/heading/Heading.tsx';
import ArticleList from '@entities/news/ui/article-list/ArticleList.tsx';
import { useGetArticles } from '@widgets/article-widget/model/useGetArticles.ts';
import ArticleSkeleton from '@shared/ui/skeletons/article-skeleton/ArticleSkeleton.tsx';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import type { ArticleWidgetProps } from '@widgets/types.ts';
import ChangePage from '@features/change-page/ui/ChangePage.tsx';
import { customTitles } from '@widgets/article-widget/constants.ts';

const ArticleWidget: React.FC<ArticleWidgetProps> = ({ pageKey }) => {
  const { data: articles, totalCount, isEmpty, isLoading, isError, handleGoHome } = useGetArticles(pageKey);

  const renderContent = () => {
    if (isLoading) return <ArticleSkeleton count={10} />;
    if (isEmpty) return <QueryPlaceholder type="empty" />;
    if (isError) return <QueryPlaceholder type={'error'} onClick={handleGoHome} />;

    return <ArticleList articles={articles} />;
  };

  return (
    <section>
      <Heading className="mb-10 items-start" customTitle={customTitles[pageKey]} />
      {renderContent()}
      {pageKey === 'news' && <ChangePage totalCount={totalCount} />}
    </section>
  );
};

export default ArticleWidget;
