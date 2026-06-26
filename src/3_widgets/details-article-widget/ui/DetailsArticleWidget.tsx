import React from 'react';
import Heading from '@shared/ui/heading/Heading.tsx';
import { useGetDetailsArticle } from '@widgets/details-article-widget/model/useGetDetailsArticle.ts';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import ArticleDetailsCard from '@entities/news/ui/article-details-сard/ArticleDetailsCard.tsx';
import DetailsArticleSkeleton from '@shared/ui/skeletons/details-article-skeleton/DetailsArticleSkeleton.tsx';

const DetailsArticleWidget: React.FC = () => {
  const { data, isLoading, isError, refetch } = useGetDetailsArticle();

  if (isLoading) return <DetailsArticleSkeleton/>
  if (!data || isError) return <QueryPlaceholder type="error" onClick={refetch} />;


  return (
    <section>
      <Heading className="mb-10 items-start" title={data.title} />
      <ArticleDetailsCard
        author={data.author}
        published={data.published}
        updated={data.updated}
        imageUrl={data.imageUrl}
        imageAlt={data.title}
        description={data.description}
        websiteName={data.website.name}
        websiteUrl={data.website.url}
      />
    </section>
  );
};

export default DetailsArticleWidget;
