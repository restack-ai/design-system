import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';

export interface BreadcrumbItem {
  /** Visible text. */
  label: ReactNode;
  /** Destination. Omit on the final crumb. */
  href?: string;
  /** Click handler, for router-driven navigation. */
  onClick?: () => void;
}

export interface BreadcrumbProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  /** The trail, root first. The last entry renders as the current page. */
  items: BreadcrumbItem[];
  /** Accessible name for the trail. @default 'Breadcrumb' */
  label?: string;
  /** Separator between crumbs. Defaults to a thin line chevron. */
  separator?: ReactNode;
}

/**
 * Trail showing where the current page sits in the hierarchy.
 *
 * @category navigation
 */
export function Breadcrumb({ items, label = 'Breadcrumb', separator, className, ...rest }: BreadcrumbProps) {
  const sep = separator ?? (
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M6 3.5 10.5 8 6 12.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <nav className={cx('restack-breadcrumb', className)} aria-label={label} {...rest}>
      <ol className="restack-breadcrumb__list">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li className="restack-breadcrumb__item" key={i}>
              {last ? (
                <span className="restack-breadcrumb__current" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <a className="restack-breadcrumb__link" href={item.href} onClick={item.onClick}>
                  {item.label}
                </a>
              )}
              {last ? null : (
                <span className="restack-breadcrumb__separator" aria-hidden="true">
                  {sep}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
