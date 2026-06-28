import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import DetailsArticleWidget from '@widgets/details-article-widget/ui/DetailsArticleWidget.tsx';

const NewsDetailsPage: React.FC = () => {
  return (
    <Container className="flex flex-col justify-center gap-20 py-8">
      <DetailsArticleWidget />
    </Container>
  );
};

export default NewsDetailsPage;
