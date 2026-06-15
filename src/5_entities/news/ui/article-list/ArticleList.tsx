import React from 'react';
import type { ArticleListProps } from '@entities/news/types.ts';
import ArticleItem from '@entities/news/ui/article-item/ArticleItem.tsx';

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <ul className="gap flex flex-col gap-4">
      {articles.map((article) => (
        <li key={article.id}>
          <ArticleItem article={article} />
        </li>
      ))}
    </ul>
  );
};

export default ArticleList;
