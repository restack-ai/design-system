import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';
import { Dot } from './Dot';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5;
export type HeadingTone = 'default' | 'brand' | 'accent' | 'inverse' | 'muted';

export interface HeadingProps extends Omit<HTMLAttributes<HTMLHeadingElement>, 'color'> {
  /** Semantic heading level; also selects the size step. @default 2 */
  level?: HeadingLevel;
  /** @default 'default' */
  tone?: HeadingTone;
  /** Lead the heading with the signal dot. @default false */
  marker?: boolean;
  /** Secondary phrase set in regular weight beside the heading. */
  suffix?: ReactNode;
  children?: ReactNode;
}

/**
 * Section and page headings — DM Sans semibold, tracked in at large sizes.
 *
 * `marker` leads the title with the signal dot, for a heading that names
 * something live or selected. Most headings need nothing: in the labs a title
 * is plain, and its status sits beside it as a `Badge` or a `Dot`.
 *
 * @category typography
 */
export function Heading({
  level = 2,
  tone = 'default',
  marker = false,
  suffix,
  className,
  children,
  ...rest
}: HeadingProps) {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  return (
    <Tag
      className={cx('restack-heading', `restack-heading--${level}`, `restack-heading--${tone}`, className)}
      {...rest}
    >
      {marker ? <Dot className="restack-heading__marker" size={level <= 2 ? 'sm' : 'md'} /> : null}
      <span className="restack-heading__text">{children}</span>
      {suffix ? <span className="restack-heading__suffix">{suffix}</span> : null}
    </Tag>
  );
}
