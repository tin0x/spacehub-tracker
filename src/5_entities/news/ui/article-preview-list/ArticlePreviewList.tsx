import React from 'react';
import type { ArticleListProps } from '@entities/news/types.ts';
import ArticlePreviewItem from '@entities/news/ui/article-preview-item/ArticlePreviewItem.tsx';

const ArticlePreviewList: React.FC<ArticleListProps> = ({ articles }) => {
  const articlesArray = Array.isArray(articles) ? articles : articles.results;

  return (
    <ul className="flex flex-col gap-4">
      {articlesArray.map((article) => (
        <li key={article.id}>
          <ArticlePreviewItem
            id={article.id}
            title={article.title}
            description={article.description}
            imageURL={article.imageURL}
            published={article.published}
          />
        </li>
      ))}
    </ul>
  );
};

export default ArticlePreviewList;
