import type { MouseEventHandler, ReactNode } from 'react';
import { cx } from '../utils/cx';

export interface NavItemProps {
  /** The destination's name. */
  children: ReactNode;
  /** A plain-language line under the name — "Reduce & replicate". */
  description?: ReactNode;
  /** Leading glyph, normally an `<Icon />`. */
  icon?: ReactNode;
  /** Trailing detail — a count, a `Kbd`, a `Badge`. Replaced by the signal dot when `active` and unset. */
  trailing?: ReactNode;
  /** Marks this as the current page. @default false */
  active?: boolean;
  /** Renders a link. Without it the item is a button. */
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  /** @default false */
  disabled?: boolean;
  className?: string;
}

/**
 * One row of a `Sidebar` — and the system's selection vocabulary in its
 * purest form.
 *
 * Active is a lime-tinted ground, a lime edge, lime text and the signal dot at
 * the trailing end, exactly as the labs mark the current workspace. It sets
 * `aria-current="page"`, so the state is not carried by colour alone.
 *
 * @category navigation
 */
export function NavItem({
  children,
  description,
  icon,
  trailing,
  active = false,
  href,
  onClick,
  disabled = false,
  className,
}: NavItemProps) {
  const classes = cx('restack-navitem', active && 'restack-navitem--active', className);
  const content = (
    <>
      {icon ? <span className="restack-navitem__icon">{icon}</span> : null}
      <span className="restack-navitem__text">
        <span className="restack-navitem__label">{children}</span>
        {description ? <span className="restack-navitem__description">{description}</span> : null}
      </span>
      {trailing ? (
        <span className="restack-navitem__trailing">{trailing}</span>
      ) : active ? (
        <span className="restack-navitem__dot" aria-hidden="true" />
      ) : null}
    </>
  );
  return (
    <li className="restack-navitem__row">
      {href && !disabled ? (
        <a className={classes} href={href} onClick={onClick} aria-current={active ? 'page' : undefined}>
          {content}
        </a>
      ) : (
        <button
          type="button"
          className={classes}
          onClick={onClick}
          disabled={disabled}
          aria-current={active ? 'page' : undefined}
        >
          {content}
        </button>
      )}
    </li>
  );
}
