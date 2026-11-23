import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Heading row text. */
  title?: ReactNode;
  /** Secondary line under the title. */
  subtitle?: ReactNode;
  /** Controls or metadata aligned to the end of the heading row. */
  actions?: ReactNode;
  /** Content pinned below the body, above the lower edge. */
  footer?: ReactNode;
  /** @default 'default' */
  tone?: 'default' | 'sunken' | 'brand' | 'inverse';
  /** Body inset. @default 'md' */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** @default 'none' */
  elevation?: 'none' | 'sm' | 'md';
  /** Runs the brand rule down the leading edge. @default false */
  accent?: boolean;
  children?: ReactNode;
}

/**
 * Bordered content block with an optional header, footer and brand accent.
 *
 * @category data
 */
export function Card({
  title,
  subtitle,
  actions,
  footer,
  tone = 'default',
  padding = 'md',
  elevation = 'none',
  accent = false,
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={cx(
        'restack-card',
        `restack-card--${tone}`,
        `restack-card--elevation-${elevation}`,
        accent && 'restack-card--accent',
        className,
      )}
      {...rest}
    >
      {title || subtitle || actions ? (
        <div className="restack-card__header">
          <div className="restack-card__headings">
            {title ? <div className="restack-card__title">{title}</div> : null}
            {subtitle ? <div className="restack-card__subtitle">{subtitle}</div> : null}
          </div>
          {actions ? <div className="restack-card__actions">{actions}</div> : null}
        </div>
      ) : null}
      <div className={cx('restack-card__body', `restack-card__body--${padding}`)}>{children}</div>
      {footer ? <div className="restack-card__footer">{footer}</div> : null}
    </div>
  );
}
