import React from 'react';
import Image from '@shared/ui/image/Image.tsx';
import { formatDate } from '@shared/lib/utils/formatDate.ts';
import type { ArticleDetailsCardProps } from '@entities/news/types.ts';

const ArticleDetailsCard: React.FC<ArticleDetailsCardProps> = ({
  author,
  updated,
  published,
  imageUrl,
  imageAlt,
  description,
  websiteName,
  websiteUrl,
}) => {
  const isUpdated = updated && new Date(updated).getTime() - new Date(published).getTime() > 1000 * 60;

  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center gap-4">
        <span className="text-text-primary text-lg font-bold">Author: {author}</span>
        <div className="flex gap-6">
          <time className="italic">{`Published: ${formatDate(published, true)}`}</time>
          {isUpdated && <time className="italic">{`Updated: ${formatDate(updated, true)}`}</time>}
        </div>
      </div>
      <div className="aspect-video w-full overflow-hidden">
        <Image type="article" alt={imageAlt} src={imageUrl} />
      </div>
      <div className="w-full">
        <p className="text-text-primary text-xl italic">{description}</p>
      </div>
      <div>
        <a className="text-lg font-bold" target="_blank" href={websiteUrl}>
          Read Full Article on {websiteName}
        </a>
      </div>
    </div>
  );
};

export default ArticleDetailsCard;
