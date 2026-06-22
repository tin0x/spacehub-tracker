import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import { useToggleTitle } from '@shared/hooks/ui/useToggleTitle.ts';
import UpcomingLaunchWidget from '@widgets/upcoming-launch-widget/ui/UpcomingLaunchWidget.tsx';
import ArticleWidget from '@widgets/article-widget/ui/ArticleWidget.tsx';

const HomePage: React.FC = () => {
  useToggleTitle('Home');

  return (
    <Container className="flex flex-col gap-20 py-8">
      <UpcomingLaunchWidget />
      <ArticleWidget pageKey="home" />
    </Container>
  );
};

export default HomePage;
