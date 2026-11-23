import type { HTMLAttributes } from 'react';
import { cx } from '../utils/cx';

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** @default 'brand' */
  tone?: 'brand' | 'neutral' | 'inverse';
  /** Accessible name announced while busy. @default 'Loading' */
  label?: string;
  /** Prints the label beside the ring. @default false */
  showLabel?: boolean;
}

/**
 * Indeterminate activity indicator.
 *
 * @category feedback
 */
export function Spinner({
  size = 'md',
  tone = 'brand',
  label = 'Loading',
  showLabel = false,
  className,
  ...rest
}: SpinnerProps) {
  return (
    <span
      className={cx('restack-spinner', `restack-spinner--${size}`, `restack-spinner--${tone}`, className)}
      role="status"
      {...rest}
    >
      <span className="restack-spinner__ring" aria-hidden="true" />
      <span className={showLabel ? 'restack-spinner__label' : 'restack-visually-hidden'}>{label}</span>
    </span>
  );
}
