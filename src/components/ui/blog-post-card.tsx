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
    <Card className="border-border bg-card flex w-full max-w-sm flex-col gap-3 overflow-hidden rounded-3xl border p-3 shadow-lg transition-all hover:shadow-xl">
      {cover && (
        <CardHeader className="p-0">
          <div className="relative h-56 w-full overflow-hidden rounded-2xl">
            <img
              src={cover}
              alt={headline}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </CardHeader>
      )}

      <CardContent className="flex-grow p-3">
        {hasMeta && (
          <div className="text-muted-foreground mb-4 flex items-center text-sm">
            {tag && (
              <Badge className="bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground rounded-full px-3 py-1 text-sm">
                {tag}
              </Badge>
            )}
            {tag && readingTime && <span className="mx-2">•</span>}
            {readingTime && <span>{formatReadTime(readingTime)}</span>}
          </div>
        )}

        <h2 className="text-card-foreground mb-2 text-2xl leading-tight font-bold">{headline}</h2>

        <p
          className={cn('text-muted-foreground', {
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
