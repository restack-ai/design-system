import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';

export interface NotePanelProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Bold lead-in on the first line. */
  title?: ReactNode;
  /** @default 'brand' */
  tone?: 'brand' | 'neutral' | 'muted';
  /** Rule position. @default 'left' */
  rule?: 'left' | 'top' | 'none';
  /** @default 'small' */
  size?: 'small' | 'caption';
  children?: ReactNode;
}

/**
 * Ruled aside for a footnote, assumption or caveat.
 *
 * A 2px rule on the leading edge sets supporting text apart from the main
 * column without boxing it in.
 *
 * @category data
 */
export function NotePanel({
  title,
  tone = 'brand',
  rule = 'left',
  size = 'small',
  className,
  children,
  ...rest
}: NotePanelProps) {
  return (
    <div
      className={cx(
        'restack-notepanel',
        `restack-notepanel--${tone}`,
        `restack-notepanel--rule-${rule}`,
        `restack-notepanel--${size}`,
        className,
      )}
      {...rest}
    >
      {title ? <div className="restack-notepanel__title">{title}</div> : null}
      <div className="restack-notepanel__body">{children}</div>
    </div>
  );
}
