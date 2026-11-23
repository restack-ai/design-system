import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  /** @default 'neutral' */
  tone?: 'neutral' | 'brand';
  /** @default 'md' */
  size?: 'sm' | 'md';
  /** Handler for the dismiss control. Omit it and no control is rendered. */
  onRemove?: () => void;
  /** Accessible name for the dismiss control. @default 'Remove' */
  removeLabel?: string;
  children?: ReactNode;
}

/**
 * Dismissible label for a user-applied filter or keyword.
 *
 * @category data
 */
export function Tag({
  tone = 'neutral',
  size = 'md',
  onRemove,
  removeLabel = 'Remove',
  className,
  children,
  ...rest
}: TagProps) {
  return (
    <span
      className={cx('restack-tag', `restack-tag--${tone}`, `restack-tag--${size}`, className)}
      {...rest}
    >
      <span className="restack-tag__label">{children}</span>
      {onRemove ? (
        <button type="button" className="restack-tag__remove" onClick={onRemove} aria-label={removeLabel}>
          <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
            <path
              d="M4 4 12 12 M12 4 4 12"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </button>
      ) : null}
    </span>
  );
}
