import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import ContentFilterWidget from '@widgets/content-filter-widget/ui/ContentFilterWidget.tsx';
import ArticleListWidget from '@widgets/article-list-widget/ui/ArticleListWidget.tsx';

const NewsListPage: React.FC = () => {
  return (
    <Container className="flex flex-col gap-20 py-8">
      <ContentFilterWidget pageKey="news" />
      <ArticleListWidget pageKey="news" />
    </Container>
  );
};

export default NewsListPage;
