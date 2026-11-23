import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** @default 'default' */
  tone?: 'default' | 'inverse' | 'muted';
  /** Underline behaviour. @default 'hover' */
  underline?: 'always' | 'hover' | 'none';
  /** Marks the link as leaving the current site and adds safe rel attributes. @default false */
  external?: boolean;
  children?: ReactNode;
}

/**
 * Inline navigational link.
 *
 * @category actions
 */
export function Link({
  tone = 'default',
  underline = 'hover',
  external = false,
  className,
  children,
  target,
  rel,
  ...rest
}: LinkProps) {
  return (
    <a
      className={cx('restack-link', `restack-link--${tone}`, `restack-link--underline-${underline}`, className)}
      target={external ? target ?? '_blank' : target}
      rel={external ? rel ?? 'noopener noreferrer' : rel}
      {...rest}
    >
      {children}
      {external ? (
        <svg className="restack-link__external" viewBox="0 0 12 12" aria-hidden="true" focusable="false">
          <path
            d="M4.5 1.5h6v6M10.5 1.5 5 7M9 7.5v3h-7.5V3h3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
    </a>
  );
}
