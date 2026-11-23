import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';

export type BadgeTone = 'neutral' | 'brand' | 'info' | 'success' | 'warning' | 'danger';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** @default 'neutral' */
  tone?: BadgeTone;
  /** `solid` fills, `subtle` tints, `outline` draws the edge only. @default 'subtle' */
  variant?: 'solid' | 'subtle' | 'outline';
  /** @default 'md' */
  size?: 'sm' | 'md';
  /** Shows a leading status dot. @default false */
  dot?: boolean;
  children?: ReactNode;
}

/**
 * Compact status marker for a record's state.
 *
 * @category data
 */
export function Badge({
  tone = 'neutral',
  variant = 'subtle',
  size = 'md',
  dot = false,
  className,
  children,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={cx(
        'restack-badge',
        `restack-badge--${tone}`,
        `restack-badge--${variant}`,
        `restack-badge--${size}`,
        className,
      )}
      {...rest}
    >
      {dot ? <span className="restack-badge__dot" aria-hidden="true" /> : null}
      {children}
    </span>
  );
}
