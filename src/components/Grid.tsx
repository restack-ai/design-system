import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';

export type GridGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  /** Number of equal-width columns. @default 2 */
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  /** Gap between cells. @default 'md' */
  gap?: GridGap;
  /** Collapse to a single column below the small breakpoint. @default true */
  responsive?: boolean;
  children?: ReactNode;
}

/**
 * Equal-column grid for card decks, metric rows and form sections.
 *
 * @category layout
 */
export function Grid({
  columns = 2,
  gap = 'md',
  responsive = true,
  className,
  children,
  ...rest
}: GridProps) {
  return (
    <div
      className={cx(
        'restack-grid',
        `restack-grid--cols-${columns}`,
        `restack-grid--gap-${gap}`,
        responsive && 'restack-grid--responsive',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
