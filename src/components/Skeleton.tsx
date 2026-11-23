import type { HTMLAttributes } from 'react';
import { cx } from '../utils/cx';

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /** @default 'text' */
  shape?: 'text' | 'block' | 'circle';
  /** CSS width, e.g. `'60%'`. @default '100%' */
  width?: string;
  /** CSS height. Defaults to the line height for `text`, `6rem` for `block`. */
  height?: string;
  /** Number of stacked lines for the `text` shape. @default 1 */
  lines?: number;
  /** Runs the shimmer. @default true */
  animated?: boolean;
}

/**
 * Placeholder block shown while content loads.
 *
 * @category feedback
 */
export function Skeleton({
  shape = 'text',
  width = '100%',
  height,
  lines = 1,
  animated = true,
  className,
  style,
  ...rest
}: SkeletonProps) {
  const classes = cx(
    'restack-skeleton',
    `restack-skeleton--${shape}`,
    animated && 'restack-skeleton--animated',
    className,
  );

  if (shape === 'text' && lines > 1) {
    return (
      <div className="restack-skeleton-group" aria-hidden="true" {...rest}>
        {Array.from({ length: lines }, (_, i) => (
          <div
            key={i}
            className={classes}
            style={{ width: i === lines - 1 ? '70%' : width, height, ...style }}
          />
        ))}
      </div>
    );
  }

  return <div className={classes} aria-hidden="true" style={{ width, height, ...style }} {...rest} />;
}
