import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import ContentFilterWidget from '@widgets/content-filter-widget/ui/ContentFilterWidget.tsx';
import { useToggleTitle } from '@shared/hooks/ui/useToggleTitle.ts';
import ArticleListWidget from '@widgets/article-list-widget/ui/ArticleListWidget.tsx';

const NewsPage: React.FC = () => {
  useToggleTitle('News');

  return (
    <Container className="flex flex-col gap-20 py-8">
      <ContentFilterWidget pageKey="news" />
      <ArticleListWidget pageKey="news" />
    </Container>
  );
};

export default NewsPage;
