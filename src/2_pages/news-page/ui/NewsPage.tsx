import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import ContentFilterWidget from '@widgets/content-filter-widget/ui/ContentFilterWidget.tsx';
import ArticleWidget from '@widgets/article-widget/ui/ArticleWidget.tsx';

const NewsPage: React.FC = () => {
  return (
    <Container className="flex flex-col gap-20 py-8">
      <ContentFilterWidget pageKey="news" />
      <ArticleWidget pageKey="news" />
    </Container>
  );
};

export default NewsPage;
