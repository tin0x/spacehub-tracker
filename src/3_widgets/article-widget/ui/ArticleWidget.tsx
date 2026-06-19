import React from 'react';
import Heading from '@shared/ui/heading/Heading.tsx';
import ArticleList from '@entities/news/ui/article-list/ArticleList.tsx';
import { useGetArticles } from '@widgets/article-widget/model/useGetArticles.ts';
import ArticleSkeleton from '@shared/ui/skeletons/article-skeleton/ArticleSkeleton.tsx';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';

const ArticleWidget: React.FC = () => {
  const { data: articles, isEmpty, isLoading, isError, handleGoHome } = useGetArticles();

  if (isLoading) return <ArticleSkeleton />;
  if (isEmpty) return <QueryPlaceholder type="empty" />;
  if (isError) return <QueryPlaceholder type={'error'} onClick={handleGoHome} />;

  return (
    <section>
      <Heading className="mb-10 items-start" customTitle="Review Articles" />
      <ArticleList articles={articles} />
    </section>
  );
};

export default ArticleWidget;
