'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export interface ArticleCardProps {
  headline: string;
  excerpt: string;
  cover?: string;
  tag?: string;
  readingTime?: number; // in seconds
  writer?: string;
  publishedAt?: Date;
  clampLines?: number;
}

// Human-friendly read time: seconds -> "X min read"
export function formatReadTime(seconds: number): string {
  if (!seconds || seconds < 60) return 'Less than 1 min read';
  const minutes = Math.ceil(seconds / 60);
  return `${minutes} min read`;
}

// Date -> "Aug 15, 2025" (localized but concise)
export function formatPostDate(date: Date): string {
  if (!date) return '';
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  cover,
  tag,
  readingTime,
  headline,
  excerpt,
  writer,
  publishedAt,
  clampLines,
}) => {
  const hasMeta = tag || readingTime;
  const hasFooter = writer || publishedAt;

  return (
    <Card className="border-border bg-card flex w-full max-w-sm flex-col gap-2 overflow-hidden rounded-2xl border p-2 shadow-lg transition-all hover:shadow-xl sm:gap-3 sm:rounded-3xl sm:p-3">
      {cover && (
        <CardHeader className="p-0">
          <div className="relative h-44 w-full overflow-hidden rounded-xl sm:h-52 sm:rounded-2xl md:h-56">
            <img
              src={cover}
              alt={headline}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </CardHeader>
      )}

      <CardContent className="flex-grow p-2 sm:p-3">
        {hasMeta && (
          <div className="text-muted-foreground mb-3 flex items-center text-xs sm:mb-4 sm:text-sm">
            {tag && (
              <Badge className="bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground rounded-full px-2 py-0.5 text-xs sm:px-3 sm:py-1 sm:text-sm">
                {tag}
              </Badge>
            )}
            {tag && readingTime && <span className="mx-2">•</span>}
            {readingTime && <span>{formatReadTime(readingTime)}</span>}
          </div>
        )}

        <h2 className="text-card-foreground mb-2 text-lg leading-tight font-bold sm:text-xl md:text-2xl">
          {headline}
        </h2>

        <p
          className={cn('text-muted-foreground text-sm sm:text-base', {
            '[display:-webkit-box] overflow-hidden text-ellipsis [-webkit-box-orient:vertical]':
              clampLines && clampLines > 0,
          })}
          style={{
            WebkitLineClamp: clampLines,
          }}
        >
          {excerpt}
        </p>
      </CardContent>

      {hasFooter && (
        <CardFooter className="flex items-center justify-between p-3">
          {writer && (
            <div>
              <p className="text-muted-foreground text-sm">By</p>
              <p className="text-foreground font-semibold">{writer}</p>
            </div>
          )}
          {publishedAt && (
            <div className={writer ? 'text-right' : ''}>
              <p className="text-muted-foreground text-sm">Published</p>
              <p className="text-foreground font-semibold">{formatPostDate(publishedAt)}</p>
            </div>
          )}
        </CardFooter>
      )}
    </Card>
  );
};
