import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';

export interface EmptyStateProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** What is missing, in a short phrase. */
  title: ReactNode;
  /** One or two lines on why it's empty and what to do. */
  description?: ReactNode;
  /** Illustration or glyph above the title. */
  icon?: ReactNode;
  /** Primary and secondary controls. */
  actions?: ReactNode;
  /** @default 'md' */
  size?: 'sm' | 'md';
  /** Draws a dashed boundary around the block. @default false */
  bordered?: boolean;
}

/**
 * Placeholder for a view, list or panel with nothing to show yet.
 *
 * @category feedback
 */
export function EmptyState({
  title,
  description,
  icon,
  actions,
  size = 'md',
  bordered = false,
  className,
  ...rest
}: EmptyStateProps) {
  return (
    <div
      className={cx(
        'restack-emptystate',
        `restack-emptystate--${size}`,
        bordered && 'restack-emptystate--bordered',
        className,
      )}
      {...rest}
    >
      {icon ? <div className="restack-emptystate__icon">{icon}</div> : null}
      <div className="restack-emptystate__title">{title}</div>
      {description ? <div className="restack-emptystate__description">{description}</div> : null}
      {actions ? <div className="restack-emptystate__actions">{actions}</div> : null}
    </div>
  );
}
