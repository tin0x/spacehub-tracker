import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import { useToggleTitle } from '@shared/hooks/ui/useToggleTitle.ts';
import UpcomingLaunchWidget from '@widgets/upcoming-launch-widget/ui/UpcomingLaunchWidget.tsx';
import ArticleListWidget from '@widgets/article-list-widget/ui/ArticleListWidget.tsx';

const HomePage: React.FC = () => {
  useToggleTitle('Home');

  return (
    <Container className="flex flex-col gap-10 py-8 md:gap-20">
      <UpcomingLaunchWidget />
      <ArticleListWidget pageKey="home" />
    </Container>
  );
};

export default HomePage;
