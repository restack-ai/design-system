import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';

export interface BrandHeaderProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** Brand signature, normally a `<BrandLogo size="sm" />` or a `<Wordmark />`. */
  logo?: ReactNode;
  /** Context set beside the logo, after a hairline — a workspace or page name. */
  title?: ReactNode;
  /** Status, links and actions aligned to the trailing edge. */
  actions?: ReactNode;
  /** Paints the bar in the inset tone the labs give their sidebars. @default false */
  sunken?: boolean;
  /** Pins the bar to the top of its scroll container. @default false */
  sticky?: boolean;
  /** Primary navigation, between the lead and the actions. */
  children?: ReactNode;
}

/**
 * The top bar: signature, context, navigation and actions over one hairline.
 *
 * @category brand
 */
export function BrandHeader({
  logo,
  title,
  actions,
  sunken = false,
  sticky = false,
  className,
  children,
  ...rest
}: BrandHeaderProps) {
  return (
    <header
      className={cx(
        'restack-brandheader',
        sunken && 'restack-brandheader--sunken',
        sticky && 'restack-brandheader--sticky',
        className,
      )}
      {...rest}
    >
      <div className="restack-brandheader__lead">
        {logo}
        {title ? <span className="restack-brandheader__title">{title}</span> : null}
      </div>
      {children ? <nav className="restack-brandheader__nav">{children}</nav> : null}
      {actions ? <div className="restack-brandheader__actions">{actions}</div> : null}
    </header>
  );
}
