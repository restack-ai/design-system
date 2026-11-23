import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  /** Top of the rail — a `Wordmark` or `BrandLogo`, then anything that identifies the workspace. */
  header?: ReactNode;
  /** Bottom of the rail — a status `Dot`, a version, a credit. Pinned to the end. */
  footer?: ReactNode;
  /** Accessible name for the navigation landmark. @default 'Primary' */
  label?: string;
  /** Rail width as a CSS length. @default '13.5rem' — the labs' 214px. */
  width?: string;
  /** `NavGroup`s and `NavItem`s. */
  children?: ReactNode;
}

/**
 * The persistent rail of a console: inset tone, one hairline on its inner edge.
 *
 * It is a column, not a layout — place it in your own grid beside the main
 * region, and hide or drawer it yourself below your mobile break.
 *
 * @category navigation
 */
export function Sidebar({ header, footer, label = 'Primary', width, className, style, children, ...rest }: SidebarProps) {
  return (
    <aside className={cx('restack-sidebar', className)} style={width ? { width, ...style } : style} {...rest}>
      {header ? <div className="restack-sidebar__header">{header}</div> : null}
      <nav className="restack-sidebar__nav" aria-label={label}>
        {children}
      </nav>
      {footer ? <div className="restack-sidebar__footer">{footer}</div> : null}
    </aside>
  );
}

export interface NavGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** The uppercase group label — "Collective operations". Omit for an unlabelled run of items. */
  label?: ReactNode;
  /** Trailing detail beside the label, usually the item count. */
  meta?: ReactNode;
  children?: ReactNode;
}

/**
 * A labelled run of `NavItem`s inside a `Sidebar`.
 *
 * @category navigation
 */
export function NavGroup({ label, meta, className, children, ...rest }: NavGroupProps) {
  return (
    <div className={cx('restack-navgroup', className)} {...rest}>
      {label ? (
        <div className="restack-navgroup__label">
          <span>{label}</span>
          {meta ? <span className="restack-navgroup__meta">{meta}</span> : null}
        </div>
      ) : null}
      <ul className="restack-navgroup__list">{children}</ul>
    </div>
  );
}
