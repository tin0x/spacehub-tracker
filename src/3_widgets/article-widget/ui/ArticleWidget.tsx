import React from 'react';
import Heading from '@shared/ui/heading/Heading.tsx';
import ArticleList from '@entities/news/ui/article-list/ArticleList.tsx';
import { useGetArticles } from '@widgets/article-widget/model/useGetArticles.ts';
import ArticleSkeleton from '@shared/ui/skeletons/article-skeleton/ArticleSkeleton.tsx';

const ArticleWidget: React.FC = () => {
  const { data: articles, isEmpty, isLoading, isError } = useGetArticles();

  if (isLoading) return <ArticleSkeleton />;
  if (isEmpty) return; // <QueryPlaceholder/>
  if (isError) return; // <QueryPlaceholder/> + refetch

  return (
    <section>
      <Heading className="mb-10 items-start" customTitle="Review Articles" />
      <ArticleList articles={articles} />
    </section>
  );
};

export default ArticleWidget;
