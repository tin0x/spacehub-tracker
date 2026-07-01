import React from 'react';
import type { ArticleItemProps } from '@entities/news/types.ts';
import { Link } from 'react-router-dom';
import Image from '@shared/ui/image/Image.tsx';
import { formatDate } from '@shared/lib/utils/formatDate.ts';

const ArticlePreviewItem: React.FC<ArticleItemProps> = ({ id, title, imageURL, description, published, updated }) => {
  const isUpdated = updated && new Date(updated).getTime() - new Date(published).getTime() > 60 * 1000;

  return (
    <Link
      className="group flex flex-col-reverse justify-between gap-5 rounded-lg border-b px-4 py-5 transition-colors last:border-none hover:bg-white/5 sm:flex-row"
      to={`/news/${id}`}
    >
      <div className="flex min-w-0 flex-1 flex-col">
        <h3 className="text-text-primary group-hover:text-accent mb-2 text-lg font-bold transition-colors">{title}</h3>
        <p className="text-text-secondary line-clamp-3">{description}</p>
        <div className="mt-5 flex flex-col gap-1 lg:mt-auto">
          <time>{`Published: ${formatDate(published, true)}`}</time>
          {isUpdated && <time>{`Updated: ${formatDate(updated, true)}`}</time>}
        </div>
      </div>
      <div className="rounded-custom-md h-30 w-full shrink-0 overflow-hidden sm:h-37.5 sm:w-60 md:w-75">
        <Image
          type="article"
          src={imageURL}
          alt={title}
          className="rounded-custom-md transition-transform duration-300 group-hover:scale-102"
        />
      </div>
    </Link>
  );
};

export default ArticlePreviewItem;
