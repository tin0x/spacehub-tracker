import React from 'react';
import type { ArticleItemProps } from '@entities/news/types.ts';
import { Link } from 'react-router-dom';
import Image from '@shared/ui/image/Image.tsx';

const ArticleItem: React.FC<ArticleItemProps> = ({ article }) => {
  return (
    <Link
      className="group flex flex-col-reverse justify-between gap-5 rounded-lg border-b px-4 py-5 transition-colors last:border-none hover:bg-white/5 sm:flex-row"
      to={`/article/${article.id}`}
    >
      <div className="flex min-w-0 flex-1 flex-col">
        <h3 className="text-text-primary group-hover:text-accent mb-2 text-lg font-bold transition-colors">
          {article.title}
        </h3>
        <p className="text-text-secondary line-clamp-3 text-sm sm:text-base">{article.description}</p>
      </div>
      <div className="h-30 w-full shrink-0 overflow-hidden sm:h-37.5 sm:w-60 md:w-75">
        <Image
          type="article"
          src={article.imageURL}
          alt={article.title}
          className="transition-transform duration-300 group-hover:scale-102"
        />
      </div>
    </Link>
  );
};

export default ArticleItem;
